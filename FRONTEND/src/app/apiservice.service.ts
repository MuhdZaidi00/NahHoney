import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const baseOrderUrl = "http://localhost:8080/orders"
const createOrderUrl = "http://localhost:8080/orders/add"
const delOrderUrl = "http://localhost:8080/orders/del"
const putOrderUrl = "http://localhost:8080/orders/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  getCustomers() {
    throw new Error('Method not implemented.');
  }


  constructor(private _http:HttpClient) { }
  //to connect the frontend to backend
//get all order
getAllOrder():Observable<any>{
  const url = "http://localhost:8080/allorders"
  return this._http.get<any>(url)
}

 // create order
 createOrder(order: any):Observable<any>{
  console.log(order,'createapi=>');
  return this._http.post(createOrderUrl, order)
}

//deleting order

deleteOrder(id: any): Observable<any> {
  return this._http.delete(`${delOrderUrl}/${id}`);

}

//update order
updateOrder(id: any, order: any): Observable<any> {
  return this._http.put(`${putOrderUrl}/${id}`, order);

}

//get one customer
getOneOrder(id:any):Observable<any>{
  return this._http.get(`${baseOrderUrl}/${id}`);
}

}
