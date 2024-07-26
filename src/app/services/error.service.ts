import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SwalService } from './swal.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor(private swalService:SwalService) { }


  errorHandler(err:HttpErrorResponse){
    let message="General Error!";
    if(err.status === 0){
      message="Api is not available ","error";
    }
    else if(err.status===401){
      message="You are not authorized"
    }
    else if (err.status === 404) {
      message = "Not found!", "error";
    }
    else if (err.status === 500) {
      message= err.error.message;
      // for (const e of err.error.message) {
      //   message += e + "\n";
      // }
    }
    this.swalService.callToast(message,"error");
  }
}
