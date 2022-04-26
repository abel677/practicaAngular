import { Component, Input, OnInit } from '@angular/core';
import { PacienteI } from 'src/app/interface/paciente-i';
import { PacienteService } from 'src/app/servicios/paciente.service';


@Component({
  selector: 'app-lista-paciente',
  templateUrl: './lista-paciente.component.html',
  styleUrls: ['./lista-paciente.component.css']
})
export class ListaPacienteComponent implements OnInit {

  titulo = "Listado de personas"
  listaPacientes:PacienteI[] = [];



  constructor(public pacienteService:PacienteService) { }

  ngOnInit(): void {

    this.pacienteService.allPaciente().subscribe(
      (paciente:PacienteI[])=>{
        this.listaPacientes = paciente;
        this.pacienteService.setPacientes(this.listaPacientes);
      }
    );
  }
  editarPaciente(index:number,form:PacienteI){
    this.pacienteService.updatepacientes(index,form);
    console.log(form);     
  }
 
 
}
