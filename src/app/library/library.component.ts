import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

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

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  books: Array<iBook> = []

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(res => {
      this.books = res;
    })
  }

}
