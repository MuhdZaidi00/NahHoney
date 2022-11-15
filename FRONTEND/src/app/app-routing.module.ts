import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FAQComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { OrderComponent } from './order/order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';


const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'faq', component: FAQComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'order', component:OrderComponent},
  {path: 'createOrder', component:CreateOrderComponent},
  {path: 'createOrder/:id', component:CreateOrderComponent},
  {path: 'updateOrder', component:UpdateOrderComponent},
  {path: 'updateOrder/:id', component:UpdateOrderComponent}


  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
