import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private geolocation: Geolocation) { }

  getCurrentLocation() {
    return this.geolocation.getCurrentPosition();
  }

  getGoogleMapsUrl(latitude: number, longitude: number) {
    return `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=15&size=300x300&key=${environment.googleMapsApiKey}`;
  }

  getGoogleDirectionsUrl(startLat: number, startLng: number, endLat: number, endLng: number) {
    return `https://www.google.com/maps/dir/?api=1&origin=${startLat},${startLng}&destination=${endLat},${endLng}&travelmode=driving`;
  }
}
