# ElGrandeToTo Album's Track

## Description
Creates a functional spotify search front end using entirelly Angular 9. Uses and connect to Spotify Rest API's for search and listing ElGrandeToTo's albums, into custom Angular web pages; and a page that shows selected albums details (see screenshots below). It is integrated with Spotify, so preview of albums and song can be played directly in Spotify. It uses routing mechanism in Angular for moving/showing on diferent views. As spotify API requires authentication is is necessary to register the application into Spotify Dev and then get an authorization token which is used in every API calls.
## ScreenShots
- Home Page
<p align="center">
  <img src="https://user-images.githubusercontent.com/51321011/77079940-00d5b480-69f9-11ea-8960-42a9271a75a3.png">
</p>

- Playslit
<p align="center">
  <img src="https://user-images.githubusercontent.com/51321011/77080204-4f834e80-69f9-11ea-8f4e-27d9949fda51.png">
</p>

- View in Spotify
<p align="center">
  <img src="https://user-images.githubusercontent.com/51321011/77080333-793c7580-69f9-11ea-8119-9a017755387b.png">
</p>

- Search for more Albums
<p align="center">
  <img src="https://user-images.githubusercontent.com/51321011/77080393-88232800-69f9-11ea-9b60-60b65ee48381.png">
</p>

- Example
<p align="center">
  <img src="https://user-images.githubusercontent.com/51321011/77081123-755d2300-69fa-11ea-8a03-3d63e85d6d0b.png">
</p>

## Getting Started
- Clone the repo
 ```git
 $ git clone
  ```
- Install dependency
 ```shell
 $ npm install
  ```
  - Run the app
   ``` shell
 $ ng serve --open
  ```
  - Production build
   ```shell
 $ ng build
  ```
- All of the functions in Spotify  require you to authenticate your application.
```js
private access_token: string = 'authorization token'
```
#### Get an Album
Get Spotify catalog information for a single album.
```js
getAlbum(id:string){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this.httpClient.get(this.albumUrl, {headers: headers }).pipe(
            map(res => res)
        );
        
    }
```
#### Get an Artists
Get Artist information.
```js
getArtist(id:string){
        let headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.access_token);
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this.httpClient.get(this.artistUrl, {headers: headers });
        
    }
```
