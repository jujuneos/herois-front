import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Heroi } from '../../../models/heroi';
import { Superpoder } from '../../../models/superpoder';
import { HeroiService } from '../../../services/heroi.service';
import { SuperpoderService } from '../../../services/superpoder.service';
import { PaginaInicialComponent } from '../../pagina.inicial/pagina.inicial.component';

@Component({
  selector: 'app-editar.heroi',
  templateUrl: './editar.heroi.component.html',
  styleUrl: './editar.heroi.component.css'
})
export class EditarHeroiComponent {
  id: number = 0;
  heroiForm: FormGroup;
  heroi = {} as Heroi;
  paginaInicial = {} as PaginaInicialComponent;
  superpoderes: Observable<Superpoder[]> | undefined;
  poderesSelecionados: Superpoder[] = [];

  constructor(
    private heroiService: HeroiService,
    private superpoderService: SuperpoderService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.heroi.nome = params['nome'];
      this.heroi.nomeHeroi = params['nomeHeroi'];
      this.heroi.dataNascimento = params['dataNascimento'];
      this.heroi.altura = params['altura'];
      this.heroi.peso = params['peso'];
      this.heroi.superpoderes = params['poderesSelecionados'];
    })

    this.heroiForm = this.formBuilder.group({
      id: this.id,
      nome: '',
      nomeHeroi: '',
      dataNascimento: '',
      altura: '',
      peso: '',
      superpoderes: []
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
    const id = this.id;
    this.atualizarHeroi(id, heroi);
  }

  atualizarHeroi(id: number, heroi: Heroi) {
    this.heroiService.editarHeroi(id, heroi);
  }
}
