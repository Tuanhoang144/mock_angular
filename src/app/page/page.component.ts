import { Component, OnInit } from '@angular/core'
import { MockService } from '../services/apiServices';

@Component({
    selector: 'app-header',
    templateUrl: './page.component.html',
    styleUrls: ['../app.component.scss']
})
export class HeaderComponent implements OnInit {
    listData: any= [];
    tabIndex: number = 0;
    constructor(private apiServices: MockService){ }
    ngOnInit(): void {
        this.apiServices.getListProduct().subscribe((res)=>{
            this.listData = res;
        })
    }

    onSearchProduct(search: any){
        this.apiServices.getSearchListProduct(search).subscribe((res)=>{
            this.listData = res;
        })
    }
    
    onChangeTabCategory(search: any , tabIndex: number){
        this.tabIndex = tabIndex;
        this.apiServices.getSearchProductCategory(search).subscribe((res)=>{
            this.listData = res;
        })
    }
} 