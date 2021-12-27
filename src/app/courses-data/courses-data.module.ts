import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material.module';

import { CoursesDataComponent } from './courses-data.component';
import { CourseComponent } from '../course/course.component';
import { CoursesDataRoutingModule } from './courses-data.routing';


// import { OrdersRoutingModule } from './orders-routing.module';
// import { OrdersComponent } from './orders/orders.component';
// import { OrderComponent } from './order/order.component';
// import { OrderEditComponent } from './order-edit/order-edit.component';


@NgModule({
  declarations: [
    CoursesDataComponent,
    CourseComponent,
    //CourseEditComponent
  ],
  imports: [
    CommonModule,
    CoursesDataRoutingModule,
    AppMaterialModule
  ]
})
export class CoursesDataModule { }