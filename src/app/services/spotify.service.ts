import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class SpotifyService{
    searchUrl:string;
    artistUrl:string;
    albumsUrl:string;
    private access_token: string = 'BQB-ZNvjCtRUs_8GG_6v3XBJgDajQ-R36FFaR94fijeGB6cygwuCrwDmBtAaK6poYRn35MXiMMGLx_nwwHipljnrxy-8Cp-mxkQKfVB2bbE2QtJzp8RhvMCrV390COuQ_8bMdSbC6WD_Cd5hOanJlVsXM4ek8leJoGZMou65B5oSk67dKjNACFn02AFg7CEYBIgK_H1wZktEYB9tkIdcxVOBwylESHwpNxGieVZR61sS0EUatzfFffZkoWQx2_eCIaYsMx3mucrCHqVzPKbF4aeTrGzxsg6hRA';


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



}