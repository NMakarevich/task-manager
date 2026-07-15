import { Component, inject } from '@angular/core';
import { CalendarService } from '@services/calendar-service';
import { Day } from '@components/day/day';

@Component({
  selector: 'app-calendar',
  imports: [Day],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  private calendarService = inject(CalendarService);

  monthMap = this.calendarService.monthMap;

  daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
}
