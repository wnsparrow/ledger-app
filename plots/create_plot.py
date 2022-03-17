import ipdb
import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt

auto_policies = pd.read_csv('../backend/auto_policies.csv')

def create_bar_chart(data):
  sns.countplot(x='driver_location', data=auto_policies)
  plt.title('Number of Drivers per Location')
  plt.savefig('../frontend/src/assets/drivers_by_location.png')

create_bar_chart(auto_policies)