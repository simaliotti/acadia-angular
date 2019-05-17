import { Injectable } from '@angular/core';
import { Video } from '../model/video';
import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  /**
   * Cache
   */
  public video: Video;
  public videos: Video[];

  public subjectVideo: Subject<Video>;
  public subjectVideos: Subject<Video[]>;

  constructor(private http: HttpClient) {
    this.subjectVideos = new Subject();
    this.subjectVideo = new Subject();
  }

  /* Methods of the video service */

  /**
   * Get All
   */
  public findAll() {
    this.http.get('http://localhost:8083/public/videos').subscribe(
        (videos: Video[]) => this.videos = videos,
        () => this.videos = null,
        () => this.subjectVideos.next(this.videos));
  }

  /**
   * Get the one matching with the parameter uuid
   * @param uuid
   */
  public findByUuid(uuid: string) {
    this.http.get('http://localhost:8083/public/videos/' + uuid).subscribe(
        (video: Video) => {
          this.video = video;
          this.subjectVideo.next(this.video);
          console.log("success");
        },
        () => {
          console.log('error');
        });
  }


  // /**
  //  * Get the one matching with the parameter uuid
  //  * @param uuid
  //  */
  // public findByUuid(uuid: string): Observable<Object> {
  //   return this.http.get('http://localhost:8083/api/download?uuid=' + uuid);
  // }

}


