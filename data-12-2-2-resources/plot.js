console.log(cityGrowths);

// sort the cities by population growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse()

// select top 5 cities
var topFiveCities = sortedCities.slice (0,5);
var topSevenCities = sortedCities.slice(0,7);

//create arrays of city names and growth figures
var topFiveCityNames = topFiveCities.map(city => city.City);
var topSevenCityNames = topSevenCities.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

var trace = {
    x: topSevenCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};
var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth 2016-2017"}
};
Plotly.newPlot ("bar-plot", data, layout);