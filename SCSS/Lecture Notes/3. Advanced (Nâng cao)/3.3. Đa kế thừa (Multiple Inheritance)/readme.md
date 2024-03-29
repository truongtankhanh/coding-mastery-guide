## Sử dụng đa kế thừa để áp dụng các quy tắc từ nhiều selector vào một đối tượng.

Trong SCSS, đa kế thừa cho phép bạn áp dụng các quy tắc từ nhiều selector khác nhau vào một đối tượng, giúp tạo ra mã CSS linh hoạt và dễ bảo trì.

### Khái niệm:

- **Đa kế thừa trong SCSS**: Đa kế thừa cho phép bạn áp dụng các quy tắc từ nhiều selector khác nhau vào một đối tượng bằng cách sử dụng cú pháp đặc biệt.

### Ngữ cảnh:

- Đa kế thừa thường được sử dụng khi bạn cần áp dụng các kiểu CSS từ nhiều nguồn khác nhau vào cùng một phần tử.

- Điều này hữu ích khi bạn muốn áp dụng các quy tắc CSS từ các thư viện CSS hoặc các framework khác vào mã của mình mà không cần sửa đổi các file gốc.

### Cách sử dụng:

```scss
// Áp dụng đa kế thừa
.element {
  @extend .class1;
  @extend .class2;
  @extend .class3;
}
```

#### Ví dụ:

```scss
// Định nghĩa các quy tắc CSS cho các class
.class1 {
  background-color: red;
}

.class2 {
  color: white;
}

.class3 {
  padding: 10px;
}

// Sử dụng đa kế thừa
.element {
  @extend .class1;
  @extend .class2;
  @extend .class3;
}
```

Trong ví dụ trên, `.element` sử dụng đa kế thừa để áp dụng các quy tắc từ các class `.class1`, `.class2`, và `.class3` vào cùng một đối tượng. Kết quả là các quy tắc CSS từ các class này sẽ được kết hợp lại trong mã CSS của `.element`, giúp tạo ra mã CSS linh hoạt và dễ bảo trì.

---

---
