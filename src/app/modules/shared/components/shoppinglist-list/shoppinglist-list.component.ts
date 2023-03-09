import { Component, Input } from '@angular/core';
import { ShoppingList } from 'src/app/model/shopping-list.model';

@Component({
  standalone: true,
  selector: 'rec-shoppinglist-list',
  templateUrl: './shoppinglist-list.component.html',
  styleUrls: ['./shoppinglist-list.component.scss'],
})
export class ShoppinglistListComponent {
  @Input() shoppingLists: ShoppingList[] = [];
}
