import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime.interface';
import { DataService } from './../data.service';
import { Router, Navigation } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
})
export class DetalhesComponent implements OnInit {
   anime: Anime;


  constructor(private dataService: DataService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
  }

  ngOnInit(): void {

  }



}
  
  


 