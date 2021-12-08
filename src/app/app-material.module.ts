import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from '@angular/material/tabs';


const material = [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,
    FlexLayoutModule,
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatMenuModule,
    MatDialogModule,
    MatDividerModule,
    MatCheckboxModule,
    MatTabsModule
];

@NgModule({
    imports: [material],
    exports: [material]
})
export class AppMaterialModule { }


// @NgModule({
//     imports: [
//         MatButtonModule,
//         MatFormFieldModule,
//         MatInputModule,
//         MatTableModule,
//         MatSelectModule,
//         FlexLayoutModule,
//         MatCardModule,
//         MatPaginatorModule,
//         MatIconModule,
//         MatToolbarModule,
//         MatSlideToggleModule,
//         MatExpansionModule,
//         MatMenuModule,
//         MatDialogModule,
//         MatDividerModule,
//         MatCheckboxModule,
//         MatTabsModule,

        
//     ],
//     exports: [
//         MatButtonModule,
//         MatFormFieldModule,
//         MatInputModule,
//         MatTableModule,
//         MatSelectModule,
//         FlexLayoutModule, 
//         MatCardModule,
//         MatPaginatorModule,
//         MatIconModule,
//         MatToolbarModule,
//         MatSlideToggleModule,
//         MatExpansionModule,
//         MatMenuModule,
//         MatDialogModule,
//         MatDividerModule,
//         MatCheckboxModule,
//         MatTabsModule,


//     ]
// })


// export class MaterialModule {

// }