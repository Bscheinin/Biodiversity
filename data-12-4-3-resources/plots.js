function init() {
    var selector = d3.select("#selDataset");

    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
    });
    var firstSample = sampleNames[0];
    // buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}
// Initialize the dashboard
init()

function optionChanged(newSample) {
  buildMetadata(newSample);
  // buildCharts(newSample);

}

function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });
  });
};

// function buildCharts(sample) {
//   var otu_ids = result.otu_ids
//    var
  // var bubble = [{
  //     x: otu_ids,
  //     y: [10, 11, 12, 13],
  //     mode: 'markers',
  //     marker: {
  //       size: [40, 60, 80, 100]
  //     }
  //   };
    
  //   var data = [trace1];
    
  //   var layout = {
  //     title: 'Marker Size',
  //     showlegend: false,
  //     height: 600,
  //     width: 600
  //   };
    
  //   Plotly.newPlot('myDiv', data, layout);

//   }]
//  }

// buildCharts()

// //init()