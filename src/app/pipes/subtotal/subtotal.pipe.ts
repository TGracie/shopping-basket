import { Pipe, PipeTransform } from '@angular/core';
import { BasketItem } from 'src/app/shared/basket-item.model';

@Pipe({
  name: 'subtotal'
})
export class SubtotalPipe implements PipeTransform {

  transform(basketItem: BasketItem): number {
    console.log(basketItem)
    const price = basketItem.item.price;
    const quantity = basketItem.quantity;
    console.log('subtotal', price * quantity)
    return price * quantity;
  }

}
