import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Bread', 'This is the recipe for Bread ', 'https://c1.staticflickr.com/6/5166/5307865320_fcb349210c_b.jpg'),
    new Recipe('Meatballs', 'Recipe for Meatballs', 'https://www.melarossa.it/wp-content/uploads/2014/06/ricetta-polpette-vegetariane.jpg'),
    new Recipe('Fish and Chips', 'Fish and Chips recipe', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Modern_fish_and_chips_%288368723726%29.jpg/1024px-Modern_fish_and_chips_%288368723726%29.jpg')
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
