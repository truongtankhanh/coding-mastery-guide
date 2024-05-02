## Kích hoạt Thành phần trong Angular Router

**Khái niệm:**

Kích hoạt thành phần là quá trình tạo và hiển thị thành phần trong Angular Router. Quá trình này được thực hiện khi người dùng truy cập vào một URL được cấu hình trong Router.

**Ngữ cảnh:**

Kích hoạt thành phần được sử dụng trong các trường hợp sau:

- **Hiển thị nội dung khác nhau tùy thuộc vào URL:** Ví dụ, bạn có thể hiển thị trang chủ khi người dùng truy cập vào `/`, và hiển thị trang chi tiết sản phẩm khi người dùng truy cập vào `/products/:id`.
- **Tải các thành phần theo yêu cầu:** Ví dụ, bạn có thể chỉ tải thành phần khi người dùng cần sử dụng chức năng tương ứng.
- **Cải thiện hiệu suất:** Ví dụ, bạn có thể chỉ tải các thành phần cần thiết cho trang hiện tại.

**Cách sử dụng:**

**1. Cấu hình Route:**

Sử dụng `RouteConfig` để cấu hình các Route trong ứng dụng. Mỗi Route bao gồm:

- `path`: URL được sử dụng để kích hoạt Route.
- `component`: Thành phần được hiển thị khi Route được kích hoạt.

**2. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
├── home
    ├── home.component.html
    ├── home.component.ts
    └── home.module.ts
└── about
    ├── about.component.html
    ├── about.component.ts
    └── about.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/home">Trang chủ</a>
  <a routerLink="/about">Giới thiệu</a>
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

**home/home.component.html:**

```html
<h1>Trang chủ</h1>
```

**home/home.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

**about/about.component.html:**

```html
<h1>Giới thiệu</h1>
```

**about/about.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: RouteConfig = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
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

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**7. Kết quả:**

- Nhấp vào liên kết "Trang chủ".
- Thành phần `HomeComponent` sẽ được hiển thị.
- Nhấp vào liên kết "Giới thiệu".
- Thành phần `AboutComponent` sẽ được hiển thị.

**8. Giải thích:**

- `RouteConfig` được sử dụng để cấu hình các Route trong ứng dụng.
- Mỗi Route bao gồm `path` và `component`.
- Khi người dùng truy cập vào URL được cấu hình trong Route, thành phần tương ứng sẽ được hiển thị.
