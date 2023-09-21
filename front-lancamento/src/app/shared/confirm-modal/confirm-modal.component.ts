import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  @Input() titulo: string = '';
  @Input() mensagem: string = '';
  @Input() cancelTxt: string = 'Cancelar';
  @Input() okTxt: string = 'Ok';

  confirmResult!: Subject<boolean>;  // Retonar o boolean de acordo com a iteração com o modal

  constructor(private modalRef: BsModalRef) { }

  ngOnInit(): void {
    this.confirmResult = new Subject(); // Toda vez que o modal é inicializado é instanciado um novo Subject
  }

  onConfirm() {
    this.confirmAndClose(true);
  }
  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.confirmResult.next(value);
    this.modalRef.hide();
  }
}
