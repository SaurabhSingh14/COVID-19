google.charts.load("current", { packages: ["corechart"] });
google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChartpie);
google.charts.setOnLoadCallback(drawChartcolumn);
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawVisualization);
var a = 'Usas';
function drawChart() {

  
  window.b = 'India';
  window.c=20;
  window.e=30;
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"],
    ["Silver", 10.49, "silver"],
    ["Gold", 19.30, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
    {
      calc: "stringify",
      sourceColumn: 1,
      type: "string",
      role: "annotation"
    },
    2]);

  var options = {
    title: "Density of Precious Metals, in g/cm^3",
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
  chart.draw(view, options);
}
function drawVisualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea'],
    [a, 165, 938, 522, 998],
    [window.b, 135, 1120, 599, 1268],
    ['sfd', 157, 1167, 587, 807],
    ['sfdf', 139, 1110, 615, 968],
    ['sfsaa', 136, 691, 629, 1026]
  ]);

  var options = {
    width: 300,
    height: 400,
    title: 'Monthly Coffee Production by Country',
    vAxis: { title: 'Cups' },
    hAxis: { title: 'Month' },
    seriesType: 'bars',
    series: { 5: { type: 'line' } }
  };

  var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawChartcolumn() {
  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales', 'Expenses', 'Profit'],
    ['2014', 1000, 400, 200],
    ['2015', 1170, 460, 250],
    ['2016', 660, 1120, 300],
    ['2017', 1030, 540, 350]
  ]);

  var options = {
    width: 400,
    height: 500,
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}

function drawChartpie() {
  let values=4;
  console.log(window.a);
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    [a, values],
    [window.b, window.d],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  var options = {
    width: 1000,
    height: 900,
    legend: 'bottom',
    title: 'My Daily Activities',
    is3D: true,
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
  chart.draw(data, options);
}

// function updateMap() {
//   console.log("Updating map with realtime data")
//   fetch("../static/data.json")
//       .then(response => response.json())
//       .then(rsp => {
//           // console.log(rsp.data)
//           rsp.data.forEach(element => {
//               latitude = element.latitude;
//               longitude = element.longitude;
//               console.log(latitude,longitude)

//               // cases = element.infected;
//               // if (cases>255){
//               //     color = "rgb(255, 0, 0)";
//               // }

//               // else{
//               //     color = `rgb(${cases}, 0, 0)`;
//               // }

//               // Mark on the map
//               new mapboxgl.Marker({
//                   draggable: false,
//                   color: 'red'
//               }).setLngLat([longitude, latitude])
//               .addTo(map); 
//           });
//       })
// }
// updateMap();