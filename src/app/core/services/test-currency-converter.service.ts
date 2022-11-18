import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators';
import { ConverterResponse, Symbols } from '../models/converter-response.model';

@Injectable()
export class TestCurrencyConverterService {
  constructor(
  ) {}
  

  convert(amount: number, from: string, to: string): Observable<ConverterResponse> {
    const ret: ConverterResponse = {
      result: 5,
      date: new Date(),
      info: { rate: 1.25, timestamp: new Date() },
      query: { amount: amount, from: from, to: to }
    };
    return of(ret);
  }
  
  symbols(): Observable<Symbols> {
    const ret: Symbols = {symbols: {'USD': 'Dollars', 'EUR': 'Euro'} };
    return of(ret);
  }
}
