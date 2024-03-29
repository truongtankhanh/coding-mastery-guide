Trong SCSS, "Tiền tố" và "Truyền tham số" là hai khái niệm quan trọng liên quan đến việc định nghĩa và sử dụng các mixin và function. Dưới đây là một phân tích chi tiết:

### Khái niệm:

- **Tiền tố (Prefixing)**: Đây là quá trình thêm các tiền tố (prefixes) tự động vào các thuộc tính CSS như `transform`, `transition`,... để đảm bảo tính tương thích với các trình duyệt khác nhau.
- **Truyền tham số (Parameter Passing)**: Là quá trình truyền các giá trị vào trong các mixin hoặc function để sử dụng trong mã CSS.

### Ngữ cảnh:

- **Tiền tố**: Việc sử dụng tiền tố thường xuyên xảy ra khi viết CSS, đặc biệt là trong các trường hợp cần thêm các tiền tố đặc biệt cho các thuộc tính để đảm bảo rằng mã CSS hoạt động một cách chính xác trên các trình duyệt khác nhau.
- **Truyền tham số**: Khi bạn muốn tái sử dụng mã CSS và cần điều chỉnh một số giá trị, bạn có thể sử dụng truyền tham số để thực hiện điều này một cách linh hoạt.

### Cách sử dụng:

Dưới đây là ví dụ về cách sử dụng tiền tố và truyền tham số trong SCSS:

#### Tiền tố:

```scss
@mixin prefix($property, $value) {
  -webkit-#{$property}: $value;
  -moz-#{$property}: $value;
  -ms-#{$property}: $value;
  -o-#{$property}: $value;
  #{$property}: $value;
}

.box {
  @include prefix(transform, translate(50%, 50%));
}
```

Trong ví dụ này, chúng ta đã tạo một mixin có tên là `prefix`, nhận hai tham số là `$property` và `$value`, và sau đó sử dụng nó để thêm các tiền tố vào thuộc tính `transform`.

#### Truyền tham số:

```scss
@mixin button-style($background-color, $text-color) {
  background-color: $background-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
}

.button {
  @include button-style(#3498db, #ffffff);
}

.button-secondary {
  @include button-style(#2ecc71, #ffffff);
}
```

Trong ví dụ này, chúng ta đã tạo một mixin có tên là `button-style` nhận hai tham số là `$background-color` và `$text-color`, và sau đó sử dụng nó để tạo ra các kiểu nút với các màu nền và màu văn bản khác nhau bằng cách truyền các giá trị vào.
