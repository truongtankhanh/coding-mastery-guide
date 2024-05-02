## Chạy Guard trong Angular Router

**Khái niệm:**

Guard là một lớp trong Angular Router giúp bạn kiểm soát việc truy cập vào các Route. Guard có thể được sử dụng để:

- Xác thực người dùng: Đảm bảo người dùng đã đăng nhập trước khi truy cập vào Route.
- Phân quyền: Đảm bảo người dùng có quyền truy cập vào Route.
- Chuyển hướng: Chuyển hướng người dùng đến một Route khác.

**Ngữ cảnh:**

Guard được sử dụng trong các trường hợp sau:

- **Bảo vệ các Route nhạy cảm:** Ví dụ, bạn có thể sử dụng Guard để bảo vệ trang quản trị viên chỉ dành cho người dùng có quyền truy cập.
- **Thực hiện logic trước khi điều hướng:** Ví dụ, bạn có thể sử dụng Guard để hiển thị thông báo xác nhận trước khi người dùng xóa một bản ghi.
- **Cải thiện trải nghiệm người dùng:** Ví dụ, bạn có thể sử dụng Guard để hiển thị trang tải trước khi tải nội dung của Route.

**Cách sử dụng:**

**1. Cấu hình Guard:**

Sử dụng `canActivate` property trong `RouteConfig` để cấu hình Guard cho Route.

```typescript
const routes: RouteConfig = [
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [AuthGuard],
  },
];
```

**2. Tạo Guard:**

Tạo một lớp implements `CanActivate` interface.

```typescript
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  private isAuthenticated(): boolean {
    // Logic xác thực người dùng
    return true;
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
├── admin
    ├── admin.component.html
    ├── admin.component.ts
    └── admin.module.ts
└── auth
    ├── auth.guard.ts
    └── auth.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/admin">Trang quản trị viên</a>
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

**admin.component.html:**

```html
<h1>Trang quản trị viên</h1>
```

**admin.component.ts:**

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

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';

const routes: RouteConfig = [
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
    if (this.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  private isAuthenticated(): boolean {
    // Logic xác thực người dùng
    return true;
  }
}
```

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**7. Kết quả:**

- Nhấp vào liên kết "Trang quản trị viên".
- Nếu người dùng đã được xác thực, họ sẽ được truy cập vào trang quản trị viên.
- Nếu người dùng chưa được xác thực, họ sẽ được chuyển hướng đến trang đăng nhập.

**8. Giải thích:**

- `canActivate` property trong `RouteConfig` được sử dụng để cấu hình Guard cho Route.
- `AuthGuard` implements `CanActivate` interface và kiểm tra xem người dùng đã được xác thực hay chưa.
- Nếu người dùng chưa được xác thực, Guard sẽ chuyển hướng họ đến trang đăng nhập.

**Kết luận:**

Guard là một công cụ mạnh mẽ giúp bạn kiểm soát việc truy cập vào các Route trong ứng dụng Angular.
