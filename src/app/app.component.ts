import {Component, OnInit} from '@angular/core';
import {Course} from './courses/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  courses: Array<Course>;
  title = 'CoursePlanner2';
  description = 'Welcome to the new and improved CoursePlanner2';

  ngOnInit() {
    this.courses = [];
    this.courses = [
      {
        id: 'jswebapps',
        title: 'JS Web Apps'
      },
      {
        id: 'android',
        title: 'Android'
      },
      {
        id: 'demoday',
        title: 'Demo day'
      }
    ];
  }
}
