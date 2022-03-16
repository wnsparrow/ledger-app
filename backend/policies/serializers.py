from rest_framework import serializers
from .models import Policy

# Creating serializer to convert Policy model to JSON for app to use
class PolicySerializer(serializers.ModelSerializer):
  class Meta:
    model = Policy
    fields = (
      'id', 'year', 'month', 'driver_age', 'driver_gender',
      'driver_employment', 'driver_marital', 'driver_location',
      'vehicle_age', 'vehicle_model', 'insurance_premium', 
      'insurance_claims', 'insurance_losses'
    )