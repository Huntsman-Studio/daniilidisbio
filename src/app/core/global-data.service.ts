import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {

  menu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  showHideMenu(value: boolean): void {
    this.menu.next(value);
  }
}
