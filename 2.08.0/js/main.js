/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/



let svg = d3.select("#chart-area").append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){

    data.forEach(d => {
        d.height = +d.height;
    })

    let x_scale = d3.scaleBand()
        .domain(['A', 'B', 'C', 'D', 'E','F', 'G'])
        .range([0, 400])
        .paddingInner(0.3)
        .paddingOuter(0.3);

    let y_scale = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 400]);

    let rects = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", 20)
        .attr("x", function(d){
            return x_scale(d.name);
        })
        .attr("width", x_scale.bandwidth)
        .attr("height", function(d){
            return y_scale(d.height);
        })
        .attr("fill", function(d){
            return "grey";
        })

});