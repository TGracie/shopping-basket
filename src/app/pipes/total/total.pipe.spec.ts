import { BasketItem } from 'src/app/shared/basket-item.model';
import { Basket } from 'src/app/shared/basket.model';
import { Item } from 'src/app/shared/item.model';
import { TotalPipe } from './total.pipe';

describe('TotalPipe', () => {
  const pipe = new TotalPipe();

  const testItem1 = {
    label: 'Test Item 1',
    unit: 'Testing',
    price: 5
  } as Item
  const testItem2 = {
    label: 'Test Item 2',
    unit: 'Testing',
    price: 10
  } as Item

  const testBasketItem1 = {
    item: testItem1,
    quantity: 1
  } as BasketItem
  const testBasketItem2 = {
    item: testItem2,
    quantity: 1
  } as BasketItem

  const testBasket = {
    items: [testBasketItem1, testBasketItem2]
  } as Basket

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should total basket price', () => {
    expect(pipe.transform(testBasket)).toBe(15);
  })
});
