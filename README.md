# Analyzing Zombie Movie Trends 

# Overview:
White Zombie, directed by Victor Halperin is commonly cited as the first Zombie movie and released in 1932. What kind of trends have emerged through the years since then? This project intended to visualize the trend of zombie movies from 1934, when the first zombie movie was made until 2020. 


# Data
Data was webscraped from https://en.wikipedia.org/wiki/List_of_zombie_films using Pandas, Jupyter Notebook, and Regex to create a data set that was then filtered through the OMDB database to acquire the title, year, director and gross of each movie. That data was then formatted into a CSV fileand loaded into Postgres for use with Heroku. 



# Creating visualizations 

The Postgres database was the base for our Flask app and by using specfic endpoints and templates, we created interactive graphs with Javascript, D3.js and Plotly.


# Launching the web app
Heroku was used to host the app and out site, which can be found here: https://fathomless-badlands-97675.herokuapp.com/

