import { TestBed } from '@angular/core/testing';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { ExchangePipe } from './exchange.pipe';

const currency = TestBed.inject(CurrencyService)

it('create an instance', () => {
  const pipe = new ExchangePipe(currency);
  expect(pipe).toBeTruthy();
});
