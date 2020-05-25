import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from 'src/shared/youtube-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  items;
  error;
  constructor(private service: YoutubeServiceService,
    private route: Router) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.items = data['items'];
      console.log(this.items);
    },
      err => {
        this.error = err.message;
        console.log('HTTP Error', err);
      });
  }

}
