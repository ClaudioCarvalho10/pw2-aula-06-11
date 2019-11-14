import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditarProjetoComponent } from './editar-projeto/editar-projeto.component';
import { ListaProjetosComponent } from './lista-projetos/lista-projetos.component';
import { NovoProjetoComponent } from './novo-projeto/novo-projeto.component';
import { DetalheProjetoComponent } from './detalhe-projeto/detalhe-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    EditarProjetoComponent,
    ListaProjetosComponent,
    NovoProjetoComponent,
    DetalheProjetoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

