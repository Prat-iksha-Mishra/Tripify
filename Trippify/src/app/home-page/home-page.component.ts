import { Component, OnInit } from '@angular/core';
import { LocationService } from '../Services/location.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  allLocationList: any = [];
  locationObj: any = {
    "StateName": 0,
    "LocationName": '',
    "Address": '',
    "ContactNumber": '',
    "ContactPerson": '',
    "Description": '',
    "Category": 0,
    Picture: File
  }
  imageList:any = File;
  constructor(private locationSrv : LocationService) {
  }
  ngOnInit(): void {
    this.GetAllLocation()
  }
  url = "./assets/Screenshot 2024-05-23 003204.png";

  async GetAllLocation() {
    try {
        // Await the response from the service
        const res: any = await firstValueFrom(this.locationSrv.getAllLocationApi());
        // Assign the response to the respective properties
        this.allLocationList = res;
        this.locationObj = res[0];
        console.log('Location list', this.allLocationList);
    } catch (error) {
        console.error('Error fetching locations:', error);
    }
}
}
