## Giới thiệu lại ngModel trong Angular

**Khái niệm:**

`ngModel` là một directive trong Angular cho phép bạn thực hiện data binding hai chiều giữa component và element HTML.

**Ngữ cảnh:**

`ngModel` được sử dụng trong các trường hợp sau:

- Hiển thị dữ liệu từ component lên giao diện người dùng.
- Lấy dữ liệu từ người dùng và cập nhật vào component.
- Tạo giao diện người dùng tương tác.

**Cách sử dụng:**

Có hai cách để sử dụng `ngModel`:

**1. Binding với property:**

```html
<input type="text" [(ngModel)]="myData" />
```

```typescript
export class MyComponent {
  public myData = "Đây là dữ liệu ban đầu";

  constructor() {}

  ngOnInit() {}
}
```

Trong ví dụ này, `ngModel` được sử dụng để binding property `myData` của component với giá trị của element input. Khi người dùng thay đổi giá trị của input, giá trị của `myData` cũng sẽ thay đổi tương ứng.

**2. Binding với event:**

```html
<input type="text" (ngModelChange)="onDataChange($event)" />
```

```typescript
export class MyComponent {
  public myData = "Đây là dữ liệu ban đầu";

  constructor() {}

  ngOnInit() {}

  onDataChange(data: string) {
    // Xử lý dữ liệu mới được nhập vào input
  }
}
```

Trong ví dụ này, `ngModelChange` event được sử dụng để lắng nghe sự kiện thay đổi giá trị của input. Khi người dùng thay đổi giá trị của input, event `onDataChange` sẽ được gọi với giá trị mới làm tham số.

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng tương tác.
- Giảm thiểu code cần viết.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Khi sử dụng `ngModel`, cần đảm bảo tên của property trong component trùng khớp với tên của attribute trong element HTML.
- Nên sử dụng `ngModel` một cách hợp lý để tránh ảnh hưởng đến hiệu suất của ứng dụng.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
