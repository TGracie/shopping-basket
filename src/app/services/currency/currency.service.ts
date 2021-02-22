import { Injectable } from '@angular/core';
import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';
import { StatusCodes } from 'http-status-codes';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  exchangeRates: Object
  selectedCode: string;


  constructor() {
    this.getExchangeRates();
  }

  getExchangeRates(): Promise<any> {
    const { Http } = Plugins;
    return Http.request({
      method: 'GET',
      url: 'https://api.exchangeratesapi.io/latest?base=USD'
    }).then(response => {
      if (response.status === StatusCodes.OK) {
        console.log('exchange rates', response.data.rates)
        this.exchangeRates = response.data.rates;
        return Promise.resolve(response.data.rates);
      } else {
        return Promise.reject(response.data);
      }
    });
  }
}
