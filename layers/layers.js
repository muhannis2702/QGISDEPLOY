var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_PERSEBARANBMKAMPUS2_1 = new ol.format.GeoJSON();
var features_PERSEBARANBMKAMPUS2_1 = format_PERSEBARANBMKAMPUS2_1.readFeatures(json_PERSEBARANBMKAMPUS2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERSEBARANBMKAMPUS2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERSEBARANBMKAMPUS2_1.addFeatures(features_PERSEBARANBMKAMPUS2_1);
cluster_PERSEBARANBMKAMPUS2_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PERSEBARANBMKAMPUS2_1
});
var lyr_PERSEBARANBMKAMPUS2_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PERSEBARANBMKAMPUS2_1, 
                style: style_PERSEBARANBMKAMPUS2_1,
                popuplayertitle: 'PERSEBARAN BM KAMPUS 2',
                interactive: true,
                title: '<img src="styles/legend/PERSEBARANBMKAMPUS2_1.png" /> PERSEBARAN BM KAMPUS 2'
            });
var format_PERSEBARANBMKAMPUSTEMBALANG_2 = new ol.format.GeoJSON();
var features_PERSEBARANBMKAMPUSTEMBALANG_2 = format_PERSEBARANBMKAMPUSTEMBALANG_2.readFeatures(json_PERSEBARANBMKAMPUSTEMBALANG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PERSEBARANBMKAMPUSTEMBALANG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERSEBARANBMKAMPUSTEMBALANG_2.addFeatures(features_PERSEBARANBMKAMPUSTEMBALANG_2);
cluster_PERSEBARANBMKAMPUSTEMBALANG_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_PERSEBARANBMKAMPUSTEMBALANG_2
});
var lyr_PERSEBARANBMKAMPUSTEMBALANG_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_PERSEBARANBMKAMPUSTEMBALANG_2, 
                style: style_PERSEBARANBMKAMPUSTEMBALANG_2,
                popuplayertitle: 'PERSEBARAN BM KAMPUS TEMBALANG',
                interactive: true,
                title: '<img src="styles/legend/PERSEBARANBMKAMPUSTEMBALANG_2.png" /> PERSEBARAN BM KAMPUS TEMBALANG'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_PERSEBARANBMKAMPUS2_1.setVisible(true);lyr_PERSEBARANBMKAMPUSTEMBALANG_2.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_PERSEBARANBMKAMPUS2_1,lyr_PERSEBARANBMKAMPUSTEMBALANG_2];
lyr_PERSEBARANBMKAMPUS2_1.set('fieldAliases', {'Titik BM': 'Titik BM', 'Grid North': 'Grid North', 'Grid Easti': 'Grid Easti', 'Elevation': 'Elevation', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'FOTO 3': 'FOTO 3', 'FOTO 4': 'FOTO 4', });
lyr_PERSEBARANBMKAMPUSTEMBALANG_2.set('fieldAliases', {'Titik BM': 'Titik BM', 'Grid North': 'Grid North', 'Grid Easti': 'Grid Easti', 'Elevation': 'Elevation', 'FOTO 1': 'FOTO 1', 'FOTO 2': 'FOTO 2', 'FOTO 3': 'FOTO 3', 'FOTO 4': 'FOTO 4', });
lyr_PERSEBARANBMKAMPUS2_1.set('fieldImages', {'Titik BM': 'TextEdit', 'Grid North': 'TextEdit', 'Grid Easti': 'TextEdit', 'Elevation': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'FOTO 3': 'ExternalResource', 'FOTO 4': 'ExternalResource', });
lyr_PERSEBARANBMKAMPUSTEMBALANG_2.set('fieldImages', {'Titik BM': 'TextEdit', 'Grid North': 'TextEdit', 'Grid Easti': 'TextEdit', 'Elevation': 'TextEdit', 'FOTO 1': 'ExternalResource', 'FOTO 2': 'ExternalResource', 'FOTO 3': 'ExternalResource', 'FOTO 4': 'ExternalResource', });
lyr_PERSEBARANBMKAMPUS2_1.set('fieldLabels', {'Titik BM': 'inline label - visible with data', 'Grid North': 'inline label - visible with data', 'Grid Easti': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'FOTO 1': 'header label - visible with data', 'FOTO 2': 'header label - visible with data', 'FOTO 3': 'header label - visible with data', 'FOTO 4': 'header label - visible with data', });
lyr_PERSEBARANBMKAMPUSTEMBALANG_2.set('fieldLabels', {'Titik BM': 'inline label - visible with data', 'Grid North': 'inline label - visible with data', 'Grid Easti': 'inline label - visible with data', 'Elevation': 'inline label - visible with data', 'FOTO 1': 'header label - visible with data', 'FOTO 2': 'header label - visible with data', 'FOTO 3': 'header label - visible with data', 'FOTO 4': 'header label - visible with data', });
lyr_PERSEBARANBMKAMPUSTEMBALANG_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});