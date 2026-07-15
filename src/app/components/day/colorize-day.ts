import { Directive, ElementRef, inject, input, OnInit } from '@angular/core';
import { CalendarService } from '@services/calendar-service';

@Directive({
  selector: '[appColorizeDay]',
})
export class ColorizeDay implements OnInit {
  private el = inject(ElementRef);
  private calendarService = inject(CalendarService);

  appColorizeDay = input<Date>();

  ngOnInit() {
    const day = this.appColorizeDay();
    if (day) {
      const dayOfWeek = day.getDay();
      if ([0, 6].includes(dayOfWeek)) {
        this.el.nativeElement.classList.add('weekend');
      }
      const month = day.getMonth();
      if (month !== this.calendarService.getMonth()) {
        this.el.nativeElement.classList.add('out-of-month');
      }
      const currentDate = new Date().toDateString();
      if (currentDate === day.toDateString()) {
        this.el.nativeElement.classList.add('current');
      }
    }
  }
}
