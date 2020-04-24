import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, CanDeactivate } from '@angular/router';
	
@Component ({
//   selector: '???-???',
   templateUrl: './create-event.component.html'
//   styleUrl: ['./?????.css']
})

export class CreateEventComponent implements OnInit {   
event: any;
@Output() eventClick: EventEmitter<any>= new EventEmitter();

constructor (private router: Router) {}
isDirty:boolean = true;

ngOnInit(): void {

}

cancel() {
  this.router.navigate(['/events'])
}
saveEvent(){

}

}