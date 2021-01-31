google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChartpie);
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawVisualization);

var casevalue1 = parseFloat(document.getElementById("case_val").dataset.caseval1);
var casevalue2 = parseFloat(document.getElementById("case_val").dataset.caseval2);
var casevalue3 = parseFloat(document.getElementById("case_val").dataset.caseval3);
var casevalue4 = parseFloat(document.getElementById("case_val").dataset.caseval4);
var casevalue5 = parseFloat(document.getElementById("case_val").dataset.caseval5);

var countryvalue1 = document.getElementById("cty_val").dataset.ctyval1;
var countryvalue2 = document.getElementById("cty_val").dataset.ctyval2;
var countryvalue3 = document.getElementById("cty_val").dataset.ctyval3;
var countryvalue4 = document.getElementById("cty_val").dataset.ctyval4;
var countryvalue5 = document.getElementById("cty_val").dataset.ctyval5;

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ["Country", "Cases", { role: "style" }],
        [countryvalue1, casevalue1, "red"],
        [countryvalue2, casevalue2, "blue"],
        [countryvalue3, casevalue3, "gold"],
        [countryvalue4, casevalue4, "green"]
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
        title: "Top Countries With Most no. of Cases",
        width: 600,
        height: 400,
        bar: { groupWidth: "95%" },
        legend: { position: "none" },
    };
    var chart = new google.visualization.BarChart(document.getElementById("barchart_values"));
    chart.draw(view, options);
}

function drawVisualization() {

    var acasevalue1 = parseFloat(document.getElementById("a_cases").dataset.acval1);
    var acasevalue2 = parseFloat(document.getElementById("a_cases").dataset.acval2);
    var acasevalue3 = parseFloat(document.getElementById("a_cases").dataset.acval3);
    var acasevalue4 = parseFloat(document.getElementById("a_cases").dataset.acval4);
    var acasevalue5 = parseFloat(document.getElementById("a_cases").dataset.acval5);

    var dcasevalue1 = parseFloat(document.getElementById("dpc").dataset.dpcval1);
    var dcasevalue2 = parseFloat(document.getElementById("dpc").dataset.dpcval2);
    var dcasevalue3 = parseFloat(document.getElementById("dpc").dataset.dpcval3);
    var dcasevalue4 = parseFloat(document.getElementById("dpc").dataset.dpcval4);
    var dcasevalue5 = parseFloat(document.getElementById("dpc").dataset.dpcval5);

    var rcasevalue1 = parseFloat(document.getElementById("rpc").dataset.rpcval1);
    var rcasevalue2 = parseFloat(document.getElementById("rpc").dataset.rpcval2);
    var rcasevalue3 = parseFloat(document.getElementById("rpc").dataset.rpcval3);
    var rcasevalue4 = parseFloat(document.getElementById("rpc").dataset.rpcval4);
    var rcasevalue5 = parseFloat(document.getElementById("rpc").dataset.rpcval5);

    var ncasevalue1 = parseFloat(document.getElementById("n_cases").dataset.ncval1);
    var ncasevalue2 = parseFloat(document.getElementById("n_cases").dataset.ncval2);
    var ncasevalue3 = parseFloat(document.getElementById("n_cases").dataset.ncval3);
    var ncasevalue4 = parseFloat(document.getElementById("n_cases").dataset.ncval4);
    var ncasevalue5 = parseFloat(document.getElementById("n_cases").dataset.ncval5);


    var data = google.visualization.arrayToDataTable([
        ['Country', 'Total cases', 'active cases', 'recovered', 'deaths', 'new cases'],
        [countryvalue1, casevalue1, acasevalue1, rcasevalue1, dcasevalue1, ncasevalue1],
        [countryvalue2, casevalue2, acasevalue2, rcasevalue2, dcasevalue2, ncasevalue2],
        [countryvalue3, casevalue3, acasevalue3, rcasevalue3, dcasevalue3, ncasevalue3],
        [countryvalue4, casevalue4, acasevalue4, rcasevalue4, dcasevalue4, ncasevalue4],
        [countryvalue5, casevalue5, acasevalue5, rcasevalue5, dcasevalue5, ncasevalue5]
    ]);

    var options = {
        width: 500,
        height: 400,
        legend: 'none',
        title: 'Top Country Cases Analysis',
        vAxis: { title: 'Population' },
        hAxis: { title: 'Country' },
        seriesType: 'bars',
        series: { 5: { type: 'line' } }
    };

    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

function drawChartpie() {

    var data = google.visualization.arrayToDataTable([
        ['Countries', 'Cases'],
        [countryvalue1, casevalue1],
        [countryvalue2, casevalue2],
        [countryvalue3, casevalue3],
        [countryvalue4, casevalue4],
        [countryvalue5, casevalue5]
    ]);

    var options = {
        width: 400,
        height: 400,
        legend: 'none',
        title: 'Percentage of top 5 countries',
        is3D: true,
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    chart.draw(data, options);
}
//function update() {
//    fetch("/data")
//        .then(response => response.json())
//        .then(rsp => {
//            rsp.data.forEach(element => {
//                // console.log(rsp.data)
//                latitude = element.latitude;
//                longitude = element.longitude;
//
//                // cases = element.infected;
//                // if (cases > 255) {
//                //     color = "rgb(255, 0, 0)";
//                // }
//                // else {
//                //     color = `rgb(${cases}, 0, 0)`;
//                // }
//
//                // Mark on the map
//                var mar = new mapboxgl.Marker({
//                    draggable: false,
//                    color: 'red'
//                }).setLngLat([longitude, latitude])
//                    .addTo(map);
//            });
//
//        })
//}
//update();

function myalert() {
    alert('Hey! Your form has been submitted. We will get to you soon.');
}