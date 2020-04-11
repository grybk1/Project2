import pandas as pd
import psycopg2
from sqlalchemy import create_engine
#from info import username,password
from boto.s3.connection import S3Connection


import matplotlib.pyplot as plt
import numpy as np
#from flask import Flask, jsonify
from flask import Flask, render_template,jsonify

connection = psycopg2.connect(os.environ['User'],
                                  os.environ["Password"],
                                  os.environ["host"],
                                  os.environ["host"],
                                  os.environ["database"])

cursor = connection.cursor()
    # Print PostgreSQL Connection properties


    # Print PostgreSQL version
cursor.execute("SELECT version();")
record = cursor.fetchone()

cursor.execute("select * from public.movies")
allData=cursor.fetchall()
allData_df = pd.DataFrame(allData)

cursor.execute('select C.name, count(*) from country C join xref_movie_country  on C.Id="countryId"  group by C.name  order by C.name')
moviesByCountryData=cursor.fetchall()

cursor.execute("select year, count(*) from movies group by year order by year")
moviesByYearData=cursor.fetchall()

cursor.execute("""select substring(year::text,1,3)||'0s', count(*) from movies
group by substring(year::text,1,3)||'0s'
order by substring(year::text,1,3)||'0s'""")
moviesByDecadeData=cursor.fetchall()



#print(allData)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", message="")


@app.route("/api/v1.0/alldata")
def allMovies():
#    return allData.to_json()
#    return allData_df.to_json()
    return jsonify(allData)

@app.route("/api/v1.0/MoviesByCountry")
def MoviesByCountry():
    return jsonify(moviesByCountryData)

@app.route("/api/v1.0/MoviesByYear")
def moviesByYear():
    return jsonify(moviesByYearData)

@app.route("/api/v1.0/MoviesByDecade")
def moviesByDecade():
    return jsonify(moviesByDecadeData)    


# 4. Define main behavior
if __name__ == "__main__":
       app.run()
    #    app.run(debug=True)



