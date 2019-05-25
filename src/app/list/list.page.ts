import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage {
  @ViewChild(IonInfiniteScroll) ionInfiniteScroll: IonInfiniteScroll;
  products: any;
  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  pageProduct =  10;

  constructor(private productService: ProductService ) {
    this.productService.getPosts({ _page: this.pageProduct})
      .subscribe(products => {
        this.products = products;
      });
  }

  loadData(event) {
    setTimeout(() => {
      event.target.complete();
      this.pageProduct = this.pageProduct + 10;
      this.productService.getPosts({ _page: this.pageProduct})
      .subscribe(products => {
        const productsAlias = products;
        productsAlias.forEach(product => {
          this.products.push(product);
        });
      });
      if (ProductService.length === 100) {
        event.target.disable = true;
      }
    }, 1000);
  }

  trackByFn(index) {
    return index;
  }
  addToCart(id) {
    console.log(id);
  }
}
