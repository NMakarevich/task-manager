import { Component, computed, inject, input } from '@angular/core';
import { ColorizeDay } from '@components/day/colorize-day';
import { DatePipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { CalendarService } from '@services/calendar-service';

@Component({
  selector: 'app-day',
  imports: [ColorizeDay, DatePipe, NgClass],
  templateUrl: './day.html',
  styleUrl: './day.scss',
})
export class Day {
  day = input<Date>();
  private router = inject(Router);
  private calendarService = inject(CalendarService);

  isSelected = computed(() => {
    return this.calendarService.getDate() === this.day()?.toDateString();
  });

  selectDay = (event?: KeyboardEvent) => {
    const day = this.day();
    if (day || (day && event && event.key === 'space')) {
      this.calendarService.updateDate(day);
    }
  };

  navigateToTodo = () => {
    const day = this.day();
    if (day) {
      const [month, date, year] = day.toLocaleDateString('en-US').split('/');
      this.router.navigate([`todos/${year}-${month}-${date}`]);
    }
  };
}
