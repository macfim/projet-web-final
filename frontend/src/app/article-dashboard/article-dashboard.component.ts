import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { HttpClientModule } from '@angular/common/http';
import { ArticleModel } from './article-dashboard.modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-dashboard',
  standalone: true,
  imports: [ReactiveFormsModule, HttpClientModule, CommonModule],
  templateUrl: './article-dashboard.component.html',
  styleUrl: './article-dashboard.component.css',
  providers: [ApiService],
})
export class ArticleDashboardComponent implements OnInit {
  formValue!: FormGroup;
  articleModelObj: ArticleModel = new ArticleModel();
  articlesData!: any;
  showAdd: boolean = true;
  showUpdate: boolean = false;

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit() {
    this.formValue = this.formBuilder.group({
      nomArticle: [''],
      description: [''],
    });
    this.getAllArticles();
  }

  getAllArticles() {
    this.api.getAllArticles().subscribe((res) => {
      this.articlesData = res;
    });
  }

  deleteArticle(row: any) {
    this.api.deleteArticle(row._id).subscribe((res) => {
      alert('Article deleted successfully');
      this.getAllArticles();
    });
  }

  onEdit(row: any) {
    this.showAdd = false;
    this.showUpdate = true;
    this.articleModelObj._id = row._id;
    this.formValue.controls['nomArticle'].setValue(row.nomArticle);
    this.formValue.controls['description'].setValue(row.description);
  }

  updateArticleDetails() {
    this.articleModelObj.nomArticle = this.formValue.value.nomArticle;
    this.articleModelObj.description = this.formValue.value.description;

    this.api
      .updateArticle(this.articleModelObj, this.articleModelObj._id)
      .subscribe((res) => {
        alert('Update successful');
        this.formValue.reset();
        this.showAdd = true;
        this.showUpdate = false;
        this.getAllArticles();
      });
  }

  postArticleDetails() {
    this.articleModelObj.nomArticle = this.formValue.value.nomArticle;
    this.articleModelObj.description = this.formValue.value.description;

    this.api.postArticle(this.articleModelObj).subscribe(
      (res) => {
        console.log(res);
        alert('Article added successfully');
        this.formValue.reset();
        this.getAllArticles();
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
}
