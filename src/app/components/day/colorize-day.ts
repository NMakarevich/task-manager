import { computed, Directive, inject, input } from '@angular/core';
import { CalendarService } from '@services/calendar-service';

@Directive({
  selector: '[appColorizeDay]',
  host: { '[class]': 'setClass()' },
})
export class ColorizeDay {
  private calendarService = inject(CalendarService);

  appColorizeDay = input<Date>();

  setClass = computed(() => {
    const day = this.appColorizeDay();
    const classes = [];
    if (day) {
      const dayOfWeek = day.getDay();
      const month = day.getMonth();
      const currentDate = new Date().toDateString();
      if ([0, 6].includes(dayOfWeek)) {
        classes.push('weekend');
      }
      if (month !== this.calendarService.getMonth()) {
        classes.push('out-of-month');
      }
      if (currentDate === day.toDateString()) {
        classes.push('current');
      }
    }
    return classes.join(' ');
  });
}
