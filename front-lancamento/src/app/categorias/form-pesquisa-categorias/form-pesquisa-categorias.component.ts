import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-form-pesquisa-categorias',
  templateUrl: './form-pesquisa-categorias.component.html',
  styleUrls: ['./form-pesquisa-categorias.component.scss']
})
export class FormPesquisaCategoriasComponent implements OnInit{

  categorias: any[] | undefined;
  nome: string = '';  

  constructor(
    private service: CategoriaService,
    private alertModal: AlertModalService
  ) { }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.categorias = undefined; // Faz com que o gif de carregamento aparece até a queryb ser concluída.

    if(this.nome === null || this.nome === "") {
      this.service.listar().subscribe(
        resposta => {
          this.categorias = resposta;
        },
        (error) => {
          this.alertModal.showAlertDanger("Erro ao buscar categorias.");
          console.error('Erro ao buscar categorias: ', error);
        }
      );
    }else {
      this.service.getCategoriasNome(this.nome).subscribe(
        resposta => {
          this.categorias = resposta;
        },
        error => {
          this.alertModal.showAlertDanger("Erro ao buscar categorias.");
          console.error('Erro ao buscar categorias: ', error);
        }
      );
    }
  }
}
