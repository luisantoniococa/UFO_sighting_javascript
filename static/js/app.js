// from data.js we save the data in the variable
var tableData = data;


// Assign the data from `data.js' and create a list that is going to help use select the 
// html tag
var people = data;
var list = d3.select("tbody");
// make sure that the table is empty before appending the table data
list.html("");

// we are going to append a table to the selection variable and add rows
// for every value in the dataset
people.forEach(element => {
   
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

// creathe the event handeler on button clicked in the html file
button.on("click", function() {
  var filteredData = people;



  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  if (inputValue === ""){
    // this makes sure that we provide the appopiate value to the input 
    // and check if the value is empty
  } else {
  filteredData = filteredData.filter(date => date.datetime === inputValue);
}
  // this is a console log to make sure we have all the information 
  // loaded properly
  console.log(`this is the filtered data ${filteredData}`);



  // Then, select the unordered list element by class name
  var list = d3.select("tbody");
  // empty any previous information in the html tag also to make sure we don't append in top of the array
  
  list.html("");

  // append the new values to the table based in the filtered data
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
