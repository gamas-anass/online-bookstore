import { Component, OnInit } from '@angular/core';
import { Book } from "../../common/book";
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-books-list',
  //templateUrl: './books-list.component.html',
  templateUrl: './books-grid.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: Book[]
  currentCategoryId: number;
  // static values for Book[] 
  /*books : Book[] = [
    {
      sku: "text-100",
      name: "Programation C",
      description: "C langage ",
      unitPrice: 120,
      imageUrl: "assets/images/book/text-100.png",
      active:true,
      unitsInStock:300,
      createdOn:  new Date(),
      updatedOn: null,
    
    
    },
    {
      sku: "text-101",
      name: "Programation Java",
      description: "Java langage ",
      unitPrice: 120,
      imageUrl: "assets/images/book/text-101.png",
      active:true,
      unitsInStock:300,
      createdOn:  new Date(),
      updatedOn: null,
    
    
    },
    {
      sku: "text-102",
      name: "Programation Phyton",
      description: "Phyton langage ",
      unitPrice: 120,
      imageUrl: "assets/images/book/text-102.png",
      active:true,
      unitsInStock:300,
      createdOn:  new Date(),
      updatedOn: null,
    
    
    },
    {
      sku: "text-103",
      name: "Programation Javascript",
      description: "Javascript langage ",
      unitPrice: 120,
      imageUrl: "assets/images/book/text-103.png",
      active:true,
      unitsInStock:300,
      createdOn:  new Date(),
      updatedOn: null,
    
    
    },
    {
      sku: "text-104",
      name: "Programation Angular",
      description: "Angular langage ",
      unitPrice: 120,
      imageUrl: "assets/images/book/text-104.png",
      active:true,
      unitsInStock:300,
      createdOn:  new Date(),
      updatedOn: null,
    
    
    },
    {
      sku: "text-105",
      name: "Programation Sql",
      description: "Sql langage ",
      unitPrice: 120,
      imageUrl: "assets/images/book/text-105.png",
      active:true,
      unitsInStock:300,
      createdOn:  new Date(),
      updatedOn: null,
    
    
    }

  ]*/

  constructor(private _bookService: BookService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    //this.listBooks();
    this._activatedRoute.paramMap.subscribe(() => {
      this.listBooks();
    })

  }

  listBooks() {

    const hasCategoryId: boolean = this._activatedRoute.snapshot.paramMap.has('id');

    if (hasCategoryId) {

      this.currentCategoryId = +this._activatedRoute.snapshot.paramMap.get('id');
    } else {

      this.currentCategoryId = 1;
    }


    this._bookService.getBooks(this.currentCategoryId).subscribe(
      /* data => { 
 
         console.log(data);
       }*/

      data => this.books = data


    )


  }

}
