import pandas as pd
import psycopg2
from sqlalchemy import create_engine
#from info import username,password


import matplotlib.pyplot as plt
import numpy as np
#from flask import Flask, jsonify
from flask import Flask, render_template,jsonify

connection = psycopg2.connect(user = "postgres",
                                  password = "Bandit01!",
                                  host = "127.0.0.1",
                                  port = "5432",
                                  database = "monsters")

cursor = connection.cursor()
    # Print PostgreSQL Connection properties
print ( connection.get_dsn_parameters(),"\n")

    # Print PostgreSQL version
cursor.execute("SELECT version();")
record = cursor.fetchone()
print("You are connected to - ", record,"\n")

cursor.execute("select * from public.movies")
allData=cursor.fetchall()
allData_df = pd.DataFrame(allData)


#print(allData)

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html", message="test")


@app.route("/api/v1.0/alldata")
def allMovies():
#    return allData.to_json()
#    return allData_df.to_json()
    return jsonify(allData)

@app.route("/api/v1.0/all_df")
def MoviesDf():
#    return allData.to_json()
    return allData


# 4. Define main behavior
if __name__ == "__main__":
       app.run()
    #    app.run(debug=True)



