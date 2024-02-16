import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{

 productArray: Product[] = [];

 totalPrice: number = 0;

  constructor(private cartService: CartService){}




  ngOnInit(): void {

    this.cartService.getCartItems().subscribe( obj => {

      console.log(obj);
      this.productArray = obj; 

      this.totalPrice = this.productArray.reduce((accumulator, item) => accumulator + item.price, 0);
    
      console.log("Total price " + this.totalPrice) 

    })
  

      
  }


  clear(): void{

    this.cartService.clearCart().subscribe(ob => console.log(ob))

  }

  checkout(){

   this.cartService.addToCart(this.productArray[0]).subscribe(obj => console.log(obj))
  }  

 


}
