import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsFromCliComponent } from './payments-from-cli/payments-from-cli.component';
import { OrdersStatesComponent } from './orders-states/orders-states.component';
import { SellProdComponent } from './sell-prod/sell-prod.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

const routes: Routes = [
  { path: 'payments', component: PaymentsFromCliComponent},
  { path: 'orders', component: OrdersStatesComponent},
  { path: 'sell', component: SellProdComponent},
  { path: 'authForm', component: AuthFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
