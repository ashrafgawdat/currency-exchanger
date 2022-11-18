import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { ConverterResponse, Symbols } from '../models/converter-response.model';

@Injectable()
export class CurrencyConverterService {
  constructor(
    private apiService: ApiService
  ) {}
  

  convert(amount: number, from: string, to: string): Observable<ConverterResponse> {
    return this.apiService.get(`convert?from=${from}&to=${to}&amount=${amount}`)
      .pipe(map(data => data));
  }
  
  symbols(): Observable<Symbols> {
    return this.apiService.get('symbols')
      .pipe(map(data => data));
  }
}
