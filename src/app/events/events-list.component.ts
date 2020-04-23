import { Component } from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
  event1 ={
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2022',
    time: '10:00 am',
    price: 799.99,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1055 Street',
      city: 'Chicago',
      country: 'United States'
    }
  }
  handleClickEvent(data){
    console.log('recieved: ' + data);
  }
}