import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
@Injectable({
    providedIn: 'root'

})
export class MockService {
    constructor(private http: HttpClient){}
    getAllProducts():Observable<any>{
        const url ='https://utc2ranking.azurewebsites.net/api/Product'
        return this.http.get(url)
    }
    getProductDetail(id:any):Observable<any>{
        const url =`https://utc2ranking.azurewebsites.net/api/Product/GetById?id=${id}`
        return this.http.get(url)
    }
    getSearchProducts(value:any):Observable<any>{
        console.log(value, '..........')
        const url =`https://utc2ranking.azurewebsites.net/api/Product/Search?keysearch=${value.search}`
        return this.http.get(url, value.search)
    }
    getSearchProductsVintage(value:any):Observable<any>{
        console.log(value, '..........')
        const url =`https://utc2ranking.azurewebsites.net/api/Product/Category?category=vintage
        `
        return this.http.get(url, value)
    }
}