## Điều hướng trong Angular Router

**Khái niệm:**

Điều hướng là quá trình di chuyển giữa các trang trong ứng dụng Angular. Angular Router cung cấp một API mạnh mẽ để quản lý điều hướng trong ứng dụng.

**Ngữ cảnh:**

Điều hướng được sử dụng trong các trường hợp sau:

- **Di chuyển giữa các trang:** Khi người dùng nhấp vào liên kết hoặc nút, Angular Router sẽ điều hướng đến trang đích.
- **Quản lý trạng thái ứng dụng:** Angular Router có thể được sử dụng để quản lý trạng thái ứng dụng, ví dụ như dữ liệu được hiển thị trên trang.
- **Tạo ứng dụng SPA:** Angular Router là công cụ cần thiết để tạo ứng dụng trang đơn (SPA) với Angular.

**Cách sử dụng:**

**1. Cấu hình Route:**

Sử dụng `RouteConfig` để cấu hình các Route trong ứng dụng.

```typescript
const routes: RouteConfig = [
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "about",
    component: AboutComponent,
  },
];
```

**2. Sử dụng RouterLink:**

Sử dụng `RouterLink` directive để thêm liên kết đến các Route trong ứng dụng.

```html
<a routerLink="/home">Trang chủ</a> <a routerLink="/about">Giới thiệu</a>
```

**3. Sử dụng RouterOutlet:**

Sử dụng `RouterOutlet` directive để hiển thị nội dung của Route hiện tại.

```html
<router-outlet></router-outlet>
```

**4. Ví dụ chi tiết:**

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

**home.component.html:**

```html
<h1>Trang chủ</h1>
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

  ngOnInit() {}
}
```

**about.component.html:**

```html
<h1>Giới thiệu</h1>
```

**about.component.ts:**

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

- Nhấp vào liên kết "Trang chủ" để điều hướng đến trang chủ.
- Nhấp vào liên kết "Giới thiệu" để điều hướng đến trang
