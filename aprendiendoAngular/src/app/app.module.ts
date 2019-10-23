import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent
  ], // carga componentes, pipes, directivas
  imports: [
    BrowserModule,
    FormsModule
  ], // carga los modulos
  providers: [], //carga servicios
  bootstrap: [AppComponent] // carga el componente principal
})
export class AppModule { }
