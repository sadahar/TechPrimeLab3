import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AddProject } from './Addproject.dto';
import { AddprojectserviceService } from '../../services/addprojectservice.service';

@Component({
  selector: 'app-addproject',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './addproject.component.html',
  styleUrl: './addproject.component.css'
})
export class AddprojectComponent {

  myform!:FormGroup;
  plist:AddProject [] = [];
  pobj:AddProject = {};
  btnname:string='Save';
  status:boolean = false;
  pstatus:string="Ragistered"



  constructor(private fb:FormBuilder,private pservice:AddprojectserviceService, private route:Router)
    {
      this.myform = this.fb.group({
        pname:['',[Validators.required]],
        reason:['',[Validators.required]],
        type:['',[Validators.required]],
        division:['',[Validators.required]],
        category:['',[Validators.required]],
        priority:['',[Validators.required]],
        department:['',[Validators.required]],
        sdate:['',[Validators.required]],
        edate:['',[Validators.required]],
        location:['',[Validators.required]]



      })
      this.showProjectList();
    }

    get pname ()
    {
      return this.myform.get('pname');
    }

    get reason ()
    {
      return this.myform.get('reason');
    }

    get type ()
    {
      return this.myform.get('type');
    }

    get division ()
    {
      return this.myform.get('division');
    }

    get category ()
    {
      return this.myform.get('category');
    }

    get priority ()
    {
      return this.myform.get('priority');
    }

    get department ()
    {
      return this.myform.get('department');
    }

    get sdate()
    {
      return this.myform.get('sdate');
    }

    get edate ()
    {
      return this.myform.get('edate');
    }

    get location ()
    {
      return this.myform.get('location');
    }

    showProjectList()
    {

         this.pservice.getAddProject().subscribe(result =>{
          this.plist = result;
          console.log(this.plist);
         })

    }

    saveproject()
    {
      if(this.btnname == 'Save')
      {
        this.pobj = this.myform.value;
      this.pservice.addproject(this.pobj).subscribe(result=>{
        this.showProjectList();
      })
      }
      else
      {
          this.pobj = this.myform.value;
          this.pservice.updateProject(this.pobj).subscribe(result=>{
              this.showProjectList();

          })

          this.btnname='Save';
          this.status = false;
          

      }
      this.clearField();
      
    }
    clearField()
      {
             this.myform=this.fb.group({
              id:[''],
              pname:[''],
              reason:[''],
              type:[''],
              category:[''],
              sdate:[''],
              edate:[''],
              priority:[''],
              division:[''],
              department:[''],
              location:[''],
             })
      }

      removeproject(id:any)
      {
        this.pservice.deleteProject(id).subscribe(result=>{
              this.showProjectList();
        })
      }

      editproject(p:any)
      {
        this.myform = this.fb.group({
          id:[p.id],
          pname:[p.pname],
              reason:[p.reason],
              type:[p.type],
              category:[p.category],
              sdate:[p.sdate],
              edate:[p.edate],
              priority:[p.priority],
              division:[p.division],
              department:[p.department],
              location:[p.location]

        })

        this.btnname='Update';
        this.status = true;
        
      }

}




  