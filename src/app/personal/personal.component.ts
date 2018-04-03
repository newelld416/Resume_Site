import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';

import { QuoteService } from '../services/quote.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  quote: string;
  imageURL: string;
  isLoading: boolean;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.isLoading = true;
    this.quoteService.getRandomQuote()
      .pipe(finalize(() => { this.isLoading = false; }))
      .subscribe((response: any) => {
        this.quote = response.value;
        this.imageURL = response.icon_url;
      });
  }

}
