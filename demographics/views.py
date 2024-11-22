from django.http import HttpResponse
from django.template import loader
import pandas as pd
import os
import sqlite3

# Create your views here.
def main(request):
  template = loader.get_template('main.html')
  return HttpResponse(template.render())
  
def population_view(request):
  REGION_NAME_EXPANDED = request.GET.get('region')
  
  BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
  con = sqlite3.connect(os.path.join(BASE_DIR, "data/abs_census.sqlite"))
    
  region_metadata = pd.read_sql_query(sql = "SELECT * from regions_list WHERE REGION_NAME_EXPANDED = ?", \
  con = con, \
  params=(REGION_NAME_EXPANDED,))
  
  region_code = region_metadata.loc[0,'REGION_CODE21']
  region_name = region_metadata.loc[0,'REGION_NAME21']
  region_area = region_metadata.loc[0,'AREASQKM21']
  region_state = region_metadata.loc[0,'STATE']
  

  population = pd.read_sql_query(sql = "SELECT VALUE from census21_datapack WHERE REGION_CODE21 = ? AND VARIABLE = 'Tot_P_P'", \
  con = con, \
  params=(region_code,))
  population = population.loc[0,'VALUE']

  population_density = ('{:,.1f}'.format(population/region_area)) 

  region_area = ('{:,.0f}'.format(region_area)) 
  population = ('{:,}'.format(population)) 

  template = loader.get_template('population.html')
  context = {
    'region_name': region_name,
    'region_name': region_name,
    'region_area': region_area,
    'region_state': region_state,
    'population' : population,
    'population_density' : population_density,
  }
  return HttpResponse(template.render(context))