import { Component, OnInit, OnDestroy } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy/giphy.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.scss']
})
export class GifsComponent implements OnInit, OnDestroy {
  gifs: any[] = [];
  subscription: Subscription = new Subscription;

  constructor(private dataService: GiphyService) { }

  ngOnInit(): void {
    this.dataService.getTrendingGifs();
    this.subscription = this.dataService.getGifs()
      .subscribe((response: any) => {
        this.gifs = response;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
