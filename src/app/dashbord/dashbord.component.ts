import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AddProject } from '../addproject/Addproject.dto';
import { AddprojectserviceService } from '../addproject/addprojectservice.service';

@Component({
  selector: 'app-dashbord',
  imports: [FormsModule,CommonModule,RouterLink,ReactiveFormsModule],
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css'
})
export class DashbordComponent {

  myform!:FormGroup;
  projectList:any[] =[]; 
  plist:AddProject [] = [];
  pobj:AddProject = {};
  btnname:string='Save';
  status:boolean = false;
  pstatus:string = 'Registered';

  projectCount:number=0;
  startCount:number=0;
  closeCount:number=0;
  cancelCount:number=0;





 //  @Input() projectCount?:number





  constructor(private fb:FormBuilder,private pservice:AddprojectserviceService,private route:Router, private _activeRout:ActivatedRoute)
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
   //  this.projectCount++;
  }



ngOnInit(): void 
{
 let pid = this._activeRout.snapshot.params['id'];


 this.projectList = this.pservice.getProjectList();


 for(let i=0;i<this.projectList.length;i++)
 {
   
     this.plist = this.projectList[i];
    
 }

}

   projectcount()
   {
     let pid = this._activeRout.snapshot.params['id'];


 this.projectList = this.pservice.getProjectList();


 for(let i=0;i<this.projectList.length;i++)
 {
   
     this.plist = this.projectList[i];
    
 }
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

       this.pservice.getAddProject().subscribe((result: AddProject[]) =>{
        this.plist = result;
        console.log(this.plist);

        for(let i=0;i<this.plist.length;i++)
         {
          this.projectCount ==this.projectCount++;
         }



       })
      
      

  }

  saveproject()
  {
    if(this.btnname == 'Save')
    {
      this.pobj = this.myform.value;
      
      
    this.pservice.addproject(this.pobj).subscribe((_result: any)=>{
      this.showProjectList();
     //  this.projectCount++;
    })
         


    }

    
    else
    {
        this.pobj = this.myform.value;
        this.pservice.updateProject(this.pobj).subscribe((_result: any)=>{
            this.showProjectList();

        })
      
         
        this.btnname='Save';
        this.status = false;

    }
    
  }


    pstart(p:any)
    {

     this.pservice.getAddProject().subscribe((result: AddProject[]) =>{
       this.plist = result;
       console.log(this.plist);

       for(let i=0;i<this.plist.length;i++)
        {

         if(this.plist[i].location = "Pune" )
         {
            this.startCount++;
         }
         // this.projectCount ==this.projectCount++;
        }



      })



     this.pstatus="Running";

    }
    pclose(p:any)
    {
      this.pstatus="Close";
    }
    pcancel(p:any)
    {
      this.pstatus="Cancel";
    }




}
