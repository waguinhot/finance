import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './componentes/Investimento/listagem/listagem.component';
import { RegisterComponent } from './componentes/Investimento/register/register.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full' , redirectTo: 'investimentos'
  },
  {
    path: 'investimentos', component: ListagemComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
