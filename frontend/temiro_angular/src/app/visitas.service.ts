import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VisitasService {

  private apiUrl = 'http://localhost:8000/webapi/visitas/'; // URL del endpoint en Django

  constructor(private http: HttpClient) { }

  obtenerContadorVisitas(): Observable<number> {
    return this.http.get<number>(this.apiUrl);
  }

  incrementarContadorVisitas(): Observable<any> {
    // Ajustar según cómo hayas implementado tu backend
    return this.http.post<any>(`${this.apiUrl}/incrementar`, {});
  }

}
