## Feature Modules trong Angular là gì?

**Feature Modules** là một cách để tổ chức code trong Angular theo các chức năng riêng biệt. Mỗi Feature Module bao gồm các component, directive, service và các file khác liên quan đến một chức năng cụ thể trong ứng dụng.

## Ngữ cảnh sử dụng Feature Modules

Bạn nên sử dụng Feature Modules khi:

- Ứng dụng của bạn có nhiều chức năng khác nhau.
- Bạn muốn tổ chức code theo các chức năng để dễ dàng quản lý và bảo trì.
- Bạn muốn sử dụng lazy loading để tăng hiệu suất tải trang.

## Cách sử dụng Feature Modules

Để sử dụng Feature Modules, bạn cần thực hiện các bước sau:

**1. Tạo Feature Module:**

Sử dụng Angular CLI để tạo một Feature Module mới. Ví dụ:

```
ng generate module home
```

Lệnh này sẽ tạo một thư mục mới `home` với các file sau:

- `home.module.ts`
- `home.component.ts`
- `home.component.html`

**2. Khai báo Feature Module:**

- Trong file `home.module.ts`, sử dụng decorator `@NgModule` để khai báo Feature Module.
- Chỉ định các component, directive và service được sử dụng trong Feature Module trong thuộc tính `declarations`.
- Chỉ định các Feature Module khác được import trong thuộc tính `imports`.

**Ví dụ:**

```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule {}
```

**3. Import Feature Module vào AppModule:**

- Trong file `app.module.ts`, import Feature Module vào AppModule.
- Thêm Feature Module vào thuộc tính `imports`.

**Ví dụ:**

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
  ],
  ...
})
export class AppModule {}
```

**4. Sử dụng Feature Module:**

- Sử dụng component được khai báo trong Feature Module trong template của component khác.

**Ví dụ:**

```
<div>
  <home-component></home-component>
</div>
```

## Ví dụ chi tiết

Dưới đây là một ví dụ chi tiết về cách sử dụng Feature Modules:

**1. Cấu trúc thư mục:**

```
app
├── app.component.html
├── app.component.ts
├── app.module.ts
└── home
    ├── home.component.html
    ├── home.component.ts
    └── home.module.ts
```

**2. Nội dung file:**

- **app.component.html:**

```
<div>
  <home-component></home-component>
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
import { HomeModule } from './home/home.module';

@NgModule({
  imports: [
    BrowserModule,
    HomeModule,
  ],
  ...
})
export class AppModule {}
```

- **home.component.html:**

```
<h1>Home</h1>

<p>This is the home page.</p>
```

- **home.component.ts:**

```
import { Component } from '@angular/core';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {}
```

**6. Khởi chạy ứng dụng:**

```
ng serve
```

**7. Truy cập ứng dụng:**

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200`.

**8. Kết quả:**

Bạn sẽ thấy ứng dụng hiển thị trang chủ.

## Ví dụ này minh họa các điểm chính sau:

- Cách tạo Feature Module.
- Cách khai báo Feature Module.
- Cách import Feature Module vào AppModule.
- Cách sử dụng Feature Module.
