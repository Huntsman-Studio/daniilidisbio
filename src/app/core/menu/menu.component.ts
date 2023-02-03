import { Component, OnInit} from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category';
import { GlobalDataService } from '../global-data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu: boolean | undefined;

  categories: ICategory[] = [];

  constructor (private _globalDataService: GlobalDataService, private router: Router) {}

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

  // moveTo
  moveTo(link: string): void {
    window.open("category/" + link, "_self");
    this._globalDataService.showHideMenu(false);
  }
}
