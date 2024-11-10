import { Component, Input } from '@angular/core';
import { Courses } from '../app.model';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styleUrl: './courses-table.component.css'
})
export class CoursesTableComponent {
  @Input({required:true})  courses:Courses[]=[]

}
