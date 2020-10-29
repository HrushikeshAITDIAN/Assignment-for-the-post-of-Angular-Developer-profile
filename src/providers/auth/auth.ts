import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'





@Injectable()
export class AuthProvider {
  data
  constructor(public http: HttpClient) {
    console.log('Hello AuthProvider Provider');
  }
  call(){
    console.log("Call provider2")
    
  this.http.get('https://restcountries.eu/rest/v2/all')
  .subscribe(data => {
  console.log("Data is",data)
    this.data = data;
   localStorage.setItem("DATA",JSON.stringify(data))
  });
  }


}
