import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  product: Product=new Product();


  
  constructor(private productservice:ProductserviceService){}

  productAdd(){
    this.productservice.productAdd(this.product).subscribe(
      data=>{
       console.log('Product added successfully', data);
    })
  }

}
