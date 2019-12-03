import { Component, ViewChild } from '@angular/core';
import { StorageService, Item } from '../services/storage.service'
import { Platform, ToastController, List } from 'ionic-angular';
import { SelectSearchablePageComponent } from 'ionic-select-searchable';


@Component({
  selector: 'app-adicionar-anime',
  templateUrl: './adicionar-anime.component.html',
  styleUrls: ['./adicionar-anime.component.scss'],
})
export class AdicionarAnimeComponent {
  animes = [
    { id: 1, nome: '3-gatsu no Lion'},
    { id: 2, nome: 'Afro Samurai'},
    { id: 3, nome: 'Akame ga Kill!!!'},
    { id: 4, nome: 'Angel Beats!'},
    { id: 5, nome: 'Another'},
    { id: 6, nome: 'Ansatsu Kyoushitsu'},
    { id: 7, nome: 'Aria'},
    { id: 8, nome: 'Asobi Asobase'},
    { id: 9, nome: 'Beelzebub'},
    { id: 10, nome: 'Berserk'},
    { id: 11, nome: 'Beyblade Burst'},
    { id: 12, nome: 'Bleach'},
    { id: 13, nome: 'Blend S'},
    { id: 14, nome: 'Boku no Hero Academia'},
    { id: 15, nome: 'Charlotte'},

  ]

  AnimeSelecionado: any;

  items: Item[] = []

  newItem: Item = <Item>{};

  @ViewChild('mylist', {static: true})mylist: List;

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) { 
  this.plt.ready().then(() => {
    this.loadItems();
  });
}

addItem() {
  this.storageService.addItem(this.newItem).then(item => {
    this.newItem = <Item>{};
    this.loadItems();
  });
}

loadItems() {
  this.storageService.getItems().then(items => {
    this.items = items;
  });
}

updateItem(item: Item) {
  this.storageService.updateItem(item).then(item =>{
    this.mylist.closeSlidingItems();
    this.loadItems();
  })
}

deleteItem(item: Item) {
  this.storageService.deleteItem(item.id).then(item => {
    this.mylist.closeSlidingItems();
    this.loadItems();
  });
}

async showToast(msg) {
  const toast = await this.toastController.create({
    message: msg,
    duration: 2000
  });
  toast.present();
}

}
