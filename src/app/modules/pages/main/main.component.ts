import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalDataService } from 'src/app/core/global-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  menu: boolean | undefined;

  constructor(
    private _meta: Meta, 
    private _title: Title, 
    private _globalDataService: GlobalDataService) {}

    ngOnInit(): void {
      this._globalDataService.menu.subscribe(res => {
        this.menu = res;
      })
    }

  // open menu
  showMenu(): void {
    this._globalDataService.showHideMenu(true);
  }
}
