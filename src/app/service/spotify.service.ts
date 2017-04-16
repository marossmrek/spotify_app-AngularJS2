import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SpotifyService {

  searchUrl : string;

  constructor(private http: Http) { }

  searchMusic(search:string, type = "artist"){
  	this.searchUrl="https://api.spotify.com/v1/search?q="+search+"&type="+type+"&offset=0&limit=20";
  	return this.http.get(this.searchUrl).map(res => res.json());
  }

}