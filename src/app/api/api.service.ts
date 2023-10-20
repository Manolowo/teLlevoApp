import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl='https://jsonplaceholder.typicode.com/users';
  data: any;

  constructor(private http: HttpClient) { }

  obtenerDatosApi() {
    return this.http.get(this.apiUrl).subscribe((response) => {
      this.data = response;
    });
  }
}
