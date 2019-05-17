import { Component, OnInit } from '@angular/core';
import { VideoService } from 'src/app/core/service/video.service';
import { Video } from 'src/app/core/model/video';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  /**
   * Bit of cache
   */
  public videos: Video[];
  public videosSouscription: Subscription;

  public video: Video;
  public videoSouscription: Subscription;

  constructor(private videoService: VideoService) { }

  /**
   * Load all videos from the rest api to fill the cache
   */
  ngOnInit() {
    this.videosSouscription = this.videoService.subjectVideos.subscribe(
        (videos: Video[]) => this.videos = videos,
        () => this.videos = null
    );
    this.videoSouscription = this.videoService.subjectVideo.subscribe(
        (video: Video) => this.video = video,
        () => this.video = null
    );
    this.getAll();
  }

  ngOnDestroy() {
    this.videoSouscription.unsubscribe();
    this.videosSouscription.unsubscribe();
  }

  /**
   * Get all videos
   */
  public getAll() {
    this.videoService.findAll();
  }

  /**
   * Get matching video
   */
  public getByUuid(uuid: string) {
    this.videoService.findByUuid(uuid);
  }
}
