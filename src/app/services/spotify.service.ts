import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class SpotifyService{
    searchUrl:string;
    artistUrl:string;
    private access_token: string = 'BQAvE2d8oHv1VpKS-WizVDN0VeDAnFRl6nQtYVWXw1lPUuK6Af7zkejSCSGru-U_1uL1qPR0P9HnfpSAgS0mK6lRGc7DUwtEMDNY8Jf1tFv-l-YJN4o4q3wj3dFWnhwq6c8Jk1NEwBoIZEXvpgTObeMQfbqcRl6fZEf0KQXBaBWTbB-ydWALkkdPvokkXrXLSfV5Fn_IlW3FD7CnTS-8QsEGF6Eui0VGynlE-F22FFwam19EDlwyWcKD_ammuD01mEfB2WACX820BeJ2DiTgZkym-mDHtPxRQw';


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



}