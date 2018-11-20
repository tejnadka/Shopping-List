import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isReceipeSelected: boolean = true;
  isShoppingListSelected: boolean = false;

  constructor() {

  }

  recipesSelected(selected: boolean) {
    this.isReceipeSelected = selected;
  }

  shoppingListSelected(selected: boolean) {
    this.isShoppingListSelected =selected;
  }
}
