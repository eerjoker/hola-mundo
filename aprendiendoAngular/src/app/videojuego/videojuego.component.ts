import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
	selector: 'videojuego', // para decir el nombre que va a tener la etiqueta del componente en html
	// para definir una plantilla en línea se usa template
	/*template: `
		<h2>Componente de Videojuegos</h2>
		<ul>
			<li>Mario</li>
			<li>Legend of Zelda</li>
			<li>GTA</li>
			<li>Assassin's Creed</li>
		</ul>
	`*/
	// se puede definir en otro archivo
	templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
	// puedo definir propiedades
	public titulo: string;
	public listado: string;

	// el constructor es el primer método que se utiliza al cargar un objeto
	constructor (){
		this.titulo = "Componente de Videojuegos";
		this.listado = "Listado de los juegos más populares";
		console.log("Se ha cargado el componente videojuego.component.ts")
	}

	ngOnInit(){
		//console.log("OnInit ejecutado!")
	}// este hook se ejecuta al cargar el componente

	ngDoCheck(){
		//console.log("DoCheck ejecutado")
	}// se ejecuta cada vez que hay un cambio en el componente o en la aplicación de angular

	ngOnDestroy(){
		//console.log("OnDestroy ejecutado")
	}// se ejectua antes de eliminar el componente

	cambiarTitulo(){
		this.titulo = "Nuevo titulo del componente"
	}

}