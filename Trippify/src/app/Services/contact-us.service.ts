import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from './Constant/Constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http:HttpClient) { }

  contactUsApi(obj:any):Observable<any>{
    debugger;
    const headers = new HttpHeaders({
      'Token': '123456'
    });
    const params = new HttpParams().set('User', 'Pratiksha');
    return this.http.post(Constant.API_END_POINT_FOR_CONTACT + Constant.METHODS.ADD_CUSTOMER_QUERY,obj,{
      headers: headers,
      params: params
    })

  }

  getCustomerQueryApi():Observable<any>{
    debugger
    console.log(Constant.API_END_POINT_FOR_CONTACT + Constant.METHODS.GET_CUSTOMER_QUERY)
   return this.http.get(Constant.API_END_POINT_FOR_CONTACT + Constant.METHODS.GET_CUSTOMER_QUERY)
  }


}
