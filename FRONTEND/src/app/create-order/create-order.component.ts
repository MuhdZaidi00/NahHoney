import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOneOrder(this.getparamid).subscribe((res)=>{

      console.log(res,'res==>');
      this.orderForm.patchValue({
          customerName:res.data[0].customerName,
          orderHoneyName:res.data[0].orderHoneyName,
          orderDate:res.data[0].orderDate,
          total:res.data[0].total,

      });
    });
  }
  }

  orderForm = new FormGroup({
    'customerName':new FormControl('',Validators.required),
    'orderHoneyName':new FormControl('',Validators.required),
    'orderDate':new FormControl('',Validators.required),
    'total':new FormControl('',Validators.required)


  });

  //to create a new order
  orderSubmit(){
    if(this.orderForm.valid){
      console.log(this.orderForm.value);
      this.service.createOrder( this.orderForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.orderForm.reset();
        this.successmsg = res.message;
      });

    }
    else{
      this.errormsg = 'all field is required';
    }

  }
//to update a customer
orderUpdate()
{
  console.log(this.orderForm.value,'updatedform');

  if(this.orderForm.valid)
  {
    this.service.updateOrder(this.orderForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'all field is required';
  }
}
}
