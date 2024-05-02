## Giải quyết dữ liệu trong Angular Router

**Khái niệm:**

Resolver là một lớp trong Angular Router giúp bạn lấy dữ liệu trước khi Route được kích hoạt. Resolver có thể được sử dụng để:

- Lấy dữ liệu từ API
- Lấy dữ liệu từ bộ nhớ cache
- Lấy dữ liệu từ một dịch vụ

**Ngữ cảnh:**

Resolver được sử dụng trong các trường hợp sau:

- **Tải dữ liệu trước khi hiển thị trang:** Ví dụ, bạn có thể sử dụng Resolver để tải dữ liệu sản phẩm trước khi hiển thị trang chi tiết sản phẩm.
- **Cải thiện hiệu suất:** Ví dụ, bạn có thể sử dụng Resolver để lấy dữ liệu từ bộ nhớ cache thay vì truy cập API mỗi lần.
- **Giảm thiểu mã trong component:** Ví dụ, bạn có thể sử dụng Resolver để lấy dữ liệu và xử lý dữ liệu trước khi component được khởi tạo.

**Cách sử dụng:**

**1. Cấu hình Resolver:**

Sử dụng `resolve` property trong `RouteConfig` để cấu hình Resolver cho Route.

```typescript
const routes: RouteConfig = [
  {
    path: "products/:id",
    component: ProductComponent,
    resolve: {
      product: ProductResolver,
    },
  },
];
```

**2. Tạo Resolver:**

Tạo một lớp implements `Resolve` interface.

```typescript
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductResolver implements Resolve<Product> {
  constructor() {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product> {
    const id = route.params["id"];
    return this.productService.getProduct(id);
  }
}
```

**3. Ví dụ chi tiết:**

**products/product.component.ts:**

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "./product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.product = this.route.snapshot.data["product"];
  }
}
```

**products/product.service.ts:**

```typescript
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./product";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`/api/products/${id}`);
  }
}
```

**app.module.ts:**

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './products/product.component';
import { ProductResolver } from './products/product.resolver';
import { HttpClientModule } from '@angular/common/http';

const routes: RouteConfig = [
  {
    path: 'products/:id',
    component: ProductComponent,
    resolve: {
      product: ProductResolver,
    },
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
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

Mở trình duyệt web và truy cập địa chỉ `http://localhost:4200/products/1`.

**7. Kết quả:**

- Trang chi tiết sản phẩm sẽ được hiển thị với dữ liệu sản phẩm được tải từ API.

**8. Giải thích:**

- `resolve` property trong `RouteConfig` được sử dụng để cấu hình Resolver cho Route.
- `ProductResolver` implements `Resolve` interface và lấy dữ liệu sản phẩm từ API.
- Dữ liệu sản phẩm được tiêm vào component `ProductComponent` thông qua `ActivatedRoute`.

**Kết luận:**

Resolver là một công cụ mạnh mẽ giúp bạn lấy dữ liệu trước khi Route được kích hoạt, giúp cải thiện hiệu suất và trải nghiệm người dùng.
