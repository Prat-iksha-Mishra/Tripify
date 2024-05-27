import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  private baseUrl = 'C:\Users\Asus\Downloads\Tripify\Tripify\Trippify\Images'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  getImageUrl(filename: string): string {
    return `${this.baseUrl}/Image?filename=${filename}`;
  }
}
