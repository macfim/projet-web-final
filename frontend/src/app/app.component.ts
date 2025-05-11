import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleDashboardComponent } from './article-dashboard/article-dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleDashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Articles Management';
}
