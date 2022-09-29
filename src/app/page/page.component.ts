import { Component, OnInit } from '@angular/core'
import { MockService } from '../services/apiServices';

@Component({
    selector: 'app-header',
    templateUrl: './page.component.html',
    styleUrls: ['../app.component.scss']
})
export class HeaderComponent implements OnInit {
    listData: any= [];
    constructor(private apiServices: MockService){ }
    ngOnInit(): void {
        console.log("aaaa")
        this.apiServices.getAllProducts().subscribe((res)=>{
            console.log("ress", res)
            this.listData = res;
        })
    }

    onSubmitForm(value:any){
        this.apiServices.getSearchProducts(value).subscribe((res)=>{
            console.log("ress", res)
            this.listData = res;
        })
    }
    
    onSubmitFormVintage(value:any){
        this.apiServices.getSearchProductsVintage(value).subscribe((res)=>{
            console.log("ress", res)
            this.listData = res;
        })
    }
} 