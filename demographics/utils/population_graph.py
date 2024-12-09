import sqlite3
import pandas as pd
import os
from pathlib import Path
import plotly.graph_objects as go
from datetime import datetime, date
from demographics.utils.population_live import population_live

def population_graph(region_type, region_code, region_name):
    # Connect to the database
    BASE_DIR = Path(__file__).resolve().parent.parent.parent
    con = sqlite3.connect(os.path.join(BASE_DIR, "data/abs_census.sqlite"))
    
    # Query historical data
    query = f"""
    SELECT Date, POPULATION
    FROM population_growth_rates
    WHERE REGION_CODE21 = '{region_code}'
    AND REGION_TYPE = '{region_type}'
    """
    result_ts = pd.read_sql_query(query, con)
    
    # Close the database connection
    con.close()
    
    # Convert the Date column to datetime
    result_ts['Date'] = pd.to_datetime(result_ts['Date'])
    
    # Get the live population    
    result_live = population_live(region_type, region_code)
    
    # Create a Plotly graph
    fig = go.Figure()
    
    # Add historical data as a line trace
    fig.add_trace(
        go.Scatter(
            x=result_ts['Date'],
            y=result_ts['POPULATION'],
            mode='lines',
            name='Population'
        )
    )
    
    # Add live population as a marker
    fig.add_trace(
        go.Scatter(
            x=[date.today()],  # Current date
            y=[result_live],
            mode='markers',
            name='Todays\' Population',
            marker=dict(size=10, color='red')
        )
    )
    
    # Set layout details
    fig.update_layout(
        title=f"{region_name}'s Estimated Population Growth Over Time",
        xaxis_title="Date",
        yaxis_title="Population",
        template="plotly_white",
        showlegend=False  # Hide the legend
    )
    
    # Return the Plotly figure
    return fig
