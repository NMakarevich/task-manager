import { Component } from '@angular/core';
import { Calendar } from '@components/calendar/calendar';

@Component({
  selector: 'app-main-page',
  imports: [Calendar],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {}
