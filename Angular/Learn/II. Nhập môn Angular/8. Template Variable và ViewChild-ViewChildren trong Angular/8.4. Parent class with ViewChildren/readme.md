## Parent class sử dụng ViewChildren

**Khái niệm:**

`ViewChildren` là decorator trong Angular cho phép bạn truy cập đến một danh sách các element HTML hoặc directive con từ component cha.

**Ngữ cảnh:**

`ViewChildren` được sử dụng trong các trường hợp sau:

- Truy cập đến danh sách các element HTML hoặc directive con để thao tác trực tiếp.
- Giao tiếp giữa component cha và con.
- Tái sử dụng code giữa các component.

**Cách sử dụng:**

Để sử dụng `ViewChildren`, bạn cần thực hiện các bước sau:

**1. Khai báo biến tham chiếu trong component cha:**

```typescript
export class MyComponent {
  @ViewChildren("myInput") public myInputs: ElementRef[];

  constructor() {}

  ngOnInit() {}
}
```

**2. Sử dụng biến tham chiếu trong component cha:**

```typescript
export class MyComponent {
  @ViewChildren("myInput") public myInputs: ElementRef[];

  constructor() {}

  ngOnInit() {
    // Truy cập giá trị của tất cả các input
    for (const input of this.myInputs) {
      const value = input.nativeElement.value;
    }
  }
}
```

**Ví dụ:**

```html
<div>
  <input type="text" #myInput1 />
  <input type="text" #myInput2 />
</div>
```

```typescript
export class MyComponent {
  @ViewChildren("myInput") public myInputs: ElementRef[];

  constructor() {}

  ngOnInit() {
    // Truy cập giá trị của tất cả các input
    for (const input of this.myInputs) {
      const value = input.nativeElement.value;
    }
  }
}
```

**Lợi ích:**

- Giúp code gọn gàng và dễ đọc hơn.
- Tạo giao diện người dùng tương tác.
- Giảm thiểu code cần viết.

**Hạn chế:**

- Có thể ảnh hưởng đến hiệu suất nếu sử dụng không hợp lý.
- Khó gỡ lỗi nếu code phức tạp.

**Lưu ý:**

- Khi sử dụng `ViewChildren`, cần đảm bảo tên của biến tham chiếu trùng khớp với tên của element HTML hoặc directive con.
- Nên sử dụng `ViewChildren` một cách hợp lý để tránh ảnh hưởng đến hiệu suất của ứng dụng.

**Tài liệu tham khảo:**

- Angular Docs: [https://angular.io/docs](https://angular.io/docs)
- Angular Blog: [https://blog.angular.io/](https://blog.angular.io/)
