import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalDataService } from 'src/app/core/global-data.service';
import { IPlant } from 'src/app/shared/interfaces/plant'; 
import { ICategory } from 'src/app/shared/interfaces/category';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  plants: IPlant[] = [];
  catTitle: string = "";

  private _category: string = this._activateRoute.snapshot.paramMap.get("slug")!;
  
  constructor(private _meta: Meta, 
              private _title: Title,
              private _globalData: GlobalDataService,
              private _activateRoute: ActivatedRoute) {

    this._activateRoute.params.subscribe(params => {
      this._category = params['slug'];
      this.plants = [];
      this.getPlants(this._category);
      this.getCategoryTitle(this._category);
    })

  }

  ngOnInit(): void {
    this.getCategoryTitle(this._category);
    this.getPlants(this._category);
  }

  getPlants(cat: string): void {
    this._globalData.getPlants().subscribe((res) => {
      res.forEach(element => {
        if (element.categorySlug == cat) {
          this.plants.push(element);
        }
      });
    });
  }

  getCategoryTitle(val: string): void {
    this._globalData.getCategories().subscribe((cat) => {
      this.catTitle = cat.find(element => element.slug == val)!.title;
    });
  }
}