import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";



@Injectable()
export class SpotifyService{
    searchUrl:string;
    artistUrl:string;
    albumsUrl:string;
    albumUrl:string;
    private access_token: string = 'BQC67WVuUPzIv9M6T98DLolBmjVCoUhqfytRrYd1GVhbBGpc4rKiTZ-bVJL72BXy_syccOUSyG5kXNq0SE_A93tnf_I7prV27TRRSigukxFA1ltb-mzMMrJNg1hCK7mENPy005uff2la3GImrJb-Ra1esJo8i-MOQ7jmQR9O-jfwaGy1C502M3KT_2UDWg0Ah6v5tPift3cmWqW6STN5kkxxHnOZVdq6u56g6OkPt4ePw3VimD2N394hFAY89qIwY9R_oAN_vgPRSyKlWzJh3sZ96BsCsGLgwA';


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