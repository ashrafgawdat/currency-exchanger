import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConverterHomeComponent } from './converter-home/converter-home.component';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { CurrencyConverterService } from '../core/services/currency-converter.service';



@NgModule({
  declarations: [
    ConverterHomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyConverterRoutingModule
  ],
  providers: [
    CurrencyConverterService
  ]
})
export class CurrencyConverterModule { }
