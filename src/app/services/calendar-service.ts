import { computed, Service, signal } from '@angular/core';
import { LS_SELECTED_DATE, LS_SELECTED_MONTH, LS_SELECTED_YEAR } from '@shared/constants';

@Service()
export class CalendarService {
  private selectedMonth = signal(
    parseInt(localStorage.getItem(LS_SELECTED_MONTH) ?? `${new Date().getMonth()}`)
  );
  private selectedYear = signal(
    parseInt(localStorage.getItem(LS_SELECTED_YEAR) ?? `${new Date().getFullYear()}`)
  );
  private selectedDate = signal(parseInt(localStorage.getItem(LS_SELECTED_DATE) ?? `0`));

  monthMap = computed(() => {
    const date = new Date(this.selectedYear(), this.selectedMonth());
    const firstDay = date.getDay();
    const lastDay = new Date(this.selectedYear(), this.selectedMonth() + 1, 0).getDay();
    const lastDate = new Date(this.selectedYear(), this.selectedMonth() + 1, 0).getDate();
    const daysInPrevMonth = firstDay === 0 ? 6 : firstDay - 1;
    const daysInNextMonth = lastDay === 0 ? 0 : 7 - lastDay;
    const totalDaysInLayout = daysInPrevMonth + lastDate + daysInNextMonth;
    const monthArray = [];
    for (let i = 1 - daysInPrevMonth; i <= totalDaysInLayout - daysInPrevMonth; i++) {
      monthArray.push(new Date(this.selectedYear(), this.selectedMonth(), i));
    }
    return monthArray;
  });

  updateMonth = (month: number) => {
    this.selectedMonth.update(() => month);
    localStorage.setItem(LS_SELECTED_MONTH, String(month));
  };

  updateYear = (year: number) => {
    this.selectedYear.update(() => year);
    localStorage.setItem(LS_SELECTED_YEAR, String(year));
  };

  updateDate = (date: Date) => {
    this.selectedDate.update(() => date.getDate());
    localStorage.setItem(LS_SELECTED_DATE, String(date));
    this.updateMonth(date.getMonth());
    this.updateYear(date.getFullYear());
  };

  selectedDateString = computed(() => {
    if (this.selectedDate() !== 0) {
      return new Date(
        this.selectedYear(),
        this.selectedMonth(),
        this.selectedDate()
      ).toDateString();
    } else return;
  });

  getMonth = () => {
    return this.selectedMonth();
  };

  getYear = () => {
    return this.selectedYear();
  };

  getDate = () => {
    return this.selectedDate();
  };
}
