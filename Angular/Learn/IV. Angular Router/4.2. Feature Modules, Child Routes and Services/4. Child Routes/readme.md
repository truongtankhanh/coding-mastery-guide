## Child Routes trong Angular Router

**Khái niệm:**

Child Routes trong Angular Router là một tính năng cho phép bạn tổ chức các Route thành một cấu trúc phân cấp. Điều này giúp bạn quản lý các Route một cách hiệu quả hơn, đặc biệt là trong các ứng dụng Angular lớn và phức tạp.

**Ngữ cảnh:**

Child Routes được sử dụng trong các trường hợp sau:

- **Tổ chức các Route theo chức năng:** Bạn có thể nhóm các Route liên quan đến cùng một chức năng thành một Child Route.
- **Tạo bố cục trang:** Bạn có thể sử dụng Child Route để tạo bố cục trang chung cho ứng dụng, bao gồm header, footer, sidebar, v.v.
- **Tái sử dụng các component:** Bạn có thể tái sử dụng các component trong các Child Route khác nhau.

**Cách sử dụng:**

**1. Định nghĩa Child Routes:**

Sử dụng thuộc tính `children` trong RouteConfig để định nghĩa Child Routes cho một Route cha.

```typescript
const routes: RouteConfig = [
  {
    path: "parent",
    component: ParentComponent,
    children: [
      { path: "child1", component: Child1Component },
      { path: "child2", component: Child2Component },
    ],
  },
];
```

**2. Truy cập Child Routes:**

Sử dụng URL tương đối để truy cập Child Routes từ Route cha.

```html
<a routerLink="child1">Child 1</a> <a routerLink="child2">Child 2</a>
```

**3. Kích hoạt Child Routes:**

Child Routes được kích hoạt khi URL khớp với path của Route cha và path của Child Route.

**4. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
├── app-routing.module.ts
└── parent
    ├── parent.component.html
    ├── parent.component.ts
    └── child1
        ├── child1.component.html
        └── child1.component.ts
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
import { ParentComponent } from "./parent/parent.component";
import { Child1Component } from "./parent/child1/child1.component";

const routes: RouteConfig = [
  {
    path: "parent",
    component: ParentComponent,
    children: [{ path: "child1", component: Child1Component }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
```

**parent.component.html:**

```html
<h1>Trang Parent</h1>

<router-outlet></router-outlet>
```

**parent.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
})
export class ParentComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

**child1.component.html:**

```html
<h1>Trang Child 1</h1>
```

**child1.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-child1",
  templateUrl: "./child1.component.html",
})
export class Child1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
```

## Tiếp theo:

**5. Khởi chạy ứng dụng:**

```
ng serve
```

**6. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/parent`.

**7. Kết quả:**

Bạn sẽ thấy trang Parent hiển thị. Nhấp vào liên kết "Child 1" để chuyển đến trang Child 1.

**8. Giải thích:**

- Trong ví dụ này, `parent` là Route cha và `child1` là Child Route.
- `path` của Route cha là `/parent` và `path` của Child Route là `child1`.
- Khi người dùng truy cập URL `/parent/child1`, Child Route `child1` được kích hoạt và component `Child1Component` được hiển thị.

**9. Ưu điểm:**

- Child Routes giúp tổ chức các Route một cách hiệu quả và dễ quản lý.
- Child Routes giúp tạo bố cục trang chung cho ứng dụng.
- Child Routes giúp tái sử dụng các component.

**10. Hạn chế:**

- Child Routes có thể làm cho cấu trúc routing phức tạp hơn.
- Child Routes có thể ảnh hưởng đến hiệu suất tải trang nếu không được sử dụng hợp lý.

**11. Tìm hiểu thêm:**

- Tài liệu Angular về Child Routes: [https://angular-training-guide.rangle.io/routing/child_routes](https://angular-training-guide.rangle.io/routing/child_routes)
- Hướng dẫn Angular về Child Routes: [https://www.youtube.com/watch?v=nwtt9b5tHVI](https://www.youtube.com/watch?v=nwtt9b5tHVI)
- Ví dụ Angular về Child Routes: [https://github.com/janders/angular-tab-router-with-children](https://github.com/janders/angular-tab-router-with-children)

**Kết luận:**

Child Routes là một tính năng hữu ích trong Angular Router giúp bạn tổ chức các Route một cách hiệu quả và dễ quản lý, tạo bố cục trang chung và tái sử dụng các component.
