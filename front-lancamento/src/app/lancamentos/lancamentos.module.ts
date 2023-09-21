import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormPesquisaLancamentosComponent } from './form-pesquisa-lancamentos/form-pesquisa-lancamentos.component';
import { FormLancamentosComponent } from './form-lancamentos/form-lancamentos.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { LancamentosRoutingModule } from './lancamentos-routing.module';
import { TabelaLancamentosComponent } from './tabela-lancamentos/tabela-lancamentos.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    FormPesquisaLancamentosComponent,
    TabelaLancamentosComponent,
    FormLancamentosComponent
  ],
  imports: [
    CommonModule,
    TooltipModule.forRoot(),
    LancamentosRoutingModule,
    CurrencyMaskModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CalendarModule
  ]
})
export class LancamentosModule { }
