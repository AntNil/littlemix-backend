import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  categories: string [];
  searchString: string;
  selectedCategory: string;
  category: string;

  constructor() {
    this.categories = new Array();
  }

  ngOnInit() {
    this.setCategories();
    console.log(this.categories);
  }


  setCategories() {
    this.categories.push("Dairy", "Vegan", "Meat", "Fish", "Poultry");
  }

  searchButtonPressed() {

  }
  select(value){


}
}
