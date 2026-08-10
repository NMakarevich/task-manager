import { Routes } from '@angular/router';
import { MainPage } from '@pages/main-page/main-page';
import { routesList } from '@shared/routes/routes';

export const routes: Routes = [
  {
    path: routesList.main.path,
    component: MainPage,
    title: routesList.main.title,
  },
  {
    path: routesList.todos.path,
    redirectTo: () => {
      const [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
      return routesList.todosDate.getLink(`${year}-${month}-${date}`);
    },
    pathMatch: 'full',
  },
  {
    path: routesList.todosDate.path,
    loadComponent: () => import('@pages/todo-page/todo-page').then((c) => c.TodoPage),
    title: routesList.todosDate.title,
  },
  {
    path: routesList.notFound.path,
    loadComponent: () => import('@pages/not-found-page/not-found-page').then((c) => c.NotFoundPage),
    title: routesList.notFound.title,
  },
  {
    path: '**',
    redirectTo: routesList.notFound.getLink(),
  },
];
