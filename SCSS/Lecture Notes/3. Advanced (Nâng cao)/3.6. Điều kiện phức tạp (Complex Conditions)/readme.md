## Sử dụng các biểu thức phức tạp như AND, OR, NOT trong các câu lệnh điều kiện.

Trong SCSS, bạn có thể sử dụng các biểu thức phức tạp như AND (`and`), OR (`or`), NOT (`not`) trong các câu lệnh điều kiện để kiểm tra nhiều điều kiện cùng một lúc.

### Khái niệm:

- **Biểu thức phức tạp trong SCSS**: SCSS hỗ trợ các biểu thức phức tạp như AND, OR, NOT để kiểm tra nhiều điều kiện cùng một lúc trong các câu lệnh điều kiện.

### Ngữ cảnh:

- Các biểu thức phức tạp thường được sử dụng khi bạn cần kiểm tra nhiều điều kiện cùng một lúc để quyết định việc áp dụng các quy tắc CSS.

### Cách sử dụng:

```scss
// Sử dụng AND (&&) trong câu lệnh điều kiện
.element {
  @if $width > 100px and $height > 100px {
    background-color: red;
  } @else {
    background-color: blue;
  }
}

// Sử dụng OR (||) trong câu lệnh điều kiện
.element {
  @if $background-color == "red" or $background-color == "blue" {
    border: 1px solid black;
  }
}

// Sử dụng NOT (!) trong câu lệnh điều kiện
.element {
  @if not $width > 100px {
    font-weight: bold;
  }
}
```

Trong ví dụ trên, chúng ta sử dụng các biểu thức phức tạp như AND (`and`), OR (`or`), NOT (`not`) trong các câu lệnh điều kiện để kiểm tra nhiều điều kiện cùng một lúc và quyết định việc áp dụng các quy tắc CSS tương ứng. Điều này giúp kiểm soát logic của mã CSS một cách linh hoạt và mạch lạc.

---

---
