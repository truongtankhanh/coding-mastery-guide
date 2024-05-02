## CanActivate trong Angular Router

**Khái niệm:**

`CanActivate` là một interface trong Angular Router được sử dụng để tạo Route Guard. Route Guard là một lớp giúp kiểm soát truy cập vào các Route cụ thể trong ứng dụng Angular.

**Ngữ cảnh:**

`CanActivate` được sử dụng trong các trường hợp sau:

- **Xác thực:** Đảm bảo chỉ người dùng đã đăng nhập mới có thể truy cập vào các trang nhạy cảm.
- **Phân quyền:** Cho phép người dùng truy cập vào các trang dựa trên vai trò hoặc quyền hạn của họ.
- **Chuyển hướng:** Chuyển hướng người dùng đến một trang khác nếu họ không đáp ứng các điều kiện để truy cập trang hiện tại.

**Cách sử dụng:**

**1. Tạo Route Guard:**

Cấu trúc cơ bản của một Route Guard:

```typescript
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    // Kiểm tra điều kiện
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  isLoggedIn() {
    // Logic kiểm tra người dùng đã đăng nhập hay chưa
    return true;
  }
}
```

**2. Sử dụng Route Guard:**

Sử dụng `canActivate` property trong `RouteConfig` để áp dụng Route Guard cho Route:

```typescript
const routes: RouteConfig = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
];
```

**3. Ví dụ chi tiết:**

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
└── admin
    ├── admin.component.html
    ├── admin.component.ts
    └── admin.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/home">Trang chủ</a>
  <a routerLink="/admin">Trang quản trị</a>
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

**admin/admin.component.html:**

```html
<h1>Trang quản trị</h1>
```

**admin/admin.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
})
export class AdminComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

**auth.guard.ts:**

```typescript
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    // Kiểm tra điều kiện
    if (this.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  isLoggedIn() {
    // Logic kiểm tra người dùng đã đăng nhập hay chưa
    return true;
  }
}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';

const routes: RouteConfig = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
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
- Nhấp vào liên kết "Trang quản trị".
- Vì bạn chưa đăng nhập, bạn sẽ được chuyển hướng đến trang `/login`.

**8. Giải thích:**

- `CanActivate` interface được sử dụng để tạo Route Guard.
- `canActivate` property trong `RouteConfig` được sử dụng để áp dụng Route Guard cho Route.
- `isLoggedIn()` method trong `AuthGuard` được sử dụng để kiểm tra điều kiện truy cập.

**9. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi thực hiện logic đăng nhập trong `AuthGuard`?

**Trả lời:** Bạn có thể sử dụng các dịch vụ như `AuthService` để quản lý trạng thái đăng nhập của người dùng. `AuthService` có thể lưu trữ thông tin đăng nhập của người dùng trong Local Storage hoặc Session Storage. Khi người dùng đăng nhập thành công, `AuthService` sẽ cập nhật trạng thái đăng nhập và `AuthGuard` có thể cho phép người dùng truy cập vào các trang được bảo vệ.

**Câu hỏi:** Làm thế nào để tôi sử dụng `CanActivate` cho các Route con?

**Trả lời:** Bạn có thể sử dụng `canActivateChild` property trong `RouteConfig` để áp dụng `CanActivate` cho các Route con.

**Câu hỏi:** Làm thế nào để tôi sử dụng nhiều `CanActivate` cho một Route?

**Trả lời:** Bạn có thể sử dụng mảng `canActivate` property trong `RouteConfig` để áp dụng nhiều `CanActivate` cho một Route.

**Kết luận:**

`CanActivate` là một công cụ mạnh mẽ để kiểm soát truy cập vào các Route trong Angular Router. Bạn có thể sử dụng `CanActivate` để đảm bảo chỉ người dùng được phép mới có thể truy cập vào các trang nhạy cảm.

**Ngoài ra:**

- Bạn có thể sử dụng các Route Guard khác như `CanDeactivate`, `CanLoad`, `CanActivateChild` để kiểm soát truy cập vào các Route trong Angular Router.
- Bạn có thể tham khảo tài liệu chính thức của Angular Router để biết thêm thông tin chi tiết: [https://angular.io/api/router](https://angular.io/api/router).

**Hỗ trợ:**

Nếu bạn có bất kỳ câu hỏi nào khác về `CanActivate` hoặc Angular Router, bạn có thể hỏi tôi hoặc tham gia cộng đồng Angular trên GitHub: [https://github.com/angular/angular](https://github.com/angular/angular).
