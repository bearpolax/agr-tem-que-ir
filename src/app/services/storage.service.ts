import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface Item {
  id: string,
  titulo: string,
  valor: string,
  modificado: number
}

const ITENS_CHAVE = 'meus-itens'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }
  
  addItem(item: Item): Promise<any> {
    return this.storage.get(ITENS_CHAVE).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITENS_CHAVE, items); 

      }else{
        return this.storage.set(ITENS_CHAVE, [item]);
      }
    });

  }

  getItems(): Promise<Item[]> {
    return this.storage.get(ITENS_CHAVE); 

  }

  updateItem(item: Item){
    return this.storage.get(ITENS_CHAVE).then((items: Item[]) => {
      if (!items || items.length === 0){
        return null;
      }

      let newItems: Item[] = [];

      for(let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
         
      }

      return this.storage.set(ITENS_CHAVE, newItems);
    });


  }

  deleteItem(id: string): Promise<Item> {
    return this.storage.get(ITENS_CHAVE).then((items: Item[]) => {
      if (!items || items.length === 0){
        return null;
      }

      let toKeep: Item[] = [];

      for (let i of items) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }

      return this.storage.set(ITENS_CHAVE, toKeep);
    });


  }
}
