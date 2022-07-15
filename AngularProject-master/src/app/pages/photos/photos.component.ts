import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-comments',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class photosComponents implements OnInit {

  photos: any;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.photos = this.dataService.getphotos();
  }

}
