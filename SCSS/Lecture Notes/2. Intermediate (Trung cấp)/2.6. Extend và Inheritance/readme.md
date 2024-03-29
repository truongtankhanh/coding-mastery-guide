## Sử dụng `@extend` để kế thừa các quy tắc CSS từ một selector khác, giúp giảm lặp lại mã.

Trong SCSS, `@extend` là một cách để kế thừa các quy tắc CSS từ một selector khác, giúp giảm lặp lại mã và tạo ra mã CSS ngắn gọn hơn.

### Khái niệm:

- **@extend trong SCSS**: @extend cho phép bạn kế thừa tất cả các quy tắc CSS từ một selector khác, giúp tránh lặp lại mã và tạo ra các quy tắc CSS hiệu quả hơn.

### Ngữ cảnh:

- @extend thường được sử dụng khi bạn muốn áp dụng các kiểu CSS giống nhau cho nhiều phần tử mà không muốn lặp lại mã.

- Điều này đặc biệt hữu ích khi bạn cần thay đổi kiểu dáng của một phần tử dựa trên một số yếu tố khác nhau mà không muốn tạo ra nhiều quy tắc CSS tương tự nhau.

### Cách sử dụng:

```scss
// Định nghĩa các quy tắc CSS cơ bản
.base-button {
  padding: 10px 20px;
  border: none;
}

.primary-button {
  background-color: #3498db;
  color: white;
}

.secondary-button {
  background-color: #2ecc71;
  color: white;
}

// Sử dụng @extend để kế thừa các quy tắc CSS
.button {
  @extend .base-button;
}

.button-primary {
  @extend .primary-button;
}

.button-secondary {
  @extend .secondary-button;
}
```

Trong ví dụ trên, chúng ta định nghĩa các quy tắc CSS cơ bản cho các nút (base-button), và sau đó sử dụng @extend để kế thừa các quy tắc này cho các lớp button-primary và button-secondary. Điều này giúp tránh lặp lại mã CSS và tạo ra mã CSS ngắn gọn hơn.

---

---

## Sử dụng kỹ thuật inheritance để tạo ra các class con kế thừa từ một class cha, tạo cấu trúc CSS linh hoạt và dễ bảo trì.

Trong SCSS, kỹ thuật inheritance (kế thừa) cho phép bạn tạo ra các class con kế thừa từ một class cha, tạo cấu trúc CSS linh hoạt và dễ bảo trì.

### Khái niệm:

- **Kế thừa trong SCSS**: Kế thừa cho phép bạn định nghĩa các thuộc tính CSS trong một class cha và tái sử dụng chúng trong các class con. Điều này giúp giảm lặp lại mã CSS và tạo ra cấu trúc CSS linh hoạt.

### Ngữ cảnh:

- Kỹ thuật inheritance thường được sử dụng khi bạn cần áp dụng các kiểu CSS tương tự cho nhiều phần tử, nhưng với một số sự khác biệt nhỏ.

- Điều này giúp tạo ra cấu trúc CSS rõ ràng và dễ bảo trì, đặc biệt là trong các dự án lớn với nhiều phần tử giao diện.

### Cách sử dụng:

```scss
// Định nghĩa class cha
.btn {
  padding: 10px 20px;
  border: none;
}

// Sử dụng kỹ thuật inheritance để tạo ra các class con kế thừa từ class cha
.btn-primary {
  @extend .btn;
  background-color: #3498db;
  color: white;
}

.btn-secondary {
  @extend .btn;
  background-color: #2ecc71;
  color: white;
}
```

Trong ví dụ trên, chúng ta định nghĩa class cha `.btn` với các thuộc tính chung cho các nút. Sau đó, chúng ta sử dụng kỹ thuật inheritance bằng cách sử dụng `@extend` để tạo ra các class con kế thừa từ class cha `.btn`, và chỉ cần định nghĩa các thuộc tính khác biệt cho mỗi class con. Điều này giúp tạo ra cấu trúc CSS linh hoạt và dễ bảo trì.

---

---
