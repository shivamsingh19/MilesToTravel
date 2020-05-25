import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YoutubeServiceService {

  constructor(private http: HttpClient) { }

  public getData(token: string = '') {
    const api = `1https://www.googleapis.com/youtube/v3/search?key=AIzaSyCQ2Hl9iWLXGMGVw349Hyw0m3YdxGI67Sg&channelId=UCenr1gK2iH6kBPmaxhNZvWg&part=snippet,id&order=date&maxResults=9&pageToken=${token}`
    return this.http.get(api).pipe(
      catchError(err => {
        return throwError(err);
      })
    );
  }
}
