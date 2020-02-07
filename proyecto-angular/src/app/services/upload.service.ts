import { Injectable } from '@angular/core';
import { Global } from './global';

@Injectable()
export class UploadService{
	public url: string;

	constructor(){
		this.url = Global.url;
	}

	makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){
		return new Promise(function(resolve, reject){
			var formData:any = new FormData();
			var xhr = new XMLHttpRequest(); //xhr es un sinónimo de ajax.
			//XMLHttpRequest para hacer peticiones asíncronas en js.
			
			for(var i = 0; i < files.length; i++){
				formData.append(name, files[i], files[i].name); //para los ficheros que llegan, añade al formulario el nombre, el archivo y el nombre del archivo.
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(xhr.status == 200){
						resolve(JSON.parse(xhr.response));
					}else{
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', url, true);
			xhr.send(formData);
		});
	}
}