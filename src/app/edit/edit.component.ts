import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {  

  constructor(private router: Router,private route:ActivatedRoute,private crudService:CrudService) { } 

  id:number=0;
  data:any={};
  courseObject:object={};

  ngOnInit(): void {
    this.loadCourse();
  }

  loadCourse(){
    this.route.params.subscribe(params=>{
      this.id=+params['Id'];
    })

    this.crudService.getCourseById(this.id).subscribe(res=>{
      this.data=res
    })
  }

  UpdateCourseInfo(courseData:any){
    this.courseObject={
      "Id": this.id,
      "title": courseData.title,
      "credits": courseData.credits,
      "departmentName":courseData.departmentName      
    };

    this.crudService.updateCourse(this.id,this.courseObject).toPromise().then(()=>this.router.navigate(['/']));
  }

}
