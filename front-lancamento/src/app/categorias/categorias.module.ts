import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPesquisaCategoriasComponent } from './form-pesquisa-categorias/form-pesquisa-categorias.component';
import { FormCategoriasComponent } from './form-categorias/form-categorias.component';
import { TabelaCategoriasComponent } from './tabela-categorias/tabela-categorias.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { CategoriasRoutingModule } from './categorias-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FormPesquisaCategoriasComponent,
    FormCategoriasComponent,
    TabelaCategoriasComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    CategoriasRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class CategoriasModule { }
