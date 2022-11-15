import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-customer',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllOrder();

   // this.service.getAllCustomers().subscribe((res)=>{
     // console.log(res,"res==>");
      //this.listData = res.data;
    //});
  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deleteOrder(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = res.message;
      this.getAllOrder();

    });

  }

  //get customer
  getAllOrder(){

    this.service.getAllOrder().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}