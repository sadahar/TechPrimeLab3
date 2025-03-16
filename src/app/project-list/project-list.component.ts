import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AddProject } from '../addproject/Addproject.dto';
import { AddprojectserviceService } from '../addproject/addprojectservice.service';

@Component({
  selector: 'app-project-list',
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit  {


  myform!:FormGroup;
  projectList:any[] =[]; 
  plist:AddProject [] = [];
  pobj:AddProject = {};
  btnname:string='Save';
  status:boolean = false;
  pstatus:string = 'Registered';
  pplist:any[] = [];


  searchproject:string="";


  projectCount:number=0;





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
  }



ngOnInit(): void {

 let pid = this._activeRout.snapshot.params['id'];


  this.projectList = this.pservice.getProjectList();


  for(let i=0;i<this.projectList.length;i++)
  {
   this.projectCount++;


  }
     


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




       //  this.projectCount ==this.projectCount++;
       })
       // this.projectCount++;

       // this.projectCount ==this.projectCount++;

  }

  saveproject()
  {
    if(this.btnname == 'Save')
    {
      this.pobj = this.myform.value;
    this.pservice.addproject(this.pobj).subscribe((_result: any)=>{
      this.showProjectList();
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
      this.pservice.deleteProject(id).subscribe((_result: any)=>{
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


   //  statusClass(status: string) {
   //   switch (status) {
   //     case 'Running': return 'status-running';
   //     case 'Registered': return 'status-registered';
   //     case 'Cancelled': return 'status-cancelled';
   //     case 'Closed': return 'status-closed';
   //     default: return '';
   //   }
   // }
        



    startApprove(p:any)
    {

       let pid = this._activeRout.snapshot.params['id']

       let plocation = this._activeRout.snapshot.params['location']
        this.plist = this.pservice.getAddProjectList();

        for(let i=0;i<this.plist.length;i++)
        {
           if(pid == this.plist[i].id)
           {
             this.pstatus = 'Running';
           }
        }
    

    }

    pstart(p:any)
    {
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




    statusClass(statuss:any)
    
    {
     switch(statuss)
     {
       case'Running':return 'status-running';
       case'Registered':return 'status-registered';
       case'Cancelled':return 'status-cancelled';
       case'Closed':return 'status-closed';
       default:return '' ;
     }
    }


    filteredProjects() {
     return this.pplist.filter((project: { name: string; }) =>
       project.name.toLowerCase().includes(this.searchproject.toLowerCase())
     );
   }

        

    @Output() searchTearm = new EventEmitter<string>();



    filteredProject(term : string)
    {
     
        this.searchTearm.emit(term);

      
    }

    filterIteams(searchTearm:string):void
    {
     this.plist = this.plist.filter(item =>
       item.pname?.toLowerCase().includes(searchTearm.toLocaleLowerCase())
     
     )
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


}
