from django.db import models
from django.core.validators import validate_image_file_extension
from PIL import Image
from django.contrib.auth.models import User

class Contact(models.Model):
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=100,blank=False)
    contact_no=models.CharField(max_length=100,blank=False)
    subject=models.CharField(max_length=100,blank=False)
    message=models.TextField(blank=False)
    contacted_on=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.name}-{self.contacted_on.year}-{self.contacted_on.month}-{self.contacted_on.day}"
    
    class Meta:
        verbose_name_plural='Contact'
        ordering = ['-contacted_on']

class Apply(models.Model):
    REMARKS = (
        ('Health Science Courses','Health Science Courses'),
        ('Engineering Courses','Engineering Courses'),
        ('Management Courses','Management Courses'),
        ('Certified Courses','Certified Courses'),
        ('Other Courses','Other Courses'),
    )

    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=100)
    subject = models.CharField(max_length=100)
    applying_for = models.CharField(max_length=50,choices = REMARKS)
    query = models.TextField()

    def __str__(self):
        return self.name

class Course_desc(models.Model):
    REMARKS = (
        ('Health Science Courses','Health Science Courses'),
        ('Engineering Courses','Engineering Courses'),
        ('Management Courses','Management Courses'),
        ('Certified Courses','Certified Courses'),
    )

    title = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=100)
    pre_requisite = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    fee = models.CharField(max_length=100)
    breif_desc = models.CharField(max_length=100)

    branch = models.CharField(max_length=50,choices = REMARKS)

    def __str__(self):
        return self.title

class Profile(models.Model):
    enrollment_no = models.CharField(max_length=50,unique=True)
    name = models.CharField(max_length=50)
    # image = models.ImageField(upload_to="Student/profile_image")
    father_name = models.CharField(max_length=50)
    course = models.CharField(max_length=50)
    specialization = models.CharField(max_length=50)
    academic_year = models.CharField(max_length=50)
    year_of_passing = models.IntegerField()
    profile_pic = models.ImageField(upload_to='uploads/student_images/',blank=True)
    

    def __str__(self):
        return self.name
    
class Semester(models.Model):

    REMARKS = (
        ('Pass','Pass'),
        ('Fail','Fail')
    )
    particular = models.CharField(max_length=100)
    profile = models.ForeignKey("home.Profile", on_delete=models.CASCADE)
    max_marks = models.IntegerField()
    min_marks = models.IntegerField()
    obtained = models.IntegerField()
    remarks = models.CharField(max_length=50,choices = REMARKS)

    def __str__(self):
        return f"{self.particular}"


class AdmitCard(models.Model):
    enrollment_no=models.CharField(max_length=40,unique=True)
    image=models.ImageField(upload_to='admitcard',blank=True)
    title=models.CharField(max_length=200)
    date=models.CharField(max_length=200)
    time=models.CharField(max_length=200)
    reg_no=models.CharField(max_length=200)
    name=models.CharField(max_length=200)
    paper=models.CharField(max_length=200)
    exam_centre=models.CharField(max_length=200)
    instruction=models.TextField(default="""Instructions to the Candidate
1. This Admit Card must be presented for verification at the time of examination, along with at least one original (not photocopied or scanned copy) and valid (not expired) photo identification card (eg: College ID, Employer ID. Driving License, Passport, PAN card, Voter ID, Aadhaar-UID, etc).
2. This Admit Card is valid only if the candidate's photograph and signature images are legibly printed. Print this on an A4 sized paper using a laser printer, preferably a colour photo printer.
3. Candidates should occupy their allotted seats 25 minutes before the scheduled start of the examination.
4. Candidates will not be allowed to enter examination hall 30 minutes after the commencement of the  examination.
5. Candidates will not be allowed to leave the examination hall before the end of the examination
6. Bring two (2) black ink ballpoint pens. Candidates have to answer in the Optical Response Sheet (ORS) by darkening the bubbles using only a black ink ballpoint pen. Since bubbles darkened by the black ink ballpoint pen cannot be erased, candidates should darken the bubbles in the ORS very carefully.
7. Name of the candidate. Registration number. Examination centre and Signature of the candidate should be entered in the ORS using only a black ink ballpoint pen.
8. Calculator is allowed in the examination hall. However, shanng of calculators is NOT ALLOWED. D not bring any Charts/Tables/Loose sheets to the examination hall
9. Mobile phones or any other Electronic gadgets are NOT ALLOWED inside the examination hall. There may not be any facility for safe keeping of your gadget outside the hall, sot me be easier to leave it at your residence')
""")
    def __str__(self):
        return f"{self.enrollment_no} - {self.date}"

    class Meta:
        ordering=['-id']


class IdCard(models.Model):
    enrollment_no=models.CharField(max_length=40,unique=True)
    image=models.ImageField(upload_to='idcard',blank=True)
    name=models.CharField(max_length=100)
    fathers_name=models.CharField(max_length=100)
    dob=models.CharField(max_length=100)
    address=models.CharField(max_length=100)
    issuing_year=models.CharField(max_length=100)
    validity_year=models.CharField(max_length=100)

    def __str__(self):
        return f"{self.enrollment_no}"

    class Meta:
        ordering=['-id']

class QuizPost(models.Model):
    title=models.CharField(max_length=100,unique=True)
    desc=models.TextField(blank=True,null=False,default='No desc provided')
    thumbnail=models.ImageField(upload_to='Quiz-Thumbnail',default='default_quiz.jpeg',validators=[validate_image_file_extension])

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        img = Image.open(self.thumbnail.path)

        if img.height > 300 or img.width > 300:
            output_size = (190, 163)
            img.thumbnail(output_size)
            img.save(self.thumbnail.path)

    class Meta:
        verbose_name_plural='QuizPost'

class QuesModel(models.Model):
    ques_post=models.ForeignKey(QuizPost,on_delete=models.CASCADE)
    question = models.CharField(max_length=200,null=True)
    op1 = models.CharField(max_length=200,null=True)
    op2 = models.CharField(max_length=200,null=True)
    op3 = models.CharField(max_length=200,null=True)
    op4 = models.CharField(max_length=200,null=True)
    ans = models.CharField(max_length=200,null=True)
    
    def __str__(self):
        return self.question


class QuizResult(models.Model):
    post=models.ForeignKey(QuizPost,on_delete=models.CASCADE)
    score=models.CharField(max_length=100)
    time=models.CharField(max_length=100)
    correct=models.CharField(max_length=100)
    wrong=models.CharField(max_length=100)
    percent=models.CharField(max_length=100)
    total=models.CharField(max_length=100)
    result_of=models.ForeignKey(User,on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.post}"