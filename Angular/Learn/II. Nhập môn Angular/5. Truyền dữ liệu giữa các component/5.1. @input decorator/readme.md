## @Input decorator trong Angular

**Khái niệm:**

`@Input` decorator là một decorator trong Angular cho phép bạn truyền dữ liệu từ component cha sang component con.

**Ngữ cảnh:**

`@Input` decorator được sử dụng trong các trường hợp sau:

- Truyền dữ liệu từ component cha sang component con để hiển thị.
- Truyền dữ liệu từ component cha sang component con để chỉnh sửa.
- Tạo giao diện người dùng động và tương tác.

**Cách sử dụng:**

Để sử dụng `@Input` decorator, bạn cần thực hiện các bước sau:

1. **Khai báo biến trong component cha:**

```typescript
export class AppComponent {
  public myData = "Đây là dữ liệu từ component cha";
}
```

2. **Sử dụng `@Input` decorator trong component con:**

```typescript
export class ChildComponent {
  @Input() public myData: string;

  constructor() {}

  ngOnChanges() {
    console.log(this.myData);
  }
}
```

3. **Truyền dữ liệu từ component cha sang component con trong template:**

```html
<app-child-component [myData]="myData"></app-child-component>
```

**Ví dụ nâng cao:**

- Truyền dữ liệu từ component cha sang component con để hiển thị danh sách:

```html
<app-child-component [items]="items"></app-child-component>
```

- Truyền dữ liệu từ component cha sang component con để chỉnh sửa:

```html
<app-child-component
  [item]="item"
  (itemChange)="onItemChange($event)"
></app-child-component>
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng động và tương tác.
- Giảm thiểu code cần viết.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Khi sử dụng `@Input` decorator, cần đảm bảo tên của biến trong component con trùng khớp với tên của biến trong component cha.
- Nên sử dụng `@Input` decorator một cách hợp lý để tránh ảnh hưởng đến hiệu suất của ứng dụng.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)

**Kết luận:**

`@Input` decorator là một kỹ thuật mạnh mẽ giúp bạn truyền dữ liệu từ component cha sang component con trong Angular. Sử dụng kỹ thuật này một cách hiệu quả sẽ giúp bạn phát triển ứng dụng Angular nhanh chóng và hiệu quả hơn.

**Chúc bạn thành công!**
