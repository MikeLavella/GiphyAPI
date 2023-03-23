import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GiphyService {
gifs = new BehaviorSubject<any>([]);


  constructor(private http: HttpClient){}

  getTrendingGifs() {
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)
    .subscribe((response:any) => {
      console.log('Data', response.data)
      this.gifs.next(response.data);
      });
  
  }

  searchGifs(gifName:string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.giphyApiKey}&limit=50`)
      .subscribe((response:any) => {
        console.log('Search Data', response.data)
        this.gifs.next(response.data);
        });

  }

  getGifs() {
    return this.gifs.asObservable();
  }

}