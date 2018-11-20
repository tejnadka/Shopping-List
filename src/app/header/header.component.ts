import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() recipes = new EventEmitter<boolean>();
  @Output() shoppingList = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  showRecipes() {
    this.recipes.emit(true);
    this.shoppingList.emit(false);
  }

  showShoppingList() {
    this.shoppingList.emit(true);
    this.recipes.emit(false);
  }

}
