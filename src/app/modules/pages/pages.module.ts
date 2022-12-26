import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { PlantComponent } from './plant/plant.component';



@NgModule({
  declarations: [
    MainComponent,
    CategoryComponent,
    PlantComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
