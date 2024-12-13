import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private baseUrl = 'http://localhost:3000';
  private headers = new HttpHeaders({
    'uuid': '4bqEZhs1coUOnP7ue34BqudCW7i1'
  });

  constructor(private http: HttpClient) {}

  // GET: Traer todos los registros de un recurso
  getAll(resource: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${resource}`, { headers: this.headers });
  }

  // GET: Traer un registro por ID
  getById(resource: string, id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${resource}/${id}`, { headers: this.headers });
  }
}
