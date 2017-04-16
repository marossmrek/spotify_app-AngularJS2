import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { Artist } from './../../Artist';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchMusicByString : string;
  searchResult : Artist[];

  constructor( private spotify: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
  	this.spotify.searchMusic(this.searchMusicByString).subscribe(res => {
  		console.log(res);
		this.searchResult = res.artists.items;
  	}, err => {
  		this.searchResult = [];
  	});
  }

}
