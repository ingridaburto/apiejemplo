import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class usersComponents implements OnInit {

  users: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.users = this.dataService.getusers();
  }

}
