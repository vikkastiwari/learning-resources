import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sform',
  templateUrl: './sform.component.html',
  styleUrls: ['./sform.component.css']
})
export class SformComponent implements OnInit {

  hmForm!:FormGroup;
  @Output() guest = new EventEmitter<string>();

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.hmForm = this.fb.group({
      name:['',Validators.required],
      startDate:['',Validators.required],
      endDate:['',Validators.required],
    })
  }

  onSubmit(){
    if(this.hmForm.valid){
      this.guest.emit(this.hmForm.value);
    }
  }
}
