import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { LibraryComponent } from './library/library.component';

const routes: Routes = [
  { path: '', component: LibraryComponent },
  { path: 'book', component: BookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }