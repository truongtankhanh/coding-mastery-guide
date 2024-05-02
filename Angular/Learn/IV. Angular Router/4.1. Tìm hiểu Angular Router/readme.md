## Angular Router là gì?

Angular Router là một module tích hợp sẵn trong Angular, cho phép bạn dễ dàng tạo các **route** (đường dẫn) cho ứng dụng. Nó giúp bạn:

- **Điều hướng** giữa các trang khác nhau trong ứng dụng.
- **Thay đổi nội dung** hiển thị mà không cần tải lại trang.
- **Cấu trúc ứng dụng** theo các phần riêng biệt, dễ quản lý.

## Ngữ cảnh sử dụng Angular Router

Bạn nên sử dụng Angular Router khi:

- Ứng dụng của bạn có nhiều trang khác nhau.
- Bạn muốn người dùng có thể di chuyển dễ dàng giữa các trang.
- Bạn muốn hiển thị nội dung động dựa trên URL.

## Cách sử dụng Angular Router

Để sử dụng Angular Router, bạn cần thực hiện các bước sau:

**1. Cài đặt Angular Router:**

```
npm install @angular/router
```

**2. Thêm Router vào AppModule:**

```
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  ...
})
export class AppModule {}
```

**3. Khai báo các route:**

- Sử dụng `@Route` decorator để khai báo các route cho component.
- Chỉ định đường dẫn cho component trong thuộc tính `path`.
- Component được hiển thị sẽ được chỉ định trong thuộc tính `component`.

**Ví dụ:**

```
@Route({
  path: 'home',
})
export class HomeComponent {}

@Route({
  path: 'about',
})
export class AboutComponent {}
```

**4. Sử dụng Router trong component:**

- Sử dụng directive `router-outlet` để hiển thị nội dung của component được route đến.
- Sử dụng directive `router-link` để tạo các liên kết đến các route khác.

**Ví dụ:**

```
<div>
  <router-outlet></router-outlet>
</div>

<a routerLink="/home">Home</a>
<a routerLink="/about">About</a>
```

**5. Truy cập thông tin từ route:**

- Sử dụng `ActivatedRoute` service để truy cập thông tin về route hiện tại.
- Ví dụ, bạn có thể truy cập tên route hiện tại bằng cách sử dụng `route.params.name`.

**Ví dụ:**

```
import { ActivatedRoute } from '@angular/router';

export class HomeComponent {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const name = this.route.params.name;
    console.log(name);
  }
}
```

## Ví dụ chi tiết

Dưới đây là một ví dụ chi tiết về cách sử dụng Angular Router:

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
├── home
│   ├── home.component.html
│   ├── home.component.ts
│   └── home.module.ts
└── about
    ├── about.component.html
    ├── about.component.ts
    └── about.module.ts
```

**2. Nội dung file:**

- **app.component.html:**

```
<div>
  <router-outlet></router-outlet>
</div>
```

- **app.component.ts:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {}
```

- **app.module.ts:**

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

- **home.component.html:**

```
<h1>Home</h1>

<p>This is the home page.</p>
```

## Tiếp theo

**3. home.component.ts:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
```

**4. about.component.html:**

```
<h1>About</h1>

<p>This is the about page.</p>
```

**5. about.component.ts:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {}
```

**6. Khởi chạy ứng dụng:**

```
ng serve
```

**7. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200`.

**8. Kết quả:**

Bạn sẽ thấy ứng dụng hiển thị trang chủ. Nhấp vào liên kết "About" để chuyển đến trang about.

## Ví dụ này minh họa các điểm chính sau:

- Cách khai báo các route.
- Cách sử dụng directive `router-outlet` và `router-link`.
- Cách truy cập thông tin từ route.

## Tìm hiểu thêm

Bạn có thể tìm hiểu thêm về Angular Router tại:

- Tài liệu Angular Router: [https://angular.io/guide/router](https://angular.io/guide/router)
- Hướng dẫn Angular Router: [https://angular.io/tutorial/toh-pt6](https://angular.io/tutorial/toh-pt6)
