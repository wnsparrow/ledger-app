'''Script for updating auto_policies.csv to sqlite database'''

from django.core.management.base import BaseCommand
import pandas as pd
from policies.models import Policy

class Command(BaseCommand):
  help = 'import policies'

  def add_arguments(self, parser):
    pass

  def handle(self, *args, **options):
    df = pd.read_csv('auto_policies.csv')
    for year, month, driver_age, driver_gender, driver_employment, driver_marital, driver_location, vehicle_age, vehicle_model, insurance_premium, insurance_claims, insurance_losses in zip(df.year, df.month, df.driver_age, df.driver_gender, df.driver_employment, df.driver_marital, df.driver_location, df.vehicle_age, df.vehicle_model, df.insurance_premium, df.insurance_claims, df.insurance_losses):
      policies = Policy(
        year=year,
        month=month, 
        driver_age=driver_age,
        driver_gender=driver_gender,
        driver_employment=driver_employment, 
        driver_marital=driver_marital,
        driver_location=driver_location,
        vehicle_age=vehicle_age,
        vehicle_model=vehicle_model, 
        insurance_premium=insurance_premium, 
        insurance_claims=insurance_claims,
        insurance_losses=insurance_losses
        )
      policies.save()