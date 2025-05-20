
var map = new ol.Map({
    target: 'map',
    view: new ol.View({
        projection: 'EPSG:3857',
        center: [0, 0],
        zoom: 2,
        maxZoom: 28,
        minZoom: 1
    })
});

// 마커 좌표 받아오기
const urlParams = new URLSearchParams(window.location.search);
const x = parseFloat(urlParams.get("x"));
const y = parseFloat(urlParams.get("y"));
const zoom = parseInt(urlParams.get("zoom"));

if (!isNaN(x) && !isNaN(y)) {
    const coord = ol.proj.fromLonLat([x, y]); // 경도, 위도
    map.getView().setCenter(coord);
    if (!isNaN(zoom)) {
        map.getView().setZoom(zoom);
    }

    const marker = new ol.Feature({
        geometry: new ol.geom.Point(coord)
    });

    marker.setStyle(new ol.style.Style({
        image: new ol.style.Icon({
            src: 'images/location-marker.svg',
            scale: 0.05,
            anchor: [0.5, 1]
        })
    }));

    const vectorLayer = new ol.layer.Vector({
        source: new ol.source.Vector({
            features: [marker]
        })
    });

    map.addLayer(vectorLayer);
}
