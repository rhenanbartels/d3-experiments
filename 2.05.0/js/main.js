/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/


let data = [25, 20, 10, 12, 15]

let svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

let circles = svg.selectAll("circle").data(data);

circles.enter()
    .append("circle")
        .attr("cx", function(d, i){
            return (i * 50) + 25;
        })
        .attr("cy", 25)
        .attr("r", (d) => {
            return d;
        })
        .attr("fill", "red")