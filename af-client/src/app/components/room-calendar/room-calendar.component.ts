import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation, OnInit
} from '@angular/core';
// import { colors } from '../demo-utils/colors';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-room-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None, // hack to get the styles to apply locally
  templateUrl: './room-calendar.component.html',
  styleUrls: ['./room-calendar.component.css'],
  // you should really include this CSS in your global stylesheet
  styles: [
    `
      .my-custom-class span {
        color: #ff3d7f !important;
      }
    `,
  ]
})

export class RoomCalendarComponent implements OnInit {

  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'Has custom class',
      //color: colors.yellow,
      start: new Date(),
      cssClass: 'my-custom-class',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}




