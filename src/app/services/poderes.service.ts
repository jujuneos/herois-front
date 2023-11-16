import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Superpoder } from '../models/superpoder';

@Injectable({
  providedIn: 'root'
})
export class PoderesService {
  private url = 'https://localhost:7238/SuperPoderes';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  listarSuperPoderes(): Observable<Superpoder[]> {
      return this.httpClient.get<Superpoder[]>(this.url + '/listar');
  }
}
