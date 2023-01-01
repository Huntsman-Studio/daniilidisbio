import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor () {
    this.contactForm = this.contactFormValidation();
  }

  ngOnInit(): void {
    
  }

  // create a new contact
  contactFormValidation(): FormGroup {
    return new FormGroup({

    });
  }

  submitContactForm(form: FormGroup): void {}
}
