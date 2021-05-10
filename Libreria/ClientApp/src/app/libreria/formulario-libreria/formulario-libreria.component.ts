import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Libreria, horario} from '../../modelos/libreria';
import {ActivatedRoute,Router} from '@angular/router';
import {LibreriaService} from '../../servicios/libreria.service';


@Component({
  selector: 'app-formulario-libreria',
  templateUrl: './formulario-libreria.component.html',
  styleUrls: ['./formulario-libreria.component.css']
})
export class FormularioLibreriaComponent implements OnInit {

  formLibreria:FormGroup;
  libreriaId :number;
  horarios:horario[];
  titulo:string;


  constructor(private fb:FormBuilder, 
              private LibreriaSrv:LibreriaService,
              private activatedRoute:ActivatedRoute,
              private router:Router,) { }

  ngOnInit() {

    this.formLibreria= this.fb.group({
      nombre:'',
      direccion:'',
      telefono:'',
      horario:'',
    });

    this.horarios=[
      {id:1, descripcion: "9 a 21"},
      {id:2, descripcion: "10 a 18"},
      {id:3, descripcion: "11 a 21"}
    ];

    this.activatedRoute.params.subscribe(
    params => {
      this.libreriaId= params['id'];
      console.log("Libreria Id: " + this.libreriaId);
      if(isNaN(this.libreriaId)){
        //no es numerico
        this.titulo="Ingresar nueva libreria";
        return;
      }
      else{
        //es numerico
        var libreria = this.LibreriaSrv.Buscar(this.libreriaId);
        this.titulo="Modificar los datos de la libreria: " + libreria.nombre + "" + libreria.direccion;
        //llenar el campo formulario
        this.formLibreria.patchValue({
          nombre:libreria.nombre,
          direccion:libreria.direccion,
          telefono:libreria.telefono,
          horario:libreria.horario ,
        });
      }
    }
  );
  }

  GuardarFormulario() {
    
    let libreria: Libreria=Object.assign({}, this.formLibreria.value);
    libreria.id= +this.libreriaId;
    // if (isNaN(this.libreriaId)){

      if(libreria.id>0){
        //editar
        this.LibreriaSrv.Editar(libreria);
      }
      else{
        //crear
        libreria.id = this.LibreriaSrv.CrearId()
        this.LibreriaSrv.Crear(libreria);
      }
      this.router.navigate(["/libreria"])
    }
  
  }

