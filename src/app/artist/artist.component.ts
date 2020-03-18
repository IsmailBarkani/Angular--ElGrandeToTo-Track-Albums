import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute} from '@angular/router';
import { map } from "rxjs/operators";


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist;
  constructor(private spotifyService:SpotifyService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
    map(params => params['id']))
    .subscribe((id) => {
      this.spotifyService.getArtist(id)
        .subscribe(artist => this.artist = artist);
    })
  }

}
