import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { delay, take } from 'rxjs';

import * as moment from 'moment';

export interface LancamentoFiltro {
  descricao: string;
  dataVencimentoDe: Date;
  dataVencimentoAte: Date;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentosService implements OnInit{

  private API = "http://localhost:8080";

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getLancamentos(filtro: any) {
    let params = new HttpParams();

    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao);
    }
    if(filtro.dataVencimentoDe) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoDe).format("YYYY-MM-DD"));
    }
    if(filtro.dataVencimentoAte) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoAte).format("YYYY-MM-DD"));
    }

    console.log(params);

    return this.http.get<any>(`${this.API}/lancamentos`, { params: params } )
      .pipe(take(1), delay(700));
  }



  getLancamentoById(id: number) {
    return this.http.get<any>(`${this.API}/lancamentos/${id}`);
  }
  getCategorias() {
    return this.http.get<any[]>(`${this.API}/categorias`);
  }
  getPessoas() {
    return this.http.get<any[]>(`${this.API}/pessoas`);
  }
  delete(id: number) {
    return this.http.delete(`${this.API}/lancamentos/${id}`);
  }

  private createLancamento(lancamento: any) {
    return this.http.post(`${this.API}/lancamentos`, lancamento);
  }
  private updateLancamento(lancamento: any) {
    return this.http.put(`${this.API}/lancamentos/${lancamento.id}`, lancamento);
  }
  save(lancamento: any) {
    if(lancamento.id) {
      return this.updateLancamento(lancamento);
    }else {
      return this.createLancamento(lancamento);
    }
  }
}
