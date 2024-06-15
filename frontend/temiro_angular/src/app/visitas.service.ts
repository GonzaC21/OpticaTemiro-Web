import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  constructor() { }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  private apiUrl = 'http://tu-backend/api/contador-visitas'; // Reemplaza con tu URL del backend

  constructor(private http: HttpClient) { }

  obtenerContadorVisitas(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }

  incrementarContadorVisitas(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/incrementar`, {});
  }

}
