import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get<{ items: Array<any> }>('https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=40&langRestrict=en').pipe(
      map((res) => res.items.map(book => {
          return {
            name: book.volumeInfo.title,
            genre: book.volumeInfo.categories,
            author: {
              name: book.volumeInfo.authors
            },
            published: {
              publishingHouseName: book.volumeInfo.publisher,
              date: book.volumeInfo.publisheDate
            },
            bookCoverURL: book.volumeInfo.imageLinks.thumbnail,
            description: book.volumeInfo.description
          }
        })
      )
    )
  }
}
