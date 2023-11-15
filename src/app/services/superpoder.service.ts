import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from 'express';
import { Superpoder } from '../models/superpoder';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SuperpoderService {
    url = 'https://localhost:7238/SuperPoderes';

    constructor(private httpClient: HttpClient, private router: Router) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }

    listarSuperPoderes(): Observable<Superpoder[]> {
        return this.httpClient.get<Superpoder[]>(this.url);
    }
}