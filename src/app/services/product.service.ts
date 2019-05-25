import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url;

  constructor(
    public http: Http,
  ) {
    this.url = 'https://vast-beyond-25768.herokuapp.com/products';
  }
  getPosts(filter) {
    return this.http.get(`${this.url}?_page=${filter._page}`).pipe(map(data => data.json()));
  }
}
