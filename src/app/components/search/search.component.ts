import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  searchMusicByString : string;

  constructor( private spotify: SpotifyService) { }

  ngOnInit() {
  }

  searchMusic(){
  	this.spotify.searchMusic(this.searchMusicByString).subscribe(res => {
		console.log(res.artists.items);
  	}, err => {
  		console.log('tento error: ' + err);
  	});
  }

}
