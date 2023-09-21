import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPesquisaLancamentosComponent } from './form-pesquisa-lancamentos/form-pesquisa-lancamentos.component';
import { FormLancamentosComponent } from './form-lancamentos/form-lancamentos.component';

const lancamentosRoutes: Routes = [
  { path: '', component: FormPesquisaLancamentosComponent },
  { path: 'novo', component: FormLancamentosComponent },
  { path: ':id/editar', component: FormLancamentosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(lancamentosRoutes)],
  exports: [RouterModule],
})
export class LancamentosRoutingModule {}
