import { Component, OnInit, Inject } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AngularFaviconService } from 'angular-favicon';
import { DOCUMENT } from '@angular/common';

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
    public route: Router, private meta: Meta, @Inject(DOCUMENT) private document: Document) {

    // Global MetaTags
    meta.addTags([
      { charset: 'utf8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:locale', content: 'el_GR' },
      { property: 'og:site_name', content: 'Daniilidis Bio' }
    ]);
  }

  ngOnInit() {

    // Set favicon
    this.ngxFavicon.setFavicon(this.faviconDark, this.faviconLight);

    // Set HTML Language
    this.document.documentElement.lang = "el";
  }
}
