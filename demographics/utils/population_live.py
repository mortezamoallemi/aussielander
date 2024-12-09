import sqlite3
import pandas as pd
import os
from pathlib import Path
from datetime import datetime, date

def population_live(region_type, region_code):

    # Connect to the SQLite database
    BASE_DIR = Path(__file__).resolve().parent.parent.parent
    con = sqlite3.connect(os.path.join(BASE_DIR, "data/abs_census.sqlite"))

    # SQL query to fetch the required data
    query = f"""
    SELECT *
    FROM population_growth_rates
    WHERE REGION_CODE21 = '{region_code}'
    AND REGION_TYPE = '{region_type}'
    AND Date >= CURRENT_TIMESTAMP
    ORDER BY Date ASC
    LIMIT 1;
    """
    
    # Execute the query and load data into a pandas DataFrame
    data_use = pd.read_sql_query(query, con)
    
    # Close the database connection
    con.close()
    
    # Check if data is available
    if data_use.empty:
        return None  # Handle the case when no data matches the query
    
    # Calculate years_from_2021
    reference_date = datetime(2021, 6, 1)
    current_time = datetime.now()
    years_from_2021 = (current_time - reference_date).days / 365
    
    # Perform calculations on the DataFrame
    data_use['Date'] = date.today()
    data_use['years_from_2021'] = years_from_2021
    data_use['Population'] = round(
        data_use['VALUE_21'] * 
        (1 + (data_use['Relative_Growth'] * data_use['Growth_Rate_State'])) ** years_from_2021
    )
    
    # Extract and return the Population value
    return round(data_use['Population'].iloc[0])
