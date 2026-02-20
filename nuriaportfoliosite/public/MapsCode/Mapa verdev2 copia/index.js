let map;
let currentMarkers = [];
let illustrationMarkers = [];
let map_markers = markers_parkings;

function initMap() {
    var myLatLng = { lat: 41.387328678982826, lng: 2.158511947139619 };
    var mapOptions = {
        zoom: 13,
        center: myLatLng,
        minZoom: 2,
        maxZoom: 18,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: false,
        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false,
        styles: styles.custom,
        mapId: 'd10ef8b00e86a4d7'
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);

    loadmarkers(map, markers_parkings); // Cargar los marcadores iniciales
    addIllustrations(map); // Pasa el mapa como argumento
}

function loadmarkers(map, markers) {
    clearMarkers(); // Limpia los marcadores de tipo loadmarkers

    markers.forEach(data => {
        const svgIcon = document.createElement('div');
        svgIcon.className = 'marker-icon';
        svgIcon.style.width = 'fit-content';
        svgIcon.style.height = '27.029px';
        svgIcon.style.display = 'flex';
        svgIcon.style.gap = '8px';
        svgIcon.style.alignItems = 'center';
        svgIcon.style.justifyContent = 'center';

        svgIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 22 28" fill="none" cursor="pointer";>
                <defs>
                    <filter id="shadow" x="0" y="0" width="150%" height="150%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(24, 28, 22, 0.10)" />
                    </filter>
                </defs>
                <path d="M10.9998 27.5289C7.47484 24.4116 4.81959 21.5044 3.03409 18.8071C1.24834 16.1101 0.355469 13.6559 0.355469 11.4444C0.355469 8.27112 1.38872 5.65375 3.45522 3.59225C5.52147 1.53075 8.03634 0.5 10.9998 0.5C13.9633 0.5 16.4782 1.53075 18.5445 3.59225C20.611 5.65375 21.6442 8.27112 21.6442 11.4444C21.6442 13.6559 20.7513 16.1101 18.9656 18.8071C17.1801 21.5044 14.5248 24.4116 10.9998 27.5289Z" fill="#F9FBF9" filter="url(#shadow)"/>
                <path d="M17.6865 18.0282C16.048 20.5657 13.8191 23.0615 10.9998 25.5155C8.18059 23.0615 5.95172 20.5657 4.31322 18.0282C2.67472 15.4907 1.85547 13.2961 1.85547 11.4444C1.85547 8.70012 2.72422 6.43513 4.46172 4.64938C6.19922 2.86388 8.37859 2 10.9998 2C13.6211 2 15.8005 2.86388 17.538 4.64938C19.2755 6.43513 20.1442 8.70012 20.1442 11.4444C20.1442 13.2961 19.325 15.4907 17.6865 18.0282Z" fill="#00352B" filter="url(#shadow)"/>
            </svg>
            <div style="
                position: absolute;
                
                left: 30px; /* Ajusta el texto 5px a la izquierda */
                display: none;
                
                color: #00352B;
                text-align: center;
                font-family: 'Poppins', sans-serif;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
                line-height: 120%; /* 16.8px */
                -webkit-text-stroke-width: 1;
                -webkit-text-stroke-color: var(--White, #FFF);
                white-space: nowrap; /* Evita el desbordamiento de texto */
            ">
                ${data.locationName}
            </div>
            `
            ;


        // Selecciona el texto dentro de svgIcon
        const textElement = svgIcon.querySelector('div');

        // Maneja el evento de hover sobre el marcador
        svgIcon.addEventListener('mouseover', () => {
            textElement.style.display = 'block';
        });

        svgIcon.addEventListener('mouseout', () => {
            textElement.style.display = 'none';
        });


        const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: parseFloat(data.lat), lng: parseFloat(data.lng) },
            content: svgIcon,
            collisionBehavior: google.maps.CollisionBehavior.REQUIRED_AND_HIDES_OPTIONAL,
        });

        advancedMarker.setMap(map);
        currentMarkers.push(advancedMarker); // Guarda el marcador para limpiar luego
    });
}

function addIllustrations(map) {
    illustration.forEach((illustration) => {
        const image = document.createElement('div');
        image.style.textAlign = 'center';
        image.style.width = '100px';
        image.style.height = '150px';

        image.innerHTML = `
            <img src="${illustration.imagen}" alt="Ilustración" style="width:100%; height:80px;" />
            <div style="
                margin-top: 5px;
                color: #00352B;
                text-align: center;
                font-family: 'Poppins', sans-serif;
                font-size: 11px;
                font-style: normal;
                font-weight: 300;
                line-height: 16px;
            ">
                ${illustration.name}
            </div>
        ` ;

        const illustration_marker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: parseFloat(illustration.lat), lng: parseFloat(illustration.lng) },
            content: image,
            collisionBehavior: google.maps.CollisionBehavior.OPTIONAL_AND_HIDES_LOWER_PRIORITY,
        });
        
        illustration_marker.setMap(map);
        illustrationMarkers.push(illustration_marker); // Guarda el marcador de ilustración para no eliminarlo
    });
}

function clearMarkers() {
    currentMarkers.forEach(marker => marker.setMap(null)); // Limpia solo los marcadores de tipo loadmarkers
    currentMarkers = [];
}

function toggleOption(optionIndex) {
    const options = document.querySelectorAll('.toggle-option');
    options.forEach((option, index) => {
        if (index === optionIndex) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });

    
    if (optionIndex === 0) {
        map_markers = markers_parkings;
    } else if (optionIndex === 1) {
        map_markers = markers_garajes;
    }

    clearMarkers(); // Limpia los marcadores de tipo loadmarkers
    loadmarkers(map, map_markers); // Carga los nuevos marcadores

    if (map) {
        map.setZoom(13);
       // map.setCenter({ llat: 41.387328678982826, lng: 2.158511947139619 });
    } else {
        console.error("Mapa no definido.");
    }
}





const styles = {
    custom: [
        // Estilos personalizados para el mapa
        {
            elementType: "geometry",
            stylers: [{ color: "#CAD8D7" }],
        },
        {
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
        {
            elementType: "labels.text.fill",
            stylers: [{ color: "#00352B" }],
        },
        {
            elementType: "labels.text.stroke",
            stylers: [{ color: "#f5f5f5" }],
        },
        {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [{ color: "#00352B" }],
        },
        {
            featureType: "administrative",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi",
            elementType: "geometry",
            stylers: [{ color: "#CAD8D7" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [{ color: "#c4d4d4" }],
        },
        {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#DAE4E3" }],
        },
        {
            featureType: "road.arterial",
            elementType: "labels.text.fill",
            stylers: [{ color: "#00352B" }],
        },
        {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [{ color: "#DAE4E3" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.fill",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road.highway",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "road.local",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [{ color: "#DAE4E3" }],
        },
        {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [{ color: "#DAE4E3" }],
        },
        {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#D3E0E2" }],
        },
        {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [{ color: "#00352B" }],
        },
        {
            featureType: "administrative.neighborhood",
            elementType: "labels.text.fill",
            stylers: [{ color: "#67807F" }],
        },
        {
            featureType: "administrative.neighborhood",
            elementType: "labels.text.stroke",
            stylers: [{ visibility: "off" }],
        },
    ],
};

window.initMap = initMap;
