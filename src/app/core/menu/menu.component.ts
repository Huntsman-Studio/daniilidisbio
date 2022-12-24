import { Component, OnInit} from '@angular/core';
import { ICategory } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  categories: ICategory[] = [
    { imagePath: 'assets/images/categories.png', title: 'Οπωροφόρα', color: '#DD3E54', slug: 'oporofora' },
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    { imagePath: 'assets/images/categories.png', title: 'Δασικά', color: '#7B413A', slug: 'dasika' }
  ];

  constructor () {}

  ngOnInit(): void {
    this.getCategories();
  }

  // Get categorie
  getCategories(): ICategory[] {
    return this.categories;
  }

  // Get category contents
  getCategoryContent(cat: ICategory): string {
    let res = "hover:shadow-[0px_20px_23px_-15px_" + cat.color + "] rounded-2xl bg-cover bg-no-repaeat w-full pt-32 bg-[url('" + cat.imagePath + "')]";
    console.log(res);
    // return res;

    return 'bg-[url(\''+ cat.imagePath +'\')] rounded-2xl bg-cover bg-no-repaet w-full pt-32 hover:shadow-[0px_20px_23px_-15px_'+ cat.color +']';
  }
}
