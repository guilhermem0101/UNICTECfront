import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadesService {

  private apiUrl = 'http://127.0.0.1:5000'; // URL da API de usuários

  constructor(private http: HttpClient) { }

  getGrade(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}${'/grade'}`);
  }
}
