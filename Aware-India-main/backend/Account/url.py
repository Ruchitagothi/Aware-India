from django.urls import path
from . import views

urlpatterns = [
    path('View_crime/',views.View_crime,name='View_crime'),
    path('Register_crime/',views.Register_crime,name='Register_crime'),
    # path('api/check-staff-status/', views.check_staff_status, name='check_staff_status'),
    path('login/', views.Login_view, name='login'),
     path('register/', views.register),
    path('login/', views.Login_view1),
    path('logout/', views.Logout_view),
    
]

