import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchStr;
  ress;
  constructor(private spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  searchMusic(){
    this.spotifyService.searchMusic(this.searchStr).subscribe(res =>{
       this.ress = res;
       console.log(this.ress.artists.items);
    })
  }
  

}
