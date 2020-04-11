
<<<<<<< HEAD
const url_bar = "https://fathomless-badlands-97675.herokuapp.com/api/v1.0/MoviesByDecade";
=======
const url_bar = "http://localhost:5000/api/v1.0/MoviesByDecade";
>>>>>>> a237253b25a2082716bd7a39471538a95863f324
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

<<<<<<< HEAD
=======
// function init() {
//     data = [{
//         x: ["1930s", "1940s", "1950s", "1960s", "1970s", "1980s", "1990s", "2000s", "2010s", "2020s"],
//         y: [3, 8, 7, 15, 29, 65, 35, 158, 163, 3], 
//         type: "bar"
//     }]

//     layout = {
//         title: "Number of Movies per Year/Decade",
//         xaxis: {
//             title: {
//                 text: "Year"
//             }
//         },
//         yaxis: {
//             title: {
//                 text: "Number of Movies"
//             }
//         }

//     }
  
//     Plotly.newPlot("plot", data, layout);
// }

>>>>>>> a237253b25a2082716bd7a39471538a95863f324
d3.selectAll("#selDataset").on("change", updatePlotly);

function updatePlotly() {
    var dropdownMenu = d3.select("#selDataset");

    var dataset = dropdownMenu.property("value");
<<<<<<< HEAD
    console.log(dataset)
  
    var x = [];
    var y = [];

    var dataInt = parseInt(dataset)
=======
  
    var x = [];
    var y = [];
    var startYear = 1930;
>>>>>>> a237253b25a2082716bd7a39471538a95863f324

    
        d3.json(url_line).then(function(data) {
            for (i=0;i<data.length;i++){
<<<<<<< HEAD
                console.log(i)
                if (data[i][0] >= dataInt && data[i][0] < dataInt+10) {
                    x.push(data[i][0])
                    y.push(data[i][1])
                }
            }console.log(x,y)
            Plotly.restyle("plot", "x", [x]);
            Plotly.restyle("plot", "y", [y]);
    })

=======
                if (startYear != data[i][0]) {
                    x.push(startYear)
                    y.append(0)
                }
                if (startYear == data[i][0]) {
                    x.push(data[i][0]),
                    y.push(data[i][1])
                }
            }
    })
console.log(x)
console.log(y)
    if (dataset === 'dataset1') {
        x = ["1930", "1931", "1932", "1933", "1934", "1935", "1936", "1937", "1938", "1939"];
        y = [0, 0, 1, 0, 0, 0, 2, 0, 0, 0];
    }
  
    if (dataset === 'dataset2') {
        x = ["1940", "1941", "1942", "1943", "1944", "1945", "1946", "1947", "1948", "1949"];
        y = [1, 2, 1, 2, 1, 0, 1, 0, 0, 0];
    }

    if (dataset === 'dataset3') {
        x = ["1950", "1951", "1952", "1953", "1954", "1955", "1956", "1957", "1958", "1959"];
        y = [0, 0, 0, 0, 0, 1, 0, 1, 1, 4];
    }

    if (dataset === 'dataset4') {
        x = ["1960", "1961", "1962", "1963", "1964", "1965", "1966", "1967", "1968", "1969"];
        y = [0, 1, 2, 2, 3, 1, 1, 0, 5, 0];
    }

    if (dataset === 'dataset5') {
        x = ["1970", "1971", "1972", "1973", "1974", "1975", "1976", "1977", "1978", "1979"];
        y = [0, 3, 6, 7, 4, 2, 0, 4, 0, 3];
    }

    if (dataset === 'dataset6') {
        x = ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989"];
        y = [9, 8, 4, 2, 5, 6, 4, 8, 8, 11];
    }

    if (dataset === 'dataset7') {
        x = ["1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999"];
        y = [5, 6, 2, 6, 4, 2, 1, 3, 3, 3];
    }

    if (dataset === 'dataset8') {
        x = ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009"];
        y = [4, 6, 6, 10, 17, 18, 23, 19, 32, 23];
    }

    if (dataset === 'dataset9') {
        x = ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
        y = [17, 19, 27, 27, 15, 20, 14, 11, 7, 6];
    }

    if (dataset === 'dataset10') {
        x = [2020];
        y = [3];
    }
  
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);
>>>>>>> a237253b25a2082716bd7a39471538a95863f324
}

init();
})