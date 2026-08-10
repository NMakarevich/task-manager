import { Component, computed, inject, input } from '@angular/core';
import { ColorizeDay } from '@components/day/colorize-day';
import { DatePipe, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { CalendarService } from '@services/calendar-service';
import { TodoService } from '@services/todo-service';
import { MatBadgeModule } from '@angular/material/badge';

@Component({
  selector: 'app-day',
  imports: [ColorizeDay, DatePipe, NgClass, MatBadgeModule],
  templateUrl: './day.html',
  styleUrl: './day.scss',
})
export class Day {
  day = input<Date>();
  private router = inject(Router);
  private calendarService = inject(CalendarService);
  private todoService = inject(TodoService);

  currentDate = () => {
    const day = this.day();
    if (day) {
      const [month, date, year] = day.toLocaleDateString('en-US').split('/');
      return `${year}-${month}-${date}`;
    } else {
      return '';
    }
  };

  countOfTasks = computed(() => {
    return this.todoService.todos()[this.currentDate()]
      ? this.todoService.todos()[this.currentDate()].length
      : 0;
  });

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
      this.router.navigate([`todos/${this.currentDate()}`]);
    }
  };
}
