import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable()
export class SpotifyService{
    searchUrl:string;
    private access_token: string = 'BQB2yVOGPoBu6i8pfcuW6f9PrfEWet5xpnAYaSRkrekX25tgNgAr0-3AlTzGWY2w1ybOtUA5q_HYbaLWRwJCw-AKJ7Y8tC03SLnMilgCdmO4B9S5ACkVl67w0tjJVZym1Z6biQlSIwSpJmHYbnxyy1G7VRlpQkefNEix0f3g7QHwxz4l1lNeAx9x-6YVyCBu1N66dDRge_LhfLrZxDChJTI8XgbboYLqtXn9e5ifC0Qmr55wcCLtuLDz1GBr_OQna8cSLJ31eAHEkmx4WDavwFVCVdl0mzKglQ';


    constructor(private httpClient:HttpClient){

    }

    searchMusic(str:string, type='artist'){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);


        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=6&type='+type+'&market=US';
        return this.httpClient.get(this.searchUrl, {headers: headers });
        
    }

}