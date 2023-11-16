import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { PaginaInicialComponent } from "./crud-superherois/pagina.inicial/pagina.inicial.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { CadastrarComponent } from './crud-superherois/salvar.heroi/cadastrar/cadastrar.component';
import { EditarComponent } from './crud-superherois/salvar.heroi/editar/editar.component';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PaginaInicialComponent,
        CadastrarComponent,
        EditarComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
