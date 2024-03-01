import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotel-management';
  
  guestList:any = [];
  dayWiseList:any = [];

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
}
