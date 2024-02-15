import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private getAllEndPoint: string = '/cart';

  private post: string = '/cartSave';

  private del: string = '/cartDel';

  getCartItems():Observable<Product[]>{

    return this.http.get<Product[]>(environment.API_BASE_URL + this.getAllEndPoint);
  }



  addToCart(obj :Product): Observable<Product>{

    const body: Product = obj;

    return this.http.post<Product>(environment.API_BASE_URL + this.post, body);

  } 


  clearCart(): Observable<void>{

   
    return this.http.delete<void>(environment.API_BASE_URL + this.del)

  }




}


