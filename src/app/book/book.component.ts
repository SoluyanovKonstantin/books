import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../books.service';
import { iBook } from '../library/library.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(private booksService: BooksService, private activateRoute: ActivatedRoute) { }

  book: iBook | undefined;

  ngOnInit(): void {
    this.activateRoute.params.subscribe(async param => {
      this.book = await this.booksService.getBookById(param['id']);
    })
  }

}
