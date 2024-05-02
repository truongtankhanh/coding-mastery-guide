## CanDeactivate trong Angular Router

**Khái niệm:**

`CanDeactivate` là một interface trong Angular Router được sử dụng để tạo Route Guard. Route Guard là một lớp giúp kiểm soát việc người dùng rời khỏi một Route cụ thể trong ứng dụng Angular.

**Ngữ cảnh:**

`CanDeactivate` được sử dụng trong các trường hợp sau:

- **Hỏi người dùng xác nhận:** Hiển thị hộp thoại xác nhận trước khi cho phép người dùng rời khỏi trang hiện tại.
- **Lưu dữ liệu chưa được lưu:** Lưu dữ liệu mà người dùng đã nhập vào biểu mẫu trước khi họ rời khỏi trang.
- **Chuyển hướng người dùng đến một trang khác:** Chuyển hướng người dùng đến một trang khác dựa trên điều kiện nhất định.

**Cách sử dụng:**

**1. Tạo Route Guard:**

Cấu trúc cơ bản của một Route Guard:

```typescript
import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class EditGuard implements CanDeactivate {
  constructor(private router: Router) {}

  canDeactivate(component: EditComponent) {
    // Kiểm tra điều kiện
    if (component.isDirty) {
      return confirm("Bạn có muốn rời khỏi trang này?");
    } else {
      return true;
    }
  }
}
```

**2. Sử dụng Route Guard:**

Sử dụng `canDeactivate` property trong `RouteConfig` để áp dụng Route Guard cho Route:

```typescript
const routes: RouteConfig = [
  {
    path: "edit/:id",
    component: EditComponent,
    canDeactivate: [EditGuard],
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
└── edit
    ├── edit.component.html
    ├── edit.component.ts
    └── edit.module.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/edit/1">Trang chỉnh sửa</a>
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

**edit/edit.component.html:**

```html
<h1>Trang chỉnh sửa</h1>

<form>
  <input type="text" name="name" [(ngModel)]="name" />
  <button type="submit">Lưu</button>
</form>
```

**edit/edit.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
})
export class EditComponent implements OnInit {
  name: string;
  isDirty: boolean = false;

  constructor() {}

  ngOnInit() {}

  onFormSubmit() {
    this.isDirty = false;
  }
}
```

**edit.guard.ts:**

```typescript
import { Injectable } from "@angular/core";
import { CanDeactivate, Router } from "@angular/router";
import { EditComponent } from "./edit.component";

@Injectable({
  providedIn: "root",
})
export class EditGuard implements CanDeactivate {
  constructor(private router: Router) {}

  canDeactivate(component: EditComponent) {
    // Kiểm tra điều kiện
    if (component.isDirty) {
      return confirm("Bạn có muốn rời khỏi trang này?");
    } else {
      return true;
    }
  }
}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { EditGuard } from './edit.guard';

const routes: RouteConfig = [
  {
    path: 'edit/:id',
    component: EditComponent,
    canDeactivate: [EditGuard],
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

- Nhấp vào liên kết "Trang chỉnh sửa".
- Nhập dữ liệu vào trường "Tên".
- Nhấp vào nút "Lưu".
- Nhấp vào liên kết "Trang chủ".
- Hộp thoại xác nhận sẽ xuất hiện.

**8. Giải thích:**

- `CanDeactivate` interface được sử dụng để tạo Route Guard.
- `canDeactivate` property trong `RouteConfig` được sử dụng để áp dụng Route Guard cho Route.
- `isDirty` property trong `EditComponent` được sử dụng để theo dõi xem người dùng đã thay đổi dữ liệu hay chưa.
- `canDeactivate` method trong `EditGuard` kiểm tra `isDirty` property và hiển thị hộp thoại xác nhận trước khi cho phép người dùng rời khỏi trang.

**9. Hỏi đáp:**

**Câu hỏi:** Làm thế nào để tôi sử dụng `CanDeactivate` cho các Route con?

**Trả lời:** Bạn có thể sử dụng `canDeactivateChild` property trong `RouteConfig` để áp dụng `CanDeactivate` cho các Route con.

**Câu hỏi:** Làm thế nào để tôi sử dụng nhiều `CanDeactivate` cho một Route?

**Trả lời:** Bạn có thể sử dụng mảng `canDeactivate` property trong `RouteConfig` để áp dụng nhiều `CanDeactivate` cho một Route.

**Kết luận:**

`CanDeactivate` là một công cụ mạnh mẽ để kiểm soát việc người dùng rời khỏi các Route trong Angular Router. Bạn có thể sử dụng `CanDeactivate` để đảm bảo dữ liệu được lưu hoặc hiển thị hộp thoại xác nhận trước khi người dùng rời khỏi trang.

**Ngoài ra:**

- Bạn có thể sử dụng các Route Guard khác như `CanActivate`, `CanLoad`, `CanActivateChild` để kiểm soát truy cập vào các Route trong Angular Router.
- Bạn có thể tham khảo tài liệu chính thức của Angular Router để biết thêm thông tin chi tiết: [https://angular.io/api/router](https://angular.io/api/router).

**Hỗ trợ:**

Nếu bạn có bất kỳ câu hỏi nào khác về `CanDeactivate` hoặc Angular Router, bạn có thể hỏi tôi hoặc tham gia cộng đồng Angular trên GitHub: [https://github.com/angular/angular](https://github.com/angular/angular).
