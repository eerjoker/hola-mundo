import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursosComponent } from './cursos/cursos.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursosComponent,
    HomeComponent
  ], // carga componentes, pipes, directivas
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ], // carga los modulos
  providers: [
    appRoutingProviders
  ], //carga servicios
  bootstrap: [AppComponent] // carga el componente principal
})
export class AppModule { }
