import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { fromEvent } from 'rxjs';
import { GlobalDataService } from 'src/app/core/global-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @ViewChild("logo") logo!: ElementRef;
  @ViewChild("div", {static: true}) div!: ElementRef;

  constructor(private _meta: Meta, private _title: Title, private _globalDataService: GlobalDataService, private el: ElementRef) {
    
  }

  ngOnInit(): void {}



  // open menu
  showMenu(): void {
    this._globalDataService.showHideMenu(true);
  }

  scrollBehaviour(): void {
    // console.log(window.pageXOffset)
    // console.log(this.logo);
    // this.logo.nativeElement.style.fill = 'blue';
  }
}
