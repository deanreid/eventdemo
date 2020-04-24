import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from 'src/shared/toastr.service';
import { ActivatedRoute } from '@angular/router';

@Component({
   // selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {
  events: any[];
  constructor (private eventSrv: EventService, 
               private toastrSrv: ToastrService,
               private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data['events'] 
  }
  

  handleClickEvent(data){
    console.log('recieved: ' + data);
  }

  handleThumbnailClick(eventName){
    this.toastrSrv.success("Clicked: "+ eventName,"Action")
  }

  
}