import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ConverterHomeComponent } from './converter-home/converter-home.component';
import { CurrencyConverterRoutingModule } from './currency-converter-routing.module';
import { CurrencyConverterService } from '../core/services/currency-converter.service';
import { ConverterPanelComponent } from './converter-panel/converter-panel.component';
import { TestCurrencyConverterService } from '../core/services/test-currency-converter.service';



@NgModule({
  declarations: [
    ConverterHomeComponent,
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    CurrencyConverterRoutingModule
  ],
  providers: [
    CurrencyConverterService,
    TestCurrencyConverterService,
    CurrencyPipe
  ]
})
export class CurrencyConverterModule { }
