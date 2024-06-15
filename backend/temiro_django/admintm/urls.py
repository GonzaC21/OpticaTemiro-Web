from django.urls import path, include
from django.contrib import admin  
from .views import HomeVisitCounterView
from admintm import views  

urlpatterns = [
    path('', views.index, name="index"),    
    path('prod', views.prod),  
    path('mostrar', views.mostrar),  
    path('editar/<int:id>', views.editar),  
    path('cambiar/<int:id>', views.cambiar),  
    path('borrar/<int:id>', views.borrar),
    path('visitas/', HomeVisitCounterView.as_view(), name='home-visitas'),
    path('admin/', admin.site.urls),  # URL para el admin de Django
    path('admintm/', include('admintm.urls')),  # Incluye las URLs de la aplicación admintm

]


