import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Constant } from './Constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private client: HttpClient) { }

  addUserApi(obj: any): Observable<any> {
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



    return this.client.post(Constant.API_END_POINT_FOR_USER + Constant.METHODS.CREATE_USER, formData, {
      headers: headers,
      params: params
    });
  }

  // GetUserApi(email:any,Password:any):Observable<any>{
  //   debugger;
  //   const params = new HttpParams().set('email', 'Password');
  //   return this.client.post(Constant.API_END_POINT_FOR_USER + Constant.METHODS.GET_USER_BY_EMAIL_PASSWORD,{
  //     params: params
  //   })
  //  }

   GetUserApi(email: string, password: string): Observable<any> {
    debugger;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const body = {
      Email: email,
      Password: password
    };

    return this.client.post(Constant.API_END_POINT_FOR_USER + Constant.METHODS.GET_USER_BY_EMAIL_PASSWORD, body, { headers: headers });
  }
}
