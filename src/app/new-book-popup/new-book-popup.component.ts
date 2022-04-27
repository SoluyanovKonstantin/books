import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PopupService } from '../popup.service';

@Component({
  selector: 'app-new-book-popup',
  templateUrl: './new-book-popup.component.html',
  styleUrls: ['./new-book-popup.component.css']
})
export class NewBookPopupComponent implements OnInit {

  newBookForm : FormGroup;

  constructor(private popupService: PopupService) { 
    this.newBookForm = new FormGroup({
              
      'name': new FormControl('', Validators.required),
      'genre': new FormControl('', [
                          Validators.required, 
                      ]),
      'author': new FormControl('', Validators.required),
      'publishedDate': new FormControl('', Validators.required),
      'publishingHouseName': new FormControl('', Validators.required),
      'bookCoverURL': new FormControl('', Validators.required),
      'description': new FormControl('', Validators.required)
  });
  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.newBookForm.value);
  }

  closeWindow(): void {
    this.popupService.hideNewBookPopup();
  }

}
