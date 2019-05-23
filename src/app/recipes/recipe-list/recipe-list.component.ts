import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Backzutaten_041.jpg/250px-Backzutaten_041.jpg'),
    new Recipe('A Test Recipe', 'test description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Backzutaten_041.jpg/250px-Backzutaten_041.jpg')
  ]; 

  constructor() { }

  ngOnInit() {
  }

}
