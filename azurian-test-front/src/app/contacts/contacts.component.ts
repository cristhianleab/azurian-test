import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {

  constructor(public restApi: ContactsService, private formBuilder: FormBuilder) { }

  addContactForm: FormGroup;
  updateContactForm: FormGroup;
  flagValidation: boolean;
  contactArray;

  clickContact(contact) {
    this.updateContactForm = this.formBuilder.group({
      'id': contact.id,
      'name': contact.name,
      'lastname': contact.lastname,
      'email': contact.email,
      'phone': contact.phone
    });

    this.flagValidation = true;
  }
  
  getContacts() {
    this.restApi.getContacts().subscribe((data) => {
      this.contactArray = data;
    });
  }

  addContact(form: NgForm) {
    this.restApi.postContact(form)
      .subscribe(res => {
        alert('Contact added');
        this.getContacts();
        this.addContactForm.reset();
      }), (err) => {
        console.log(err);
      }
  }

  updateContact(){
    this.restApi.putContact(this.updateContactForm.value.id, this.updateContactForm.value)
      .subscribe(res => {
        alert('Contact updated');
        this.getContacts();
        this.updateContactForm.reset();
        this.flagValidation = false;
      }), (err) => {
        console.log(err);
      }
  }

  deleteContact() {
    this.restApi.deleteContact(this.updateContactForm.value.id)
      .subscribe(res => {
        alert('Contact deleted');
        this.getContacts();
        this.updateContactForm.reset();
        this.flagValidation = false;
      }), (err) => {
        console.log(err);
      }
  }

  ngOnInit() {
    this.getContacts();

    this.addContactForm = this.formBuilder.group({
      'name': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required]
    });

    this.updateContactForm = this.formBuilder.group({
      'id': [null, Validators.required],
      'name': [null, Validators.required],
      'lastname': [null, Validators.required],
      'email': [null, Validators.required],
      'phone': [null, Validators.required]
    });

  }
}
