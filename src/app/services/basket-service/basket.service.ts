import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { BasketItem } from 'src/app/shared/basket-item.model';
import { Basket } from 'src/app/shared/basket.model';
import { Item } from 'src/app/shared/item.model';

const { Storage } = Plugins;


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  currentBasket = new Basket;
  previousBaskets: Array<Basket> = [];

  constructor() {
    this.loadStoredBasket();
    this.loadPreviousBaskets();
  }

  // test is does it add a new one or does it update existing
  addToBasket(product: Item): void {
    const foundBasketItem = this.currentBasket.items.find(basketItem => basketItem.item.label == product.label);

    if (foundBasketItem) {
      foundBasketItem.quantity++
    } else {
      const newBasketItem = {
        item: product,
        quantity: 1
      } as BasketItem;
      this.currentBasket.items.push(newBasketItem);
    }
    this.saveBasketToStorage();
  }

  purchaseBasket(): void {
    const purchaseConfirm = confirm('Do you wish to purchase these products?');
    if (purchaseConfirm) {
      this.previousBaskets.push(this.currentBasket);
      this.updatePreviousBaskets()
      this.currentBasket = new Basket;
    }
  }

  emptyBasket(): void {
    const emptyConfirm = confirm('Are you sure you wish to empty this basket?\nAll products will be lost!');
    if (emptyConfirm) {
      this.currentBasket = new Basket;
    }
  }

  private async updatePreviousBaskets(): Promise<void> {
    await Storage.set({
      key: 'previousBaskets',
      value: JSON.stringify(this.previousBaskets)
    })
  }

  private async saveBasketToStorage(): Promise<void> {
    await Storage.set({
      key: 'currentBasket',
      value: JSON.stringify(this.currentBasket)
    });
  }

  private async loadStoredBasket(): Promise<void> {
    const storageObject = await Storage.get({ key: 'currentBasket' });
    if (storageObject.value) {
      this.currentBasket = JSON.parse(storageObject.value);
    }
  }

  private async loadPreviousBaskets(): Promise<void> {
    const storageObject = await Storage.get({ key: 'previousBaskets' });
    if (storageObject.value) {
      this.previousBaskets = JSON.parse(storageObject.value);
    }
  }
}
