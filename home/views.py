from time import time
from django.shortcuts import render,get_object_or_404
from .models import *
from django.contrib import messages
from django.http import HttpResponseRedirect,HttpResponse
from django.urls import reverse
from django.template.loader import get_template
from xhtml2pdf import pisa
from django.contrib.auth.decorators import login_required

def index(request):
    return render(request,'home/index.html')

def about(request):
    return render(request,'home/about.html')

def contact(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        email=request.POST.get('email')
        contact_no=request.POST.get('contact_no')
        subject=request.POST.get('subject')
        message=request.POST.get('message')
        contact_entry=Contact(name=name,email=email,contact_no=contact_no,subject=subject,message=message)
        contact_entry.save()
        messages.success(request,'THANKS FOR CONTACTING US! WE WILL REACH TO U ASAP')
        return HttpResponseRedirect(reverse('index:index'))
    return render(request,'home/contact.html')


def result(request):

    if request.method == 'POST':
        enrollment_no = request.POST.get('enrollment_no')
        # print(enrollment_no)
    
        try:
            profile = Profile.objects.get(enrollment_no=enrollment_no)

            sem = Semester.objects.filter(profile=profile)
            # print(sem)
            
            # TOTAL CALCULATION
            total_max_marks = 0
            total_min_marks = 0
            total_obtained_marks = 0
            
            for semester in sem:
                total_max_marks = semester.max_marks + total_max_marks
                total_min_marks = semester.min_marks + total_min_marks
                total_obtained_marks = semester.obtained + total_obtained_marks

                print(f"{semester}", semester.min_marks)
                print(f"{semester}", semester.max_marks)

            percentage = (total_obtained_marks/total_max_marks)*100
            student_percentage = round(percentage,2)

            # FINDING GRADE FOR STUDENT
            grade = "Fail"
            if student_percentage > 60:
                grade = "First Class"
            elif student_percentage > 50:
                grade = "Second Class"
            elif student_percentage > 35 and student_percentage < 50:
                grade = "Third Class"
            else:
                grade = "Fail"            
            context = {'semesters':sem,'profile':profile,"total_max_marks": total_max_marks,"total_min_marks":total_min_marks,"total_obtained_marks":total_obtained_marks,'student_percentage':student_percentage,'grade':grade}

            return render(request, 'home/result.html', context)
        
        except Exception as e:
            messages.warning(request, 'Please enter correct enrollment number!!')

            return render(request, 'home/result.html')
    # messages.success(request, 'Your profile was updated.')
    return render(request, 'home/result.html')

def apply(request):
    if request.method =='POST':
        apply = Apply()
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        subject = request.POST.get('subject')
        query = request.POST.get('query')
        course = request.POST.get('course')
        apply.name = name
        apply.email = email
        apply.phone = phone
        apply.subject = subject
        apply.query = query
        apply.applying_for = course
        apply.save()
        return HttpResponse("THANKS FOR APPLYING FOR COURSES <br> <p><a href='/'> HOME </a> </p>")
    return render(request, 'home/apply.html')

def courses(request):
    return render(request,'home/courses.html')


def admitcard(request):
    if request.method == 'POST':
        enrollment_no = request.POST.get('enrollment_no')
        print(enrollment_no)

        try:
            admitcard = AdmitCard.objects.get(enrollment_no=enrollment_no)
            return render(request,'home/admitcard.html',{'admitcard':admitcard})

        except Exception as e:
            messages.warning(request, 'Please enter correct enrollment number!!')
            return render(request, 'home/admitcard.html')
    return render(request,'home/admitcard.html')

def admit_render_pdf_view(request,en_no):
    template_path = 'home/pdf1.html'
    queryset=get_object_or_404(AdmitCard,enrollment_no=en_no)
    context = {'myvar': queryset}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    
    #if directly download
    #response['Content-Disposition'] = 'attachment; filename="report.pdf"'

    #if u want to open a proper pdf format
    response['Content-Disposition'] = 'filename="report.pdf"'

    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response


def idcard(request):
    if request.method == 'POST':
        enrollment_no = request.POST.get('enrollment_no')
        print(enrollment_no)

        try:
            idcard= IdCard.objects.get(enrollment_no=enrollment_no)
            return render(request,'home/idcard.html',{'idcard':idcard})

        except Exception as e:
            messages.warning(request, 'Please enter correct enrollment number!!')
            return render(request, 'home/idcard.html')
    return render(request,'home/idcard.html')


def idcard_render_pdf_view(request,en_no):
    template_path = 'home/pdf2.html'
    queryset=get_object_or_404(IdCard,enrollment_no=en_no)
    context = {'myvar': queryset}
    # Create a Django response object, and specify content_type as pdf
    response = HttpResponse(content_type='application/pdf')
    
    #if directly download
    #response['Content-Disposition'] = 'attachment; filename="report.pdf"'

    #if u want to open a proper pdf format
    response['Content-Disposition'] = 'filename="report.pdf"'

    # find the template and render it.
    template = get_template(template_path)
    html = template.render(context)

    # create a pdf
    pisa_status = pisa.CreatePDF(
       html, dest=response)
    # if error then show some funny view
    if pisa_status.err:
       return HttpResponse('We had some errors <pre>' + html + '</pre>')
    return response

def all_quiz(request):
    all_quizes=QuizPost.objects.all()
    return render(request,'home/all_quiz.html',{'all_quizes':all_quizes})


@login_required
def quiz(request,title):
    queryset=QuizPost.objects.get(title=title)
    if request.method == 'POST':
        #print(request.POST)
        questions=QuesModel.objects.filter(ques_post=queryset)
        score=0
        wrong=0
        correct=0
        total=0
        for q in questions:
            total+=1
            print(request.POST.get(q.question))
            print(q.ans)
            print()
            if q.ans ==  request.POST.get(q.question):
                score+=10
                correct+=1
            else:
                wrong+=1
        percent = score/(total*10) *100
        context = {
            'score':score,
            'time': request.POST.get('timer'),
            'correct':correct,
            'wrong':wrong,
            'percent':percent,
            'total':total,
            'queryset':queryset,
        }
        entry=QuizResult(post=queryset,score=context['score'],time=context['time'],correct=context['correct'],wrong=context['wrong'],percent=context['wrong'],total=context['total'],result_of=request.user)
        entry.save()
        return render(request,'home/result_quiz.html',context)
    else:
        questions=QuesModel.objects.filter(ques_post=queryset)
        context = {
            'questions':questions,
            'queryset':queryset
        }
        
        return render(request,'home/quiz.html',context)

def result_quiz(request):
    return render(request,'home/result_quiz.html')



def health_science_courses(request):
    course_desc = Course_desc.objects.filter(branch="Health Science Courses")
    context = {'course_desc':course_desc}

    return render(request, 'home/health_science_courses.html',context)

def engineering_courses(request):
    course_desc = Course_desc.objects.filter(branch="Engineering Courses")
    context = {'course_desc':course_desc}
    return render(request, 'home/engineering_courses.html',context)

def management_courses(request):
    course_desc = Course_desc.objects.filter(branch="Management Courses")
    context = {'course_desc':course_desc}
    return render(request, 'home/management_courses.html',context)

def certified_courses(request):
    course_desc = Course_desc.objects.filter(branch="Certified Courses")
    context = {'course_desc':course_desc}
    return render(request, 'home/certified_courses.html',context)