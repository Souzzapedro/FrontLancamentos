"use strict";(self.webpackChunkfront_lancamento=self.webpackChunkfront_lancamento||[]).push([[516],{5516:(k,h,i)=>{i.r(h),i.d(h,{PessoasModule:()=>$});var p=i(6814),v=i(2268),d=i(4840),a=i(95),o=i(9468),C=i(5820),Z=i(4690);function A(t,n){1&t&&(o.TgZ(0,"button",29),o._uU(1,"Salvar"),o.qZA())}function T(t,n){1&t&&(o.TgZ(0,"button",30),o._uU(1,"Novo"),o.qZA())}let b=(()=>{var t;class n{constructor(e,s,l,c,f){this.service=e,this.formBuilder=s,this.route=l,this.alertService=c,this.router=f,this.isEditRoute=!1}ngOnInit(){this.form=this.formBuilder.group({id:[null],nome:[null,[a.kI.required,a.kI.pattern("^[a-zA-Z ]*$"),a.kI.minLength(3),a.kI.maxLength(50)]],email:[null,[a.kI.required,a.kI.email]],endereco:this.formBuilder.group({logradouro:[null,a.kI.required],numero:[null,[a.kI.required,a.kI.pattern("^[0-9]*$")]],complemento:[null,a.kI.required],bairro:[null,a.kI.required],cep:[null,a.kI.required],cidade:[null,a.kI.required],estado:[null,a.kI.required]})}),this.idEdit=this.route.snapshot.params.id,this.isEditRoute=this.route.snapshot.url.length>0&&"editar"===this.route.snapshot.url[this.route.snapshot.url.length-1].path,this.isEditRoute&&this.service.getPessoaById(this.idEdit).subscribe(e=>{this.pessoa=e,this.updateForm(e)})}updateForm(e){this.form.patchValue({id:e.id,nome:e.nome,email:e.email,endereco:{logradouro:e.endereco.logradouro,numero:e.endereco.numero,complemento:e.endereco.complemento,bairro:e.endereco.bairro,cep:e.endereco.cep,cidade:e.endereco.cidade,estado:e.endereco.estado}})}onSubmit(){this.form.valid?(this.form.get("nome")?.setValue(this.form.get("nome")?.value.toUpperCase()),this.form.value.id?this.service.save(this.form.value).subscribe(e=>{this.alertService.showAlertSuccess("Pessoa atualizada com sucesso!"),this.form.reset(),this.router.navigate(["/pessoas"])},e=>{this.alertService.showAlertDanger("Erro ao atualizar pessoa!"),console.error("Erro ao atualizar pessoa: ",e)}):this.service.save(this.form.value).subscribe(e=>{this.alertService.showAlertSuccess("Pessoa salva com sucesso!"),this.form.reset(),this.router.navigate(["/pessoas"])},e=>{this.alertService.showAlertDanger("Erro ao salvar pessoa!"),console.error("Erro ao salvar pessoa: ",e)})):this.tocarTodosOsCampos()}tocarTodosOsCampos(){Object.values(this.form.controls).forEach(e=>{e instanceof a.cw?Object.values(e.controls).forEach(s=>{s.markAsTouched()}):e.markAsTouched()})}varificaErroCampo(e){return!this.form.get(e)?.valid&&this.form.get(e)?.touched}aplicaCssErro(e){return{"is-invalid":this.varificaErroCampo(e),"text-danger":this.varificaErroCampo(e)}}aplicaCssErroIsInvalid(e){return{"is-invalid":this.varificaErroCampo(e)}}}return(t=n).\u0275fac=function(e){return new(e||t)(o.Y36(C.N),o.Y36(a.qu),o.Y36(d.gz),o.Y36(Z.$),o.Y36(d.F0))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-form-pessoas"]],decls:50,vars:21,consts:[[1,"container"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"form-group","col"],["for","nome",1,"form-label","m-0",3,"ngClass"],["type","text","id","nome","formControlName","nome",1,"form-control",3,"ngClass"],["for","email",1,"form-label","m-0",3,"ngClass"],["type","email","id","email","formControlName","email",1,"form-control",3,"ngClass"],["formGroupName","endereco"],[1,"row","mt-2"],[1,"form-group","col-8"],["for","logradouro",1,"form-label","m-0",3,"ngClass"],["type","text","id","logradouro","formControlName","logradouro",1,"form-control",3,"ngClass"],["for","numero",1,"form-label","m-0",3,"ngClass"],["type","text","id","numero","formControlName","numero",1,"form-control",3,"ngClass"],["for","complemento",1,"form-label","m-0",3,"ngClass"],["type","text","id","complemento","formControlName","complemento",1,"form-control",3,"ngClass"],["for","bairro",1,"form-label","m-0",3,"ngClass"],["type","text","id","bairro","formControlName","bairro",1,"form-control",3,"ngClass"],["for","cep",1,"form-label","m-0",3,"ngClass"],["type","text","id","cep","formControlName","cep",1,"form-control",3,"ngClass"],["for","cidade",1,"form-label","m-0",3,"ngClass"],["type","text","id","cidade","formControlName","cidade",1,"form-control",3,"ngClass"],["for","estado",1,"form-label","m-0",3,"ngClass"],["type","text","id","estado","formControlName","estado",1,"form-control",3,"ngClass"],[1,"btns-form","d-flex","gap-2","mt-2"],["class","btn btn-primary",4,"ngIf"],["class","btn btn-info",4,"ngIf"],["routerLink","/pessoas",1,"btn","btn-link","text-decoration-none"],[1,"btn","btn-primary"],[1,"btn","btn-info"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0)(1,"h2"),o._uU(2,"Nova Pessoa"),o.qZA(),o.TgZ(3,"form",1),o.NdJ("ngSubmit",function(){return s.onSubmit()}),o.TgZ(4,"div",2)(5,"div",3)(6,"label",4),o._uU(7,"Nome"),o.qZA(),o._UZ(8,"input",5),o.qZA(),o.TgZ(9,"div",3)(10,"label",6),o._uU(11,"Email"),o.qZA(),o._UZ(12,"input",7),o.qZA()(),o.TgZ(13,"div",8)(14,"div",9)(15,"div",10)(16,"label",11),o._uU(17,"Logradouro"),o.qZA(),o._UZ(18,"input",12),o.qZA(),o.TgZ(19,"div",3)(20,"label",13),o._uU(21,"N\xfamero"),o.qZA(),o._UZ(22,"input",14),o.qZA()(),o.TgZ(23,"div",9)(24,"div",3)(25,"label",15),o._uU(26,"Complemento"),o.qZA(),o._UZ(27,"input",16),o.qZA(),o.TgZ(28,"div",3)(29,"label",17),o._uU(30,"Bairro"),o.qZA(),o._UZ(31,"input",18),o.qZA(),o.TgZ(32,"div",3)(33,"label",19),o._uU(34,"CEP"),o.qZA(),o._UZ(35,"input",20),o.qZA()(),o.TgZ(36,"div",9)(37,"div",3)(38,"label",21),o._uU(39,"Cidade"),o.qZA(),o._UZ(40,"input",22),o.qZA(),o.TgZ(41,"div",3)(42,"label",23),o._uU(43,"Estado"),o.qZA(),o._UZ(44,"input",24),o.qZA()()(),o.TgZ(45,"div",25),o.YNc(46,A,2,0,"button",26),o.YNc(47,T,2,0,"button",27),o.TgZ(48,"button",28),o._uU(49,"Voltar para a pesquisa"),o.qZA()()()()),2&e&&(o.xp6(3),o.Q6J("formGroup",s.form),o.xp6(3),o.Q6J("ngClass",s.aplicaCssErro("nome")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("nome")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("email")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("email")),o.xp6(4),o.Q6J("ngClass",s.aplicaCssErro("endereco.logradouro")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.logradouro")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.numero")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.numero")),o.xp6(3),o.Q6J("ngClass",s.aplicaCssErro("endereco.complemento")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.complemento")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.bairro")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.bairro")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.cep")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.cep")),o.xp6(3),o.Q6J("ngClass",s.aplicaCssErro("endereco.cidade")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.cidade")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.estado")),o.xp6(2),o.Q6J("ngClass",s.aplicaCssErro("endereco.estado")),o.xp6(2),o.Q6J("ngIf",s.isEditRoute),o.xp6(1),o.Q6J("ngIf",!s.isEditRoute))},dependencies:[p.mk,p.O5,d.rH,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,a.x0]}),n})();var q=i(7398),E=i(2181),x=i(6321),U=i(9360),P=i(8251),y=i(3997),I=i(8180),N=i(4664),S=i(6232);function Q(t,n){if(1&t){const r=o.EpF();o.TgZ(0,"tr")(1,"td",9),o._uU(2),o.qZA(),o.TgZ(3,"td",9),o._uU(4),o.qZA(),o.TgZ(5,"td",9),o._uU(6),o.qZA(),o.TgZ(7,"td",10)(8,"button",11),o._uU(9,"Detalhes"),o.qZA()(),o.TgZ(10,"td"),o._uU(11),o.qZA(),o.TgZ(12,"td",12)(13,"button",13),o._UZ(14,"i",14),o.qZA(),o.TgZ(15,"button",15),o.NdJ("click",function(){const l=o.CHM(r).$implicit,c=o.oxw();return o.KtG(c.atualizarStatus(l.id,!l.ativo,l.nome))}),o._uU(16),o.qZA()()()}if(2&t){const r=n.$implicit;o.xp6(2),o.Oqu(r.id),o.xp6(2),o.Oqu(r.nome),o.xp6(2),o.Oqu(r.email),o.xp6(4),o.Gre("text-",r.ativo?"success":"danger"," fw-bold text-center col"),o.xp6(1),o.Oqu(r.ativo?"Ativo":"Inativo"),o.xp6(2),o.Q6J("routerLink","/pessoas/"+r.id+"/editar"),o.xp6(2),o.Gre("btn btn-",r.ativo?"danger":"success"," btn-status-pessoa"),o.MGl("tooltip","Atualizar status de ",r.nome,""),o.xp6(1),o.Oqu(r.ativo?"Desativar":"Ativar")}}function F(t,n){1&t&&(o.TgZ(0,"div"),o._UZ(1,"img",16),o.qZA())}const z=[{path:"",component:(()=>{var t;class n{constructor(e,s){this.service=e,this.alertModal=s,this.formPesquisa=new a.NI}ngOnInit(){this.pesquisar(),this.formPesquisa.valueChanges.pipe((0,q.U)(e=>e.trim()),(0,E.h)(e=>e.length>1),function J(t,n=x.z){return(0,U.e)((r,e)=>{let s=null,l=null,c=null;const f=()=>{if(s){s.unsubscribe(),s=null;const m=l;l=null,e.next(m)}};function u(){const m=c+t,g=n.now();if(g<m)return s=this.schedule(void 0,m-g),void e.add(s);f()}r.subscribe((0,P.x)(e,m=>{l=m,c=n.now(),s||(s=n.schedule(u,t),e.add(s))},()=>{f(),e.complete()},void 0,()=>{l=s=null}))})}(250),(0,y.x)()).subscribe(()=>this.pesquisar())}atualizarStatus(e,s,l){this.service.getStatus(e).subscribe(u=>{this.statusPessoaSelecionada=u},u=>{this.alertModal.showAlertDanger(`Erro ao buscar status da pessoa de id ${e}.`),console.error("Erro ao buscar status: ",u)}),this.alertModal.showConfirm("Confirma\xe7\xe3o",`Tem certeza que deseja ${s?"ativar":"desativar"} a pessoa de id ${e} (${l})`,"Sim","N\xe3o").asObservable().pipe((0,I.q)(1),(0,N.w)(u=>u?this.service.atualizarStatus(e,s):S.E)).subscribe(u=>{this.alertModal.showAlertSuccess(`Status de ${l} atualizado com sucesso!`);const m=this.pessoas.find(g=>g.id===e);m&&(m.ativo=!this.statusPessoaSelecionada)},u=>{this.alertModal.showAlertDanger(`Erro ao atualizar status de ${l}`),console.error(u)})}pesquisar(){console.log(this.formPesquisa.value),this.pessoas=void 0,""===this.formPesquisa.value||null===this.formPesquisa.value?this.service.listar().subscribe(e=>{this.pessoas=e},e=>{this.alertModal.showAlertDanger("Erro ao listar pessoas."),console.error("Erro ao listar pessoas: ",e)}):this.service.getPessoasNome(this.formPesquisa.value.toUpperCase()).subscribe(e=>{this.pessoas=e},e=>{this.alertModal.showAlertDanger("Erro ao pesquisar por pessoas."),console.error("Erro ao pesquisar por pessoas: ",e)})}}return(t=n).\u0275fac=function(e){return new(e||t)(o.Y36(C.N),o.Y36(Z.$))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-tabela-pessoas"]],decls:25,vars:3,consts:[[1,"container","mt-3","table-responsive","text-center"],[1,"text-start","mb-2"],[1,"form-group"],["autocomplete","off","type","text","id","nome","name","nome","placeholder","Pesquisar",1,"form-control",3,"formControl"],[1,"table"],[1,"text-center"],[4,"ngFor","ngForOf"],[4,"ngIf"],["routerLink","/pessoas/novo",1,"float-start","btn","btn-outline-success"],[1,"col"],[1,"text-center","col"],[1,"btn","btn-primary"],[1,"d-flex","justify-content-center"],["tooltip","Editar",1,"btn","btn-primary","mx-1",3,"routerLink"],[1,"bi","bi-pencil-fill"],[3,"tooltip","click"],["src","https://i.gifer.com/ZKZg.gif","alt","loading",2,"width","30px","height","30px"]],template:function(e,s){1&e&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h2"),o._uU(3,"Pessoas"),o.qZA(),o.TgZ(4,"div",2),o._UZ(5,"input",3),o.qZA()(),o.TgZ(6,"table",4)(7,"thead")(8,"tr")(9,"th"),o._uU(10,"#"),o.qZA(),o.TgZ(11,"th"),o._uU(12,"Nome"),o.qZA(),o.TgZ(13,"th"),o._uU(14,"Email"),o.qZA(),o.TgZ(15,"th",5),o._uU(16,"Endere\xe7o"),o.qZA(),o.TgZ(17,"th",5),o._uU(18,"Status"),o.qZA(),o._UZ(19,"th"),o.qZA()(),o.TgZ(20,"tbody"),o.YNc(21,Q,17,13,"tr",6),o.qZA()(),o.YNc(22,F,2,0,"div",7),o.TgZ(23,"button",8),o._uU(24,"Novo Pessoa"),o.qZA()()),2&e&&(o.xp6(5),o.Q6J("formControl",s.formPesquisa),o.xp6(16),o.Q6J("ngForOf",s.pessoas),o.xp6(1),o.Q6J("ngIf",!s.pessoas))},dependencies:[p.sg,p.O5,v.i9,d.rH,a.Fj,a.JJ,a.oH],styles:[".btn-status-pessoa[_ngcontent-%COMP%]{width:100px}"]}),n})()},{path:"novo",component:b},{path:":id/editar",component:b}];let M=(()=>{var t;class n{}return(t=n).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[d.Bz.forChild(z),d.Bz]}),n})();var O=i(9862);let $=(()=>{var t;class n{}return(t=n).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,v.z8.forRoot(),M,a.UX,O.JF,a.u5]}),n})()}}]);