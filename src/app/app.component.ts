import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LogInComponent } from './log-in/log-in.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { AddprojectComponent } from './addproject/addproject.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DashbordComponent,LogInComponent,PagenotfoundComponent,
    RouterModule,AddprojectComponent,ProjectListComponent,PaginationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TechPrimeLab2';
}
