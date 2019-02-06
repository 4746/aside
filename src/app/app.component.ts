import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  option = {
    position: 'right',
    title: 'Title',
    cancelButtonTitle: 'Discard',
    submitButtonTitle: 'Send',
    closeOnEscape: true,
    showOverlay: false,
    showDefaultFooter: true,
    showDefaultHeader: true,
  };

  onCancel() {
    console.log('onCancel');
  }
  onSave() {
    console.log('onSave');
  }
}
