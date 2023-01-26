import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDeComponent } from './menu-de.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MenuDeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    MenuDeComponent
  ]
})
export class MenuDeModule { }
