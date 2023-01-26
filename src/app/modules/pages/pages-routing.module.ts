import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { CategoryComponent } from './category/category.component';
import { PlantComponent } from './plant/plant.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'category/:slug', component: CategoryComponent },
    { path: 'plant/:slug', component: PlantComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PagesRoutingModule {}