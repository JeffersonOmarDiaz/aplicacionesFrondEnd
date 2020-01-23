import { Component } from '@angular/core';

import {ConsumorestService} from './service/consumorest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo';

  //creamos un arreglo vacio

  categoria: any = [];
  //se procede a llamar el servicio en el constructor de la clase

  constructor(public rest:ConsumorestService){}

  //Para llamar al metodo y que se cargue
  //componente en el momento que secargue la pagina
  ngOnInit(){
    this.getCategorias();
  }

  //metodo para obtener las categorias del servicio
  getCategorias(){
    //referencia al array
    this.categoria= [];

    this.rest.getCategoriasRest().subscribe(d=>{
      console.log(d);
      this.categoria=d;
    });

  }
}
