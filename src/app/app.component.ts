import {Component} from '@angular/core';
import {DialogService} from './services/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-playground';

  constructor(private dialogService: DialogService) {}

  openDialog() {

  }
}
