// from data.js
var tableData = data;

// YOUR CODE HERE!


// Assign the data from `data.js` to a descriptive variable
var people = data;
var list = d3.select("tbody");
list.html("");
people.forEach(element => {
    // console.log(element.city)
   
   var trow = list.append("tr");

   trow.append('td').text(element.datetime);
   trow.append('td').text(element.city);
   trow.append('td').text(element.state);
   trow.append('td').text(element.country);
   trow.append('td').text(element.shape);
   trow.append('td').text(element.durationMinutes);
   
   trow.append('td').text(element.comments);


});


// Select the button
var button = d3.select("#filter-btn");


button.on("click", function() {
  var filteredData = people;



  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
//   console.log(people);
  if (inputValue === ""){
    // break;
  // filteredData = filteredData.filter(date => date.datetime === inputValue);
} else {
  filteredData = filteredData.filter(date => date.datetime === inputValue);
}

  console.log(`this is the filtered data ${filteredData}`);



  // Then, select the unordered list element by class name
  var list = d3.select("tbody");
//   var list = d3.select("#ufo-table");
  // remove any children from the list to
  list.html("");

  // append stats to the list
 filteredData.forEach(element => {
  
  var trow = list.append("tr");

  trow.append('td').text(element.datetime);
  trow.append('td').text(element.city);
  trow.append('td').text(element.state);
  trow.append('td').text(element.country);
  trow.append('td').text(element.shape);
  trow.append('td').text(element.durationMinutes);
  
  trow.append('td').text(element.comments);


 });
    

        
 
});
