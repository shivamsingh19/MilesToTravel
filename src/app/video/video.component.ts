import { Component, OnInit } from '@angular/core';
import { YoutubeServiceService } from 'src/shared/youtube-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  items;
  constructor(private service: YoutubeServiceService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data => {
      console.log(data);
      this.items = data['items'];
      console.log(this.items);
    });
  }

}
