import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';
import { ActivatedRoute } from '@angular/router';
import { map } from "rxjs/operators";
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album;
  constructor(private spotifyService:SpotifyService,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params['id']))
      .subscribe((id) => {
          this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });
      })
  }

}
