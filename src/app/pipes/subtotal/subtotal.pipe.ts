import { Pipe, PipeTransform } from '@angular/core';
import { BasketItem } from 'src/app/shared/basket-item.model';

@Pipe({
  name: 'subtotal'
})
export class SubtotalPipe implements PipeTransform {

  transform(basketItem: BasketItem): number {
    const price = basketItem.item.price;
    const quantity = basketItem.quantity;
    return price * quantity;
  }

}
