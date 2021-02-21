import { TestBed } from '@angular/core/testing';

import { BasketService } from './basket.service';

describe('BasketService', () => {
  let service: BasketService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasketService);
    spyOn(window, 'confirm').and.returnValue(true);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Basket Operations', () => {
    let item1 = {
      label: 'Bread',
      unit: 'Loaf',
      price: 0.80
    }
    let item2 = {
      label: 'Soup',
      unit: 'Tin',
      price: 1.00
    }

    it('should add single item to basket successfully', () => {
      service.addToBasket(item1);
      expect(service.currentBasket.items.length).toBe(1)
    });

    it('should not duplicate same items within basket but rather increase quantity - 1 item case', () => {
      service.addToBasket(item1);
      service.addToBasket(item1);
      service.addToBasket(item1);
      expect(service.currentBasket.items[0].quantity).toBe(3);
      expect(service.currentBasket.items.length).toBe(1);
    });


    it('should not duplicate same items within basket and rather increase quantity - 2 items case', () => {
      service.addToBasket(item1);
      service.addToBasket(item2);
      service.addToBasket(item1);
      service.addToBasket(item2);

      expect(service.currentBasket.items[0].quantity).toBe(2);
      expect(service.currentBasket.items[1].quantity).toBe(2);
      expect(service.currentBasket.items.length).toBe(2);
    });

    it('purchaseBasket should increase previous baskets quantity by 1', () => {
      service.addToBasket(item1);
      service.addToBasket(item1);
      service.addToBasket(item1);
      service.purchaseBasket();
      expect(service.previousBaskets.length).toBe(1);
    });

    it('emptyBasket should leave basket with no items', () => {
      service.addToBasket(item1);
      service.addToBasket(item1);
      service.addToBasket(item1);
      expect(service.currentBasket.items.length).toBe(1);
      service.emptyBasket();
      expect(service.currentBasket.items.length).toBe(0);
    });
  })
});
