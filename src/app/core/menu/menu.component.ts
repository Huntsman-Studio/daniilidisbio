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
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
    { imagePath: 'assets/images/categories.png', title: 'Ξηροί Καρποί', color: '#83444D', slug: 'ksiri-karpoi' },
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
  getItemColor(cat: ICategory): string {
    return 'bg-['+cat.color+']';
  }
}
