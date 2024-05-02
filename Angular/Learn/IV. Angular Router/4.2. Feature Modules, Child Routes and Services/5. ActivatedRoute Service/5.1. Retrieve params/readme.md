## Truy xuất tham số trong Angular Router

**Khái niệm:**

Angular Router cho phép bạn truyền tham số giữa các trang thông qua URL. Tham số là một cặp key-value được thêm vào URL sau dấu `#`.

**Ngữ cảnh:**

Truy xuất tham số được sử dụng trong các trường hợp sau:

- **Truyền dữ liệu giữa các trang:** Bạn có thể sử dụng tham số để truyền dữ liệu từ trang này sang trang khác.
- **Lọc dữ liệu:** Bạn có thể sử dụng tham số để lọc dữ liệu hiển thị trên trang.
- **Tạo URL thân thiện với SEO:** Bạn có thể sử dụng tham số để tạo URL thân thiện với SEO.

**Cách sử dụng:**

**1. Truyền tham số:**

Sử dụng `queryParams` trong `RouteConfig` để truyền tham số.

```typescript
const routes: RouteConfig = [
  {
    path: "detail/:id",
    component: DetailComponent,
    queryParams: {
      name: "John Doe",
      age: 30,
    },
  },
];
```

**2. Truy xuất tham số trong component:**

Sử dụng `ActivatedRoute` để truy xuất tham số trong component.

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {
  id: number;
  name: string;
  age: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.name = this.route.snapshot.queryParams["name"];
    this.age = this.route.snapshot.queryParams["age"];
  }
}
```

**3. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── detail
    ├── detail.component.html
    └── detail.component.ts
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
import { DetailComponent } from './detail/detail.component';

const routes: RouteConfig = [
  {
    path: 'detail/:id',
    component: DetailComponent,
    queryParams: {
      name: 'John Doe',
      age: 30,
    }
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  ...
})
export class AppModule {}
```

**detail.component.html:**

```html
<h1>Trang Detail</h1>

<p>ID: {{ id }}</p>
<p>Tên: {{ name }}</p>
<p>Tuổi: {{ age }}</p>
```

**detail.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {
  id: number;
  name: string;
  age: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.name = this.route.snapshot.queryParams["name"];
    this.age = this.route.snapshot.queryParams["age"];
  }
}
```

**4. Khởi chạy ứng dụng:**

```
ng serve
```

**5. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/detail/1`.

**6. Kết quả:**

Bạn sẽ thấy trang Detail hiển thị thông tin chi tiết với ID là 1, tên là John Doe và tuổi là 30

**7. Giải thích:**

- Trong ví dụ này, `detail` là Route và `id` là tham số được truyền qua URL.
- `ActivatedRoute` được sử dụng để truy xuất tham số trong component `DetailComponent`.
- `snapshot` property của `ActivatedRoute` cung cấp quyền truy cập vào thông tin routing hiện tại.
- `params` property của `snapshot` cung cấp truy cập vào các tham số được truyền qua URL.
- `queryParams` property của `snapshot` cung cấp truy cập vào các tham số truy vấn được truyền qua URL.

**8. Truy cập tham số thay đổi:**

Sử dụng `params` hoặc `queryParams` observable để truy cập tham số thay đổi.

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {
  id: number;
  name: string;
  age: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });

    this.route.queryParams.subscribe((params) => {
      this.name = params["name"];
      this.age = params["age"];
    });
  }
}
```

**Kết luận:**

Truy xuất tham số là một tính năng hữu ích trong Angular Router giúp bạn truyền dữ liệu giữa các trang, lọc dữ liệu và tạo URL thân thiện với SEO.
