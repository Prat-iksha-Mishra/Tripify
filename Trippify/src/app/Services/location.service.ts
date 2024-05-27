import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { Constant } from './Constant/Constant';
import { METHODS } from 'http';
import { query } from 'express';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  parentUrl = ''
  constructor(private client: HttpClient) { }

  addLocationApi(obj: any, file: File): Observable<any> {
    debugger;
    const headers = new HttpHeaders({
      'Token': '123456'
    });
    const params = new HttpParams().set('User', 'Pratiksha');
    const formData: FormData = new FormData();

    // Append all the properties from obj to formData
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        formData.append(key, obj[key]);
      }
    }

    // Append the file to formData
    formData.append("Picture", file, file.name);

    return this.client.post(Constant.API_END_POINT + Constant.METHODS.CREATE_LOCATION, formData, {
      headers: headers,
      params: params
    });
  }


   getAllLocationApi(): Observable<any>{
    debugger;
    return this.client.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_LOCATION);
   }

   addCategoryApi(obj:any):Observable<any>{
    debugger;
    return this.client.post(Constant.API_END_POINT + Constant.METHODS.CREATE_CATEGORY,obj)
   }

   addStateApi(obj:any):Observable<any>{
    debugger;
    return this.client.post(Constant.API_END_POINT + Constant.METHODS.CREATE_CATEGORY,obj)
   }

   getStateApi():Observable<any>{
    debugger;
    return this.client.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_STATE);
   }

   getCategoryApi():Observable<any>{
    debugger;
    return this.client.get(Constant.API_END_POINT + Constant.METHODS.GET_ALL_CATEGORY);
   }

   getLocationById(id: any): Observable<any> {
    console.log("Id of location", id);
    const url = `${Constant.API_END_POINT}${Constant.METHODS.GET_LOCATION_BY_ID}?id=${id}`;
    return this.client.get(url);
  }

}
