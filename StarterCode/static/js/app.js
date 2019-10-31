// Get a reference to the table body
var ufos = data
var tbody = d3.select("tbody");

// Loop Through `data` and console.log each report object
ufos.forEach(function (sightings) {

});
// Use d3 to update each cell's text with report values 
ufos.forEach(function (sightings) {
    console.log(sightings);
    var row = tbody.append("tr");
    Object.entries(sightings).forEach(function ([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value
        // in the report object
        var cell = row.append("td");
        cell.text(value);
    });
});

sightings(ufos)
var button = d3.select("#filter-btn”)
var date = d3.select("#datetime”);
function input() {
        d3.event.preventDefault();
        console.log(date.property("value”));
        var filteredData = ufos.filter(sighting => sighting.datetime === dateEntry.property("value”))
        sightings(filteredData);
    }
date.on("change”, input);
// Get a reference to the table body
var tbody = d3.select(“tbody”);
//Console.log the weather data from data.js
console.log(data);



// sightings(ufos)
// var button = d3.select("#filter-btn");
// var date = d3.select("#datetime");
// function date() {
//     d3.event.preventDefault();
//     console.log(input.property("value"));
//     var filteredData = ufos.filter(sighting => sighting.datetime === dateEntry.property("value"));
//     sightings(filteredData);
// };
// date.on("change", date);
// // Get a reference to the table body
// var tbody = d3.select(“tbody”);
// //Console.log the data from data.js
// console.log(ufos);

