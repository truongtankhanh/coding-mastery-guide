## ActivatedRoute trong RxJS

**Khái niệm:**

`ActivatedRoute` là một lớp trong Angular cung cấp thông tin về **route hiện tại** được kích hoạt. Nó bao gồm các thông tin như:

- **Tên route**
- **Tham số route**
- **Dữ liệu route**

**Ngữ cảnh:**

`ActivatedRoute` thường được sử dụng trong Angular để:

- **Lấy thông tin về route hiện tại**
- **Tải dữ liệu cho component dựa trên route**
- **Điều hướng đến các route khác**

**Cách sử dụng:**

Để sử dụng `ActivatedRoute` trong RxJS, bạn cần thực hiện các bước sau:

**1. Import ActivatedRoute:**

```typescript
import { ActivatedRoute } from "@angular/router";
```

**2. Inject ActivatedRoute vào component:**

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "my-component",
  templateUrl: "./component.html",
})
export class MyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // ...
  }
}
```

**3. Lấy thông tin từ ActivatedRoute:**

```typescript
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "my-component",
  templateUrl: "./component.html",
})
export class MyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Lấy tên route
    const routeName = this.route.snapshot.routeConfig?.path;

    // Lấy tham số route
    const id = this.route.snapshot.paramMap.get("id");

    // Lấy dữ liệu route
    const data = this.route.snapshot.data;

    // ...
  }
}
```

**Ví dụ:**

```html
<p>Tên route: {{ routeName }}</p>
<p>Tham số route: {{ id }}</p>
<p>Dữ liệu route: {{ data }}</p>
```

**Lưu ý:**

- `ActivatedRoute` cung cấp một số **Observable** để lấy thông tin về route hiện tại.
- Bạn có thể sử dụng **pipe** để kết hợp các Observable và lấy dữ liệu một cách linh hoạt.

**Ngoài ra:**

- **Router**: Lớp cung cấp các phương thức để điều hướng đến các route khác.
- **NavigationExtras**: Lớp cung cấp các tùy chọn bổ sung cho việc điều hướng.

**Hỗ trợ thêm:**

- Tài liệu Angular về ActivatedRoute: [https://angular.io/api/router/ActivatedRoute](https://angular.io/api/router/ActivatedRoute)

**Kết luận:**

`ActivatedRoute` là một công cụ mạnh mẽ để lấy thông tin về route hiện tại và tải dữ liệu cho component. Hiểu rõ cách sử dụng `ActivatedRoute` có thể giúp bạn viết code hiệu quả và dễ bảo trì hơn.

**Bạn có thể tìm hiểu thêm về Angular và RxJS tại:**

- Trang web Angular: [https://angular.io/](https://angular.io/)
- Tài liệu RxJS: [https://rxjs.dev/](https://rxjs.dev/)
