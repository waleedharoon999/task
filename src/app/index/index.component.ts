import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  private data: any = []

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getProfiles().subscribe((data) => {
      console.log(data);
      this.data = data;
    })
  }

}
