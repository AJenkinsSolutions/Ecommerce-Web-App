import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  productsArray: Product[] = [];


  constructor(private productService: ProductService){}

  
  ngOnInit(): void {

     this.productService.getAllProducts()?.subscribe(array => {

      this.productsArray = array;

    })
    
  }


  



}
