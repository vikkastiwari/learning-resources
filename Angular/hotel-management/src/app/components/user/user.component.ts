import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userForm!:FormGroup;
  errorMessage:string = '';

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.userForm = this.fb.group({
      firstName:['', Validators.required],
      lastName :['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['',[ Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)]],
      confirmPassword:['',[ Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/)]]
    })
  }

  onSubmit(){
    console.log(this.userForm.value);
    if(this.userForm.valid){
      let password = this.userForm.get('password')?.value;
      let confirmPassword = this.userForm.get('confirmPassword')?.value
      if(password === confirmPassword){
        alert('Form is submitted')
      }else{
        this.errorMessage = "Passowrd's doesn't match!"
      }
    }
  }
}
