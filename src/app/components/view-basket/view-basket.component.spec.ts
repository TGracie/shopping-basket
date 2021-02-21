import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExchangePipe } from 'src/app/pipes/exchange/exchange.pipe';
import { SubtotalPipe } from 'src/app/pipes/subtotal/subtotal.pipe';
import { TotalPipe } from 'src/app/pipes/total/total.pipe';
import { ViewBasketComponent } from './view-basket.component';


describe('ViewBasketComponent', () => {
  let component: ViewBasketComponent;
  let fixture: ComponentFixture<ViewBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ViewBasketComponent,
        ExchangePipe,
        TotalPipe,
        SubtotalPipe
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
