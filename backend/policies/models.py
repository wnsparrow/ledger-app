from django.db import models

# Defining a model for what a "policy" should look like in the database
class Policy(models.Model):
  year = models.IntegerField()
  month = models.IntegerField()
  driver_age = models.IntegerField()
  driver_gender = models.CharField(max_length=25)
  driver_employment = models.CharField(max_length=25)
  driver_marital = models.CharField(max_length=25)
  driver_location = models.CharField(max_length=25)
  vehicle_age = models.IntegerField()
  vehicle_model = models.CharField(max_length=25)
  insurance_premium = models.FloatField()
  insurance_claims = models.FloatField()
  insurance_losses = models.FloatField()
