import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookService } from './services/book.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes : Routes =[
  {path: 'books', component:BooksListComponent},
  {path: 'category/:id', component:BooksListComponent},
  {path: '', redirectTo:'/books', pathMatch:'full'},
  {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    RouterModule.forRoot(routes)
  ],
  providers: [
    BookService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
