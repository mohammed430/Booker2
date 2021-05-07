import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('http://localhost:3000');

  }

  getBook(id):Observable<Book> {
    return this.http.get<Book>('http://localhost:3000/' + id);
  }

  add_book(data){
    console.log(data);
    return this.http.post('http://localhost:3000',data);
  }

  update_book(data, id){
    console.log(data, id);
    return this.http.put('http://localhost:3000/' + id,data);
  }

}



