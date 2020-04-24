import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { CreateEventComponent } from './create-event.component';


@Injectable()

export class EventRouteDeactivator implements CanDeactivate<CreateEventComponent> {
     
    canDeactivate(component: CreateEventComponent) {
       
        if (component.isDirty){
          return window.confirm('Changes have been made. Are you sure you want leave this page?')
        }
        else{
          return true;
        }
        return true
    }

}