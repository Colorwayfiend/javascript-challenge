// Get a reference to the table body
var ufos = data
var tbody = d3.select("tbody");

// Loop Through `data` 
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

//Select button instructions
var button = d3.select("#filter-btn");
button.on("click", function () {
    tbody.html("");
    var filteredData = ufos
    //Select the input element and get the raw HTML node
    var dates = d3.select("#datetime");
    //Get the value property of the input element
    var i_element = dates.property("value");
    filteredData = filteredData.filter(ufos => ufos.datetime === i_element)

    tbody = d3.select("tbody");
    filteredData.forEach(function (sightings) {
        var row = tbody.append("tr");
        Object.entries(sightings).forEach(function ([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
