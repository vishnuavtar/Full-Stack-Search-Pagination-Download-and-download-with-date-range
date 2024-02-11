import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import {HttpClient, HttpClientModule, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  printProoductpagination = "http://localhost:8080/api/printProduct";


   baseUrl="http://localhost:8080/api/getall";
   baseUrl2 = "http://localhost:8080/api/add";
   baseUrl3="http://localhost:8080/api/id";
   baseUrl4="http://localhost:8080/api/id";

   productDownload = "http://localhost:8080/api/download";
   productDownloadDateRange= "http://localhost:8080/api/download3";


   //get All Products
  printProduct():Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  // Save Product
  saveProduct(product:Product):Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl2}`,product);
  }

//get By Id to get product record into the form
  getById(pid:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl3}?id=${pid}`);
  }

  // delete product
  deleteProduct(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl4}?id=${id}`);
  }

  // loadRecords(): void {
  //   this.http.getPaginatedRecords(this.page, this.size).subscribe((page) => {
  //     this.malwares = page.content;
  //     this.totalElements = page.totalElements;
  //   });
  // }

  // Download Product In Excel format
  downloadExcel() {
    return this.http.get(`${this.productDownload}`, { responseType: 'blob' });
  }


  // downloadExcelDateRange(startDate: string, endDate: string):Observable<Product>{
  //  this.http.get(`${this.productDownloadDateRange}?${startDate}&${endDate}`, { responseType: 'blob' });
  // }

 // Download Product into excel format with date range
  downloadExcelDateRange(startDate: string, endDate: string): Observable<HttpResponse<Blob>> {
    const url = `${this.productDownloadDateRange}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = new HttpParams()
      .set('startDate', startDate)
      .set('endDate', endDate);

    return this.http.get(url, {
      headers: headers,
      params: params,
      observe: 'response',
      responseType: 'blob'
    });
  }


  // get All product with pagination

  getAllProductsWithPagination(page: number, size: number): Observable<any> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('size', size.toString());
    return this.http.get<any>(`${this.printProoductpagination}`, { params });
  }



  // print product by name

  findByNameProduct = "http://localhost:8080/api/by-name";

  findByName(name:string):Observable<Product[]>{
    return this.http.get<Product[]>(`${this.findByNameProduct}?name=${name}`);
  }


  searchByName(name:string,page: number, size: number):Observable<any[]>{
    
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<any[]>(`${this.findByNameProduct}?name=${name}` , {params})
  }

  getCountry(){
    return this.http.get(`${this.baseUrl}`);
  }
}
