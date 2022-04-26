import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './plantilla/header/header.component';
import { SidebarComponent } from './plantilla/sidebar/sidebar.component';
import { FooterComponent } from './plantilla/footer/footer.component';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { PacienteComponent } from './paginas/paciente/paciente.component';
import { FormPacienteComponent } from './paginas/paciente/form-paciente/form-paciente.component';
import { ListaPacienteComponent } from './paginas/paciente/lista-paciente/lista-paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataPacienteService } from './servicios/dataPaciente.service';
import { PacienteService } from './servicios/paciente.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PrincipalComponent,
    PacienteComponent,
    FormPacienteComponent,
    ListaPacienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataPacienteService,HttpClient,PacienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
