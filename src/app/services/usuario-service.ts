import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenResponse } from '../models/TokenResponse';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  apiUrl = "http://localhost:3000/usuario"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) {}

  public generateToken(cpf:number, senha:string): Observable<TokenResponse>{
    return this.httpClient.post<TokenResponse>(this.apiUrl + "/login", {
      cpf,
      senha
    })
  }
}


