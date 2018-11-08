import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  revipes: Recipe[] = [
    new Recipe('A Test Recipe', 'this is simply a test', 'https://commons.wikimedia.org/wiki/File:Recipe_logo.jpeg');
  ];

  constructor() { }

  ngOnInit() {
  }

}
