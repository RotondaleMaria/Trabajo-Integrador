import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Libro} from '../../modelos/libro';
import {LibroService} from '../../servicios/libro.service';
import {ActivatedRoute,Router} from '@angular/router';
///import { Console } from 'console';



@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css']
})
export class FormularioLibroComponent implements OnInit {
  formLibro:FormGroup;

  constructor(private LibroServ:LibroService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.formLibro =this.fb.group(
      {
        id:['', [Validators.minLength(2)]],
        titulo:['', [Validators.required]],
        autor:['', [Validators.required]],
        editorial:['', [Validators.required]],
        genero:'',
      }
    );
  }

  GuardarLibro(){
    let libro:Libro = Object.assign({}, this.formLibro.value);
    console.log(libro.titulo);
  }
}
