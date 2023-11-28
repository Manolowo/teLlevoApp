import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl='assets/js/data.json';
  data: any;

  constructor(private http: HttpClient) { }
  getConductores(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
}
