import { Component, OnInit} from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category';
import { GlobalDataService } from '../global-data.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: boolean | undefined;

  categories: ICategory[] = [];

  constructor (private _globalDataService: GlobalDataService) {}

  ngOnInit(): void {
    this.getCategories();
    this._globalDataService.menu.subscribe( val => {
      this.menu = val;
    })
  }

  // Get categorie
  getCategories(): ICategory[] {
    this._globalDataService.getCategories().subscribe( res => {
      this.categories = res;
    });
    return this.categories;
  }

  // Get category contents
  getItemColor(cat: ICategory): string {
    return 'bg-['+cat.color+']';
  }

  closeMenu(): void {
    this._globalDataService.showHideMenu(false);
  }
}
