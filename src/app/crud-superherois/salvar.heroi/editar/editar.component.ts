import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Heroi } from '../../../models/heroi';
import { Observable } from 'rxjs';
import { Superpoder } from '../../../models/superpoder';
import { ActivatedRoute } from '@angular/router';
import { PoderesService } from '../../../services/poderes.service';
import { HeroisService } from '../../../services/herois.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit {
  id: number = 0;
  heroiForm = {} as FormGroup;
  heroi = {} as Heroi;
  superpoderes: Observable<Superpoder[]> | undefined;
  poderesSelecionados: Superpoder[] = [];
  isChecked: boolean = false;

  constructor(
    private heroiService: HeroisService,
    private superpoderService: PoderesService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.heroi.nome = params['nome'];
      this.heroi.nomeHeroi = params['nomeHeroi'];
      this.heroi.dataNascimento = params['dataNascimento'];
      this.heroi.altura = params['altura'];
      this.heroi.peso = params['peso'];
      this.heroi.superpoderes = params['superpoderes'];
    });

    this.heroiForm = this.formBuilder.group({
      id: this.id,
      nome: '',
      nomeHeroi: '',
      dataNascimento: '',
      altura: '',
      peso: '',
      superpoderes: [],
      isChecked: [false]
    });
  }

  listarSuperpoderes() {
    this.superpoderes = this.superpoderService.listarSuperPoderes();
  }

  consultarHeroi() {
    this.heroiService.consultarHeroi(this.id).subscribe(
      (response) => {
        this.heroi = response;
      },
      (error) => {
        console.log("Erro");
      }
    );
    console.log(this.heroi);
  }

  ngOnInit(): void {
      this.consultarHeroi();
      this.listarSuperpoderes();
  }

  atualizarHeroi(id: number, heroi: Heroi) {
    this.heroiService.editarHeroi(id, heroi);
  }

  onSubmit(): void {
    const heroi = this.heroiForm.value;
    const id = this.id;
    this.atualizarHeroi(id, heroi);
  }

  adicionarPoder(poder: Superpoder): void {
    this.poderesSelecionados.push(poder);
  }
}
