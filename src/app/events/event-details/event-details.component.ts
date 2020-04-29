import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { IEvent, ISessions } from '../shared/event.model';
	
	@Component ({
        //commented out since this will be it own view
	 // selector: '???-???',
      templateUrl: './event-details.component.html',
      styles: [`
      .container {padding-left:20px; padding-right: 20px;}
      .event-image {height: 100px;}
      a {cursor:pointer}
      `]
	  //styleUrl: ['./?????.css']
	})
	
 export class EventDetailsComponent implements OnInit {   
   event: IEvent;
   id: number;
   @Output() eventClick: EventEmitter<any>= new EventEmitter();
   addMode: boolean;

   constructor (private eventSrv: EventService, private route: ActivatedRoute) {}
   
   ngOnInit(): void {    
    this.event = this.eventSrv.getEvent(+this.route.snapshot.params['id'])
        
    }
    addSession(){
        this.addMode=true
    }
    cancelAddSession() {
      this.addMode=false
    }
    
    saveNewSession(session:ISessions){
      const nextId = Math.max.apply(null, this.event.sessions.map(s=>s.id));
      session.id = nextId +1
      this.event.sessions.push(session)
      this.eventSrv.updateEvent(this.event)
      this.addMode = false
    }

    
}