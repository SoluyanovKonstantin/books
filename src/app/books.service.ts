import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, map, Observable, of } from 'rxjs';
import { iBook } from './library/library.component';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  private books: Array<iBook> = []

  getBooks(): Observable<Array<iBook>> {
    console.log(this.books.length);
    return this.books.length > 0 ? of(this.books) : this.http.get<{ items: Array<any> }>('https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=39&langRestrict=en').pipe(
      map((res) => res.items.map(book => {
          const changedBook = {
            name: book.volumeInfo.title,
            genre: book.volumeInfo.categories,
            author: {
              name: book.volumeInfo.authors
            },
            published: {
              publishingHouseName: book.volumeInfo.publisher,
              date: book.volumeInfo.publishedDate
            },
            bookCoverURL: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description
          }
          this.books.push(changedBook);
          return changedBook;
        })
      )
    )
  }

  async getBookById(id: number): Promise<iBook> {
    if(this.books.length > 0) 
      return this.books[id];
    else {
      await lastValueFrom(this.getBooks());
      return this.books[id];
    }
  }
}
