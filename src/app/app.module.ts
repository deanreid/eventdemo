import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavbarComponent} from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from 'src/shared/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventRouteDeactivator } from './events/create-event/event-route-deactivator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { AuthService } from './user/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    NavbarComponent,
    Error404Component
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
   NavbarComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventRouteDeactivator,
    EventListResolver,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }



