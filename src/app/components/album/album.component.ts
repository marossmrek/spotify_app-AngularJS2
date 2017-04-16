import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../service/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album: any[];

  constructor(private spotify: SpotifyService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.params
        .map(params => params['id']).subscribe((id)=>{
      	this.spotify.getSpecificAlbumById(id).subscribe(albums => {
      		this.album = albums;
      	})
    });
  }
}
