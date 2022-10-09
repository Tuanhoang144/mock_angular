import { Component, OnInit } from '@angular/core'
import { MockService } from '../services/apiServices';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['../app.component.scss']
})
export class PageComponent implements OnInit {
    products: any= [];
    tabIndex: number = 0;
    constructor(private apiServices: MockService){ }
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
    
    onChangeTabCategory(search: any , tabIndex: number){
        this.tabIndex = tabIndex;
        this.apiServices.getSearchProductCategory(search).subscribe((res)=>{
            this.products = res;
        })
    }
} 