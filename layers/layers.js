var format_room_name_1 = new ol.format.GeoJSON();
var features_room_name_1 = format_room_name_1.readFeatures(json_room_name_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_room_name_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_room_name_1.addFeatures(features_room_name_1);
var lyr_room_name_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_room_name_1, 
                style: style_room_name_1,
                interactive: true,
                title: '<img src="styles/legend/room_name_1.png" /> room_name'
            });

lyr_room_name_1.setVisible(true);
var layersList = [lyr_room_name_1];
