import { RoutesList } from '@shared/routes/types';

export const routesList: RoutesList = {
  main: {
    path: '',
    getLink: () => {
      return '';
    },
    title: 'Планировщик задач',
  },
  todos: {
    path: 'todos',
    getLink: () => {
      return 'todos';
    },
  },
  todosDate: {
    path: 'todos/:date',
    getLink: (date) => {
      return `todos/${date}`;
    },
    title: 'Задачи',
  },
  notFound: {
    path: 'not-found',
    getLink: () => {
      return 'not-found';
    },
    title: 'Страница не найдена',
  },
};
