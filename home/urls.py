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

    path('courses/',views.courses,name='courses')
]