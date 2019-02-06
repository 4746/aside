import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewContainerRef
} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {OverlayComponent} from './overlay.component';

@Component({
  selector: 'ng-aside',
  templateUrl: './aside.component.html',
  preserveWhitespaces: false,
  animations: [
    trigger('slideTrigger', [
      transition('void => left', [
        style({
          opacity: .6,
          transform: 'translate3d(-100%,0,0)'
        }),
        animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)',
          style({
            opacity: 1,
            transform: 'translateZ(0)'
          }))
      ]),
      transition('void => right', [
        style({
          opacity: .6,
          transform: 'translate3d(100%,0,0)'
        }),
        animate('.2s cubic-bezier(0.215, 0.610, 0.355, 1)',
          style({
            opacity: 1,
            transform: 'translateZ(0)'
          }))
      ]),
      transition('left => void', [
        animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', style({
            opacity: 0,
            transform: 'translate3d(-50%,0,0)'
          }
        ))
      ]),
      transition('right => void', [
        animate('.2s cubic-bezier(0.165, 0.84, 0.44, 1)', style({
            opacity: 0,
            transform: 'translate3d(50%,0,0)'
          }
        ))
      ])
    ])
  ]
})
export class AsideComponent implements OnInit {


  @Output() cancel: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();


  @Input() position = 'right';
  @Input() showOverlay = true;
  @Input() closeOnEscape = true;


  @Input() showDefaultFooter = true;
  @Input() showDefaultHeader = true;

  @Input() title = '';
  @Input() cancelButtonTitle = 'Cancel';
  @Input() submitButtonTitle = 'Submit';

  private backdrop: ComponentRef<{}>;
  visibleStatus = false;
  private rootViewContainerRef: ViewContainerRef;

  constructor(
    private _resolver: ComponentFactoryResolver,
    private vcRef: ViewContainerRef
  ) {
    this.rootViewContainerRef = vcRef;
  }

  ngOnInit(): void {}

  private addOverlay() {
    if (!this.backdrop && this.showOverlay) {
      const OverlayComponentFactory = this._resolver.resolveComponentFactory(OverlayComponent);
      this.backdrop = this.rootViewContainerRef.createComponent(OverlayComponentFactory, 0);
    }
  }

  hideAside(event?: any) {
    if (this.cancel.observers.length > 0) {
      this.cancel.emit(event);
    } else { // If we don`t have any subscribers
      this.hide();
    }
  }

  submitAside(event?: any) {
    if (this.cancel.observers.length > 0) {
      this.submit.emit();
    } else {  // If we don`t have any subscribers
      this.hide();
    }
  }

  @HostListener('document:keydown.esc', ['$event']) handleEscape(event) {

    if (this.closeOnEscape) {
      event.preventDefault();
      this.hideAside(event);
    }

    return false;
  }

  hide() {
    this.visibleStatus = false;

    if (!this.backdrop) {
      return;
    }

    this.backdrop.destroy();
    this.backdrop = void 0;

  }

  show() {
    this.visibleStatus = true;
    this.addOverlay();
  }
}
