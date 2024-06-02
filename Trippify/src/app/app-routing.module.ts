import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogForFrontPageComponent } from './blog-for-front-page/blog-for-front-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HotelBookingFormComponent } from './Booking/hotel-booking-form/hotel-booking-form.component';
import { DestinationListComponent } from './Destination/destination-list/destination-list.component';
import { DestinationDetailComponent } from './Destination/destination-detail/destination-detail.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    component: HomePageComponent,
    path: ''
  },
  {
    component: HotelBookingFormComponent,
    path: 'HotelBooking'
  },
  {
    component: DestinationPageComponent,
    path: 'DestinationPage'
  },
  {
    component: HomePageComponent,
    path: 'HomePage'
  },
  {
    component: BlogForFrontPageComponent,
    path: 'FrontPageBlog'
  },
  {
    component: AboutPageComponent,
    path: 'AboutPage'
  },
  {
    component: ContactPageComponent,
    path: 'ContactPage'
  } ,
  {
    component: DestinationListComponent,
    path: 'DesinationList'
  },
  {
    component: DestinationDetailComponent,
    path: 'DestinationDetail/:id'
  }
  ,
  {
    component: LoginComponent,
    path: 'LoginUser'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
