import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './crud-superherois/pagina.inicial/pagina.inicial.component';
import { DadosHeroisComponent } from './crud-superherois/dados.herois/dados.herois.component';
import { EditarHeroiComponent } from './crud-superherois/dados.herois/editar.heroi/editar.heroi.component';

const routes: Routes = [
    { path: '', component: PaginaInicialComponent, data: { title: 'Super-Heróis!'}},
    { path: 'dados-heroi', component: DadosHeroisComponent, data: { title: 'Dados do Herói'}},
    { path: 'editar-heroi/:id/:nome/:nomeHeroi/:dataNascimento/:altura/:peso/:superpoderes', component: EditarHeroiComponent, data: { title: 'Editar super-herói'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
