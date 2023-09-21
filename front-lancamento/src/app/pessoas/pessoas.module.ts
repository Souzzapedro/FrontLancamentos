import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaPessoasComponent } from './tabela-pessoas/tabela-pessoas.component';
import { FormPessoasComponent } from './form-pessoas/form-pessoas.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PessoasRoutingModule } from './pessoas-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    TabelaPessoasComponent,
    FormPessoasComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    PessoasRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PessoasModule { }
