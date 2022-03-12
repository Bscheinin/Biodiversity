// d3.json("samples.json").then(function(data){
//     console.log(data);
// });

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq);
//     console.log(wfreq);
// });

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//     console.log(wfreq);
// });

// d3.json("samples.json").then(function(data){
//     wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
//     filteredWfreq = wfreq.filter(element => element !=null);
//     console.log(filteredWfreq);
// });

// d3.json("samples.json").then(function(data){
//     firstPerson = data.metadata[0];
//     Object.entries(firstPerson).forEach(([key, value]) =>
//       {console.log(key + ': ' + value);});
// });

d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(selectedOption);
};