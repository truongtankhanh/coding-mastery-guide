## Tải trước mô-đun lười trong Angular Router

**Khái niệm:**

Tải trước mô-đun lười là một kỹ thuật trong Angular Router giúp tải các mô-đun ứng dụng trước khi người dùng truy cập đến chúng. Điều này giúp cải thiện trải nghiệm người dùng bằng cách giảm thời gian chờ đợi khi người dùng điều hướng đến các trang mới.

**Ngữ cảnh:**

Tải trước mô-đun lười được sử dụng trong các trường hợp sau:

- **Ứng dụng lớn:** Khi ứng dụng của bạn có nhiều chức năng, việc tải tất cả các mô-đun cùng lúc có thể làm chậm thời gian khởi động ứng dụng. Tải trước mô-đun lười giúp bạn tải các mô-đun quan trọng trước khi người dùng truy cập đến chúng, giúp cải thiện trải nghiệm người dùng.
- **Cải thiện trải nghiệm người dùng:** Tải trước mô-đun lười giúp giảm thời gian chờ đợi khi người dùng điều hướng đến các trang mới, dẫn đến trải nghiệm người dùng mượt mà hơn.
- **Tăng hiệu suất:** Tải trước mô-đun lười có thể giúp tăng hiệu suất ứng dụng bằng cách tải các mô-đun cần thiết trước khi cần thiết.

**Cách sử dụng:**

**1. Cấu hình tải trước mô-đun lười:**

Sử dụng `preloadingStrategy` property trong `RouteConfig` để cấu hình tải trước mô-đun lười.

```typescript
const routes: RouteConfig = [
  {
    path: "lazy",
    loadChildren: () => import("./lazy/lazy.module").then((m) => m.LazyModule),
    data: {
      preload: true,
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
import { RouterModule, PreloadAllModules } from '@angular/router';
import { LazyModule } from './lazy/lazy.module';

const routes: RouteConfig = [
  {
    path: 'lazy',
    loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule),
    data: {
      preload: true,
    },
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
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

- Mô-đun `LazyModule` sẽ được tải trước khi người dùng truy cập đến nó.
- Khi người dùng nhấp vào liên kết "Trang lười", trang lười sẽ được hiển thị ngay lập tức.

**9. Giải thích:**

- `preloadingStrategy` property được sử dụng để xác định chiến lược tải trước.
- `PreloadAllModules` strategy tải trước tất cả các mô-đun lười được cấu hình.
- Mô-đun `LazyModule` được tải trước vì nó được cấu hình với `data: { preload: true }`.

**Kết luận:**

Tải trước mô-đun lười là một kỹ thuật hữu ích trong Angular Router giúp cải thiện trải nghiệm người dùng bằng cách giảm thời gian chờ đợi khi người dùng điều hướng đến các trang mới.
