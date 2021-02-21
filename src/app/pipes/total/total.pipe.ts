import { Pipe, PipeTransform } from '@angular/core';
import { Basket } from 'src/app/shared/basket.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(basket: Basket): number {
    let total = 0;
    basket.items.forEach(basketItem => {
      const price = basketItem.item.price;
      const quantity = basketItem.quantity;
      total += (price * quantity);
    })
    return total;
  }

}
