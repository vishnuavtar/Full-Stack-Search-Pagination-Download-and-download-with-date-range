import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from  '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {


  private baseUrl="http://localhost:8080/getall";
  private baseUrl2="http://localhost:8080/add";

  constructor(private http:HttpClient) { }

  productList():Observable<any>{
  return this.http.get(`${this.baseUrl}`);
  }

  productAdd(product:Product):Observable<Product>{
  return this.http.post<Product>(this.baseUrl2, product);
  }
}
