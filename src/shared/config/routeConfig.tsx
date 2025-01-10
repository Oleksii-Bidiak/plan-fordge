import { AuthPage } from '@/pages/AuthPage'
import { DashboardPage } from '@/pages/DashboardPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  HOME = 'home',
  DASHBOARD = 'dashboard',
  // /tasks	TasksBoard	Список задач або канбан-дошка
  //   TASKS = 'tasks',
  // /tasks/:id	TaskDetails	Детальна інформація про задачу
  //   TASKS_DETAILS = 'tasks_details',
  // /chat	Chat	Вікно чату (список розмов)
  //   CHATS = 'chats',
  // /chat/:id	ChatRoom	Вікно конкретного чату
  //   CHATS_DETAILS = 'chats_details',
  // /crm	CRM	Сторінка зі списком контактів та лідів
  //   CRM = 'crm',
  // /crm/:id	ContactDetails	Детальна інформація про контакт
  //   CRM_DETAILS = 'crm_details',
  // /calendar	Calendar	Календар з подіями
  //   CALENDAR = 'calendar',
  // /files	Files	Список файлів та папок
  // FILES = 'files',
  AUTH = 'auth',
  //   last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',
  [AppRoutes.DASHBOARD]: '/dashboard',
  //   [AppRoutes.DASHBOADR]: '/dashboard',
  //   [AppRoutes.TASKS]: '/tasks',
  //   [AppRoutes.TASKS_DETAILS]: '/tasks/',
  //   [AppRoutes.CHATS]: '/chats',
  //   [AppRoutes.CHATS_DETAILS]: '/chats/',
  //   [AppRoutes.CRM]: '/crm',
  //   [AppRoutes.CRM_DETAILS]: '/crm/',
  //   [AppRoutes.CALENDAR]: '/calendar',
  // [AppRoutes.FILES]: '/files',
  //   [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.HOME]: {
    path: RoutePath.home,
    element: <HomePage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  [AppRoutes.DASHBOARD]: {
    path: RoutePath.dashboard,
    element: <DashboardPage />,
    // authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
}
