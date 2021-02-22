import { TestBed } from '@angular/core/testing';
import { CurrencyService } from 'src/app/services/currency/currency.service';
import { ExchangePipe } from './exchange.pipe';

const currency = TestBed.inject(CurrencyService)

beforeEach((() => {
  currency.exchangeRates = {
    'CAD': 2
  };
}))

describe('Exchange Pipe', () => {
  it('create an instance', () => {
    const pipe = new ExchangePipe(currency);
    expect(pipe).toBeTruthy();
  });

  it('should transform value according to provided currency code', () => {
    const pipe = new ExchangePipe(currency);
    expect(pipe.transform(1, 'CAD')).toBe(2);
  });

  it('should return initial value when no code is provided', () => {
    const pipe = new ExchangePipe(currency);
    expect(pipe.transform(1, '')).toBe(1);
  });

})
