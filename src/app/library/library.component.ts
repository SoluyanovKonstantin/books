import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    this.booksService.getBooks().subscribe( res => {
      console.log(res);
    } )
  }

}
