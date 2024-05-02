## Route Resolvers trong Angular Router

**Khái niệm:**

Route Resolver là một service được sử dụng trong Angular Router để lấy dữ liệu trước khi Route được kích hoạt. Dữ liệu được lấy bởi Resolver sẽ được cung cấp cho component được liên kết với Route đó.

**Ngữ cảnh:**

Route Resolver được sử dụng trong các trường hợp sau:

- **Lấy dữ liệu từ API:** Lấy dữ liệu từ API trước khi hiển thị component.
- **Kiểm tra quyền truy cập:** Xác định xem người dùng có quyền truy cập vào Route hay không trước khi kích hoạt Route.
- **Khởi tạo dữ liệu:** Khởi tạo dữ liệu cho component trước khi component được hiển thị.

**Cách sử dụng:**

**1. Tạo Resolver:**

Cấu trúc cơ bản của một Resolver:

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
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.userService.getUserById(route.params["id"]);
  }
}
```

**2. Sử dụng Resolver:**

Sử dụng `resolve` property trong `RouteConfig` để liên kết Resolver với Route:

```typescript
const routes: RouteConfig = [
  {
    path: "user/:id",
    component: UserDetailComponent,
    resolve: {
      user: UserResolver,
    },
  },
];
```

**3. Truy cập dữ liệu trong component:**

Sử dụng `ActivatedRoute` để truy cập dữ liệu được lấy bởi Resolver trong component:

```typescript
import { Component, OnInit, ActivatedRoute } from "@angular/core";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.data["user"];
  }
}
```

**4. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── user
    ├── user-detail.component.html
    ├── user-detail.component.ts
    └── user.resolver.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/user/1">Trang chi tiết người dùng</a>
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

**user/user-detail.component.html:**

```html
<h1>Trang chi tiết người dùng</h1>

<p>Tên người dùng: {{ user.name }}</p>
<p>Email: {{ user.email }}</p>
```

**user/user-detail.component.ts:**

```typescript
import { Component, OnInit, ActivatedRoute } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-user-detail",
  templateUrl: "./user-detail.component.html",
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.user = this.route.snapshot.data["user"];
  }
}
```

**user/user.resolver.ts:**

```typescript
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { User } from "./user";
import { UserService } from "./user.service";

@Injectable({
  providedIn: "root",
})
export class UserResolver implements Resolve<User> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User> {
    return this.userService.getUserById(route.params["id"]);
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

- Nhấp vào liên kết "Trang chi tiết người dùng".
- Dữ liệu của người dùng sẽ được hiển thị trên trang.

**8. Giải thích:**

- `UserResolver` lấy dữ liệu người dùng từ API trước khi Route `user/:id` được kích hoạt.
- Dữ liệu người dùng được cung cấp cho `UserDetailComponent` thông qua `ActivatedRoute`.
- `UserDetailComponent` sử dụng dữ liệu người dùng để hiển thị thông tin chi tiết của người dùng.

**9. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi sử dụng nhiều Resolver cho một Route?

**Trả lời:** Bạn có thể sử dụng object literal trong `resolve` property để sử dụng nhiều Resolver cho một Route.

**Câu hỏi:** Làm thế nào để tôi truy cập dữ liệu được lấy bởi Resolver trong Route con?

**Trả lời:** Bạn có thể sử dụng `ActivatedRouteSnapshot` của Route cha để truy cập dữ liệu được lấy bởi Resolver trong Route con.

**Kết luận:**

Route Resolver là một công cụ hữu ích để lấy dữ liệu trước khi Route được kích hoạt. Việc sử dụng Resolver giúp cải thiện hiệu suất ứng dụng và tránh hiển thị trang trống cho người dùng.

**Ngoài ra:**

- Bạn có thể sử dụng các Route Guard khác như `CanActivate`, `CanDeactivate`, `CanLoad` để kiểm soát truy cập vào các Route trong Angular Router.
- Bạn có thể tham khảo tài liệu chính thức của Angular Router để biết thêm thông tin chi tiết: [https://angular.io/api/router](https://angular.io/api/router).

**Hỗ trợ:**

Nếu bạn có bất kỳ câu hỏi nào khác về Route Resolvers hoặc Angular Router, bạn có thể hỏi tôi hoặc tham gia cộng đồng Angular trên GitHub: [https://github.com/angular/angular](https://github.com/angular/angular).
