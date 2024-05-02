## Cấu hình chuyển hướng trong Angular Router

**Khái niệm:**

Cấu hình chuyển hướng trong Angular Router cho phép bạn định hướng người dùng đến một URL khác dựa trên URL hiện tại.

**Ngữ cảnh:**

Cấu hình chuyển hướng được sử dụng trong các trường hợp sau:

- **Chuyển hướng người dùng đến trang chủ:** Khi người dùng truy cập URL không hợp lệ, bạn có thể chuyển hướng họ đến trang chủ.
- **Chuyển hướng người dùng đến trang mới:** Khi nội dung của một trang đã được chuyển sang một trang khác, bạn có thể chuyển hướng người dùng đến trang mới để họ có thể truy cập nội dung mới nhất.
- **Cài đặt SEO:** Bạn có thể sử dụng chuyển hướng để tối ưu hóa SEO cho ứng dụng Angular của mình.

**Cách sử dụng:**

Có hai cách để cấu hình chuyển hướng trong Angular Router:

**1. Sử dụng `redirectTo` trong `@Route` decorator:**

```typescript
@Route({
  path: "old-url",
  redirectTo: "/new-url",
})
export class MyComponent {}
```

**2. Sử dụng `redirectTo` trong `RouteConfig`:**

```typescript
const routes: RouteConfig = [
  {
    path: 'old-url',
    redirectTo: '/new-url',
  },
  {
    path: 'new-url',
    component: MyComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  ...
})
export class AppModule {}
```

**Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── home
    ├── home.component.html
    ├── home.component.ts
    └── home.module.ts
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
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
    ]),
  ],
  ...
})
export class AppModule {}
```

**home.component.html:**

```html
<h1>Trang chủ</h1>

<p>Đây là trang chủ của ứng dụng.</p>
```

**home.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Lấy dữ liệu trang chủ
  }
}
```

**home.module.ts:**

```typescript
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: HomeComponent }]),
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
```

**3. Khởi chạy ứng dụng:**

```
ng serve
```

**4. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200`.

**5. Kết quả:**

Bạn sẽ thấy ứng dụng hiển thị trang chủ.

**6. Giải thích:**

- Trong ví dụ này, chúng ta sử dụng `redirectTo` trong `RouteConfig` để chuyển hướng người dùng đến `/home` khi họ truy cập URL `/`.
- Sử dụng `pathMatch: 'full'` để đảm bảo chỉ chuyển hướng khi URL khớp hoàn toàn với `/`.

**8. Các loại chuyển hướng:**

Có hai loại chuyển hướng chính trong Angular Router:

- **Chuyển hướng vĩnh viễn:** Sử dụng `redirectTo` để chuyển hướng vĩnh viễn người dùng đến URL mới.
- **Chuyển hướng tạm thời:** Sử dụng `useAsDefault` để chuyển hướng tạm thời người dùng đến URL mới. Khi người dùng nhấp vào nút quay lại, họ sẽ được quay lại URL trước đó.

**9. Ví dụ về chuyển hướng tạm thời:**

```typescript
const routes: RouteConfig = [
  {
    path: 'old-url',
    useAsDefault: true,
    redirectTo: '/new-url',
  },
  {
    path: 'new-url',
    component: MyComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  ...
})
export class AppModule {}
```

**Kết luận:**

Cấu hình chuyển hướng trong Angular Router là một tính năng hữu ích giúp bạn điều hướng người dùng đến các trang khác trong ứng dụng của bạn một cách dễ dàng và hiệu quả.
