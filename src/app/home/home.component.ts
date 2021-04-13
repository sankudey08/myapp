import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private crudService: CrudService) { }

  courses:any=[];


  ngOnInit(): void {
    this.getAllCourse();
  }

  getAllCourse(){
    this.crudService.getAllCourse().subscribe(res =>{
      this.courses=res;
    })
  }

  deleteCourse(id:number){
    if(confirm("Are you sure?")){
      this.crudService.deleteCourse(id).subscribe(res =>{
        alert("Deleted Successfully");
        this.getAllCourse();
      })
    }
  }
}
