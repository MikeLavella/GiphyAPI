import { Component } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  constructor(private dataService: GiphyService) { }

  search(searchTerm: string) {
    if (searchTerm !== '') {
      this.dataService.searchGifs(searchTerm)
    }

  }
}
