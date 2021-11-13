import {Component} from '@angular/core';
import {EntityEditComponent} from "../edit/entity-edit.component";

@Component({
  selector: 'app-edit',
  templateUrl: './entity-view.component.html',
  styleUrls: ['./entity-view.component.scss']
})
export class EntityViewComponent extends EntityEditComponent {
}
