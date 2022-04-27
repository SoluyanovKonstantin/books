import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { BooksService } from '../books.service';
import { PopupService } from '../popup.service';

export interface iBook {
  name: string,
  genre: string,
  author: {
    name: Array<string>
  },
  published: {
    publishingHouseName: string,
    date: Date
  },
  bookCoverURL: string,
  description: string
}

enum Display {
  grid,
  table
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private booksService: BooksService, private popupService: PopupService) { }

  books: Array<iBook> = []
  displayType: Display = Display.grid;
  isDisplayNewBookPopUp$ = this.popupService.isDisplayNewBookPopUp$;
  Display = Display;

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(res => {
      this.books = res;
    })
    
  }

  displayNewBookPopUp(): void {
    this.popupService.showNewBookPopup();
  }

}
