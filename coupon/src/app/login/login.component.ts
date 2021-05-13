import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({});
  submitted = false;
  serverErrorMessages: string = '';
  
  
  loginDetails : any;
  
  constructor(
    private fb: FormBuilder,
    public loginService : LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['',Validators.required],
      password : ['',Validators.required]
    });
    if(this.loginService.isLoggedIn()){
      this.router.navigate(['/']); 
    }
    
  }
  get r(){
    return this.loginForm.controls;
  }
  onSubmit(form: any){
    this.submitted =true;
    if(this.loginForm.invalid){
      return;
    }
     
    this.loginService.login(this.loginForm.value).subscribe(
     (data:any)=>{
      
     this.loginService.setToken(data['token']);
     console.log(data);
     //Login as admin
     if(this.loginForm.value.username==="admin" && this.loginForm.value.password==="admin"){
       console.log('Hi');
       this.router.navigate(['/admin']);
     }
     else{
       //Login as User
      this.router.navigate(['/']);
     }
     
    },
    err=>{
      this.serverErrorMessages = err.error.message;
    })
    
  }

}
