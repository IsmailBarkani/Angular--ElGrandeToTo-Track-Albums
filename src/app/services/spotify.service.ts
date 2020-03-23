import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";



@Injectable()
export class SpotifyService{
    searchUrl:string;
    artistUrl:string;
    albumsUrl:string;
    albumUrl:string;
    private access_token: string = 'BQBkssnrTprsPE5EDjUrupRBEYDG8V122WBda3L3dw5-sOnovo6LxoU6ffOs0N2Bj7iLImerGuqJTyflNsnTE3RznmBcUZaB7RDpDjguMH_5HIsDlzX6S8zRAH2khzT9DitJDDsBp6qZV0Og_yoV05ZxrEEhqU22GRsZlG-wMZr2pygx8cZtxfMUlxh2zmVfT5bYLs0RXJntlUDC-VvY1CzEMU5hXVF7PV4D8Mmv_9DIsJSUYyrIZa_ME33AiA-p2gn1WL_uBs_M-raIpocNEBSU1iCoawubqg';


    constructor(private httpClient:HttpClient){

    }

    searchMusic(str:string, type='artist'){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=6&type='+type+'&market=US';
        return this.httpClient.get(this.searchUrl, {headers: headers });
        
    }



    getArtist(id:string){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this.httpClient.get(this.artistUrl, {headers: headers });
        
    }

    getAlbums(artistId:string){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this.httpClient.get(this.albumsUrl, {headers: headers });
        
    }

    getAlbum(id:string){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this.httpClient.get(this.albumUrl, {headers: headers }).pipe(
            map(res => res)
        );
        
    }



}