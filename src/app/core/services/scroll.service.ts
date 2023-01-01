import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  currentSection: BehaviorSubject<string> = new BehaviorSubject<string>('home');

  sections: string[] = ['home', 'about', 'bio', 'contact'];

  constructor() {
    document.addEventListener('scroll', () => {
      this.keepTrack();
    })
  }

  keepTrack() {
    const viewHeight = window.innerHeight
    console.log(viewHeight)
    for (var section of this.sections) {
      const element = document.getElementById(section)
      if (element != null) {
        const rect = element.getBoundingClientRect();
        if (rect.top >=0 && rect.top < viewHeight / 2) {
          this.currentSection.next(section)
        }
      }
    }
  }
}
