
const url_bar = "https://fathomless-badlands-97675.herokuapp.com/api/v1.0/MoviesByDecade";
year = []
count = []

d3.json(url_bar).then(function(data) {
    
    for (i=0;i<data.length;i++){
        year.push(data[i][0]),
        count.push(data[i][1])
    }

    function init() {
        data = [{
            x: year,
            y: count, 
            type: "bar"
        }]
    
        layout = {
            title: "Number of Movies per Year/Decade",
            xaxis: {
                title: {
                    text: "Year"
                }
            },
            yaxis: {
                title: {
                    text: "Number of Movies"
                }
            }
    
        }
      
        Plotly.newPlot("plot", data, layout);
    }

d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    var dropdownMenu = d3.select("#selDataset");

    var dataset = dropdownMenu.property("value");
    console.log(dataset)
  
    var x = [];
    var y = [];

    var dataInt = parseInt(dataset)

    
        d3.json(url_line).then(function(data) {
            for (i=0;i<data.length;i++){
                console.log(i)
                if (data[i][0] >= dataInt && data[i][0] < dataInt+10) {
                    x.push(data[i][0])
                    y.push(data[i][1])
                }
            }console.log(x,y)
            Plotly.restyle("plot", "x", [x]);
            Plotly.restyle("plot", "y", [y]);
    })

}

init();
})