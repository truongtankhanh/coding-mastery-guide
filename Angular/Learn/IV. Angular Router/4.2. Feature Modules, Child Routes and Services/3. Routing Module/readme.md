## Routing Module trong Angular

**Khái niệm:**

Routing Module trong Angular là một module đặc biệt giúp quản lý việc định hướng và điều hướng người dùng giữa các trang khác nhau trong ứng dụng Angular.

**Ngữ cảnh:**

Routing Module được sử dụng trong mọi ứng dụng Angular để:

- Xác định các URL tương ứng với các component cụ thể.
- Cấu hình chuyển hướng giữa các trang.
- Quản lý lịch sử trình duyệt và thao tác back/forward.
- Cung cấp khả năng lazy loading để tối ưu hóa hiệu suất tải trang.

**Cách sử dụng:**

**1. Tạo Routing Module:**

Sử dụng Angular CLI để tạo Routing Module:

```
ng generate module app-routing
```

**2. Cấu hình Routing Module:**

- Import `RouterModule` từ `@angular/router`.
- Định nghĩa các Route bằng `RouteConfig`.
- Xác định component tương ứng cho mỗi Route.
- Sử dụng `redirectTo` để cấu hình chuyển hướng.
- Sử dụng `pathMatch` để xác định kiểu so khớp URL.

**Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── app-routing.module.ts
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
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  ...
})
export class AppModule {}
```

**app-routing.module.ts:**

```typescript
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: RouteConfig = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**3. Khởi chạy ứng dụng:**

```
ng serve
```

**4. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200`.

**5. Kết quả:**

Bạn sẽ thấy trang chủ của ứng dụng. Nhấp vào liên kết "About" để chuyển đến trang About.

**6. Giải thích:**

- Trong ví dụ này, `AppRoutingModule` được sử dụng để cấu hình routing cho ứng dụng.
- `routes` là một mảng các RouteConfig, mỗi RouteConfig xác định một URL và component tương ứng.
- `path` là URL mà người dùng sẽ nhập vào trình duyệt.
- `component` là component sẽ được hiển thị khi người dùng truy cập URL.

**7. Lazy Loading:**

Routing Module hỗ trợ lazy loading, giúp tải các component chỉ khi cần thiết, cải thiện hiệu suất tải trang.

**8. Hỏi đáp:**

Nếu bạn có bất kỳ câu hỏi nào về Routing Module trong Angular, bạn có thể hỏi tôi hoặc tham gia cộng đồng Angular trên GitHub: [https://github.com/angular/angular](https://github.com/angular/angular).

**Kết luận:**

Routing Module là một phần quan trọng trong Angular, giúp bạn dễ dàng quản lý việc điều hướng và tối ưu hóa hiệu suất cho ứng dụng Angular của bạn.
