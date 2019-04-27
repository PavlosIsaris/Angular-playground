import { Injectable } from '@angular/core';

export class InfoDialogData {
  title: string;
  message: string;
  showOKBtn = false;
  showCancelBtn = false;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor() { }
}
