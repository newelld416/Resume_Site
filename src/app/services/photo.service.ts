import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { map, catchError } from 'rxjs/operators';

export interface RandomPhotoContext {
  numberOfPhotos: number;
  height: number;
  width: number;
}

@Injectable()
export class PhotoService {

  constructor(private httpClient: HttpClient) { }

  getRandomPhoto(context: RandomPhotoContext): Observable<any> {
    return this.httpClient
    .get('https://picsum.photos/list')
    .pipe(map((images: Array<{id: number}>) =>
      this._randomImageUrls(images, context.numberOfPhotos, context.width, context.height)));
  }

  private _randomImageUrls(images: Array<{id: number}>, numberOfPhotos: number, width: number, height: number) {
    let photoArray = [];
    for (let i = 0; i < numberOfPhotos; i++) {
      photoArray.push(i + 1);
    }
    return photoArray.map(() => {
      const randomId = images[Math.floor(Math.random() * images.length)].id;
      return `https://picsum.photos/${width}/${height}?image=${randomId}`;
    });
  }

}
