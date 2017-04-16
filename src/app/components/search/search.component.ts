import { Component} from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {

  searchMusicByString : string;
  searchResult : any[];

  constructor( private spotify: SpotifyService) { }

  searchMusic(){
  	this.spotify.searchMusic(this.searchMusicByString).subscribe(res => {
		this.searchResult = res.artists.items;
  	}, err => {
  		this.searchResult = [];
  	});
  }

}
