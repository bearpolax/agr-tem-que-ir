import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './auth.service'
import { AnimeComponent } from 'src/app/anime/anime.component'
import { DetalhesComponent } from 'src/app/detalhes/detalhes.component'
import { AdicionarAnimeComponent } from './adicionar-anime/adicionar-anime.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'animes', loadChildren: './animes/animes.module#AnimesPageModule' },
  { path: 'anime', component: AnimeComponent },
  { path: 'adicionar-anime', component: AdicionarAnimeComponent },
  { path: 'detalhes', component: DetalhesComponent },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule', canActivate: [AuthService] },
];

// localhost/tabs

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }