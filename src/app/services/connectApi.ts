import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"
import { Observable } from "rxjs";
import { category, getById, searchProduct, urlRequest } from "./rootContant";
@Injectable({
    providedIn: 'root'
})
export class connectApi {
    constructor(private http: HttpClient){}
    getListProduct():Observable<any>{
        const url = urlRequest
        return this.http.get(url)
    }
    getProductDetail(id:any):Observable<any>{
        const url = urlRequest + getById + `${id}`
        return this.http.get(url)
    }
    getSearchListProduct(search:any):Observable<any>{
        const url = urlRequest + searchProduct + `${search}`
        return this.http.get(url, search)
    }
    getSearchProductCategory(search:any):Observable<any>{
        const url = urlRequest + category + `${search}`
        return this.http.get(url, search)
    }
}