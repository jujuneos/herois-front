import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { Heroi } from "../models/heroi";

@Injectable({
  providedIn: 'root'
})
export class HeroiService {
    url = 'https://localhost:7238/Herois';

    constructor(private httpClient: HttpClient, private router: Router) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    listarHerois(): Observable<Heroi[]> {
        return this.httpClient.get<Heroi[]>(this.url);
    }

    consultarHeroi(id: number): any {
        let parametro: String = id.toString();
        return this.httpClient.get<Heroi>(this.url + '/' + parametro, this.httpOptions);
    }

    cadastrarHeroi(heroi: Heroi): any {
        this.httpClient.post<Heroi>(this.url + '/CadastrarHeroi', heroi, this.httpOptions)
        .subscribe((res) => {
            this.router.navigate(['']);
            return alert("Herói cadastrado com sucesso!");
        }, (err) => {
            let erro = err.error;
            return alert(erro);
        });
    }

    editarHeroi(id: number, heroi: Heroi): any {
        let parametro: String = id.toString();
        this.httpClient.put<Heroi>(this.url + '/' + parametro, heroi, this.httpOptions)
        .subscribe((res) => {
            this.router.navigate(['']);
            return alert("Herói atualizado com sucesso!");
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