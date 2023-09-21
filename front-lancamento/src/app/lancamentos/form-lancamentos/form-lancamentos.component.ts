import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { LancamentosService } from 'src/app/lancamentos/lancamentos.service';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

import * as moment from 'moment';

@Component({
  selector: 'app-form-lancamentos',
  templateUrl: './form-lancamentos.component.html',
  styleUrls: ['./form-lancamentos.component.scss'],
})
export class FormLancamentosComponent implements OnInit {

  form!: FormGroup;
  categorias: any[] = [];
  pessoas: any[] = [];

  idEdit!: number;
  isEditRoute: boolean = false;
  lancamento: any;

  constructor(
    private service: LancamentosService,
    private formBuilder: FormBuilder,
    private alertService: AlertModalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.preencheComboCategorias();
    this.preencheComboPessoas();

    this.form = this.formBuilder.group({
      id: [null],
      dataVencimento: [null, Validators.required],
      dataPagamento: [null, Validators.required],
      descricao: [
        null,
        [
          Validators.required,
          Validators.maxLength(200),
          Validators.minLength(3),
        ],
      ],
      valor: [null, Validators.required],
      categoria: [null, Validators.required],
      pessoa: [null, Validators.required],
      observacao: [null],
      tipoLancamento: ['RECEITA'],
    });

    // Pega o parametro do ID  da URL
    this.idEdit = this.route.snapshot.params['id'];
    // Verifica se a URL é para POST ou PUT*
    this.isEditRoute =
      this.route.snapshot.url.length > 0 &&
      this.route.snapshot.url[this.route.snapshot.url.length - 1].path ===
        'editar';

    // Se for de PUT, busca o lancamento por id e popula o form com os dados.
    if (this.isEditRoute) {
      this.service
        .getLancamentoById(this.idEdit)
        .subscribe((lancamento: any) => {
            this.lancamento = lancamento;
            this.updateForm(lancamento);
        });
    }
  }

  updateForm(lancamento: any) {
    this.form.patchValue({
      id: lancamento.id,
      dataVencimento: moment(lancamento.dataVencimento).format("DD/MM/YYYY"),
      dataPagamento: moment(lancamento.dataPagamento).format("DD/MM/YYYY"),
      descricao: lancamento.descricao,
      valor: lancamento.valor,
      categoria: lancamento.categoria.ativo ? lancamento.categoria.id : null,
      pessoa: lancamento.pessoa.ativo ? lancamento.pessoa.id : null,
      observacao: lancamento.observacao,
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Transformando os Ids de pessoa e categoria para um obj
      const categoriaId = this.form.get('categoria')?.value;
      const categoriaObj = { id: categoriaId };
      const pessoaId = this.form.get('pessoa')?.value;
      const pessoaObj = { id: pessoaId };
      this.form.get('categoria')?.patchValue(categoriaObj);
      this.form.get('pessoa')?.patchValue(pessoaObj);

      // Mudando o formato da data para enviar ao servidor]
      if(typeof this.form.get('dataVencimento')?.value == 'string') {
        this.form.get('dataVencimento')?.patchValue(this.formatarData(this.form.get('dataVencimento')?.value));
      }else {
        this.form.get('dataVencimento')?.patchValue(moment(this.form.get('dataVencimento')?.value).format("YYYY-MM-DD"));
      }
      if(typeof this.form.get('dataPagamento')?.value == 'string') {
        this.form.get('dataPagamento')?.patchValue(this.formatarData(this.form.get('dataPagamento')?.value));
      }else {
        this.form.get('dataPagamento')?.patchValue(moment(this.form.get('dataPagamento')?.value).format("YYYY-MM-DD"));
      }

      if (this.form.value.id) {
        // UPDATE
        this.service.save(this.form.value).subscribe(
          (resposta) => {
            this.alertService.showAlertSuccess('Lançamento atualizado com sucesso!');
            this.form.reset();
            this.router.navigate(['/lancamentos']);
          },
          (error) => {
            this.alertService.showAlertDanger('Erro ao atualizar lançamento!');
            console.error('Erro ao atualizar lançamento: ', error);
          }
          );
        } else {
          // SUBMIT
          this.service.save(this.form.value).subscribe(
            (resposta) => {
              this.alertService.showAlertSuccess('Lançamento salvo com sucesso!');
            this.form.reset();
            this.router.navigate(['/lancamentos']);
          },
          (error) => {
            this.alertService.showAlertDanger('Erro ao salvar lançamento!');
            console.error('Erro ao salvar lançamento: ', error);
          }
          );
      }
    } else {
      this.tocarTodosOsCampos();
    }
  }

  preencheComboCategorias() {
    this.service.getCategorias().subscribe(
      (resposta) => {
        resposta.forEach(categoria => {
          if(categoria.ativo){
            this.categorias.push(categoria);
          }
        });
      },
      (error) => {
        console.error('Erro ao buscar categorias: ', error);
      }
    );
  }
  preencheComboPessoas() {
    this.service.getPessoas().subscribe(
      (resposta) => {
        resposta.forEach((pessoa) => {
          if (pessoa.ativo) {
            this.pessoas.push(pessoa);
          }
        });
      },
      (error) => {
        console.error('Erro ao buscar pessoas: ', error);
      }
    );
  }

  verificaErroCampo(campo: string) {
    return !this.form.get(campo)?.valid && this.form.get(campo)?.touched;
  }
  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.verificaErroCampo(campo),
      'text-danger': this.verificaErroCampo(campo),
    };
  }
  aplicaCssErroIsInvalid(campo: string) {
    return {
      'is-invalid': this.verificaErroCampo(campo),
    };
  }
  tocarTodosOsCampos() {
    Object.values(this.form.controls).forEach((campo) => {
      campo.markAsTouched();
    });
  }

  aplicaCssInputCalendar(campo: string) {
    return {
      "ng-invalid": this.verificaErroCampo(campo),
      "ng-dirty": this.verificaErroCampo(campo)
    }
  }

  formatarData(dataString: string) {
    // Dividir a string em dia, mês e ano
    const partes = dataString.split('/');

    if (partes.length === 3) {
      const dia = partes[0];
      const mes = partes[1];
      const ano = partes[2];

      // Criar uma nova string no formato "yyyy-MM-dd"
      const dataFormatada = `${ano}-${mes}-${dia}`;

      return dataFormatada;
    } else {
      // Se a string de entrada não estiver no formato esperado, retorne-a inalterada ou trate o erro conforme necessário.
      console.error("Formato de data inválido.");
      return dataString;
    }
  }
}
