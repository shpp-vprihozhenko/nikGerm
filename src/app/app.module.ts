import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { SellProdComponent } from './sell-prod/sell-prod.component';
import { PaymentsFromCliComponent } from './payments-from-cli/payments-from-cli.component';
import { OrdersStatesComponent } from './orders-states/orders-states.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ItemComponent,
    SellProdComponent,
    PaymentsFromCliComponent,
    OrdersStatesComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
