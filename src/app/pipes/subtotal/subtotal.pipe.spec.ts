import { BasketItem } from 'src/app/shared/basket-item.model';
import { Item } from 'src/app/shared/item.model';
import { SubtotalPipe } from './subtotal.pipe';

const testItem = {
  label: 'Test Item',
  unit: 'Testing',
  price: 5
} as Item

const testBasketItem = {
  item: testItem,
  quantity: 1
} as BasketItem
describe('SubtotalPipe', () => {

  it('create an instance', () => {
    const pipe = new SubtotalPipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform the value according to basket quantity', () => {
    const pipe = new SubtotalPipe();
    expect(pipe.transform(testBasketItem)).toBe(5)
    testBasketItem.quantity = 2;
    expect(pipe.transform(testBasketItem)).toBe(10)
  })

});
