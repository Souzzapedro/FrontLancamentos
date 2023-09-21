import { Component, OnInit } from '@angular/core';
import { PessoasService } from '../pessoas.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-form-pessoas',
  templateUrl: './form-pessoas.component.html',
  styleUrls: ['./form-pessoas.component.scss']
})
export class FormPessoasComponent implements OnInit {

  form!: FormGroup;

  idEdit!: number;
  isEditRoute: boolean = false;
  pessoa: any;


  constructor(
    private service: PessoasService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.pattern('^[a-zA-Z ]*$'), Validators.minLength(3), Validators.maxLength(50)]],
      email: [null, [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        logradouro: [null, Validators.required],
        numero: [null, [Validators.required, Validators.pattern("^[0-9]*$")]],
        complemento: [null, Validators.required],
        bairro: [null, Validators.required],
        cep: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required],
      })
    })

    this.idEdit = this.route.snapshot.params['id'];
    // Verifica se a URL é para POST ou PUT*
    this.isEditRoute =
      this.route.snapshot.url.length > 0 &&
      this.route.snapshot.url[this.route.snapshot.url.length - 1].path ===
        'editar';

    // Se for de PUT, busca o lancamento por id e popula o form com os dados.
    if (this.isEditRoute) {
      this.service
        .getPessoaById(this.idEdit)
        .subscribe((res: any) => {
          this.pessoa = res;
          this.updateForm(res);
        });
    }
  }

  updateForm(pessoa: any) {
    this.form.patchValue({
      id: pessoa.id,
      nome: pessoa.nome,
      email: pessoa.email,
      endereco: {
        logradouro: pessoa.endereco.logradouro,
        numero: pessoa.endereco.numero,
        complemento: pessoa.endereco.complemento,
        bairro: pessoa.endereco.bairro,
        cep: pessoa.endereco.cep,
        cidade: pessoa.endereco.cidade,
        estado: pessoa.endereco.estado,
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.get('nome')?.setValue(this.form.get('nome')?.value.toUpperCase());
      if (this.form.value.id) {
        // UPDATE

      this.service.save(this.form.value).subscribe(
        (resposta) => {
          this.alertService.showAlertSuccess('Pessoa atualizada com sucesso!');
            this.form.reset();
            this.router.navigate(['/pessoas']);
          },
          (error) => {
            this.alertService.showAlertDanger('Erro ao atualizar pessoa!');
            console.error('Erro ao atualizar pessoa: ', error);
          }
          );
        } else {
          // SUBMIT

          this.service.save(this.form.value).subscribe(
          (resposta) => {
            this.alertService.showAlertSuccess('Pessoa salva com sucesso!');
            this.form.reset();
            this.router.navigate(['/pessoas']);
          },
          (error) => {
            this.alertService.showAlertDanger('Erro ao salvar pessoa!');
            console.error('Erro ao salvar pessoa: ', error);
          }
        );
      }
    } else {
      this.tocarTodosOsCampos();
    }
  }

  tocarTodosOsCampos() {
    Object.values(this.form.controls).forEach((campo) => {
      if(campo instanceof FormGroup) {
        Object.values(campo.controls).forEach(campoEndereco => {
          campoEndereco.markAsTouched();
        })
      }else {
        campo.markAsTouched();
      }
    });
  }

  varificaErroCampo(campo: string) {
    return !this.form.get(campo)?.valid && this.form.get(campo)?.touched;
  }

  aplicaCssErro(campo: string) {
    return {
      'is-invalid': this.varificaErroCampo(campo),
      'text-danger': this.varificaErroCampo(campo),
    };
  }
  aplicaCssErroIsInvalid(campo: string) {
    return {
      'is-invalid': this.varificaErroCampo(campo),
    };
  }

}
