import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() profile: any;

  constructor(private router : Router) { }

  ngOnInit() {

  }

  navigate(){
    localStorage.setItem("profile", JSON.stringify(this.profile));
    this.router.navigateByUrl('/detail');
  }

}
