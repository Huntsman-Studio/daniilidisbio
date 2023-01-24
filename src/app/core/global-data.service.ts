import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from '../shared/interfaces/category';
import { IPlant } from '../shared/interfaces/plant';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _httpClient: HttpClient) { }

  showHideMenu(value: boolean): void {
    this.menu.next(value);
  }

  // Get categories
  getCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>('assets/data/categories.json');
  }

  // Get plants
  getPlants(): Observable<IPlant[]> {
    return this._httpClient.get<IPlant[]>('assets/data/plants.json');
  }
}