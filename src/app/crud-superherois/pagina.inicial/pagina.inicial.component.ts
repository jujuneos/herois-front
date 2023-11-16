import { Component, OnInit } from '@angular/core';
import { Heroi } from '../../models/heroi';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CadastrarComponent } from '../salvar.heroi/cadastrar/cadastrar.component';
import { HeroisService } from '../../services/herois.service';

@Component({
  selector: 'app-pagina.inicial',
  templateUrl: './pagina.inicial.component.html',
  styleUrl: './pagina.inicial.component.css'
})
export class PaginaInicialComponent implements OnInit {
  heroi = {} as Heroi;
  herois: Observable<Heroi[]> | undefined;
  salvar = {} as CadastrarComponent;

  constructor(
    private heroiService: HeroisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarHerois();
  }

  listarHerois() {
    this.herois = this.heroiService.listarHerois();
  }

  editarHeroi(heroi: Heroi) {
    this.router.navigate([
      '/editar-heroi',
      heroi.id,
      heroi.nome,
      heroi.nomeHeroi,
      heroi.dataNascimento,
      heroi.altura,
      heroi.peso,
      heroi.superpoderes
    ]);
  }

  deletarHeroi(heroi: Heroi) {
    if (confirm("Deseja excluir o herói " + heroi.nomeHeroi + "?")) {
      this.heroiService.deletarHeroi(heroi.id).subscribe(() => {
        this.listarHerois();
        alert("Herói deletado com sucesso.");
      })
    }
  }

  mostrarPoderes(heroi: Heroi): void {
    heroi.mostrarPoderes = !heroi.mostrarPoderes;
  }
}
