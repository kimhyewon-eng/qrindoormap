var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '테두리',
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> 테두리'
            });
var format_room_name_1 = new ol.format.GeoJSON();
var features_room_name_1 = format_room_name_1.readFeatures(json_room_name_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_room_name_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_room_name_1.addFeatures(features_room_name_1);
var lyr_room_name_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_room_name_1, 
                style: style_room_name_1,
                popuplayertitle: 'room_name',
                interactive: true,
                title: '<img src="styles/legend/room_name_1.png" /> room_name'
            });
var format_room_symbols_2 = new ol.format.GeoJSON();
var features_room_symbols_2 = format_room_symbols_2.readFeatures(json_room_symbols_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_room_symbols_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_room_symbols_2.addFeatures(features_room_symbols_2);
var lyr_room_symbols_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_room_symbols_2, 
                style: style_room_symbols_2,
                popuplayertitle: 'room_symbols',
                interactive: false,
    title: 'room_symbols<br />\
    <img src="styles/legend/room_symbols_2_0.png" /> elevator2<br />\
    <img src="styles/legend/room_symbols_2_1.png" /> elevator3<br />\
    <img src="styles/legend/room_symbols_2_2.png" /> exit1<br />\
    <img src="styles/legend/room_symbols_2_3.png" /> exit2<br />\
    <img src="styles/legend/room_symbols_2_4.png" /> exit3<br />\
    <img src="styles/legend/room_symbols_2_5.png" /> exit4<br />\
    <img src="styles/legend/room_symbols_2_6.png" /> exit5<br />\
    <img src="styles/legend/room_symbols_2_7.png" /> fire1<br />\
    <img src="styles/legend/room_symbols_2_8.png" /> fire2<br />\
    <img src="styles/legend/room_symbols_2_9.png" /> fire3<br />\
    <img src="styles/legend/room_symbols_2_10.png" /> fire5<br />\
    <img src="styles/legend/room_symbols_2_11.png" /> fire6<br />\
    <img src="styles/legend/room_symbols_2_12.png" /> fire7<br />\
    <img src="styles/legend/room_symbols_2_13.png" /> mtoilet<br />\
    <img src="styles/legend/room_symbols_2_14.png" /> stairs<br />\
    <img src="styles/legend/room_symbols_2_15.png" /> wtoilet<br />\
    <img src="styles/legend/room_symbols_2_16.png" /> elevator4<br />\
    <img src="styles/legend/room_symbols_2_17.png" /> elevator5<br />' });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: '출입구',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> 출입구'
            });

lyr__0.setVisible(true);lyr_room_name_1.setVisible(true);lyr_room_symbols_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr__0,lyr_room_name_1,lyr_room_symbols_2,lyr__3];
lyr__0.set('fieldAliases', {'id': 'id', });
lyr_room_name_1.set('fieldAliases', {'id': 'id', 'room_name': 'room_name', });
lyr_room_symbols_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'type': 'type', });
lyr__3.set('fieldAliases', {'field_1': 'field_1', 'x': 'x', 'y': 'y', 'field_4': 'field_4', });
lyr__0.set('fieldImages', {'id': 'TextEdit', });
lyr_room_name_1.set('fieldImages', {'id': 'TextEdit', 'room_name': 'TextEdit', });
lyr_room_symbols_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', });
lyr__3.set('fieldImages', {'field_1': 'Range', 'x': 'TextEdit', 'y': 'TextEdit', 'field_4': 'CheckBox', });
lyr__0.set('fieldLabels', {'id': 'no label', });
lyr_room_name_1.set('fieldLabels', {'id': 'no label', 'room_name': 'inline label - always visible', });
lyr_room_symbols_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'type': 'no label', });
lyr__3.set('fieldLabels', {'field_1': 'no label', 'x': 'no label', 'y': 'no label', 'field_4': 'no label', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});