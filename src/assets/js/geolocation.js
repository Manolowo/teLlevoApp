function mostrarUbicacionJS(latitud, longitud, cerrarMapa) {
    // Mostrar el modal al hacer clic en el botón
    document.getElementById('map-modal-container').removeAttribute('hidden');
  
    const myLatlng = new google.maps.LatLng(latitud, longitud);
  
    const mapOptions = {
      center: myLatlng,
      zoom: 20,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
  
    const map = new google.maps.Map(document.getElementById('map-modal'), mapOptions);
  
    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Destino',
    });
  
    // Agrega el evento para cerrar el mapa al hacer clic en el botón "Cerrar Mapa"
    document.getElementById('cerrar-mapa').addEventListener('click', cerrarMapa);
  }
  
  function cerrarMapa() {
    // Ocultar el modal al cerrar
    document.getElementById('map-modal-container').setAttribute('hidden', 'true');
  }
  