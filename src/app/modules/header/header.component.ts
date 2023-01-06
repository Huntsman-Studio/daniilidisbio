import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @ViewChild("logo") logo!: ElementRef;
  @ViewChild("logoBg") logoBg!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // On scroll sticky header
    fromEvent(window, "scroll").subscribe((event) => {
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
    })
  }
}
