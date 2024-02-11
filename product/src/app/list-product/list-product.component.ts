import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent implements OnInit {

  product:Product[]=[];

  constructor(private prooductservice:ProductserviceService){}

  ngOnInit(): void {
    this.prooductservice.productList().subscribe(data=>{
      this.product=data;
    })
  }



}
