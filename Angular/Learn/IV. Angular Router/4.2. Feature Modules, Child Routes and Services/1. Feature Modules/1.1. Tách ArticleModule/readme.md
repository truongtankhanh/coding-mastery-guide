## Tách ArticleModule

**Khái niệm:**

Tách ArticleModule là một kỹ thuật trong Angular giúp chia nhỏ ứng dụng thành các module nhỏ hơn, dễ quản lý hơn. Trong trường hợp này, ArticleModule sẽ được tách ra khỏi AppModule để tạo thành một module riêng biệt, chuyên quản lý các chức năng liên quan đến bài viết.

**Ngữ cảnh:**

Kỹ thuật này phù hợp khi:

- Ứng dụng của bạn có nhiều chức năng khác nhau, và mỗi chức năng có một tập hợp các component, directive và service riêng biệt.
- Bạn muốn tách biệt các chức năng để tăng khả năng bảo trì và tái sử dụng code.
- Bạn muốn tối ưu hóa hiệu suất ứng dụng bằng cách sử dụng lazy loading.

**Cách sử dụng:**

**1. Tạo ArticleModule:**

Sử dụng Angular CLI để tạo module mới:

```
ng generate module article
```

**2. Di chuyển các thành phần liên quan đến bài viết vào ArticleModule:**

Di chuyển các file sau từ AppModule sang ArticleModule:

- `article.component.ts`
- `article.component.html`
- `article.service.ts`

**3. Cập nhật AppModule:**

- Xóa các component và service liên quan đến bài viết khỏi AppModule.
- Import ArticleModule vào AppModule.
- Thêm ArticleModule vào thuộc tính `imports` của AppModule.

**4. Cập nhật routing:**

- Cập nhật routing module để đảm bảo các URL liên quan đến bài viết được chuyển hướng đến ArticleModule.

**Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── features
    └── article
        ├── article.component.html
        ├── article.component.ts
        ├── article.module.ts
        └── article.service.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <router-outlet></router-outlet>
</div>
```

**app.component.ts:**

```typescript
import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent {}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ArticleModule } from './features/article/article.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', loadChildren: './features/article/article.module#ArticleModule' },
    ]),
  ],
  ...
})
export class AppModule {}
```

**article.component.html:**

```html
<h1>Bài viết</h1>

<p>Đây là nội dung bài viết.</p>
```

**article.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import { ArticleService } from "./article.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
})
export class ArticleComponent implements OnInit {
  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // Lấy dữ liệu bài viết
  }
}
```

**article.service.ts:**

```typescript
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ArticleService {
  constructor() {}

  getArticles() {
    // Lấy danh sách bài viết
  }

  getArticleById(id: number) {
    // Lấy bài viết theo ID
  }
}
```

**article.module.ts:**

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ArticleComponent } from "./article.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: ArticleComponent }]),
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
```

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200`

## Tiếp theo:

**7. Kết quả:**

Bạn sẽ thấy ứng dụng hiển thị nội dung trang chủ. Nhấp vào liên kết "Bài viết" để chuyển đến trang bài viết.

**8. Ưu điểm:**

- Kỹ thuật tách ArticleModule mang lại một số ưu điểm:

  - **Khả năng bảo trì cao:** Việc chia nhỏ ứng dụng thành các module nhỏ giúp dễ dàng quản lý, sửa lỗi và cập nhật code.
  - **Khả năng tái sử dụng:** Các module có thể được tái sử dụng trong các ứng dụng Angular khác.
  - **Hiệu suất:** Sử dụng lazy loading giúp tải các module chỉ khi cần thiết, cải thiện hiệu suất tải trang.

**9. Hạn chế:**

- Kỹ thuật này cũng có một số hạn chế:

  - **Độ phức tạp:** Việc quản lý nhiều module có thể phức tạp hơn so với một module duy nhất.
  - **Cấu hình routing:** Cần cấu hình routing cẩn thận để đảm bảo các URL được chuyển hướng đến module chính xác.

**10. Tìm hiểu thêm:**

- Tài liệu Angular về Feature Modules: [https://angular.io/guide/feature-modules](https://angular.io/guide/feature-modules)

**Kết luận:**

Tách ArticleModule là một kỹ thuật hữu ích để tổ chức code Angular theo các chức năng riêng biệt, giúp tăng khả năng bảo trì, tái sử dụng và hiệu suất cho ứng dụng.
