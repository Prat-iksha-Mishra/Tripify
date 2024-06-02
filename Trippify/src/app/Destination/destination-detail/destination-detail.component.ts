import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { LocationService } from '../../Services/location.service';

@Component({
  selector: 'app-destination-detail',
  templateUrl: './destination-detail.component.html',
  styleUrl: './destination-detail.component.css'
})
export class DestinationDetailComponent implements OnInit {
  locationId:any;
  location:any = [];

  constructor(private route: ActivatedRoute,private locationSrv:LocationService) {
  }
  ngOnInit(): void {

    this.route.paramMap.subscribe((params: ParamMap) => {
      debugger;
      let id = params.get('id');
      this.locationId = id;
      console.log(id);
    })
     this.getLocation()
  }

  getLocation(){
    console.log(this.locationId)
    this.locationSrv.getLocationById(this.locationId).subscribe((res:any)=>{
      debugger
     this.location = res;
     console.log("Loaction", this.location);
    })
    console.log('Execution failed');
  }

}
