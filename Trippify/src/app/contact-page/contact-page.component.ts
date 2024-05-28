import { Component, OnInit } from '@angular/core';
import { ContactUsService } from '../Services/contact-us.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.css'
})
export class ContactPageComponent implements OnInit {
  query: any[] = [];
  contactObj: any = {
    userName: '',
    userEmail: '',
    userComment: ' '
  }


  constructor(private contactUsSrv: ContactUsService) {
  }
  ngOnInit(): void {
    this.getCxQuery()
  }

  contactUs() {
    debugger;
    this.contactUsSrv.contactUsApi(this.contactObj).subscribe((res: any) => {
      this.contactObj = res;
    })
    console.log('Success Fully Excecuted', this.contactObj)
  }

  async getCxQuery() {
    try {
      debugger;
      const res = await this.contactUsSrv.getCustomerQueryApi().toPromise();
      this.query = res;
      console.log('Query Successfully Executed', this.query);
    } catch (error) {
      console.error('Error occurred while fetching customer queries', error);
    }
  }

  showQueries: boolean = false;

  toggleQueries() {
    this.showQueries = !this.showQueries;
  }

}
