import { Component, OnInit } from '@angular/core';
import { LocationService } from '../Services/location.service';

@Component({
  selector: 'app-destination-page',
  templateUrl: './destination-page.component.html',
  styleUrl: './destination-page.component.css'
})
export class DestinationPageComponent implements OnInit {
  selectedFile:any= File;

  allStateList: any[] = []
  allCategoryList: any[] = []



  locationList: any[] = []
  StateList: any[] = []
  CategoryList: any[] = []

  stateObj: any = {
    Name: '',
    Description: ''
  }

  categoryObj: any = {
    Name: '',
    Description: ''
  }
  ProductAddedModel: boolean = false;
  StateAddedModel: boolean = false;
  CategoryAddedModel: boolean = false;

  locationObj: any = {
    "StateName": 0,
    "LocationName": '',
    "Address": '',
    "ContactNumber": '',
    "ContactPerson": '',
    "Category": 0,
    Picture: File
  }
  constructor(private locationSrv: LocationService) {
  }
  ngOnInit(): void {
    this.getAllState();
    this.getAllCategory();
  }

  onFileSelected(event:any)
  { debugger;
    const file: File = event.target.files[0];
    this.selectedFile = file;

  }
  addLocation() {
    debugger;

    this.locationSrv.addLocationApi(this.locationObj,this.selectedFile).subscribe((res: any) => {
      this.locationList = res;
      this.ProductAddedModel = true;
    })
    console.log(this.locationObj);
  }

  addState() {
    debugger;
    this.locationSrv.addStateApi(this.stateObj).subscribe((res: any) => {
      this.StateList = res;
      this.StateAddedModel = true;
    })
    console.log(this.stateObj)
  }

  addCategory() {
    debugger;
    this.locationSrv.addCategoryApi(this.categoryObj).subscribe((res: any) => {
      this.CategoryList = res;
      this.CategoryAddedModel = true;
    })
    console.log(this.categoryObj)

  }

  async getAllState() {
    try {
      const res = await this.locationSrv.getStateApi().toPromise();
      this.allStateList = res;
      console.log(this.allStateList);
    } catch (error) {
      console.error('Error fetching states', error);
    }
  }

  async getAllCategory() {
    try {
      const res = await this.locationSrv.getCategoryApi().toPromise();
      this.allCategoryList = res;
      console.log(this.allCategoryList);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  }


}
