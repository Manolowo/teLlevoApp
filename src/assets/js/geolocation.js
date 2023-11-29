function mostrarUbicacionJS(latitud, longitud) {
  // Obtener la ubicación actual
  navigator.geolocation.getCurrentPosition(function (position) {
      const currentLat = position.coords.latitude;
      const currentLng = position.coords.longitude;

      // Mostrar el modal al hacer clic en el botón
      document.getElementById('map-modal-container').removeAttribute('hidden');

      const myLatlng = new google.maps.LatLng(latitud, longitud);

      const mapOptions = {
          center: myLatlng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
      };

      const map = new google.maps.Map(document.getElementById('map-modal'), mapOptions);

      // Crear marcador para la ubicación del conductor
      const driverMarker = new google.maps.Marker({
          position: myLatlng,
          map: map,
          title: 'Destino',
      });

      // Crear marcador para la ubicación actual
      const currentLocationMarker = new google.maps.Marker({
          position: new google.maps.LatLng(currentLat, currentLng),
          map: map,
          title: 'Ubicación Actual',
      });

      // Obtener la información de la ruta
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer({ map: map });

      const request = {
          origin: new google.maps.LatLng(currentLat, currentLng),
          destination: myLatlng,
          travelMode: google.maps.TravelMode.DRIVING,
      };

      directionsService.route(request, function (response, status) {
          if (status == google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(response);
          } else {
              console.error('Error al obtener la ruta:', status);
          }
      });
  });
}
