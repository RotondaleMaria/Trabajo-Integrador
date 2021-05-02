import { Injectable } from '@angular/core';
import {Libro} from '../modelos/libro'

@Injectable({
  providedIn: 'root'
})
export class LibroService {
  ListadoLibro : Libro[]=[
    {id:100, titulo:"Cuando comen los leones" , autor:"Wilbur Smith", editorial:"Emece",genero:"Novela", stock:true},
    {id:200, titulo:"Costa ardiente" , autor:"Wilbur Smith", editorial:"Emece",genero:"Novela", stock:false },
    {id:300, titulo:"Harry Potter y la Piedra Filosofal" , autor:"JK Rowling", editorial:"Salamandra",genero:"Literatura fantástica", stock:true },
    {id:400, titulo:"Harry Potter y la Cámara Secreta " , autor:"JK Rowling", editorial:"Salamandra",genero:"Literatura fantástica", stock:true },
    {id:500, titulo:"El caballero de la armadura oxidada" , autor:"Robert Fisher", editorial:"Ediciones Obelisco",genero:"Ficcion", stock:false },
    {id:600, titulo:"Don Quijote de la Mancha" , autor:"Miguel de Cervantes", editorial:"Francisco de Robles",genero:"Fantasía romántica" , stock:true},
    {id:700, titulo:"El Hobbit" , autor:"J.R.R. Tolkien", editorial:"Planeta",genero:"Literatura fantástica", stock:true },
    {id:800, titulo:"Orgullo y Prejuicio" , autor:"Jane Austen", editorial:"Planeta",genero:"Drama",stock:false }
  ]

  constructor() { }

  MostrarTodos():Libro[] {
      return this.ListadoLibro.slice();
  }

  Editar(libro:Libro) {
  // console.log("Modificar libro: " + libro.titulo + " " + libro.autor);
  //   var indice= this.ListadoLibro.findIndex(x=> x.id === libro.id);
  //   this.ListadoLibro[indice]=libro;
  }

  Buscar(librId:number):Libro{
    librId = + librId;
    return this.ListadoLibro.find(x=> x.id === librId);{
      
    }
  }
}
