import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiKeyInterceptor } from './interceptors/api-key.interceptor';
import { ApiService } from './services/api.service';
import { CurrencyConverterService } from './services/currency-converter.service';
import { TestCurrencyConverterService } from './services/test-currency-converter.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true },
    ApiService,
    CurrencyConverterService,
    TestCurrencyConverterService,
    HttpClientModule
  ]
})
export class CoreModule { }
