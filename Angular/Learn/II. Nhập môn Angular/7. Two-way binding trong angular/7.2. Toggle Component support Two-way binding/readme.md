## Toggle Component hỗ trợ Two-way binding trong Angular

**Khái niệm:**

Two-way binding là một kỹ thuật trong Angular cho phép bạn đồng bộ dữ liệu giữa component và template một cách tự động. Khi dữ liệu thay đổi trong component, template sẽ tự động cập nhật và ngược lại.

**Toggle Component:**

Toggle component là một component được sử dụng để hiển thị một checkbox hoặc switch. Component này hỗ trợ two-way binding cho thuộc tính `checked`.

**Ngữ cảnh:**

Two-way binding được sử dụng trong các trường hợp sau:

- Hiển thị dữ liệu boolean từ component lên giao diện người dùng.
- Cho phép người dùng thay đổi giá trị của dữ liệu boolean.
- Tạo giao diện người dùng tương tác.

**Cách sử dụng:**

Để sử dụng two-way binding với toggle component, bạn cần thực hiện các bước sau:

**1. Khai báo thuộc tính trong component:**

```typescript
export class MyComponent {
  public myData = true;

  constructor() {}

  ngOnInit() {}
}
```

**2. Sử dụng toggle component trong template:**

```html
<app-toggle-component [(checked)]="myData"></app-toggle-component>
```

**3. Binding thuộc tính `checked` của toggle component:**

Thuộc tính `checked` của toggle component được binding với thuộc tính `myData` của component. Khi người dùng thay đổi giá trị của checkbox hoặc switch, giá trị của `myData` cũng sẽ thay đổi tương ứng.

**Ví dụ:**

```html
<app-toggle-component [(checked)]="myData"></app-toggle-component>

<p>Giá trị của myData: {{ myData }}</p>
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng tương tác.
- Giảm thiểu code cần viết.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Khi sử dụng two-way binding với toggle component, cần đảm bảo tên của thuộc tính trong component trùng khớp với tên của attribute trong element HTML.
- Nên sử dụng two-way binding một cách hợp lý để tránh ảnh hưởng đến hiệu suất của ứng dụng.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
