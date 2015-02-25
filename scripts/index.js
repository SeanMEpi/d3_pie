//Width and height
  var w = 300;
  var h = 300;

  var maxValue = 100;
  var datasetLength = 10;
  var dataset = []; //Initialize empty array
  for (var i = 0; i < datasetLength; i++) { //Loop numValues times
    var newNumber = Math.floor(Math.random() * maxValue); //New random integer (0-24)
    dataset.push(newNumber); //Add new number to array
  }

  var outerRadius = w / 2;
  var innerRadius = 0;
  var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  var pie = d3.layout.pie();

  var color = d3.scale.category10();

  var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var arcs = svg.selectAll("g.arc")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

  //Draw arc paths
  arcs.append("path")
    .attr("fill", function(d, i) {
      return color(i);
    })
    .attr("d", arc);

  //Labels
  arcs.append("text")
    .attr("transform", function(d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {
      return d.value;
    })

  d3.select("p")
   .on('click', function() {
     console.log("Clicked");
     var maxValue = 100;
  var datasetLength = 10;
  var dataset = []; //Initialize empty array
  for (var i = 0; i < datasetLength; i++) { //Loop numValues times
    var newNumber = Math.floor(Math.random() * maxValue); //New random integer (0-24)
    dataset.push(newNumber); //Add new number to array
  }

  var outerRadius = w / 2;
  var innerRadius = 0;
  var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

  var pie = d3.layout.pie();

  var color = d3.scale.category10();

  var svg = d3.select("body")
    .append("svg")
    .attr("width", w)
    .attr("height", h);

  var arcs = svg.selectAll("g.arc")
    .data(pie(dataset))
    .enter()
    .append("g")
    .attr("class", "arc")
    .attr("transform", "translate(" + outerRadius + "," + outerRadius + ")");

  //Draw arc paths
  arcs.append("path")
    .attr("fill", function(d, i) {
      return color(i);
    })
    .attr("d", arc);

  //Labels
  arcs.append("text")
    .attr("transform", function(d) {
      return "translate(" + arc.centroid(d) + ")";
    })
    .attr("text-anchor", "middle")
    .text(function(d) {
      return d.value;
    })
  })
