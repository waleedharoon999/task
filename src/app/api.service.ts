import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api: HttpClient) { 

  }

  getProfiles(){
    return this.api.get("https://randomuser.me/api/?results=100");
  }

}
