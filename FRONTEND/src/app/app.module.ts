import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiserviceService } from './apiservice.service';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderComponent } from './order/order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FAQComponent,
    HomeComponent,
    LoginComponent,
    CreateOrderComponent,
    OrderComponent,
    UpdateOrderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
