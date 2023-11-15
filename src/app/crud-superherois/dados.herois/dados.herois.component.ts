import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroi } from '../../models/heroi';
import { PaginaInicialComponent } from '../pagina.inicial/pagina.inicial.component';
import { Observable } from 'rxjs';
import { Superpoder } from '../../models/superpoder';
import { HeroiService } from '../../services/heroi.service';
import { SuperpoderService } from '../../services/superpoder.service';

@Component({
  selector: 'app-dados.herois',
  templateUrl: './dados.herois.component.html',
  styleUrl: './dados.herois.component.css'
})
export class DadosHeroisComponent implements OnInit {
  heroiForm: FormGroup;
  heroi = {} as Heroi;
  paginaInicial = {} as PaginaInicialComponent;
  superpoderes: Observable<Superpoder[]> | undefined;
  poderesSelecionados: Superpoder[] = [];

  constructor(
    private heroiService: HeroiService,
    private superpoderService: SuperpoderService,
    private formBuilder: FormBuilder,
  ) {
    this.heroiForm = this.formBuilder.group({
      nome: ['', Validators.required],
      nomeHeroi: ['', Validators.required],
      dataNascimento: '',
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      superpoderes: [[], Validators.required]
    });
  }

  listarSuperpoderes() {
    this.superpoderes = this.superpoderService.listarSuperPoderes();
  }

  ngOnInit(): void {
      this.listarSuperpoderes();
  }

  onSubmit(): void {
    const heroi = this.heroiForm.value;
    this.cadastrarHeroi(heroi);
  }

  cadastrarHeroi(heroi: Heroi) {
    this.heroiService.cadastrarHeroi(heroi);
  }
}
