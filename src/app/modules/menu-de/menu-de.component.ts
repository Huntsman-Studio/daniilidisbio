import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from 'src/app/core/global-data.service';
import { ICategory } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-menu-de',
  templateUrl: './menu-de.component.html',
  styleUrls: ['./menu-de.component.scss']
})
export class MenuDeComponent implements OnInit{

  categories: ICategory[] = [];

  constructor(private _globalData: GlobalDataService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  // Get categories
  getCategories(): ICategory[] {
    this._globalData.getCategories().subscribe(res => {
      this.categories = res;
    });
    return this.categories;
  }
}
