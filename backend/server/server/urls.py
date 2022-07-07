from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import  path

from api.views import arturAPIView, damirAPIView


urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/ADavidov", arturAPIView.as_view({"get": "list"})),
    path("api/v1/DAkhmadullin", damirAPIView.as_view({"get": "list"})),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
