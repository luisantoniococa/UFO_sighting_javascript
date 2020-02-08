// from data.js
var tableData = data;

// YOUR CODE HERE!


// Assign the data from `data.js` to a descriptive variable
var list = d3.select("tbody");
list.html("");
tableData.forEach(element => {
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


let allCountry = Array.from(new Set(tableData.map(element => element.country)));
allCountry.forEach(element => {
  var dropSelect = d3.select("#selCountry");
  var x = dropSelect.append('option').text(element);
  x.value = element;
});
let allState = Array.from(new Set(tableData.map(element => element.state)));
allState.forEach(element => {
  var dropSelect = d3.select("#selState");
  var x = dropSelect.append('option').text(element);
  x.value = element;
});
let allCity = Array.from(new Set(tableData.map(element => element.city)));
allCity.forEach(element => {
  var dropSelect = d3.select("#selCity");
  var x = dropSelect.append('option').text(element);
  x.value = element;
});
let allShape = Array.from(new Set(tableData.map(element => element.shape)));
allShape.forEach(element => {
  var dropSelect = d3.select("#selShape");
  var x = dropSelect.append('option').text(element);
  x.value = element;
});
// Select the button
var button = d3.select("#filter-btn");
var filteredData = tableData;

function builtFilter(){
    var date, city, state, country, shape;
    d3.selectAll("#selState").on("change", state = d3.select("#selState").property('value'));


    // return date, city, state, country, shape;
    return state;
}

var filter = builtFilter();




function updatefilteredData (){
  var selection = d3.select("#selState");
  // console.log(`this is the value of the property state  ${y.property('value')}`);
  x = filteredData.filter(state => state.state === selection.property('value') )
  return x
};


button.on("click", function() {
  
  // console.log(`this is the filtered data 1 ${filteredData}`);
  d3.selectAll("#selState").on("change", filteredData = updatefilteredData());
  // console.log(`this is the filtered data after function 2 ${filteredData}`);
  var a = d3.selectAll("#selCountry")
  a.on("change", filteredData = updatefilteredData2());


  function updatefilteredData2 (){
    var selection = d3.select("#selCountry");
    // console.log(`this is the value of the property state  ${y.property('value')}`);
    x = filteredData.filter(state => state.country === selection.property('value') )
    return x
  };
  








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

  // BONUS: Calculate summary statistics for the age field of the filtered data

  // First, create an array with just the age values

  // var totalCountry = people.map(element => element.country)
  // var outputArray;
          
//   // function removeusingSet(arr) { 
//       let outputArray = Array.from(new Set(tableData.map(element => element.country))) 
//   //     return outputArray 
//   // } 
//   //   );
//   console.log(`this is an example ${outputArray}`);

  
  // var filterCity = filteredData.map(date => date.city);
  // var filterState = filteredData.map(date => date.state);
  // var filterCountry = filteredData.map(date => date.country);
  // var filterShape = filteredData.map(date => date.shape);
  // var filterDuration = filteredData.map(date => date.durationMinutes);
  // var filterComments = filteredData.map(date => date.comments);


  // Next, use math.js to calculate the mean, median, mode, var, and std of the ages
//   var mean = math.mean(ages);
//   var median = math.median(ages);
//   var mode = math.mode(ages);
//   var variance = math.var(ages);
//   var standardDeviation = math.std(ages);

  // This updates my table based in the filter data obtained.
  var list = d3.select("tbody");

  list.html("");


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
