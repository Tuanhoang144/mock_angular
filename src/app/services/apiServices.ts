import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class MockService {
    constructor(private http: HttpClient){}
    getListProduct():Observable<any>{
        const url ='https://utc2ranking.azurewebsites.net/api/Product'
        return this.http.get(url)
    }
    getProductDetail(id:any):Observable<any>{
        const url =`https://utc2ranking.azurewebsites.net/api/Product/GetById?id=${id}`
        return this.http.get(url)
    }
    getSearchListProduct(search:any):Observable<any>{
        const url =`https://utc2ranking.azurewebsites.net/api/Product/Search?keysearch=${search}`
        return this.http.get(url, search)
    }
    getSearchProductCategory(search:any):Observable<any>{
        const url =`https://utc2ranking.azurewebsites.net/api/Product/Category?category=${search}`
        return this.http.get(url, search)
    }
}