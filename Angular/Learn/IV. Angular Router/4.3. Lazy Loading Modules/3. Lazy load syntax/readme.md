## Cú pháp tải mô-đun lười trong Angular Router

**Khái niệm:**

Cú pháp tải mô-đun lười trong Angular Router cho phép bạn chỉ tải các mô-đun ứng dụng khi cần thiết. Điều này giúp cải thiện hiệu suất khởi động ứng dụng và giảm kích thước gói ban đầu.

**Ngữ cảnh:**

Cú pháp tải mô-đun lười được sử dụng trong các trường hợp sau:

- **Ứng dụng lớn:** Khi ứng dụng của bạn có nhiều chức năng, việc tải tất cả các mô-đun cùng lúc có thể làm chậm thời gian khởi động ứng dụng. Tải mô-đun lười giúp bạn chỉ tải các mô-đun cần thiết cho chức năng mà người dùng đang sử dụng.
- **Cải thiện hiệu suất:** Tải mô-đun lười giúp giảm kích thước gói ban đầu của ứng dụng, dẫn đến thời gian tải nhanh hơn.
- **Tăng khả năng bảo trì:** Tải mô-đun lười giúp chia ứng dụng thành các mô-đun nhỏ hơn, dễ quản lý và bảo trì hơn.

**Cách sử dụng:**

**1. Cấu hình tải mô-đun lười:**

Sử dụng `loadChildren` property trong `RouteConfig` để cấu hình tải mô-đun lười.

**Cú pháp cơ bản:**

```typescript
const routes: RouteConfig = [
  {
    path: "lazy",
    loadChildren: () => import("./lazy/lazy.module").then((m) => m.LazyModule),
  },
];
```

**Cú pháp nâng cao:**

```typescript
const routes: RouteConfig = [
  {
    path: "lazy",
    loadChildren: () => {
      // Sử dụng Promise để tải mô-đun lười
      return new Promise((resolve, reject) => {
        // Kiểm tra điều kiện trước khi tải mô-đun
        if (condition) {
          // Tải mô-đun
          import("./lazy/lazy.module").then((m) => resolve(m.LazyModule));
        } else {
          // Không tải mô-đun
          reject("Không tải mô-đun lười");
        }
      });
    },
  },
];
```

**2. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── lazy
    ├── lazy.component.html
    ├── lazy.component.ts
    └── lazy.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/lazy">Trang lười</a>
  <router-outlet></router-outlet>
</div>
```

**app.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

**lazy.component.html:**

```html
<h1>Trang lười</h1>
```

**lazy.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-lazy",
  templateUrl: "./lazy.component.html",
})
export class LazyComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

**lazy.module.ts:**

```typescript
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LazyComponent } from "./lazy.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: LazyComponent,
      },
    ]),
  ],
  declarations: [LazyComponent],
  providers: [],
})
export class LazyModule {}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { LazyModule } from './lazy/lazy.module';

const routes: RouteConfig = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    LazyModule,
  ],
  ...
})
export class AppModule {}
```

**6. Khởi chạy ứng dụng:**

```
ng serve
```

**7. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**8. Kết quả:**

Nhấp vào liên kết "Trang lười" để điều hướng đến trang lười. Bạn sẽ thấy trang lười được hiển thị.

**9. Giải thích:**

- Cú pháp `loadChildren` được sử dụng để cấu hình tải mô-đun lười.
- Cú pháp cơ bản chỉ định đường dẫn đến mô-đun cần tải.
- Cú pháp nâng cao cho phép bạn sử dụng Promise để kiểm tra điều kiện trước khi tải mô-đun.

**Kết luận:**

Cú pháp tải mô-đun lười là một công cụ mạnh mẽ giúp bạn cải thiện hiệu suất ứng dụng và tăng khả năng bảo trì. Cú pháp này cho phép bạn chỉ tải các mô-đun cần thiết khi cần thiết, giúp giảm kích thước gói ban đầu và thời gian khởi động ứng dụng.
