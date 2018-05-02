// this is the script for test 7

mapboxgl.accessToken = 'pk.eyJ1IjoiYmV4aW11cyIsImEiOiJjamc5MG04ZXU5dDhhMnhtczVjeTI5c3kyIn0.m5hg57ASif4CYrkda7Wg_g';
var map = new mapboxgl.Map({
    container: 'map', // container id
    style: 'mapbox://styles/beximus/cjgldxbjj000h2rr0gdz4rz6f', // stylesheet location
    center: [174.775604, -41.295502], // starting position [lng, lat]
    zoom: 15 // starting zoom
});

map.addControl(
	new mapboxgl.GeolocateControl({
		positionOptions:{
			enableHighAccuracy: true
		},
		trackUserLocation: true
	})
);

var nav = new mapboxgl.NavigationControl();

map.addControl(nav, 'bottom-right');

map.on('load', function () {

    map.addLayer({
        "id": "Access",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://beximus.cjgajh670000eb2p7pio3jc0j-13q9e'
        },
        "source-layer": "Access",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#ffee00",
            "line-width": 3
        }
    });

    map.addLayer({
        "id": "Easy",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://beximus.cjgajpdz60b6faimped432wpl-3t50c'
        },
        "source-layer": "Easy",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#0ae833",
            "line-width": 3
        }
    });
    map.addLayer({
        "id": "Medium",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://beximus.cjgajsjk101pdnvqn9royvwbl-80lrp'
        },
        "source-layer": "Medium",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#00a9ff",
            "line-width": 3
        }
    });
    map.addLayer({
        "id": "Hard",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://beximus.cjgajyidh035w2zmmbgabquvp-3jn32'
        },
        "source-layer": "Hard",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#6f0ae8",
            "line-width": 3
        }
    });
    map.addLayer({
        "id": "Advanced",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://beximus.cjgak1fpt0f0n9ompdkt6dfdu-8zfkc'
        },
        "source-layer": "Advanced",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#ff0700",
            "line-width": 3
        }
    });
    map.addLayer({
        "id": "Expert",
        "type": "line",
        "source": {
            type: 'vector',
            url: 'mapbox://beximus.cjgak5pzj03lr9yp9krr8w8mo-7vpz4'
        },
        "source-layer": "Expert",
        "layout": {
            "line-join": "round",
            "line-cap": "round",
            'visibility': 'visible'
        },
        "paint": {
            "line-color": "#000000",
            "line-width": 3
        }
    });
});

var togglableLayerIds = ['Access', 'Easy', 'Medium', 'Hard', 'Advanced', 'Expert'];

for (var i = 0; i < togglableLayerIds.length; i++) {
    var id = togglableLayerIds[i];

    var link = document.createElement('a');
    link.href = '#';
    link.className = 'active';
    link.textContent = id;

    link.onclick = function (e) {
        var clickedLayer = this.textContent;
        e.preventDefault();
        e.stopPropagation();

        var visibility = map.getLayoutProperty(clickedLayer, 'visibility');

        if (visibility === 'visible') {
            map.setLayoutProperty(clickedLayer, 'visibility', 'none');
            this.className = '';
        } else {
            this.className = 'active';
            map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
        }
    };
    var layers = document.getElementById('lTog');
    layers.appendChild(link);
}

map.on('click', 'Access', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.Name + '<br>Climb: '
                + e.features[0].properties.Climb + '<br>Descent: '
                + e.features[0].properties.Descent + '<br> Length: '
                + e.features[0].properties.Length + '<br> Direction: '
                + e.features[0].properties.Direction + '<br> Use: '
                + e.features[0].properties.Use + '<br> Climb Difficulty: '
                + e.features[0].properties.ClimbDifficulty + '<br> Physical Difficulty: '
                + e.features[0].properties.PhysicalDifficulty
                )
            .addTo(map);
    });

        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'Access', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'Access', function () {
        map.getCanvas().style.cursor = '';
    });

map.on('click', 'Easy', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.Name + '<br>Climb: '
                + e.features[0].properties.Climb + '<br>Descent: '
                + e.features[0].properties.Descent + '<br> Length: '
                + e.features[0].properties.Length + '<br> Direction: '
                + e.features[0].properties.Direction + '<br> Use: '
                + e.features[0].properties.Use + '<br> Climb Difficulty: '
                + e.features[0].properties.ClimbDifficulty + '<br> Physical Difficulty: '
                + e.features[0].properties.PhysicalDifficulty
                )
            .addTo(map);
    });

        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'Easy', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'Easy', function () {
        map.getCanvas().style.cursor = '';
    });

map.on('click', 'Medium', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.Name + '<br>Climb: '
                + e.features[0].properties.Climb + '<br>Descent: '
                + e.features[0].properties.Descent + '<br> Length: '
                + e.features[0].properties.Length + '<br> Direction: '
                + e.features[0].properties.Direction + '<br> Use: '
                + e.features[0].properties.Use + '<br> Climb Difficulty: '
                + e.features[0].properties.ClimbDifficulty + '<br> Physical Difficulty: '
                + e.features[0].properties.PhysicalDifficulty
                )
            .addTo(map);
    });

        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'Medium', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'Medium', function () {
        map.getCanvas().style.cursor = '';
    });

map.on('click', 'Hard', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.Name + '<br>Climb: '
                + e.features[0].properties.Climb + '<br>Descent: '
                + e.features[0].properties.Descent + '<br> Length: '
                + e.features[0].properties.Length + '<br> Direction: '
                + e.features[0].properties.Direction + '<br> Use: '
                + e.features[0].properties.Use + '<br> Climb Difficulty: '
                + e.features[0].properties.ClimbDifficulty + '<br> Physical Difficulty: '
                + e.features[0].properties.PhysicalDifficulty
                )
            .addTo(map);
    });

        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'Hard', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'Hard', function () {
        map.getCanvas().style.cursor = '';
    });

map.on('click', 'Advanced', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.Name + '<br>Climb: '
                + e.features[0].properties.Climb + '<br>Descent: '
                + e.features[0].properties.Descent + '<br> Length: '
                + e.features[0].properties.Length + '<br> Direction: '
                + e.features[0].properties.Direction + '<br> Use: '
                + e.features[0].properties.Use + '<br> Climb Difficulty: '
                + e.features[0].properties.ClimbDifficulty + '<br> Physical Difficulty: '
                + e.features[0].properties.PhysicalDifficulty
                )
            .addTo(map);
    });

        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'Advanced', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'Advanced', function () {
        map.getCanvas().style.cursor = '';
    });

map.on('click', 'Expert', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.Name + '<br>Climb: '
                + e.features[0].properties.Climb + '<br>Descent: '
                + e.features[0].properties.Descent + '<br> Length: '
                + e.features[0].properties.Length + '<br> Direction: '
                + e.features[0].properties.Direction + '<br> Use: '
                + e.features[0].properties.Use + '<br> Climb Difficulty: '
                + e.features[0].properties.ClimbDifficulty + '<br> Physical Difficulty: '
                + e.features[0].properties.PhysicalDifficulty
                )
            .addTo(map);
    });

        // Change the cursor to a pointer when the mouse is over the states layer.
    map.on('mouseenter', 'Expert', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'Expert', function () {
        map.getCanvas().style.cursor = '';
    });

