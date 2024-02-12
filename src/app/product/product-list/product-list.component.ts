import { Component } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {


  constructor(private productService: ProductService){}


  getAllProducts(){

    this.productService.getAllProducts()?.subscribe(array => {

      console.log(array);

    })



  }





}
