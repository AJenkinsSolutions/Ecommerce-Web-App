import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/cart/cart.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  productsArray: Product[] = [];


  constructor(private productService: ProductService,private cartService: CartService, private _snackBar: MatSnackBar){}

  
  ngOnInit(): void {

     this.productService.getAllProducts()?.subscribe(array => {

      this.productsArray = array;
      console.log(this.productsArray)

    })
    
  }


  addToCart(product: Product): void{

    this.cartService.addToCart(product).subscribe({
      next: () => {
        //Invokes a pop up when the cart service method is successful
        this._snackBar.open("added to cart", "", {
          duration: 2000,
          horizontalPosition: 'right',
          verticalPosition: 'top'

        } 
        )
      }
    })

    
  }



}
