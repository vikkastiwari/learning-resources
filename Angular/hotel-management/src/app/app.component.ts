import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'hotel-management';
  form!: FormGroup;
  guestList:any = [];
  dayWiseList:any = [];
  activeCity:string = '';

  data:any[] = [
    {
      pincode:'400104',
      city:'Mumbai',
    },
    {
      pincode:'400103',
      city:'Delhi',
    }
  ]

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.onInit();
  }

  onAdd(value:any) {
    let currentDate = new Date(value.startDate);
    const end = new Date(value.endDate);
    while (currentDate <= end) {
      let formatedDate = `${currentDate.getFullYear()}-${currentDate.getMonth()+1}-${currentDate.getDate()}`;
      let newDate:boolean = true;
      this.guestList.forEach((item:any) => {
        if(item.date === formatedDate){
          item.food = [
            ...item.food,
            {
              breakFast: value.name,
              lunch: value.name,
              dinner: value.name
            }
          ];
          newDate = false;
        }
      });
      
      if(newDate){
        let guest = {
          date:formatedDate,
          food:[{
            breakFast: value.name,
            lunch: value.name,
            dinner: value.name,
          }]
        }
        this.guestList.push(guest); 
      }
      currentDate.setDate(currentDate.getDate() + 1); 
    }
  }

  onInit() {
    this.form = this.fb.group({
      pincode: ['', Validators.required],
    })
  }

  onSubmit(){
    if(this.form.valid){
      let value:string = this.form?.value?.pincode; 
      // console.log(this.form.value);
      this.data.map((item) => {
        if(item?.pincode===value){
          console.log(item?.city);
          this.activeCity = item?.city;
        }
      })
    }
    
  }
}
