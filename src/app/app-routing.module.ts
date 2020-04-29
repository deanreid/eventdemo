import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventRouteDeactivator } from './events/create-event/event-route-deactivator.service';
import { EventListResolver } from './events/events-list-resolver.service';
import { zip } from 'rxjs';
import { CreateSessionComponent } from './events/event-details/create-session.component';

//REMEMBER THE ORDER OF THE ROUTES MATTER
const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent, 
   canDeactivate: [EventRouteDeactivator]},
  { path: 'events', component: EventsListComponent, resolve: {events: EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
  { path: 'events/session/new', component:CreateSessionComponent},
  { path: '404', component: Error404Component},  
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
  // { path: 'user', loadChildren: './user.module#UserModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
