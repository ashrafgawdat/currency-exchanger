import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path: 'main',
        loadChildren: () => import('./currency-converter/currency-converter.module').then(m => m.CurrencyConverterModule)
      },
      { path: '', redirectTo: 'main/home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
