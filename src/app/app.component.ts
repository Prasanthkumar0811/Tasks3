import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  courses=[{
    name:'Basic Algorithm',date:'27 Jan 2023' ,lesson:'10/25', duration:'14hours'
  },{
    name:'Web Development',date:'7 Mar 2023' ,lesson:'1/25', duration:'4hours'
  },{
    name:'Basic Data Science',date:'2 Jun 2023' ,lesson:'20/25', duration:'24hours'
  },{
    name:'UI/UX Design',date:'22 Nov 2023' ,lesson:'11/25', duration:'34hours'
  }
]
}
