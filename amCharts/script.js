am5.ready(function() {
    const root = am5.Root.new("chartdiv");

    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
          projection: am5map.geoEqualEarth()
        })
    );

    const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow
        })
    );
});

