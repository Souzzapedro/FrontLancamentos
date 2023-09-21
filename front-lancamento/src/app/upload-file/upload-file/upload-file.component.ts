import { Component } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent {

  selectedFiles: FileList | null = null;
  progress = 0;

  constructor(
    private service: UploadFileService,
    private alertModal: AlertModalService,
  ) { }

  onChange(event: any): void {
    this.selectedFiles = event.target.files;
    this.progress = 0;
  }

  onUpload() {
    if(this.selectedFiles) {
      this.service.upload(Array.from(this.selectedFiles), 'http://localhost:8080/arquivos')
        .subscribe((event: HttpEvent<Object>) => {
          if(event.type === HttpEventType.Response){
            this.alertModal.showAlertSuccess("Arquivos salvos com sucesso!");
            this.progress = 0;
          }else if(event.type === HttpEventType.UploadProgress) {
            const porcentagem = Math.round((event.loaded * 100) / (event.total || 1));
            this.progress = porcentagem;
          }
        });
    }
  }


/*
  file: File | null = null;
  progress = 0;

  constructor(private service: UploadFileService) {

  }

  ngOnInit(): void {
  }

  onChange(event: any): void {
    console.log(event);

    const selectedFiles = <File>event.srcElement.files[0];
    this.file = selectedFiles;
    this.progress = 0;
  }

  onUpload() {
    if(this.file) {
      this.service.upload(this.file, 'http://localhost:8080/arquivos')
        .subscribe((event: HttpEvent<Object>) => {
          console.log(event);
          if(event.type === HttpEventType.Response){

          }else if(event.type === HttpEventType.UploadProgress) {
            const porcentagem = Math.round((event.loaded * 100) / (event.total || 1));
            console.log(porcentagem);
            this.progress = porcentagem;
          }
        });
    }
  } */
}
