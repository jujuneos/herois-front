import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Heroi } from '../../../models/heroi';
import { Observable } from 'rxjs';
import { Superpoder } from '../../../models/superpoder';
import { PoderesService } from '../../../services/poderes.service';
import { HeroisService } from '../../../services/herois.service';
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent implements OnInit {
  mostrarMensagemSucesso = false;
  mostrarMensagemErro = false;
  mensagem = '';
  heroiForm = {} as FormGroup;
  heroi = {} as Heroi;
  superpoderes: Superpoder[] = [];
  poderesSelecionados: Superpoder[] = [];

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
      superpoderes: [[], Validators.required],
      isChecked: [false]
    });
  };

  listarSuperpoderes() {
    this.poderesService.listarSuperPoderes().subscribe(data => {
      this.superpoderes = data;
    });
  }

  ngOnInit(): void {
    this.listarSuperpoderes();
  }

  cadastrarHeroi(heroi: Heroi) {
    this.heroiService.cadastrarHeroi(heroi).subscribe(
      (response) => {
        this.mostrarMensagemSucesso = true;
        this.mensagem = "Herói cadastrado com sucesso!";
        setTimeout(() => {
          this.mostrarMensagemSucesso = false;
        }, 3000);
      },
      (error) => {
        this.mostrarMensagemErro = true;
        setTimeout(() => {
          this.mostrarMensagemErro = false;
        }, 3000);
        if (error.status === 404)
          this.mensagem = "Recurso não encontrado.";
        else if (error.status === 500)
          this.mensagem = "Erro interno do servidor.";
        else if (error.status === 400)
          this.mensagem = "Herói já cadastrado.";
      }
    )
  }

  onSubmit(): void {
    const heroi = this.heroiForm.value;
    this.cadastrarHeroi(heroi);
  }

  adicionarPoder(poder: Superpoder): void {
    this.poderesSelecionados.push(poder);
  }
}
