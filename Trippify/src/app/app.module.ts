import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BlogForFrontPageComponent } from './blog-for-front-page/blog-for-front-page.component';
import { DestinationPageComponent } from './destination-page/destination-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { HotelBookingFormComponent } from './Booking/hotel-booking-form/hotel-booking-form.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FileComponent } from './file/file.component';
import { DestinationListComponent } from './Destination/destination-list/destination-list.component';
import { DestinationDetailComponent } from './Destination/destination-detail/destination-detail.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    BlogForFrontPageComponent,
    DestinationPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HotelBookingFormComponent,
    FileComponent,
    DestinationListComponent,
    DestinationDetailComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
