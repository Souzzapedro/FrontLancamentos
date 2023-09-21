import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-form-categorias',
  templateUrl: './form-categorias.component.html',
  styleUrls: ['./form-categorias.component.scss']
})
export class FormCategoriasComponent implements OnInit{

  form!: FormGroup;

  idEdit!: number;
  isEditRoute: boolean = false;
  categoria: any;

  constructor(
    private service: CategoriaService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private alertService: AlertModalService,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, Validators.required],
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
        .getCategoriaById(this.idEdit)
        .subscribe((categoria: any) => {
          this.categoria = categoria;
          this.updateForm(categoria);
        });
    }
  }

  updateForm(categoria: any) {
    this.form.patchValue({
      id: categoria.id,
      nome: categoria.nome
    });
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.form.value.id) {
        // UPDATE
        this.service.save(this.form.value).subscribe(
          (resposta) => {
            this.alertService.showAlertSuccess(
              'Categoria atualizada com sucesso!'
              );
              this.form.reset();
              this.router.navigate(['/categorias']);
            },
            (error) => {
              this.alertService.showAlertDanger('Erro ao atualizar categoria!');
            console.error('Erro ao atualizar categoria: ', error);
          }
          );
        } else {
        // SUBMIT
        this.service.save(this.form.value).subscribe(
          (resposta) => {
            this.alertService.showAlertSuccess('Categoria salvo com sucesso!');
            this.form.reset();
            this.router.navigate(['/categorias']);
          },
          (error) => {
            this.alertService.showAlertDanger('Erro ao salvar categoria!');
            console.error('Erro ao salvar categoria: ', error);
          }
        );
      }
    } else {
      this.tocarTodosOsCampos();
    }
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
}
