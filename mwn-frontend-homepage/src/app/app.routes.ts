import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('../app/screens/home/home').then((m) => m.Home),
  },
  {
    path: 'terms',
    loadComponent: () =>
      import('../app/screens/terms-and-conditions/terms-and-conditions').then(
        (m) => m.TermsAndConditions
      ),
  },
  {
    path: 'privacyPolicy',
    loadComponent: () =>
      import('../app/screens/privacy-policy/privacy-policy').then(
        (m) => m.PrivacyPolicy
      ),
  },
];
