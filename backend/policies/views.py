from django.shortcuts import render
from rest_framework import viewsets
from .serializers import PolicySerializer
from .models import Policy
from rest_framework.filters import SearchFilter
from django.db.models import Sum
from django.views.generic import ListView
from django.http import JsonResponse


# Views to see data
class PolicyView(viewsets.ModelViewSet):
  serializer_class = PolicySerializer
  queryset = Policy.objects.all() 

  filter_backends = [SearchFilter]
  search_fields = ['driver_marital']

# Creates an aggregated view of data
def get_total_claims(request):
  total_claims = Policy.objects.all().aggregate(Sum('insurance_claims'))

  return JsonResponse(total_claims)
