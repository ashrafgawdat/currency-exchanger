import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { ConverterResponse } from '../models/converter-response.model';

@Injectable()
export class CurrencyConverterService {
  constructor(
    private apiService: ApiService
  ) {}
  

  convert(amount: number): Observable<ConverterResponse> {
    return this.apiService.get('convert?from=GBP&to=JPY&amount=25')
      .pipe(map(data => data));
  }
}
