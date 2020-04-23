import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
    selector: 'events-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
      <!--<img [src]='event.imageUrl' alt={{event.name}} >-->
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div [ngClass]="getStartTimeForClass()">
       [ngSwitch]="event?.time">
      Time: {{event.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault> (Normal Start)</span>
      </div>
     
      <div>Price: {{event.price | currency}}</div>      
      <div *ngIf="event?.location">
       <span>Location: {{event.location.address}}</span>
       <span>&nbsp;</span>
       <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">
       Online URL: {{event?.onlineUrl }}
      </div>
     <button class="btn btn-primary" (click)="handleClickMe()">Click This!!</button>
    </div>
    `,
    styles: [`
        .green {color: green !important;}
        .bold {font-weight:bold;}
        .thumbnail {min-height: 210px;}
        .pad-left {margin-left: 10px;}
        .well div {color: #bbb;}
    `]
})

export class EventsThumbnailComponent implements OnInit {   
   @Input() event: any;
   @Output() eventClick: EventEmitter<any>= new EventEmitter();

   constructor () {}

   ngOnInit(): void {
    
    }

   handleClickMe(){
       this.eventClick.emit(this.event.name);
   }
   
   getStartTimeForClass(){
    if (this.event && this.event.time === '8:00 am')
      return ['green','bold'];
    return [];
  }
   
}