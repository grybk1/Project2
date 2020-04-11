<<<<<<< HEAD
<<<<<<< HEAD
const url_bubble = "https://fathomless-badlands-97675.herokuapp.com/api/v1.0/MoviesByCountry";
=======
=======
>>>>>>> master
<<<<<<< HEAD
const url_bubble = "https://fathomless-badlands-97675.herokuapp.com/api/v1.0/MoviesByCountry";
=======


// const url = "https://fathomless-badlands-97675.herokuapp.com/api/v1.0/MoviesByCountry";

const url_bubble = "http://localhost:5000/api/v1.0/MoviesByCountry";
>>>>>>> a237253b25a2082716bd7a39471538a95863f324
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master



country = [],
count = [],

d3.json(url_bubble).then(function(data) {
    
    
    
    for (i=0;i<data.length;i++){
        country.push(data[i][0]),
        count.push(data[i][1])
    }
    console.log(country, count)
    var trace1 = {
        x:country,
        y:count, 
        mode: 'markers'
     };
   
    var gdata = [trace1];

    var layout = {
        title: "Zombie Movie Trend"
       };

    Plotly.newPlot("bubbleplot", gdata, layout)
});

