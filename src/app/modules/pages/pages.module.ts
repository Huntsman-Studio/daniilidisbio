import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { PlantComponent } from './plant/plant.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { BioComponent } from './main/bio/bio.component';
import { ContactComponent } from './main/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainComponent,
    CategoryComponent,
    PlantComponent,
    HomeComponent,
    AboutComponent,
    BioComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
