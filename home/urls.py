from django.urls import path
from . import views

app_name='index'

urlpatterns = [
    path('',views.index,name='index'),
    path('about/',views.about,name='about'),
    path('result/', views.result,name='result'),
    path('apply/', views.apply,name='apply'),
    path('admitcard/',views.admitcard,name='admitcard'),
    path('admit-pdf/<str:en_no>/',views.admit_render_pdf_view,name='admit-pdf-view'),
    path('idcard/',views.idcard,name='idcard'),
    path('idcard-pdf/<str:en_no>/',views.idcard_render_pdf_view,name='idcard-pdf-view'),
    path('contact/',views.contact,name='contact'),


    path('all-quiz/',views.all_quiz,name='all_quiz'),
    path('quiz/<str:title>/',views.quiz,name='quiz'),
    path('result-quiz/',views.result_quiz,name='result_quiz'),

    path('courses/',views.courses,name='courses'),
    path('health_science_courses/', views.health_science_courses,name='health_science_courses'),
    path('engineering_courses/', views.engineering_courses,name='engineering_courses'),
    path('management_courses/', views.management_courses,name='management_courses'),
    path('certified_courses/', views.certified_courses,name='certified_courses'),

]