import { Component, OnInit } from '@angular/core';
import { LocationService } from '../Services/location.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent implements OnInit {
  allLocationList: [] = [];

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

  GetAllLocation() {
    debugger;

    this.locationSrv.getAllLocationApi().subscribe((res: any) => {
      this.allLocationList = res;
      this.locationObj = res[0];
    })
    console.log(this.allLocationList);
  }
}
