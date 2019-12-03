import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AnimesPage } from 'src/app/animes/animes.page';

const routes: Routes = [
  {
    path: '',
    component: AnimesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	RouterModule.forChild(routes),
  ],
  declarations: [AnimesPage]
})
export class AnimesPageModule {}