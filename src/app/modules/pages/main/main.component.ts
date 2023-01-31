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
    private meta: Meta, 
    private title: Title, 
    private globalDataService: GlobalDataService) {

      meta.addTags([
        // Essential META Tags
        { property: 'og:title', content: 'Φυτώρια Δανιηλίδη' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'assets/images/categories/oporofora.jpg' },
        { property: 'og:url', content: 'https://daniilidisbio.gr' },
        // Non-Essential, But Recomended
        { property: 'og:description', content: 'Από τις μεγαλύτερες επιχειρήσεις φυτωρίων στην Ελλάδα, για πάνω από 40 χρόνια.' }
      ]);

      title.setTitle("Αρχική | Φυτώρια Δανιηλίδη");
    }

    ngOnInit(): void {
      this.globalDataService.menu.subscribe(res => {
        this.menu = res;
      })
    }

  // open menu
  showMenu(): void {
    this.globalDataService.showHideMenu(true);
  }
}
