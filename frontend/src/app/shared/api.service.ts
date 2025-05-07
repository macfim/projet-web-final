import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api/articles';

  constructor(private http: HttpClient) {}

  postArticle(data: any) {
    return this.http.post<any>(this.apiUrl, data).pipe(map((res: any) => res));
  }

  getArticle(id: string) {
    return this.http
      .get<any>(`${this.apiUrl}/${id}`)
      .pipe(map((res: any) => res));
  }

  getAllArticles() {
    return this.http.get<any>(this.apiUrl).pipe(map((res: any) => res));
  }

  deleteArticle(id: string) {
    return this.http
      .delete<any>(`${this.apiUrl}/${id}`)
      .pipe(map((res: any) => res));
  }

  updateArticle(data: any, id: string) {
    return this.http
      .put<any>(`${this.apiUrl}/${id}`, data)
      .pipe(map((res: any) => res));
  }
}
