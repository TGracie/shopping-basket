import { Component, OnInit } from '@angular/core';
import { BasketService } from 'src/app/services/basket-service/basket.service';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Component({
  selector: 'app-view-basket',
  templateUrl: './view-basket.component.html',
  styleUrls: ['./view-basket.component.css']
})
export class ViewBasketComponent implements OnInit {
  displayedColumns: string[] = ['label', 'unit', 'price', 'quantity', 'subtotal']
  currencyCodes: Array<string>;
  selectedCode: string;


  constructor(
    public basketService: BasketService,
    private currencyService: CurrencyService
  ) {
  }

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
