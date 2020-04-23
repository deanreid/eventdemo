import { Injectable, OnInit } from '@angular/core';

declare let toastr:any;

@Injectable()
    
export class ToastrService implements OnInit {
 options:any[];

  constructor () {}
    ngOnInit(): void {
       this.options = [
           {
             preventDuplicates: true
           }
         ]
       
    }
  success(message: string, title?: string) {
    toastr.success(message, title)
  }
  info(message: string, title?: string) {
    toastr.success(message, title)
  }
  warning(message: string, title?: string) {
    toastr.success(message, title)
  }
  error(message: string, title?: string) {
    toastr.success(message, title)
  }
 
}