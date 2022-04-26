import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacienteComponent } from './paginas/paciente/paciente.component';
import { PrincipalComponent } from './paginas/principal/principal.component';

const routes: Routes = 
[
  { path:'', pathMatch:'full', redirectTo:'principal'},
  { path:'principal', component:PrincipalComponent},
  { path:'registro-paciente', component:PacienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
