import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesDataComponent } from './courses-data.component';
import { CourseComponent } from '../course/course.component';

// import { OrderComponent } from './order/order.component';
// import { OrdersComponent } from './orders/orders.component';
// import { OrderEditComponent } from './order-edit/order-edit.component';

const routes: Routes = [
{ path: '', component: CoursesDataComponent },
//{ path: ':id', component: CourseComponent },
//{ path: ':id/edit', component: OrderEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CoursesDataRoutingModule { }
