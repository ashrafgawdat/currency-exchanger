import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterHomeComponent } from './converter-home/converter-home.component';

const routes: Routes = [
    {
      path: 'home',
      component: ConverterHomeComponent,
      pathMatch: 'full',
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrencyConverterRoutingModule { }
