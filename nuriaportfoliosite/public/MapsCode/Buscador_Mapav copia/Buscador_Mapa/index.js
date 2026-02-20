function initMap() {
    var myLatLng = new google.maps.LatLng(41.38620, 2.16662);
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
        mapId: '949d446c3f6ca3ee'
    };
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
   
    loadPOI(map, myLatLng);
    loadmarkers(map);

    // Add listeners for map events
    map.addListener('idle', function() {
        if (map.getZoom() !== 13 || !map.getCenter().equals(myLatLng)) {
            showLoader();
            loadPOI(map);
            setTimeout(hideLoader, 1000);
        } else {
            hideLoader();
        }
    });

    map.addListener('zoom_changed', function() {
        showLoader();
        loadPOI(map);
    });

    map.addListener('dragstart', function() {
        showLoader();
    });

    map.addListener('dragend', function() {
        setTimeout(hideLoader, 1000);
    });
}

function showLoader() {
    document.getElementById('loader').style.display = 'flex';
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

function loadmarkers(map) {
    markersData.forEach(data => {
        const svgIcon = createSVGIcon();
        const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
            position: { lat: parseFloat(data.lat), lng: parseFloat(data.lng) },
            content: svgIcon,
        });
        advancedMarker.map = map;

        advancedMarker.addListener("click", () => {
            showPlaceInfo(map, advancedMarker, data.place_id);
        });
    });
}

function createSVGIcon() {
    const svgIcon = document.createElement('div');
    svgIcon.className = 'marker-icon';
    svgIcon.style.width = '21.289px';
    svgIcon.style.height = '27.029px';
    svgIcon.style.flexShrink = '0';
    svgIcon.style.display = 'flex';
    svgIcon.style.alignItems = 'center';
    svgIcon.style.justifyContent = 'center';
    svgIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 22 28" fill="none">
            <defs>
                <filter id="shadow" x="0" y="0" width="150%" height="150%">
                    <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(24, 28, 22, 0.10)" />
                </filter>
            </defs>
            <path d="M10.9998 27.5289C7.47484 24.4116 4.81959 21.5044 3.03409 18.8071C1.24834 16.1101 0.355469 13.6559 0.355469 11.4444C0.355469 8.27112 1.38872 5.65375 3.45522 3.59225C5.52147 1.53075 8.03634 0.5 10.9998 0.5C13.9633 0.5 16.4782 1.53075 18.5445 3.59225C20.611 5.65375 21.6442 8.27112 21.6442 11.4444C21.6442 13.6559 20.7513 16.1101 18.9656 18.8071C17.1801 21.5044 14.5248 24.4116 10.9998 27.5289Z" fill="#F9FBF9" filter="url(#shadow)"/>
            <path d="M17.6865 18.0282C16.048 20.5657 13.8191 23.0615 10.9998 25.5155C8.18059 23.0615 5.95172 20.5657 4.31322 18.0282C2.67472 15.4907 1.85547 13.2961 1.85547 11.4444C1.85547 8.70012 2.72422 6.43513 4.46172 4.64938C6.19922 2.86388 8.37859 2 10.9998 2C13.6211 2 15.8005 2.86388 17.538 4.64938C19.2755 6.43513 20.1442 8.70012 20.1442 11.4444C20.1442 13.2961 19.325 15.4907 17.6865 18.0282Z" fill="#6F8C6E" filter="url(#shadow)"/>
        </svg>`;
    return svgIcon;
}

let placeDetailsCache = {};
let currentInfoDiv = null;

function showPlaceInfo(map, marker, placeId) {
    if (currentInfoDiv) {
        currentInfoDiv.style.display = 'none'; // Ocultar el div actual
    }

    if (placeDetailsCache[placeId]) {
        displayPlaceDetails(marker, placeDetailsCache[placeId]);
    } else {
        const service = new google.maps.places.PlacesService(map);
        service.getDetails({ placeId: placeId }, (placeResult, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                placeDetailsCache[placeId] = placeResult; // Cachear los resultados
                displayPlaceDetails(marker, placeResult);
            } else {
                console.error('Error fetching place details:', status);
                if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
                    alert("Límite de consultas excedido. Inténtelo más tarde.");
                }
            }
        });
    }
}

function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '…';
    }
    return text;
}

function displayPlaceDetails(marker, place) {
    // Cerrar el div anterior si está abierto
    if (currentInfoDiv) {
        currentInfoDiv.style.display = 'none';
    }

    const placeInfoDiv = document.createElement('div');
    placeInfoDiv.className = 'place-info-div';
    placeInfoDiv.style.display = 'block'; // Mostrar al abrir

    // Truncar la dirección a un máximo de 100 caracteres
    const truncatedAddress = truncateText(place.formatted_address || 'N/A', 100);

    // Construir el contenido del div de información del lugar
    placeInfoDiv.innerHTML = `
        <div class="place-info-content">
        ${place.photos ? `<img src="${place.photos[0].getUrl({maxWidth: 600, maxHeight: 600})}" alt="${place.name}" />` : ''}  
        <div class="place-info-text">
            <h1>${place.name || 'N/A'}</h1>
            <p>${truncatedAddress}</p>
        </div>
        </div>
    `;

    marker.content.appendChild(placeInfoDiv);
    currentInfoDiv = placeInfoDiv; // Guardar el div actual

    // Centrar el mapa en el marcador
   // map.setCenter(marker.position);
}

function loadPOI(map) {
    var center = map.getCenter();
    var service = new google.maps.places.PlacesService(map);
    var request = {
        location: center,
        radius: '5000',
        type: ['supermarket']
    };

    service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            clearPOIMarkers();
            results.forEach(place => createPOIMarker(place, map));
        } else if (status === google.maps.places.PlacesServiceStatus.OVER_QUERY_LIMIT) {
            console.error('Límite de consultas excedido.');
        }
    });
}

let poiMarkers = [];

function createPOIMarker(place, map) {
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-POI';

    const svgIcon = document.createElement('div');
    svgIcon.className = 'POI-icon';
    svgIcon.innerHTML = '<img src="img/supermarket.svg" width="9" height="8.03" alt="Supermarket Icon">';

    const textElement = document.createElement('h1');
    textElement.className = 'POI-text';
    textElement.textContent = place.name;

    markerElement.appendChild(svgIcon);
    markerElement.appendChild(textElement);

    const advancedMarker = new google.maps.marker.AdvancedMarkerElement({
        position: place.geometry.location,
        content: markerElement,
        gmpClickable: true,
    });
    advancedMarker.map = map;

    advancedMarker.addListener("click", () => {
        showPlaceInfo(map, advancedMarker, place.place_id);
    });

    poiMarkers.push(advancedMarker);
}

function clearPOIMarkers() {
    poiMarkers.forEach(marker => marker.map = null);
    poiMarkers = [];
}

window.initMap = initMap;
