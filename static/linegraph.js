

const url_line = "https://fathomless-badlands-97675.herokuapp.com/api/v1.0/MoviesByYear";



year = [],
count = [],

d3.json(url_line).then(function(data) {
    
    
    
    for (i=0;i<data.length;i++){
        year.push(data[i][0]),
        count.push(data[i][1])
    }
    console.log(year, count)
    var trace1 = {
        x:year,
        y:count, 
        type:"line"
     };
   
    var gdata = [trace1];

    var layout = {
        title: "Zombie Movie Trend"
       };

    Plotly.newPlot("plot_line", gdata, layout)
});

console.log(year, count)



 








 

// 

// 
    


// 
