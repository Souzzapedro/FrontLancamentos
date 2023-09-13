"use strict";(self.webpackChunkfront_lancamento=self.webpackChunkfront_lancamento||[]).push([[926],{5926:(I,h,c)=>{c.r(h),c.d(h,{CategoriasModule:()=>J});var m=c(6814),f=c(2268),u=c(4840),t=c(9468),p=c(1406),d=c(4690),i=c(95),v=c(8180),b=c(4664),Z=c(6232);const T=["deleteModal"];function A(o,s){if(1&o){const r=t.EpF();t.TgZ(0,"tr")(1,"td",6),t._uU(2),t.qZA(),t.TgZ(3,"td",7),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",8)(8,"button",9),t._UZ(9,"i",10),t.qZA(),t.TgZ(10,"button",11),t.NdJ("click",function(){const l=t.CHM(r).$implicit,n=t.oxw();return t.KtG(n.atualizarStatus(l.id))}),t._uU(11),t.qZA()()()}if(2&o){const r=s.$implicit;t.xp6(2),t.Oqu(r.id),t.xp6(2),t.Oqu(r.nome),t.xp6(1),t.Gre("text-center col text-",r.ativo?"success":"danger"," fw-bold"),t.xp6(1),t.Oqu(r.ativo?"ATIVO":"INATIVO"),t.xp6(2),t.Q6J("routerLink","/categorias/"+r.id+"/editar"),t.xp6(2),t.Gre("btn btn-",r.ativo?"danger":"success"," text-nowrap col-8"),t.s9C("tooltip",r.ativo?"Desativar status da categoria":"Ativar status da categoria"),t.xp6(1),t.hij(" ",r.ativo?"DESATIVAR":"ATIVAR"," ")}}function E(o,s){1&o&&(t.TgZ(0,"div"),t._UZ(1,"img",12),t.qZA())}let S=(()=>{var o;class s{constructor(e,a){this.service=e,this.alertModal=a}atualizarStatus(e){this.service.getStatus(e).subscribe(n=>{this.statusCategoriaSelecionada=n},n=>{this.alertModal.showAlertDanger(`Erro ao buscar status da categoria de id ${e}.`),console.error("Erro ao buscar status: ",n)});let a=this.statusCategoriaSelecionada?"desativa":"ativa";this.alertModal.showConfirm("Confirma\xe7\xe3o",`Tem certeza que deseja ${a}r a categoria de id ${e}?`,"Sim").asObservable().pipe((0,v.q)(1),(0,b.w)(n=>n?this.service.altualizarStatus(e,!this.statusCategoriaSelecionada):Z.E)).subscribe(n=>{this.alertModal.showAlertSuccess(`Categoria ${e} ${a}da com sucesso!`);const g=this.categorias.find(U=>U.id===e);g&&(g.ativo=!this.statusCategoriaSelecionada)},n=>{this.alertModal.showAlertDanger("Erro ao atualizar status!"),console.error(n)})}}return(o=s).\u0275fac=function(e){return new(e||o)(t.Y36(p.n),t.Y36(d.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tabela-categorias"]],viewQuery:function(e,a){if(1&e&&t.Gf(T,5),2&e){let l;t.iGM(l=t.CRH())&&(a.deleteModal=l.first)}},inputs:{categorias:"categorias"},decls:16,vars:2,consts:[[1,"container","mt-3","table-responsive","text-center"],[1,"table"],[1,"text-start"],[4,"ngFor","ngForOf"],[4,"ngIf"],["routerLink","/categorias/novo",1,"float-start","btn","btn-outline-success"],[1,"col-md-1"],[1,"col-md-9","text-start"],[1,"col","d-flex","gap-2","justify-content-center"],["tooltip","Editar",1,"btn","btn-primary","mx-1",3,"routerLink"],[1,"bi","bi-pencil-fill"],[3,"tooltip","click"],["src","https://i.gifer.com/ZKZg.gif","alt","loading",2,"width","30px","height","30px"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"table",1)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"#"),t.qZA(),t.TgZ(6,"th",2),t._uU(7,"Nome"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Status"),t.qZA(),t._UZ(10,"th"),t.qZA()(),t.TgZ(11,"tbody"),t.YNc(12,A,12,12,"tr",3),t.qZA()(),t.YNc(13,E,2,0,"div",4),t.TgZ(14,"button",5),t._uU(15,"Nova categoria"),t.qZA()()),2&e&&(t.xp6(12),t.Q6J("ngForOf",a.categorias),t.xp6(1),t.Q6J("ngIf",!a.categorias))},dependencies:[m.sg,m.O5,f.i9,u.rH]}),s})(),q=(()=>{var o;class s{constructor(e,a){this.service=e,this.alertModal=a,this.nome=""}ngOnInit(){this.pesquisar()}pesquisar(){this.categorias=void 0,null===this.nome||""===this.nome?this.service.listar().subscribe(e=>{this.categorias=e},e=>{this.alertModal.showAlertDanger("Erro ao buscar categorias."),console.error("Erro ao buscar categorias: ",e)}):this.service.getCategoriasNome(this.nome).subscribe(e=>{this.categorias=e},e=>{this.alertModal.showAlertDanger("Erro ao buscar categorias."),console.error("Erro ao buscar categorias: ",e)})}}return(o=s).\u0275fac=function(e){return new(e||o)(t.Y36(p.n),t.Y36(d.$))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-form-pesquisa-categorias"]],decls:11,vars:2,consts:[[1,"container"],["autocomplete","off",3,"ngSubmit"],[1,"form-group"],["for","nome",1,"form-label"],["type","text","id","nome","name","nome",1,"form-control",3,"ngModel","ngModelChange"],[1,"btn","btn-primary","mt-2"],[3,"categorias"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Categorias"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return a.pesquisar()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Nome"),t.qZA(),t.TgZ(7,"input",4),t.NdJ("ngModelChange",function(n){return a.nome=n}),t.qZA()(),t.TgZ(8,"button",5),t._uU(9,"Pesquisar"),t.qZA()()(),t._UZ(10,"app-tabela-categorias",6)),2&e&&(t.xp6(7),t.Q6J("ngModel",a.nome),t.xp6(3),t.Q6J("categorias",a.categorias))},dependencies:[i._Y,i.Fj,i.JJ,i.JL,i.On,i.F,S]}),s})();function x(o,s){1&o&&(t.TgZ(0,"button",9),t._uU(1,"Salvar"),t.qZA())}function F(o,s){1&o&&(t.TgZ(0,"button",10),t._uU(1,"Novo"),t.qZA())}let C=(()=>{var o;class s{constructor(e,a,l,n,g){this.service=e,this.formBuilder=a,this.route=l,this.alertService=n,this.router=g,this.isEditRoute=!1}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,i.kI.required]}),this.idEdit=this.route.snapshot.params.id,this.isEditRoute=this.route.snapshot.url.length>0&&"editar"===this.route.snapshot.url[this.route.snapshot.url.length-1].path,this.isEditRoute&&this.service.getCategoriaById(this.idEdit).subscribe(e=>{this.categoria=e,this.updateForm(e)})}updateForm(e){this.form.patchValue({id:e.id,nome:e.nome})}onSubmit(){this.form.valid?this.form.value.id?this.service.save(this.form.value).subscribe(e=>{this.alertService.showAlertSuccess("Categoria atualizada com sucesso!"),this.form.reset(),this.router.navigate(["/categorias"])},e=>{this.alertService.showAlertDanger("Erro ao atualizar categoria!"),console.error("Erro ao atualizar categoria: ",e)}):this.service.save(this.form.value).subscribe(e=>{this.alertService.showAlertSuccess("Categoria salvo com sucesso!"),this.form.reset(),this.router.navigate(["/categorias"])},e=>{this.alertService.showAlertDanger("Erro ao salvar categoria!"),console.error("Erro ao salvar categoria: ",e)}):this.tocarTodosOsCampos()}verificaErroCampo(e){return!this.form.get(e)?.valid&&this.form.get(e)?.touched}aplicaCssErro(e){return{"is-invalid":this.verificaErroCampo(e),"text-danger":this.verificaErroCampo(e)}}aplicaCssErroIsInvalid(e){return{"is-invalid":this.verificaErroCampo(e)}}tocarTodosOsCampos(){Object.values(this.form.controls).forEach(e=>{e.markAsTouched()})}}return(o=s).\u0275fac=function(e){return new(e||o)(t.Y36(p.n),t.Y36(i.qu),t.Y36(u.gz),t.Y36(d.$),t.Y36(u.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-form-categorias"]],decls:13,vars:5,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"form-group"],["for","nome",1,"form-label",3,"ngClass"],["type","text","id","nome","formControlName","nome",1,"form-control",3,"ngClass"],[1,"btns-form","d-flex","gap-2","mt-2"],["type","submit","class","btn btn-primary",4,"ngIf"],["type","submit","class","btn btn-info",4,"ngIf"],["routerLink","/categorias",1,"btn","btn-link","text-decoration-none"],["type","submit",1,"btn","btn-primary"],["type","submit",1,"btn","btn-info"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"h2"),t._uU(2,"Nova categoria"),t.qZA(),t.TgZ(3,"form",1),t.NdJ("ngSubmit",function(){return a.onSubmit()}),t.TgZ(4,"div",2)(5,"label",3),t._uU(6,"Nome"),t.qZA(),t._UZ(7,"input",4),t.qZA(),t.TgZ(8,"div",5),t.YNc(9,x,2,0,"button",6),t.YNc(10,F,2,0,"button",7),t.TgZ(11,"button",8),t._uU(12,"Voltar para a pesquisa"),t.qZA()()()()),2&e&&(t.xp6(3),t.Q6J("formGroup",a.form),t.xp6(2),t.Q6J("ngClass",a.aplicaCssErro("nome")),t.xp6(2),t.Q6J("ngClass",a.aplicaCssErro("nome")),t.xp6(2),t.Q6J("ngIf",a.isEditRoute),t.xp6(1),t.Q6J("ngIf",!a.isEditRoute))},dependencies:[m.mk,m.O5,u.rH,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),s})();const y=[{path:"",component:q},{path:"novo",component:C},{path:":id/editar",component:C}];let M=(()=>{var o;class s{}return(o=s).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(y),u.Bz]}),s})();var _=c(9862);let J=(()=>{var o;class s{}return(o=s).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,f.z8.forRoot(),M,i.UX,_.JF,i.u5]}),s})()}}]);