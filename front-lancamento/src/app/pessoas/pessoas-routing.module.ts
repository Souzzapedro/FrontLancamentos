import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPessoasComponent } from './form-pessoas/form-pessoas.component';
import { TabelaPessoasComponent } from './tabela-pessoas/tabela-pessoas.component';

const pessoasRoutes: Routes = [
  { path: '', component: TabelaPessoasComponent },
  { path: 'novo', component: FormPessoasComponent },
  { path: ':id/editar', component: FormPessoasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pessoasRoutes)],
  exports: [RouterModule],
})
export class PessoasRoutingModule { }
