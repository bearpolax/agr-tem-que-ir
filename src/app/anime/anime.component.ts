import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { Anime } from '../anime.interface';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
})
export class AnimeComponent implements OnInit {

  list: Anime[]

  constructor(private api: ApiService, private dataService: DataService, private router: Router) {

  }
  ngOnInit(): void {
    this.api.getData()
      .subscribe((response: any) => {
        this.list = response.data;
        console.log(this.list)
      })
  }

  goToDetalhesByService(anime: Anime) {
    this.dataService.setAnime(anime);
  }

  goToDetalhesByState(anime: Anime) {
    this.router.navigateByUrl('/detalhes', {
      state: { anime: anime }
    })
  }

}

  