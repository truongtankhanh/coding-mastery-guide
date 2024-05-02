## Quản lý điều hướng trong Angular Router

**Khái niệm:**

Quản lý điều hướng là quá trình điều khiển việc di chuyển giữa các trang trong ứng dụng Angular. Angular Router cung cấp một số tính năng để quản lý điều hướng, bao gồm:

- **Liên kết:** Tạo liên kết đến các trang khác trong ứng dụng.
- **Chuyển hướng:** Chuyển hướng người dùng đến một trang khác.
- **Lịch sử trình duyệt:** Theo dõi lịch sử truy cập trang của người dùng.
- **Tham số truy vấn:** Truyền dữ liệu giữa các trang.

**Ngữ cảnh:**

Quản lý điều hướng được sử dụng trong các trường hợp sau:

- **Tạo trải nghiệm người dùng tốt:** Ví dụ, bạn có thể sử dụng liên kết để giúp người dùng dễ dàng di chuyển giữa các trang trong ứng dụng.
- **Điều khiển truy cập trang:** Ví dụ, bạn có thể sử dụng chuyển hướng để đảm bảo người dùng chỉ truy cập vào các trang mà họ được phép truy cập.
- **Cải thiện SEO:** Ví dụ, bạn có thể sử dụng lịch sử trình duyệt để giúp Google hiểu cấu trúc trang web của bạn.

**Cách sử dụng:**

**1. Liên kết:**

Sử dụng `routerLink` directive để tạo liên kết đến các trang khác trong ứng dụng.

```html
<a routerLink="/home">Trang chủ</a>
```

**2. Chuyển hướng:**

Sử dụng `Router` service để chuyển hướng người dùng đến một trang khác.

```typescript
import { Router } from '@angular/router';

constructor(private router: Router) { }

navigateToAbout() {
  this.router.navigate(['/about']);
}
```

**3. Lịch sử trình duyệt:**

Sử dụng `Location` service để truy cập lịch sử truy cập trang của người dùng.

```typescript
import { Location } from '@angular/common';

constructor(private location: Location) { }

goBack() {
  this.location.back();
}
```

**4. Tham số truy vấn:**

Sử dụng `queryParams` property trong `RouteConfig` để truyền dữ liệu giữa các trang.

```typescript
const routes: RouteConfig = [
  {
    path: "products/:id",
    component: ProductComponent,
    queryParams: {
      // Truyền id sản phẩm
      id: ":id",
    },
  },
];
```

**5. Ví dụ chi tiết:**

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
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAbout() {
    this.router.navigate(["/about"]);
  }
}
```

**home/home.component.html:**

```html
<h1>Trang chủ</h1>
<button (click)="navigateToAbout()">Về trang Giới thiệu</button>
```

**home/home.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  navigateToAbout() {
    this.router.navigate(["/about"]);
  }
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

## Tiếp theo:

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
- Nhấp vào nút "Về trang Giới thiệu".
- Người dùng sẽ được chuyển hướng đến trang `AboutComponent`.

**8. Giải thích:**

- `routerLink` directive được sử dụng để tạo liên kết đến các trang khác trong ứng dụng.
- `Router` service được sử dụng để chuyển hướng người dùng đến một trang khác.

**Kết luận:**

Angular Router cung cấp một số tính năng mạnh mẽ để quản lý điều hướng trong ứng dụng Angular, giúp bạn tạo trải nghiệm người dùng tốt và cải thiện SEO.
