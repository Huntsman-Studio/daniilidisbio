import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { GlobalDataService } from 'src/app/core/global-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _menu: boolean | undefined;
  @ViewChild("logo") logo!: ElementRef;
  @ViewChild("logoBg") logoBg!: ElementRef;

  constructor(private _globalData: GlobalDataService, public router: Router) {}

  ngOnInit(): void {
    this._globalData.menu.subscribe( res => {
      this._menu = res;
    });
    // On scroll sticky header
    fromEvent(window, "scroll").subscribe((event) => {
      // console.log("booom");
      if (!this._menu) {
        let screenHeight: number = screen.height - 88;
        if (window.pageYOffset >= screenHeight && window.pageYOffset <= screenHeight * 2) {
          this.logoBg.nativeElement.style.background = '#333628';
          this.logo.nativeElement.style.fill = '#FFF';
        } else if (window.pageYOffset >= screenHeight * 2 && window.pageYOffset < screenHeight * 3) {
          this.logoBg.nativeElement.style.background = '#061C12';
        } else if (window.pageYOffset >= screenHeight * 3) {
          this.logoBg.nativeElement.style.background = '#30231A';
        } else {
          // console.log("else");
          this.logoBg.nativeElement.style.background = '#EFF1F0';
          this.logo.nativeElement.style.fill = '#092B1B';
        }
      }
    })
  }
}
