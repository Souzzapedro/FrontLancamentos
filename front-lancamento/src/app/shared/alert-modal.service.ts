import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';

export enum AlertTypes {
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  LIGHT = 'light',
  DARK = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  closeTime: number = 3500;

  constructor(private modalService: BsModalService) { }

  private showAlert(mensagem: string, tipo: AlertTypes, closeTime?: number) {
    const bsModalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    bsModalRef.content.tipo = tipo;
    bsModalRef.content.mensagem = mensagem;

    if(closeTime){
      this.closeTime = closeTime;
    }
    setTimeout(() => {
      bsModalRef.hide();
    }, this.closeTime);
  }

  showAlertDanger(mensagem: string) {
    this.showAlert(mensagem, AlertTypes.DANGER);
  }
  showAlertSuccess(mensagem: string) {
    this.showAlert(mensagem, AlertTypes.SUCCESS);
  }
  showAlertWarning(mensagem: string) {
    this.showAlert(mensagem, AlertTypes.WARNING);
  }


  // Aproveitando o aler-modal para o confirm modal
  showConfirm(titulo: string, mensagem: string, okTxt?: string, cancelTxt?: string) {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.titulo = titulo;
    bsModalRef.content.mensagem = mensagem;
    if(okTxt) {
      bsModalRef.content.okTxt = okTxt;
    }
    if(cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }
    return (<ConfirmModalComponent>bsModalRef.content).confirmResult;
  }

}
