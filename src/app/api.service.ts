import { Injectable } from '@angular/core';
import { Anime } from './anime.interface';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://kitsu.io/api/edge/anime'
    constructor(private http: HttpClient) { }

getData() {

return this.http.get<Anime[]>(this.url)

}

}
