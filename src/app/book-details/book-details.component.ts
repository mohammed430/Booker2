import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../interface/book';
import { BookService } from '../service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  book:Book;
  bookform;
  bookId;

  constructor(private route:ActivatedRoute, private bookService:BookService, private formBuilder: FormBuilder) {
    this.route.paramMap.subscribe((params) => {
     this.bookId = params.get('id');
    this.bookService.getBook(this.bookId).subscribe((result) => {
      this.book = result;
      console.log(this.book)
    })
    });
    this.bookform = formBuilder.group({

      'borrowedBy':['',[Validators.required]],
    })
  }

  ngOnInit(): void {
  };

  get borrowedBy () {
    return this.bookform.get('borrowedBy')
  }



    onSubmit() {
      this.bookService.update_book(this.bookform.value, this.bookId).subscribe((result) => {
      this.bookform.reset()

      if(this.book.status === 'available'){
        this.book.status = 'unavailable';
        alert("Book borrowed ");
      }
      else{
        this.book.status = 'available';
        alert('Book returned');
      }

      }, (err) => {


        alert('Incorrect data');
        console.log(err)

      });
    }


  }





