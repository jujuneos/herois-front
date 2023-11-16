import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './crud-superherois/pagina.inicial/pagina.inicial.component';
import { CadastrarComponent } from './crud-superherois/salvar.heroi/cadastrar/cadastrar.component';
import { EditarComponent } from './crud-superherois/salvar.heroi/editar/editar.component';

const routes: Routes = [
    { path: '', component: PaginaInicialComponent, data: { title: 'Super-Heróis'}},
    { path: 'dados-heroi', component: CadastrarComponent, data: { title: 'Cadastrar Herói'}},
    { path: 'editar-heroi/:id/:nome/:nomeHeroi/:dataNascimento/:altura/:peso/:superpoderes', component: EditarComponent, data: { title: 'Editar super-herói'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
