import { Component, OnInit } from '@angular/core'
import { connectApi } from '../services/connectApi';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['../app.component.scss']
})
export class PageComponent implements OnInit {
    products: any= [];
    tabIndex: string = '';
    constructor(private apiServices: connectApi){ }
    ngOnInit(): void {
        this.apiServices.getListProduct().subscribe((res)=>{
            this.products = res;
        })
    }

    onSearchProduct(search: any){
        this.apiServices.getSearchListProduct(search).subscribe((res)=>{
            this.products = res;
        })
    }
    
    onChangeTabCategory(search: any){
        this.tabIndex = search;
        this.apiServices.getSearchProductCategory(search).subscribe((res)=>{
            this.products = res;
        })
    }
} 
