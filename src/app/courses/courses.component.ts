import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataServiceService } from '../shared/data-service.service';



@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {
  ELEMENT_DATA: [] = [];
  allCourses!: [];
  displayedColumns: string[] = ['results'];
  //, 'AcXtic', 'TbalXtic','AcType' , 'AcCurrency'
  datasource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  selectedValue: string = "";



  constructor(private dataService: DataServiceService) {
    //this.getAllCourses = [];

   }

  ngOnInit(): void {
    this.getAllCourses();
  }

  getAllCourses() {
    this.dataService.getCourses().subscribe(
      data => {
        this.allCourses = data;
        this.datasource.data = this.allCourses;
        console.log(this.allCourses);
      },
      error => {
        console.log(error);
      }
    );
  }


  // getAllCourses() {
  //   this.dataService.getCourses().subscribe(
  //     (data) => this.datasource.data = data,
  //     (err: any) => console.log(err),
  //     () => console.dir(this.dataService)
  // )}

    // // this.dataService.getCourses().subscribe(
    // //   (data) => {
    // //     this.allCourses = data;
    // //   },
    // //   (error) => {
    // //     console.log(error);
    // //   }
    // );  
    

}
