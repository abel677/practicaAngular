import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteI } from 'src/app/interface/paciente-i';

import { PacienteService } from 'src/app/servicios/paciente.service';


@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrls: ['./form-paciente.component.css']
})
export class FormPacienteComponent implements OnInit {

  titulo = "Formulario registro de personas";
  formPersona:FormGroup;

  // @Output() getForm = new EventEmitter<PacienteI>();

  constructor
  (
    public formBuilder:FormBuilder,public pacienteService:PacienteService
  ) 
  {
    this.formPersona = formBuilder.group({
      nombre:    ['',[Validators.required]],
      apellido:  ['',[Validators.required]],
      cedula:    ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      telefono:  ['',[Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      direccion: ['',[Validators.required]],
      correo:    ['',[Validators.required, Validators.email]],
      estado:    [true]
    });
  }
  agregarPersona(form:PacienteI){

    if(this.formPersona.valid){
            
      this.pacienteService.addPaciente(form);
    }else{
     this.formPersona.markAllAsTouched();
    }
  }

  ngOnInit(): void {
  
  }

}
