import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  private header=new HttpHeaders({'Content-Type':'application/json'});

  getAllCourse(){
      return this.http.get("https://localhost:44315/api/Crud");
  }

  getCourseById(id:number){
    return this.http.get("https://localhost:44315/api/Crud/"+id);
  }

  createNewCourse(courseObject:object){
    return this.http.post("https://localhost:44315/api/Crud",courseObject);
  }

  deleteCourse(id:number){
    return this.http.delete("https://localhost:44315/api/Crud/"+id,{headers:this.header});
  }

  updateCourse(id:number,courseObject:any){
    return this.http.put("https://localhost:44315/api/Crud/"+id,JSON.stringify(courseObject),{headers:this.header});
  }
}
