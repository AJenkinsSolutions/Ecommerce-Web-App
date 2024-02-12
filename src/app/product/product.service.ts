import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http: HttpClient, ) { }






  getAllProducts(): Observable<Product[]> | undefined{

    console.log("INFO: Entered into getAllProducts in ProductService");

    const getAllEndPoint: string = '/products';

    return this.http.get<Product[]>(environment.API_BASE_URL + getAllEndPoint);

  }


}
