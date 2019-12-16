import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  profile: any = {}
  constructor() { }

  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem("profile"));
    console.log(this.profile)
  }

}
