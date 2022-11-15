import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})


export class UpdateOrderComponent implements OnInit {

  orderForm = new FormGroup({
    'customerName':new FormControl('',Validators.required),
    'orderHoneyName':new FormControl('',Validators.required),
    'orderDate':new FormControl('',Validators.required),
    'total':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOneOrder(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.orderForm.patchValue({
            customerName:res.data[0].customerName,
            orderHoneyName:res.data[0].orderHoneyName,
            orderDate:res.data[0].orderDate,
            total:res.data[0].total
        });
      });
  }
//to update a order
orderUpdate()
{
  console.log(this.orderForm.value);
    this.service.updateOrder(this.router.snapshot.params['id'], this.orderForm.value).subscribe((result:any)=>{

    this.orderForm.reset();
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

