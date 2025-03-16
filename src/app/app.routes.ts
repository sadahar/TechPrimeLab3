import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddprojectComponent } from './addproject/addproject.component';
export const routes: Routes = [

    {path: 'login',component:LogInComponent},

    {path: 'addproject',component:AddprojectComponent},
    
    {path: 'projectlist',component:ProjectListComponent},

    // {path:'proid/:id',component:},

    {path:'dashbord',component:DashbordComponent},

    {path: '' ,redirectTo:'/login',pathMatch:'full'},

    {path:'**',component:PagenotfoundComponent}


];
