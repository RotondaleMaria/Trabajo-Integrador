import { Component, OnInit } from '@angular/core';
import {Libreria} from '../modelos/libreria';
import {LibreriaService} from '../servicios/libreria.service'

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css']
})
export class LibreriaComponent implements OnInit {

  public ListadoLibreria: Libreria[];
  public UnaLibreria:Libreria;
  public campobuscado:string;

  constructor(private servicioLibreria:LibreriaService) { }

  ngOnInit() {
    
    this.ListadoLibreria=this.servicioLibreria.MostrarTodos();
  }

  Borrar(libreriaId:number) {
    this.servicioLibreria.BorrarLibreria(libreriaId);
    this.ListadoLibreria= this.servicioLibreria.MostrarTodos();
  }

  verificarEstado(libreriaId:number) {
    var libreria:Libreria;
    libreria = this.servicioLibreria.Buscar(libreriaId);
    if(libreria.descuento){
      alert("La libreria tiene descuentos");
    }
    else{
      alert("La libreria no tiene descuentos")
    }
  }
  EstaCerrado(horario: string) : void {

    var apertura:number = parseInt((horario.split('a')[0]).trim());
    var cierre:number = parseInt((horario.split('a')[1]).trim());
  
    var fechayhora:Date = new Date()
    var horaActual:number = fechayhora.getHours()
  
      if(horaActual>= cierre || horaActual< apertura){
          alert('Esta cerrado')
    }else{
      alert('Esta abierto')
    }
    }

    BuscarLibreria(){
      this.ListadoLibreria=this.servicioLibreria.BuscarPorNombre(this.campobuscado);


    }
}
