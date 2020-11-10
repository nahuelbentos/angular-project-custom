import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UsuarioSesion } from '../models/usuario-sesion.model';

@Injectable({
  providedIn: 'root',
})
export class AutenticacionService {
  baseUrl = `${environment.baseUrl}/auth`;

  constructor(private http: HttpClient) {}

  login = (email: string, password: string) => this.http.post<UsuarioSesion>(`${this.baseUrl}/login`, { email, password });
}
