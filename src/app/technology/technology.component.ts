import { PhotoService } from './../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '@env/environment';
import { finalize } from 'rxjs/operators';
@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  images: any;
  isLoading: boolean;

  constructor(private httpClient: HttpClient, private photoService: PhotoService) { }

  ngOnInit() {
    this.photoService.getRandomPhoto({ numberOfPhotos: 5, width: 900, height: 500 })
        .pipe(finalize(() => { this.isLoading = false; }))
        .subscribe((response: any) => {
          this.images = response;
        });
  }

}
