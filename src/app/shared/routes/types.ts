interface RouteItem {
  title?: string;
  path: string;
  getLink: (data?: string) => string;
}

type RoutesNames = 'main' | 'todos' | 'todosDate' | 'notFound';

export type RoutesList = Record<RoutesNames, RouteItem>;
