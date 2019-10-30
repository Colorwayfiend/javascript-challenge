// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Loop Through `data` and console.log each report object
data.forEach(function (sightings) {

});

// Use d3 to append one table row `tr` for each report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
data.forEach(function (sightings) {
    //console.log(sightings);
    var row = tbody.append("tr");
});

// Use `Object.entries` to console.log each report value
data.forEach(function (sightings) {
    //console.log(sightings);
    var row = tbody.append("tr");

    Object.entries(sightings).forEach(function ([key, value]) {
        console.log(key, value);
    });
});

// Use d3 to update each cell's text with report values 
data.forEach(function (sightings) {
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

// Submit Button handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Use    
    var button = d3.select("#filter-btn");
    button.on("click", function () {
        // Select the input element and get the raw HTML node
        var inputElement = d3.select("#datetime");
        // Get the value property of the input element. property will get the raw element values
        var inputValue = inputElement.property("value");
        console.log(inputValue);
        console.log(data);

        var filteredData = data.filter(data => data.datetime === inputValue);
        // filteredData.forEach(function (sightings) {
        //     var row = tbody.append("tr");
        console.log(filteredData);

    });
};
