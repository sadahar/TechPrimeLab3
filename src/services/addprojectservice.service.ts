import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AddProject } from '../app/addproject/Addproject.dto';

@Injectable({
  providedIn: 'root'
})
export class AddprojectserviceService {

  url:string="http://localhost:3000/addProject";

  constructor(private http:HttpClient) { }


    getProjectList():Observable<AddProject>
    {
      return this.http.get<AddProject>(this.url)
    }

    getAddProject():Observable<any>
    {
      return this.http.get<any>(this.url)
    }

    addproject(p:AddProject):Observable<any>
    {
         return this.http.post<any>(this.url,p)
    }

    deleteProject(id:number):Observable<any>
    {
      return this.http.delete<any>(this.url+"/"+id)
    }

     updateProject(p:AddProject):Observable<any>
     {
        return this.http.put<any>(this.url+"/"+p.id,p)
     }
   
    changeStatus(p:AddProject):Observable<any>
    {
      return this.http.put<any>(this.url+"/"+p.id,p)
    } 




}
