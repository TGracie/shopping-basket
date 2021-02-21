import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialsModule } from './angular-materials/angular-materials.module';
import { ViewBasketComponent } from './components/view-basket/view-basket.component';
import { BasketService } from './services/basket-service/basket.service';
import { CurrencyService } from './services/currency/currency.service';
import { ExchangePipe } from './pipes/exchange/exchange.pipe';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SubtotalPipe } from './pipes/subtotal/subtotal.pipe';
import { TotalPipe } from './pipes/total/total.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ViewBasketComponent,
    ExchangePipe,
    ProductListComponent,
    SubtotalPipe,
    TotalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialsModule
  ],
  providers: [
    BasketService,
    CurrencyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
