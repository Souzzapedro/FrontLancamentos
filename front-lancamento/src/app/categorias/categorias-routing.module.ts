import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormPesquisaCategoriasComponent } from './form-pesquisa-categorias/form-pesquisa-categorias.component';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';

const categoriasRoutes: Routes = [
  { path: '', component: FormPesquisaCategoriasComponent},
  { path: 'novo', component: FormCategoriasComponent},
  { path: ':id/editar', component: FormCategoriasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(categoriasRoutes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
