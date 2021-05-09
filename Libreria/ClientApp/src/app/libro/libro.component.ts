import { Component, OnInit } from '@angular/core';
import {Libro} from '../modelos/libro';
import {LibroService} from '../servicios/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  ListadoLibro: Libro[];
  Titulo:string="Listado de libros";
  // ingreso:string= "ingresar texto en este input";
  // textoingresado:string;

  

  constructor(private servicioLibro:LibroService) { }

  ngOnInit() {
    this.ListadoLibro=this.servicioLibro.MostrarTodos();
  }

  //muestra el mensaje si tiene o no stock.
  MostrarMensaje(librId:number){
    var libro:Libro;
    libro = this.servicioLibro.Buscar(librId);
    if(libro.stock){
      alert("El libro tiene stock");
    }
    else{
      alert("El libro no tiene stock");
    }
  }

  Editar(libro:Libro) {
    var indice= this.ListadoLibro.findIndex(x=> x.id === libro.id);
    this.ListadoLibro[indice]=libro;
    }

}
