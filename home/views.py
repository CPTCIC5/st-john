from django.shortcuts import render
from .models import Contact
from django.contrib import messages
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.contrib.auth import logout as auth_logout

def index(request):
    return render(request,'home/index.html')

def about(request):
    return render(request,'home/about.html')

def contact(request):
    if request.method == 'POST':
        name=request.POST.get('name')
        number=request.POST.get('number')
        email=request.POST.get('email')
        message=request.POST.get('message')
        contact_entry=Contact(name=name,number=number,email=email,message=message)
        contact_entry.save()
        messages.success(request,'THANKS FOR CONTACTING US! WE WILL REACH TO U ASAP')
        return HttpResponseRedirect(reverse('home:index'))
    return render(request,'home/contact.html')

def logout(request):
    auth_logout(request)
    messages.success(request,'Logout Successful')
    return HttpResponseRedirect(reverse('home:index'))