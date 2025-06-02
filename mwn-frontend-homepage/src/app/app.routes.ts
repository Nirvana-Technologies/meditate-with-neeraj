import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../app/screens/home/home').then((m) => m.Home),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('../app/screens/contact-us/contact-us').then((m) => m.ContactUs),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('../app/screens/about-us/about-us').then((m) => m.AboutUs),
  },
];
