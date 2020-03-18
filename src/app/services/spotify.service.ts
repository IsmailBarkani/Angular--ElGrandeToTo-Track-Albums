import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class SpotifyService{
    searchUrl:string;
    private access_token: string = 'BQCa3F2nmvB9GTM_eOAgVEKlYEV8a7B8RolxXLUI1Wo3n2_r9vHpV9mXfgDBYqutseKUKZwEF7F8KHn5Bnj3B9lJ4wtRPlgpACAXS2e2EYmU_lB96S_5CqzIjLjSPE-eVYnyHdOAEid3kScMXAEP1D-6hgKCUFd-TzzZet76mK7YjbMsGw2rQ5azmyLnE02bj8sTuThK3qI268sOROIFGj_qS0lzTfuSdcVk0F3i5TPfTxx0rKOSNHycwMz0pnNkot8nEUaiB32JF1f1FlDheEabcuH2Zd0NUg';


    constructor(private httpClient:HttpClient){

    }

    searchMusic(str:string, type='artist'){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);


        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this.httpClient.get(this.searchUrl, {headers: headers });
        
    }

}