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

  categories: ICategory[] = [
    // { imagePath: 'assets/images/categories.png', title: 'Οπωροφόρα', color: '#DD3E54', slug: 'oporofora' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    // { imagePath: 'assets/images/categories.png', title: 'Δασικά', color: '#7B413A', slug: 'dasika' }
  ];

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
