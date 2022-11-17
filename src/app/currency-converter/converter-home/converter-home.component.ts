import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from 'src/app/core/services/currency-converter.service';

@Component({
  selector: 'app-converter-home',
  templateUrl: './converter-home.component.html',
  styleUrls: ['./converter-home.component.scss']
})
export class ConverterHomeComponent implements OnInit {

  amount: number = 0;

  constructor(private service: CurrencyConverterService) {

  }

  ngOnInit(): void {
    
  }

  convert(){
    debugger
    this.service.convert(this.amount)
    .subscribe(res => {
      console.log(res.result);
    });
  }

}
