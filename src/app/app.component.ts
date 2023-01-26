import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFaviconService } from 'angular-favicon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Favicons
  faviconDark: string = 'assets/images/icons/favicon_darg.vg';
  faviconLight: string = 'assets/images/icons/favicon_light.svg';

  title = 'daniilidisbio';

  constructor (private ngxFavicon: AngularFaviconService,
              public route: Router) { }

  ngOnInit() {
    this.ngxFavicon.setFavicon(this.faviconDark, this.faviconLight);
  }
}
