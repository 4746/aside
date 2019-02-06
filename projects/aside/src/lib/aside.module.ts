import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AsideComponent} from './aside.component';
import {OverlayComponent} from './overlay.component';

@NgModule({
  declarations: [
    AsideComponent,
    OverlayComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AsideComponent
  ],
  entryComponents: [
    OverlayComponent
  ]
})
export class AsideModule {
}
