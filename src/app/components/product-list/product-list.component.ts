import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket-service/basket.service';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { Item } from 'src/app/shared/item.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  currencyCodes: Array<any>;
  selectedCode: string;

  products: Array<Item> = [
    {
      label: 'Soup',
      unit: 'Tin',
      price: 0.65
    },
    {
      label: 'Bread',
      unit: 'Loaf',
      price: 0.80
    },
    {
      label: 'Milk',
      unit: 'Bottle',
      price: 1.15
    },
    {
      label: 'Apples',
      unit: 'Bag',
      price: 1.00
    }
  ]

  constructor(
    public basketService: BasketService,
    private currencyService: CurrencyService
  ) { }

  ngOnInit(): void {
    this.currencyService.getExchangeRates().then(response => {
      this.currencyCodes = Object.keys(response);
    }, error => {
      console.error(error);
    })
  }

  updateSelectedCode(selectedCode: string): void {
    this.selectedCode = selectedCode;
  }

}
