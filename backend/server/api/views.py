from rest_framework import viewsets

from .models import CandidateInfo
from .serializer import CandidateInfoSerializer


# Create your views here.


class damirAPIView(viewsets.ModelViewSet):
    queryset = CandidateInfo.objects.filter(full_name__contains="Дамир")
    serializer_class = CandidateInfoSerializer


class arturAPIView(viewsets.ModelViewSet):
    queryset = CandidateInfo.objects.filter(full_name__contains="Артур")
    serializer_class = CandidateInfoSerializer
