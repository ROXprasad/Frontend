import { Component, HostListener, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';  
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
@Component({
  selector: 'app-leavecalendar',
  templateUrl: './leavecalendar.component.html',
  styleUrls: ['./leavecalendar.component.scss']
})
export class LeavecalendarComponent implements OnInit {

  isMobile: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isMobile = window.innerWidth < 760;
  }

  
  constructor() { }
  calendarOptions: CalendarOptions;
  leaveDates: string[] = [
    '2024-12-02', '2024-12-05', '2024-12-10', '2024-12-15', '2024-12-20'
  ];
  ngOnInit(): void {
    this.isMobile = window.innerWidth < 760; // Initial check when the component loads

     this.calendarOptions = {
      initialView: 'dayGridMonth',  // Start with Month view
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],  // Required plugins
      events: this.leaveDates.map(date => ({
        title: 'Leave',
        date,
        classNames: ['red-event']
      })),
      dateClick: (arg) => this.handleDateClick(arg),  // Event handler for date clicks
      headerToolbar: {
        left: 'prev,next today', // Left button group (navigation)
        center: 'title',         // Title of calendar (e.g. Dec 2024)
        right: 'dayGridMonth,timeGridWeek'  // Right button group (toggle views)
      }
    };
  }
 

  handleDateClick(arg) {
    console.log('Date clicked: ', arg.dateStr);  
  }
  
}
