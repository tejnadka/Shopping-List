import { Component, OnInit, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newAddedItem = new EventEmitter<Ingredients>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name =  this.nameInput.nativeElement.value;
    const quantity = this.amountInput.nativeElement.value
    this.newAddedItem.emit(new Ingredients(name, quantity))
  }
}
