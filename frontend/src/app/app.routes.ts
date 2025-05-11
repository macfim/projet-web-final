import { Routes } from '@angular/router';
import { ArticleDashboardComponent } from './article-dashboard/article-dashboard.component';

export const routes: Routes = [
  { path: '', component: ArticleDashboardComponent },
  { path: 'articles', component: ArticleDashboardComponent },
];
