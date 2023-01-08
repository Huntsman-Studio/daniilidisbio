import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from '../shared/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _httpClient: HttpClient) { }

  showHideMenu(value: boolean): void {
    this.menu.next(value);
  }

  getCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>('assets/data/categories.json');
  }
}