import { Component, inject } from '@angular/core';
import { CalendarService } from '@services/calendar-service';
import { Day } from '@components/day/day';
import { MatFormField, MatLabel } from '@angular/material/input';
import { MatOption } from '@angular/material/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-calendar',
  imports: [Day, MatFormField, MatLabel, MatOption, MatSelect],
  templateUrl: './calendar.html',
  styleUrl: './calendar.scss',
})
export class Calendar {
  private calendarService = inject(CalendarService);

  monthMap = this.calendarService.monthMap;

  currentYear = this.calendarService.getYear();

  currentMonth = this.calendarService.getMonth();

  monthes = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  years = () => {
    const yearsArray = [];
    for (let i = -3; i <= 3; i += 1) {
      yearsArray.push(this.currentYear + i);
    }
    return yearsArray;
  };

  selectYear = (year: number) => {
    this.calendarService.updateYear(year);
  };

  selectMonth = (month: number) => {
    this.calendarService.updateMonth(month);
  };

  daysOfWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
}
