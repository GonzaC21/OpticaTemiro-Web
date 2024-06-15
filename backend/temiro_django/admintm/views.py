from django.shortcuts import render, redirect
from django.http import HttpResponse
from webapi.models import Producto
from admintm.forms import ProductoForm
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Home
from .serializers import HomeSerializer
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from django.contrib.admin.views.decorators import staff_member_required

def index(request):
    return HttpResponse("AdminTM index")

def prod(request):  
    if request.method == "POST":  
        form = ProductoForm(request.POST)  
        if form.is_valid():  
            try:  
                form.save()  
                return redirect('/admintm/mostrar')  
            except:  
                pass  
    else:  
        form = ProductoForm()  
    return render(request,'producto.html',{'form':form})  

def mostrar(request):  
    productos = Producto.objects.all()  
    return render(request,"mostrar.html",{'productos': productos})  

def editar(request, id):  
    producto = Producto.objects.get(idproducto=id)  
    return render(request,'editar.html', {'producto': producto})  

def cambiar(request, id):  
    producto = Producto.objects.get(idproducto=id)  
    form = ProductoForm(request.POST, instance = producto)  
    if form.is_valid():  
        form.save()  
        return redirect("/admintm/mostrar")  
    return render(request, 'editar.html', {'producto': producto})  

def borrar(request, id):  
    producto = Producto.objects.get(idproducto=id)  
    producto.delete()  
    return redirect("/admintm/mostrar")  

class HomeVisitCounterView(APIView):
    @method_decorator(login_required)
    @method_decorator(staff_member_required)
    def get(self, request, *args, **kwargs):
        try:
            home = Home.objects.first()  # Asumiendo que solo hay una instancia de Home
            if home is None:
                return Response({"error": "Home instance not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = HomeSerializer(home)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @method_decorator(login_required)
    @method_decorator(staff_member_required)
    def post(self, request, *args, **kwargs):
        try:
            home = Home.objects.first()
            if home is None:
                home = Home.objects.create(visitas=1)
            else:
                home.visitas += 1
                home.save()
            serializer = HomeSerializer(home)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

