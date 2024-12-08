from django.http import HttpResponse
from django.template import loader
from pathlib import Path
import pandas as pd
import os
import sqlite3
from demographics.forms.region_search_form import SearchForm
from demographics.utils.population_live import population_live
from demographics.utils.population_graph import population_graph


def population_view(request):
  REGION_NAME_EXPANDED = request.GET.get('region')
  REGION_NAME_EXPANDED = REGION_NAME_EXPANDED.replace('+', ' ')


  BASE_DIR = Path(__file__).resolve().parent.parent.parent
  con = sqlite3.connect(os.path.join(BASE_DIR, "data/abs_census.sqlite"))
    
  region_metadata = pd.read_sql_query(sql = "SELECT * from regions_list WHERE REGION_NAME_EXPANDED = ?", \
  con = con, \
  params=(REGION_NAME_EXPANDED,))
  
  region_code = region_metadata.loc[0,'REGION_CODE21']
  region_name = region_metadata.loc[0,'REGION_NAME21']
  region_area = region_metadata.loc[0,'AREASQKM21']
  region_state = region_metadata.loc[0,'STATE']
  

  population_21 = pd.read_sql_query(sql = "SELECT VALUE from census21_datapack WHERE REGION_CODE21 = ? AND VARIABLE = 'Tot_P_P'", \
  con = con, \
  params=(region_code,))
  population_21 = population_21.loc[0,'VALUE']

  population_livee = population_live(region_code)

  population_density = ('{:,.1f}'.format(population_21/region_area))
  region_area = ('{:,.0f}'.format(region_area))
  population_21 = ('{:,}'.format(population_21))
  population_livee = ('{:,}'.format(population_livee))

  form = SearchForm(request.GET or None)  # Bind form to GET parameters
  selected_option = None
  if form.is_valid():
      selected_option = form.cleaned_data.get('region')


  # Generate the Plotly graph for the given region_code
  population_fig = population_graph(region_code, region_name)
  # Convert the Plotly figure to JSON for rendering
  population_fig_json = population_fig.to_json()
    
  template = loader.get_template('demographics.html')
  context = {
    'region_name': region_name,
    'region_name': region_name,
    'region_area': region_area,
    'region_state': region_state,
    'population_21' : population_21,
    'population_live': population_livee,
    'population_density' : population_density,
    'form': form,
    'selected_option': selected_option,
    'population_graph': population_fig_json,
  }
  return HttpResponse(template.render(context))
