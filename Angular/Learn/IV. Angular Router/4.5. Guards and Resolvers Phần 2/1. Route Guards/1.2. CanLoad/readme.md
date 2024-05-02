## CanLoad trong Angular Router

**Khái niệm:**

`CanLoad` là một interface trong Angular Router được sử dụng để tạo Route Guard. Route Guard là một lớp giúp kiểm soát việc tải các module lazy-loaded trong ứng dụng Angular.

**Ngữ cảnh:**

`CanLoad` được sử dụng trong các trường hợp sau:

- **Xác thực:** Đảm bảo chỉ người dùng đã đăng nhập mới có thể tải các module chứa các trang nhạy cảm.
- **Phân quyền:** Cho phép người dùng tải các module dựa trên vai trò hoặc quyền hạn của họ.
- **Tối ưu hóa hiệu suất:** Tránh tải các module không cần thiết để cải thiện hiệu suất ứng dụng.

**Cách sử dụng:**

**1. Tạo Route Guard:**

Cấu trúc cơ bản của một Route Guard:

```typescript
import { Injectable } from "@angular/core";
import { CanLoad, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route) {
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

Sử dụng `canLoad` property trong `RouteConfig` để áp dụng Route Guard cho module lazy-loaded:

```typescript
const routes: RouteConfig = [
  {
    path: "admin",
    loadChildren: () =>
      import("./admin/admin.module").then((m) => m.AdminModule),
    canLoad: [AuthGuard],
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
└── admin
    ├── admin.component.html
    ├── admin.component.ts
    └── admin.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
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
import { CanLoad, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanLoad {
  constructor(private router: Router) {}

  canLoad(route: Route) {
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
import { AuthGuard } from './auth.guard';

const routes: RouteConfig = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AuthGuard],
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

- Nhấp vào liên kết "Trang quản trị".
- Vì bạn chưa đăng nhập, bạn sẽ được chuyển hướng đến trang `/login`.

**8. Giải thích:**

- `CanLoad` interface được sử dụng để tạo Route Guard.
- `canLoad` property trong `RouteConfig` được sử dụng để áp dụng Route Guard cho module lazy-loaded.
- `isLoggedIn()` method trong `AuthGuard` kiểm tra điều kiện và cho phép tải module lazy-loaded hoặc chuyển hướng người dùng đến trang `/login`.

**9. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi sử dụng `CanLoad` cho các Route con?

**Trả lời:** `CanLoad` chỉ được sử dụng cho các module lazy-loaded, không áp dụng cho các Route con.

**Câu hỏi:** Làm thế nào để tôi sử dụng nhiều `CanLoad` cho một module?

**Trả lời:** Bạn có thể sử dụng mảng `canLoad` property trong `RouteConfig` để áp dụng nhiều `CanLoad` cho một module.

**Kết luận:**

`CanLoad` là một công cụ mạnh mẽ để kiểm soát việc tải các module lazy-loaded trong Angular Router. Bạn có thể sử dụng `CanLoad` để đảm bảo chỉ người dùng được phép mới có thể tải các module chứa các trang nhạy cảm.

**Ngoài ra:**

- Bạn có thể sử dụng các Route Guard khác như `CanActivate`, `CanDeactivate`, `CanActivateChild` để kiểm soát truy cập vào các Route trong Angular Router.
- Bạn có thể tham khảo tài liệu chính thức của Angular Router để biết thêm thông tin chi tiết: [https://angular.io/api/router](https://angular.io/api/router).

**Hỗ trợ:**

Nếu bạn có bất kỳ câu hỏi nào khác về `CanLoad` hoặc Angular Router, bạn có thể hỏi tôi hoặc tham gia cộng đồng Angular trên GitHub: [https://github.com/angular/angular](https://github.com/angular/angular).
