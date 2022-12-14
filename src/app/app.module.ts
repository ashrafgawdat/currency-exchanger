import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CurrencyConverterModule } from './currency-converter/currency-converter.module';
import { HttpClientModule } from '@angular/common/http';
import { ConverterPanelComponent } from './currency-converter/converter-panel/converter-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    CoreModule,
    CurrencyConverterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
