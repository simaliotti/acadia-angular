import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/core/model/video';
import { Subscription } from 'rxjs';
import { VideoService } from 'src/app/core/service/video.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-stream',
  templateUrl: './video-stream.component.html',
  styleUrls: ['./video-stream.component.scss']
})
export class VideoStreamComponent implements OnInit {

  public video: Video;
  public videoSubscription: Subscription;
  public url: string;

  constructor(private videoService: VideoService, private route: ActivatedRoute) { }

  /**
   * Load all videos from the rest api to fill the cache
   */
  ngOnInit() {
    this.videoSubscription = this.videoService.subjectVideo.subscribe(
        (video: Video) => {
          this.video = video;
          console.log('OK video.uuid = ' + this.video.uuid);
        },
        () => {
          this.video = null;
          console.log('Eh merde.');
        });
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.url = "http://localhost:8083/api/video/part/"+uuid;
    this.getByUuid(uuid);
  }

  ngOnDestroy() {
    this.videoSubscription.unsubscribe();
  }

  /**
   * Get all video and store it in here
   */
  public getByUuid(uuid: string) {
    this.videoService.findByUuid(uuid);
  }
}
