import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [FormsModule,RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {


  myform!:FormGroup;

  constructor(private fb:FormBuilder, private route:Router)
  {
         this.myform = this.fb.group(
          {email:['',[Validators.required,Validators.email]],
           password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]]
          }

         )
  }

    //  navigate()
    //  {
    //   this.rount.navigate(['/addproject']);
    //  }



  get email ()
  {
    return this.myform.get('email');
  }


  get password()
  {
    return this.myform.get('password');
  }

  onSubmit()
  {
    console.log("Email: "+this.myform.value.email);
    console.log("Password: "+this.myform.value.password);
  }

}
