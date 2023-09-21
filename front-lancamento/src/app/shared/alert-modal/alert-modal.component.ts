import { Component, Input } from '@angular/core';

import { BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent {

  constructor(private bsModelRef: BsModalRef) { }

  @Input() mensagem: string = '';
  @Input() tipo: string = '';
  @Input() timeout: any;

  onClose() {
    this.bsModelRef.hide();
  }

}
