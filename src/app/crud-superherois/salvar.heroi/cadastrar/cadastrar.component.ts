import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroi } from '../../../models/heroi';
import { Observable } from 'rxjs';
import { Superpoder } from '../../../models/superpoder';
import { PoderesService } from '../../../services/poderes.service';
import { HeroisService } from '../../../services/herois.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent implements OnInit {
  heroiForm = {} as FormGroup;
  heroi = {} as Heroi;
  superpoderes: Observable<Superpoder[]> | undefined;
  poderesSelecionados: Superpoder[] = [];
  isChecked: boolean = false;

  constructor(
    private heroiService: HeroisService,
    private poderesService: PoderesService,
    private formBuilder: FormBuilder) {
    this.heroiForm = this.formBuilder.group({
      nome: ['', Validators.required],
      nomeHeroi: ['', Validators.required],
      dataNascimento: '',
      altura: ['', Validators.required],
      peso: ['', Validators.required],
      superpoderes: [[], Validators.required]
    });
  };

  listarSuperpoderes() {
    this.poderesService.listarSuperPoderes();
  }

  ngOnInit(): void {
    this.listarSuperpoderes();
  }

  cadastrarHeroi(heroi: Heroi) {
    this.heroiService.cadastrarHeroi(heroi);
  }

  onSubmit(): void {
    const heroi = this.heroiForm.value;
    this.cadastrarHeroi(heroi);
  }

  adicionarPoder(poder: Superpoder): void {
    this.poderesSelecionados.push(poder);
  }
}
