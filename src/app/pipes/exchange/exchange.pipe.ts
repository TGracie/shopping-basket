import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyService } from 'src/app/services/currency/currency.service';

@Pipe({
  name: 'exchange'
})
export class ExchangePipe implements PipeTransform {

  constructor(private currencyService: CurrencyService) {

  }

  transform(value: number, newCode: string): number {
    const rates = this.currencyService.exchangeRates;
    if (newCode) {
      return value * rates[newCode];
    } else {
      return value;
    }
  }

}
