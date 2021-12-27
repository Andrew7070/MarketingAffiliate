import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "../app-material.module";

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CoursesComponent } from "../courses/courses.component";



//import { CoursesDataComponent } from '../courses-data/courses-data.component';


@NgModule({
    declarations: [
        
    //CoursesComponent
],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,

    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        AppMaterialModule
    ]
})

export class SharedModule{}