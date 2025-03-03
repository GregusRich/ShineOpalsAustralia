from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),  # Django Admin
    path('api/', include('products.urls')),  # Include the products API
]
