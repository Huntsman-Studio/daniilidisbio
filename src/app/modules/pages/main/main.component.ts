import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild("home") home!: ElementRef;
  @ViewChild("about") about!: ElementRef;
  @ViewChild("bio") bio!: ElementRef;
  @ViewChild("contact") contact!: ElementRef;

  constructor(
    private _meta: Meta, 
    private _title: Title, 
    private _globalDataService: GlobalDataService) {}

  ngOnInit(): void {
    fromEvent(window, "scroll").subscribe((event) => {
      console.log("scroll", event);
    })
  }

  // open menu
  showMenu(): void {
    this._globalDataService.showHideMenu(true);
  }
}
