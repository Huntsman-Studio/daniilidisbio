import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GlobalDataService } from 'src/app/core/global-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

  constructor(
    private _meta: Meta, 
    private _title: Title, 
    private _globalDataService: GlobalDataService) {}

    ngOnInit(): void {}

  // open menu
  showMenu(): void {
    this._globalDataService.showHideMenu(true);
  }
}
