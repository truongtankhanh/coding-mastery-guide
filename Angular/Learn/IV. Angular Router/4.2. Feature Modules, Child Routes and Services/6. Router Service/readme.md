## Dịch vụ Router trong Angular

**Khái niệm:**

Dịch vụ Router trong Angular là một dịch vụ cốt lõi giúp quản lý việc điều hướng giữa các trang trong ứng dụng Angular. Dịch vụ này cung cấp các phương thức để:

- Xác định trang hiện tại.
- Điều hướng đến một trang khác.
- Truy cập thông tin về các trang.
- Lắng nghe các thay đổi về vị trí.

**Ngữ cảnh:**

Dịch vụ Router được sử dụng trong các trường hợp sau:

- **Điều hướng giữa các trang:** Dịch vụ Router được sử dụng để điều hướng giữa các trang trong ứng dụng Angular.
- **Tạo menu:** Dịch vụ Router có thể được sử dụng để tạo menu cho ứng dụng dựa trên cấu trúc routing.
- **Bảo mật:** Dịch vụ Router có thể được sử dụng để bảo vệ các trang nhất định trong ứng dụng.
- **Theo dõi lịch sử:** Dịch vụ Router có thể được sử dụng để theo dõi lịch sử điều hướng của người dùng.

**Cách sử dụng:**

**1. Tiêm dịch vụ Router:**

Dịch vụ Router được tiêm vào component thông qua constructor.

```typescript
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    // Sử dụng dịch vụ Router
  }
}
```

**2. Điều hướng đến một trang khác:**

Sử dụng phương thức `navigate()` để điều hướng đến một trang khác.

```typescript
this.router.navigate(["/detail", 1]);
```

**3. Truy cập thông tin về các trang:**

Sử dụng phương thức `config` để truy cập thông tin về các trang.

```typescript
const routes = this.router.config;
```

**4. Lắng nghe các thay đổi về vị trí:**

Sử dụng `events` observable để lắng nghe các thay đổi về vị trí.

```typescript
this.router.events.subscribe((event) => {
  // Xử lý thay đổi vị trí
});
```

**5. Ví dụ chi tiết:**

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── detail
    ├── detail.component.html
    └── detail.component.ts
```

**2. Nội dung file:**

**app.component.html:**

```html
<div>
  <a routerLink="/detail/1">Chi tiết 1</a>
  <a routerLink="/detail/2">Chi tiết 2</a>
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

  ngOnInit() {
    // Sử dụng dịch vụ Router
  }
}
```

**detail.component.html:**

```html
<h1>Trang Detail</h1>

<p>ID: {{ id }}</p>
```

**detail.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
})
export class DetailComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }
}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';

const routes: RouteConfig = [
  {
    path: 'detail/:id',
    component: DetailComponent,
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

**6. Khởi chạy ứng dụng:**

```
ng serve
```

**7. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/`.

**8. Kết quả:**

Bạn sẽ thấy trang chủ của ứng dụng. Nhấp vào liên kết "Chi tiết 1" để điều hướng đến trang chi tiết với ID là 1.

**9. Giải thích:**

- Trong ví dụ này, `detail` là Route và `id` là tham số được truyền qua URL.
- `routerLink` directive được sử dụng để tạo liên kết đến một trang khác.
- `router-outlet` directive được sử dụng để hiển thị nội dung của trang hiện tại.
- Dịch vụ Router được sử dụng để điều hướng giữa các trang và truy cập thông tin về các trang.

**Kết luận:**

Dịch vụ Router là một dịch vụ quan trọng trong Angular giúp bạn quản lý việc điều hướng giữa các trang trong ứng dụng Angular. Dịch vụ này cung cấp các phương thức để xác định trang hiện tại, điều hướng đến một trang khác, truy cập thông tin về các trang và lắng nghe các thay đổi về vị trí.
