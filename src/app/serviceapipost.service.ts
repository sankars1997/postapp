import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceapipostService {

  constructor(private http:HttpClient) { }
  fetchpost=()=>
  {
    return this.http.get("https://jsonplaceholder.typicode.com/posts")
  }
}
