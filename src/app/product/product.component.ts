import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { connectApi } from '../services/connectApi';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['../app.component.scss']
})
export class ProductItemComponent implements OnInit {

  constructor(
    private activatedRoute:ActivatedRoute,
     private apiServices: connectApi) {


   }
productItem:any
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.apiServices.getProductDetail(params.id).subscribe((res)=>{
        this.productItem = res;
    })      
    })
  }

}
