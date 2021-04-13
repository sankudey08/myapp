import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private crudService: CrudService,private router: Router) { }

  courseObj: object={};
  
  ngOnInit(): void {
  }

  AddCourseInfo(course:any){
    this.courseObj={
      "title": course.title,
      "credits":course.credits,
      "departmentName":course.departmentName     
    };

    this.crudService.createNewCourse(this.courseObj).toPromise().then(()=>this.router.navigate(['/'])).catch(()=>alert("Error Occured"));
  }
}
