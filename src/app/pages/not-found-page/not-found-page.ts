import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { routesList } from '@shared/routes/routes';

@Component({
  selector: 'app-not-found-page',
  imports: [MatButton, RouterLink],
  templateUrl: './not-found-page.html',
  styleUrl: './not-found-page.scss',
})
export class NotFoundPage {
  protected readonly routesList = routesList;
}
