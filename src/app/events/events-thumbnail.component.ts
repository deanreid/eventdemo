import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
      <!--<img [src]='event.imageUrl' alt={{event.name}} >-->
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: {{event.price | currency}}</div>
      <div>
       <span>Location: {{event.location.address}}</span>
       <span>&nbsp;</span>
       <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
     <button class="btn btn-primary" (click)="handleClickMe()">Click This!!</button>
    </div>
    `
})

export class EventsThumbnailComponent {
   @Input() event: any;
   @Output() eventClick: EventEmitter<any>= new EventEmitter();

   handleClickMe(){
       this.eventClick.emit(this.event.name);
   }
}