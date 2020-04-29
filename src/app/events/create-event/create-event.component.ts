import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
import { EventService } from '../shared/event.service';

	
@Component ({
//   selector: '???-???',
   templateUrl: './create-event.component.html',
   styleUrls: ['./create-event.component.css']
})

export class CreateEventComponent implements OnInit {  
newEvent 
event: any;
@Output() eventClick: EventEmitter<any>= new EventEmitter();

constructor (private router: Router, private eventService: EventService) {}
isDirty:boolean = true;

ngOnInit(): void {

}

cancel() {
  this.router.navigate(['/events'])
}


saveEvent(formValues){
  this.eventService.saveEvent(formValues)
  this.isDirty = false
  this.router.navigate(['/events'])

}

}