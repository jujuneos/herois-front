import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Heroi } from '../models/heroi';

@Injectable({
  providedIn: 'root'
})
export class HeroisService {
  mostrarMensagem = true;
  private url = 'https://localhost:7050/SuperHerois';

  constructor(private httpClient: HttpClient, private router: Router) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
  }

  listarHerois(): Observable<Heroi[]> {
      return this.httpClient.get<Heroi[]>(this.url + '/listar');
  }

  consultarHeroi(id: number): Observable<any> {
      let parametro: String = id.toString();
      return this.httpClient.get<any>(this.url + '/' + parametro, this.httpOptions);
  }

  cadastrarHeroi(heroi: Heroi): Observable<any> {
      return this.httpClient.post<Heroi>(this.url + '/CadastrarHeroi', heroi, this.httpOptions);
  }

  editarHeroi(id: number, heroi: Heroi): any {
      let parametro: String = id.toString();
      this.httpClient.put<Heroi>(this.url + '/' + parametro, heroi, this.httpOptions)
      .subscribe((res) => {
        this.mostrarMensagem = true;
        setTimeout(() => {
          this.mostrarMensagem = false;
        }, 3000);
          this.router.navigate(['']);
      }, (err) => {
          let erro = err.error;
          return alert(erro);
      });
  }

  deletarHeroi(id: number): Observable<number> {
      let parametro: String = id.toString();
      return this.httpClient.delete<number>(this.url + '/' + parametro, this.httpOptions);
  }
}
