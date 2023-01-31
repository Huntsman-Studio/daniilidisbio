import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalDataService } from 'src/app/core/global-data.service';
import { IPlant } from 'src/app/shared/interfaces/plant'; 
import { ICategory } from 'src/app/shared/interfaces/category';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  plants: IPlant[] = [];

  private category: string = this.activateRoute.snapshot.paramMap.get("slug")!;
  catTitle: string = "";
  
  constructor(private meta: Meta, 
              private title: Title,
              private globalData: GlobalDataService,
              private activateRoute: ActivatedRoute,
              private location: Location) {

    this.activateRoute.params.subscribe(params => {
      this.category = params['slug'];
      this.plants = [];
      this.catTitle = "";
      this.getPlants(this.category);
      this.getCategoryTitle(this.category);
      this.title.setTitle(this.catTitle + " | Φυτώρια Δανιηλίδη");
    });
  }

  ngOnInit(): void {  }

  getPlants(cat: string): void {
    this.globalData.getPlants().subscribe((res) => {
      res.forEach(element => {
        if (element.categorySlug == cat) {
          this.plants.push(element);
        }
      });
    });
  }

  getCategoryTitle(val: string): void {
    this.globalData.getCategories().subscribe((cat) => {
      this.catTitle= cat.find(element => element.slug == val)!.title;
    });
  }

  backClicked(): void {
    this.location.back();
  }
}