import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {


  books: Book[];
  constructor(private service: BookService) { }

  ngOnInit(): void {

    this.service.getBooks().subscribe((result) => {
      console.log(result)
      this.books = result;
    }, (err) => {
      console.log(err);
    });
  }



}
