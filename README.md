# NgAside

app.module.ts
```ts
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideModule } from 'aside';

@NgModule({
  imports: [
    AsideModule,
    BrowserAnimationsModule
  ]
})
```

Add html:
```html
<ng-aside #NgAside (cancel)="onCancel()"
           (submit)="onSave()"
           [title]="'Title'"
           [cancelButtonTitle]="'Discard'"
           [submitButtonTitle]="'Send'"
           [closeOnEscape]="false"
           [showOverlay]="false"
           [showDefaultFooter]="true"
           [showDefaultHeader]="true">
           
</ng-aside>

<button (click)="NgAside.show()">Show Sidebar</button>
```

You can disable default header and footer of panel
```html
[showDefaultFooter]="false"
[showDefaultHeader]="false"
```

Add styles.scss:

```scss
.material {
  @import "~@ng4746/aside/styles/simple";
}
```


| Inputs             |                           |
| ------------------ | ------------------------- |
| position           | _Type: "right"  "left"_   |
|                    | Default value: right      |
| showOverlay        | _Type: boolean_           |
|                    | Default value: _true_     |
| closeOnEscape      | _Type: boolean_           |
|                    | Default value: _true_     |
| showDefaultFooter  | _Type: boolean_           |
|                    | Default value: _true_     |
| showDefaultHeader  | _Type: boolean_           |
|                    | Default value: _true_     |
| title              | _Type: string_            |
| cancelButtonTitle  | _Type: string_            |
| submitButtonTitle  | _Type: string_            |


| Outputs            |                           |
| ------------------ | ------------------------- |
| cancel             | Emits an event   |
| submit             | Emits an event   |

## MIT License
