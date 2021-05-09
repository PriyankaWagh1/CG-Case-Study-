import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup = new FormGroup({});
  showSucessMessage :boolean = false;
  serverErrorMessages: string= "";
  submitted = false;

  constructor(
    private fb : FormBuilder,
    private loginService : LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(5)]]
  });
  }

  get f() { return this.registerForm.controls; }

    onSubmit(form: any) {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.loginService.registerUser(this.registerForm.value).subscribe(
          data=>{
            this.showSucessMessage = true;
            setTimeout(() => this.showSucessMessage = false, 4000);
            this.resetForm(this.registerForm);
            this.router.navigate(['/login']);
          },
          err => {
            if (err.status === 422) {
              this.serverErrorMessages = err.error.join('<br>');
              setTimeout(() => this.serverErrorMessages = '', 4000);
            }
            else
              this.serverErrorMessages = 'Something went wrong.Please contact admin.';
          });
      }

      resetForm(form:any) {
        this.loginService.currentUser = {
          firstname: '',
          lastname: '',
          username: '',
          password: ''
        };
       // form.resetForm();
        this.serverErrorMessages = '';
      }
}
