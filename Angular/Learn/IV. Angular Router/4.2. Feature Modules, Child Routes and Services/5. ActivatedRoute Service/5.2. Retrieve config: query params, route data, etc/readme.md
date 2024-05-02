## Truy xuất cấu hình: tham số truy vấn, dữ liệu tuyến đường, v.v. trong Angular Router

**Khái niệm:**

Angular Router cung cấp nhiều cách để truy xuất cấu hình routing, bao gồm:

- **Tham số truy vấn:** Truyền dữ liệu qua URL sau dấu `#`.
- **Dữ liệu tuyến đường:** Dữ liệu tùy chỉnh được liên kết với một Route cụ thể.
- **Resolver:** Dịch vụ được sử dụng để truy xuất dữ liệu trước khi kích hoạt Route.

**Ngữ cảnh:**

Truy xuất cấu hình routing được sử dụng trong các trường hợp sau:

- **Lọc dữ liệu:** Dữ liệu truy vấn và dữ liệu tuyến đường có thể được sử dụng để lọc dữ liệu hiển thị trên trang.
- **Tùy chỉnh giao diện:** Dữ liệu truy vấn và dữ liệu tuyến đường có thể được sử dụng để tùy chỉnh giao diện trang.
- **Tải dữ liệu động:** Resolver có thể được sử dụng để tải dữ liệu động trước khi kích hoạt Route.

**Cách sử dụng:**

**1. Truy xuất tham số truy vấn:**

Sử dụng `queryParams` trong `RouteConfig` để truy xuất tham số truy vấn.

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

**2. Truy xuất dữ liệu tuyến đường:**

Sử dụng `data` property trong `RouteConfig` để truy xuất dữ liệu tuyến đường.

```typescript
const routes: RouteConfig = [
  {
    path: "detail/:id",
    component: DetailComponent,
    data: {
      role: "admin",
    },
  },
];
```

**3. Truy xuất dữ liệu bằng Resolver:**

Sử dụng Resolver để truy xuất dữ liệu trước khi kích hoạt Route.

```typescript
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class DetailResolver implements Resolve<any> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      // Lấy dữ liệu
      resolve({
        name: "John Doe",
        age: 30,
      });
    });
  }
}

const routes: RouteConfig = [
  {
    path: "detail/:id",
    component: DetailComponent,
    resolve: {
      data: DetailResolver,
    },
  },
];
```

**4. Ví dụ chi tiết:**

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
import { DetailResolver } from './detail/detail.resolver';

const routes: RouteConfig = [
  {
    path: 'detail/:id',
    component: DetailComponent,
    queryParams: {
      name: 'John Doe',
      age: 30,
    },
    data: {
      role: 'admin',
    },
    resolve: {
      data: DetailResolver,
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
<p>Vai trò: {{ role }}</p>
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
  role: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.name = this.route.snapshot.queryParams["name"];
    this.age = this.route.snapshot.queryParams["age"];
    this.role = this.route.snapshot.data["role"];
  }
}
```

**detail.resolver.ts:**

```typescript
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class DetailResolver implements Resolve<any> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      // Lấy dữ liệu
      resolve({
        name: "John Doe",
        age: 30,
      });
    });
  }
}
```

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/detail/1`.

**7. Kết quả:**

Bạn sẽ thấy trang Detail hiển thị thông tin chi tiết với ID là 1, tên là John Doe, tuổi là 30 và vai trò là admin.

**8. Giải thích:**

- Trong ví dụ này, `detail` là Route và `id` là tham số được truyền qua URL.
- `queryParams` property của `snapshot` cung cấp truy cập vào các tham số truy vấn được truyền qua URL.
- `data` property của `snapshot` cung cấp truy cập vào dữ liệu tuyến đường được liên kết với Route.
- `Resolver` được sử dụng để truy xuất dữ liệu `name` và `age` trước khi kích hoạt Route.

**Kết luận:**

Truy xuất cấu hình routing là một tính năng hữu ích trong Angular Router giúp bạn lọc dữ liệu, tùy chỉnh giao diện và tải dữ liệu động.
