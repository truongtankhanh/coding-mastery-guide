## Tận dụng tính năng `@extend` để kế thừa các quy tắc CSS từ một selector khác một cách linh hoạt và hiệu quả.

Trong SCSS, `@extend` là một tính năng mạnh mẽ cho phép bạn kế thừa các quy tắc CSS từ một selector khác một cách linh hoạt và hiệu quả, giúp giảm thiểu sự lặp lại trong mã CSS.

### Khái niệm:

- **`@extend` trong SCSS**: `@extend` là một tính năng của SCSS cho phép bạn kế thừa các quy tắc CSS từ một selector khác. Điều này giúp tạo ra mã CSS dễ bảo trì và giảm thiểu sự lặp lại.

### Ngữ cảnh:

- `@extend` thường được sử dụng khi bạn cần áp dụng các quy tắc CSS từ một selector đã tồn tại vào một hoặc nhiều selector khác mà có cùng các thuộc tính và giá trị.

- Điều này giúp giảm bớt sự lặp lại trong mã CSS và giúp tạo ra mã CSS gọn gàng và dễ bảo trì hơn.

### Cách sử dụng:

```scss
// Định nghĩa một class chung
.shared-style {
  color: black;
  font-size: 16px;
}

// Sử dụng @extend để kế thừa các quy tắc từ class chung
.element1 {
  @extend .shared-style;
  background-color: red;
}

.element2 {
  @extend .shared-style;
  background-color: blue;
}
```

Trong ví dụ trên, `.shared-style` chứa các thuộc tính chung được sử dụng trong `.element1` và `.element2`. Thay vì lặp lại các thuộc tính, chúng ta sử dụng `@extend .shared-style;` để kế thừa các quy tắc từ `.shared-style` vào `.element1` và `.element2`. Kết quả là cả hai selector `.element1` và `.element2` sẽ có các thuộc tính giống nhau như `color` và `font-size`, giúp mã CSS trở nên gọn gàng và dễ bảo trì hơn.

---

---
