var size = 0;
var placement = 'point';

var style_room_name_1 = function(feature, resolution){
    var rawName = feature.get("room_name") || "";
    var excludedNames = ["계단1", "계단2", "엘리베이터2", "엘리베이터3", "엘리베이터4", "엘리베이터5", "주출입구"];

    var labelText = excludedNames.includes(rawName) ? "" : rawName;

    var labelFont = "13px 'Open Sans', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#ffffff";
    var bufferWidth = 2;
    var textAlign = "center";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';

    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(35,35,35,1.0)',
            width: 1
        }),
        fill: new ol.style.Fill({
            color: 'rgba(191,229,243,1.0)'
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
