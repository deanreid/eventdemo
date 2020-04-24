import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
	
	@Component ({
        //commented out since this will be it own view
	 // selector: '???-???',
      templateUrl: './event-details.component.html',
      styles: [`
      .container {padding-left:20px; padding-right: 20px;}
      .event-image {height: 100px;}
      `]
	  //styleUrl: ['./?????.css']
	})
	
 export class EventDetailsComponent implements OnInit {   
   event: any;
   id: number;
   @Output() eventClick: EventEmitter<any>= new EventEmitter();

   constructor (private eventSrv: EventService, private route: ActivatedRoute) {}
   
   ngOnInit(): void {    
    this.event = this.eventSrv.getEvent(+this.route.snapshot.params['id'])
        
    }
}