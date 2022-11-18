import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { CurrencyConverterService } from 'src/app/core/services/currency-converter.service';
import { CurrencyPipe } from '@angular/common';
import { TestCurrencyConverterService } from 'src/app/core/services/test-currency-converter.service';
import { ConverterResponse, ConverterResponseInfo } from 'src/app/core/models/converter-response.model';

@Component({
  selector: 'converter-panel',
  templateUrl: './converter-panel.component.html',
  styleUrls: ['./converter-panel.component.scss']
})
export class ConverterPanelComponent implements OnInit {

  availableSymbols: string[] = [];
  amount!: number;
  fromSymbol: string = "EUR";
  toSymbol: string = "USD";
  converterResponse!: ConverterResponse|undefined;
  get conversionResult(): number|undefined {return this.converterResponse?.result; };

  busy: boolean = false;
  get valid(): boolean { return this.amount > 0; }

  constructor(private service: TestCurrencyConverterService,
    private currencyPipe: CurrencyPipe) {
    this.getSymbols();
  }

  ngOnInit(): void {
  }

  convert(): void{
    this.busy = true;
    this.service.convert(this.amount, this.fromSymbol, this.toSymbol)
    .subscribe(res => {
      this.converterResponse = res;
      this.busy = false;
    });
  }

  getSymbols(): void{
    this.busy = true;
    this.service.symbols()
    .subscribe(res => {
      this.availableSymbols = Object.getOwnPropertyNames(res.symbols);
      this.busy = false;
    });
  }

  swap(){
    this.converterResponse = undefined;
    var tmp = this.toSymbol;
    this.toSymbol = this.fromSymbol;
    this.fromSymbol = tmp;
  }

  onChange(){
    this.converterResponse = undefined;
  }

  transformCurrency(amount: number|undefined, to: string) {
    if (!amount || amount < 0)
      return null;

    return this.currencyPipe.transform(amount, to);
  }

  transformConversionRate(response: ConverterResponse|undefined) {
    if (!response?.query.amount)
      return null;

    return `${this.transformCurrency(1, response.query.from)} = ${this.transformCurrency(response.info.rate, response.query.to)}`
  }

}
