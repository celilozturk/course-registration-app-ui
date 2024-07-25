import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  constructor() { }


  errorHandler(err:HttpErrorResponse){
    console.log(err);
    let message="General Error!";
    if(err.status === 0){
      message="Api is not available ","error";
    }
    else if(err.status===401){
      message="You are not authorized"
    }
    else if (err.status === 404) {
      message = "API not found!", "error";
    }
    else if (err.status === 500) {
      message= "";
      for (const e of err.error.errorMessages) {
        message += e + "\n";
      }
    }
  }
}
