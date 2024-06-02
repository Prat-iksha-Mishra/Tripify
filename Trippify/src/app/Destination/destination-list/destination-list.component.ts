import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../Services/location.service';

@Component({
  selector: 'app-destination-list',
  templateUrl: './destination-list.component.html',
  styleUrl: './destination-list.component.css'
})
export class DestinationListComponent implements OnInit {
  allLocationList: any = [];
  locationId: any;


  constructor(private locationSrv : LocationService ) {
  }
  ngOnInit(): void {
    this.GetAllLocation()
  }
  async GetAllLocation() {
    debugger;

    try {
        // Make the asynchronous call to getAllLocationApi and await its response
        const res: any = await this.locationSrv.getAllLocationApi().toPromise();

        // Log the response from the API
        console.log(res);

        // Assign the response to the allLocationList variable
        this.allLocationList = res;

        // Log the allLocationList
        console.log(this.allLocationList);
    } catch (error) {
        // Handle any errors that may occur
        console.error('Error fetching locations:', error);
  }
}

deleteLocation(val:any){
this.locationId = val;
this.locationSrv.deleteLocationApi(this.locationId).subscribe((res:any)=>{
})
}
}
