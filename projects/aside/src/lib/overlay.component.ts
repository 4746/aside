import {Component} from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations';

@Component({
  selector: 'ng-aside-overlay',
  template: `<div class="overlay" [@showTrigger]="showStatus"></div>`,
  styles: [`.overlay {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: currentColor;
    opacity: .6;
  }`],
  animations: [
    trigger('showTrigger', [
      transition('void => *', [
        style([{opacity: 0}]),
        animate(100,
          style([{opacity: .6}])
        )
      ])
    ])
  ]
})
export class OverlayComponent {

  showStatus = false;

  constructor() {
    this.showStatus = true;
  }
}
