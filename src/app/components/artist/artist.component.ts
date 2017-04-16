import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../service/spotify.service';
import { Router } from '@angular/router';
import { Artist } from '../../Artist';
import { Albums } from '../../Albums';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id:string;
  artist: Artist[];
  albums: Albums[];

  constructor(  private spotify: SpotifyService, private route: ActivatedRoute ) { }

  ngOnInit() {
  	this.route.params
      .map(params => params['id']).subscribe((id)=>{
      	this.spotify.getArtistById(id).subscribe( artist => {
      		this.artist = artist;
      	});
    });
  }
}
