import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GlobalDataService } from 'src/app/core/global-data.service';
import { ICategory } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  categories: ICategory[] = [];

  constructor (private _globalData: GlobalDataService) {
    this.contactForm = this.contactFormValidation();
  }

  ngOnInit(): void {
    this.getCategories();
  }

  // create a new contact
  contactFormValidation(): FormGroup {
    return new FormGroup({

    });
  }

  submitContactForm(form: FormGroup): void {
    console.log(form);
  }

  // Get categories
  getCategories(): ICategory[] {
    this._globalData.getCategories().subscribe(res => {
      this.categories = res;
    });
    return this.categories;
  }
}
