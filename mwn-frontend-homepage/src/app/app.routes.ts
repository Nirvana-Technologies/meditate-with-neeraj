import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../app/screens/home/home').then((m) => m.Home),
  },
  {
    path: 'upcoming-seminars',
    loadComponent: () =>
      import('../app/screens/upcoming-seminars/upcoming-seminars').then(
        (m) => m.UpcomingSeminars
      ),
  },
  {
    path: 'about-us',
    loadComponent: () =>
      import('../app/screens/about-us/about-us').then((m) => m.AboutUs),
  },
];
