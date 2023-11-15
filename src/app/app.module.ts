import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { PaginaInicialComponent } from "./crud-superherois/pagina.inicial/pagina.inicial.component";
import { DadosHeroisComponent } from "./crud-superherois/dados.herois/dados.herois.component";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { EditarHeroiComponent } from "./crud-superherois/dados.herois/editar.heroi/editar.heroi.component";
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        PaginaInicialComponent,
        DadosHeroisComponent,
        EditarHeroiComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
