Trong SCSS, bạn có thể sử dụng mixins và functions để tạo ra mã CSS tái sử dụng và thực hiện các tính toán phức tạp hoặc xử lý chuỗi một cách hiệu quả.

### Khái niệm:

- **Mixins**: Mixins trong SCSS là một cách để tái sử dụng các đoạn mã CSS bằng cách đặt chúng trong một khối và gọi lại nó từ nhiều nơi khác nhau trong mã. Điều này giúp giảm lặp lại mã và làm cho mã CSS trở nên dễ bảo trì hơn.
- **Functions**: Functions là các khối mã SCSS cho phép bạn thực hiện các tính toán phức tạp hoặc xử lý chuỗi. Chúng có thể nhận đầu vào và trả về giá trị, giúp bạn tái sử dụng mã và tạo ra mã linh hoạt hơn.

### Ngữ cảnh:

- Mixins có thể được sử dụng để tái sử dụng các đoạn mã CSS như các animation, vendor prefixes, hoặc các phần tử giao diện có cấu trúc tương tự nhau.
- Functions thường được sử dụng khi bạn cần thực hiện các tính toán phức tạp hoặc xử lý chuỗi trong quá trình biên dịch mã SCSS.

### Cách sử dụng:

#### Mixins:

```scss
// Định nghĩa mixin
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

// Sử dụng mixin trong mã SCSS
.box {
  @include border-radius(5px);
}
```

#### Functions:

```scss
// Định nghĩa function
@function calculate-width($container-width, $columns) {
  @return ($container-width / $columns) - 10px; // Giả sử margin là 10px
}

// Sử dụng function trong mã SCSS
.column {
  width: calculate-width(
    960px,
    3
  ); // Tính toán kích thước của mỗi cột trong lưới có 3 cột
}
```

Trong ví dụ trên, chúng ta đã sử dụng mixin để tái sử dụng mã CSS liên quan đến việc thiết lập border-radius và function để tính toán kích thước của các cột trong một lưới dựa trên kích thước của container và số lượng cột. Những tính năng này giúp mã SCSS trở nên linh hoạt và dễ bảo trì hơn.
