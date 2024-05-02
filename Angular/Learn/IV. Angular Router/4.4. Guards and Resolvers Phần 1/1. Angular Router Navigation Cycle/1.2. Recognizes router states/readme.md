## Nhận diện trạng thái Router trong Angular

**Khái niệm:**

Angular Router cung cấp khả năng nhận diện trạng thái hiện tại của Router. Điều này giúp bạn thực hiện các hành động khác nhau tùy thuộc vào trang mà người dùng đang truy cập.

**Ngữ cảnh:**

Nhận diện trạng thái Router được sử dụng trong các trường hợp sau:

- **Hiển thị nội dung khác nhau tùy thuộc vào trang:** Ví dụ, bạn có thể hiển thị thanh điều hướng khác nhau cho các trang khác nhau trong ứng dụng.
- **Kích hoạt hoặc tắt các chức năng:** Ví dụ, bạn có thể tắt nút "Thêm sản phẩm" trên trang chi tiết sản phẩm.
- **Theo dõi lịch sử trình duyệt:** Ví dụ, bạn có thể thêm các trang đã truy cập vào danh sách lịch sử.

**Cách sử dụng:**

**1. Sử dụng `RouterState`:**

`RouterState` là một lớp cung cấp thông tin về trạng thái hiện tại của Router.

```typescript
import { Router, RouterState } from '@angular/router';

constructor(private router: Router) { }

ngOnInit() {
  const state: RouterState = this.router.routerState;
  const url: string = state.url;
  const params: Params = state.queryParams;
}
```

**2. Sử dụng `ActivatedRoute`:**

`ActivatedRoute` là một lớp cung cấp thông tin về Route hiện tại.

```typescript
import { ActivatedRoute } from '@angular/router';

constructor(private route: ActivatedRoute) { }

ngOnInit() {
  const id: number = this.route.snapshot.params['id'];
  const name: string = this.route.snapshot.params['name'];
}
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

  ngOnInit() {
    const state: RouterState = this.router.routerState;
    const url: string = state.url;
    console.log("URL:", url);
  }
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

- Khi truy cập trang chủ, console sẽ hiển thị URL `/home`.
- Khi truy cập trang giới thiệu, console sẽ hiển thị URL `/about`.

**8. Giải thích:**

- `RouterState` cung cấp thông tin về trạng thái hiện tại của Router, bao gồm URL và các tham số truy vấn.
- `ActivatedRoute` cung cấp thông tin về Route hiện tại, bao gồm các tham số Route.

**Kết luận:**

Nhận diện trạng thái Router là một tính năng mạnh mẽ giúp bạn thực hiện các hành động khác nhau tùy thuộc vào trang mà người dùng đang truy cập.
