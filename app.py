import requests
import json
from pprint import pprint
import csv

title = []
director = []
year = []
boxOffice = []
location = []
plot = []

url = "http://www.omdbapi.com/?t="
api_key = "&apikey="

with open('zombie.csv', newline='') as csvfile:

    csvreader = csv.reader(csvfile, delimiter = ',')

    csv_header = next(csvreader)

    for row in csvreader:
        response = requests.get(url + row[1] + api_key)

        response_json = response.json()

        try:
            title.append(response_json['Title'])
            director.append(response_json['Director'])
            year.append(response_json['Year'])
            boxOffice.append(response_json['BoxOffice'])
            location.append(response_json['Country'])
            plot.append(response_json['Plot'])
        except:
            pass