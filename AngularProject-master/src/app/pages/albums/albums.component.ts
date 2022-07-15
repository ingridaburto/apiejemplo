import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class albumsComponents implements OnInit {

  albums: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.albums = this.dataService.getalbums();
  }

}
