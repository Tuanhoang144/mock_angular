import { Component, OnInit } from '@angular/core'
import { MockService } from '../services/apiServices';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
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
            console.log(this.listData)
        })
    }

    onSubmitForm(value:any){
        this.apiServices.getSearchProducts(value).subscribe((res)=>{
            console.log("ress", res)
            this.listData = res;
            console.log(this.listData)
        })
    }
    
    onSubmitFormVintage(value:any){
        this.apiServices.getSearchProductsVintage(value).subscribe((res)=>{
            console.log("ress", res)
            this.listData = res;
            console.log(this.listData)
        })
    }
} 