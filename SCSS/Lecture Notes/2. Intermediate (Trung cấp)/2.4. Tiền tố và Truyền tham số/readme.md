## Sử dụng tiền tố để tự động thêm các tiền tố vào các class và id được tạo ra từ SCSS.

Trong SCSS, bạn có thể sử dụng tiền tố để tự động thêm các đoạn văn bản vào các class và id được tạo ra từ mã SCSS. Điều này giúp tránh xung đột và tạo ra mã CSS rõ ràng, dễ bảo trì.

### Khái niệm:

Tiền tố trong SCSS là một phần của quy tắc đặt tên, cho phép bạn thêm một chuỗi tiền tố vào tất cả các class và id được tạo ra từ mã SCSS. Điều này giúp duy trì tính duy nhất của các lớp CSS và tránh xung đột với các lớp khác.

### Ngữ cảnh:

- Sử dụng tiền tố là một phương pháp tốt để tự động thêm một phần nhận dạng vào các class và id, đảm bảo rằng chúng không xung đột với các quy tắc CSS khác hoặc các thư viện bên ngoài.

- Điều này đặc biệt hữu ích khi bạn làm việc trong một dự án lớn với nhiều người cùng tham gia, nơi việc duy trì tính duy nhất của các lớp CSS là quan trọng.

### Cách sử dụng:

```scss
// Định nghĩa tiền tố
$prefix: "my-app-";

// Sử dụng tiền tố trong mã SCSS
.#{$prefix}container {
  width: 100%;
}

.#{$prefix}button {
  background-color: #3498db;
}
```

Khi biên dịch mã SCSS trên, các class sẽ tự động được thêm tiền tố "my-app-", ví dụ: "my-app-container", "my-app-button". Điều này giúp đảm bảo tính duy nhất của các class và id và tránh xung đột với các quy tắc CSS khác trong cùng một dự án hoặc các thư viện bên ngoài.

---

---

## Truyền tham số vào các mixins và functions để tạo ra các quy tắc CSS có thể tái sử dụng với các giá trị khác nhau.

Trong SCSS, bạn có thể truyền tham số vào các mixins và functions để tạo ra các quy tắc CSS có thể tái sử dụng với các giá trị khác nhau. Điều này giúp tạo ra mã CSS linh hoạt và dễ bảo trì.

### Khái niệm:

- **Mixins với tham số**: Mixins trong SCSS có thể nhận tham số, cho phép bạn truyền các giá trị vào mixin để tạo ra các quy tắc CSS linh hoạt.
- **Functions với tham số**: Tương tự, functions trong SCSS cũng có thể nhận tham số, giúp bạn thực hiện các tính toán hoặc xử lý chuỗi với các giá trị được truyền vào.

### Ngữ cảnh:

- Truyền tham số vào mixins và functions là một phương pháp mạnh mẽ để tạo ra mã CSS có thể tái sử dụng với các giá trị khác nhau, giúp giảm lặp lại mã và tạo ra mã linh hoạt.

- Điều này đặc biệt hữu ích khi bạn cần áp dụng các kiểu CSS tương tự nhau cho nhiều phần tử với các giá trị khác nhau.

### Cách sử dụng:

#### Mixins với tham số:

```scss
// Định nghĩa mixin với tham số
@mixin button($background-color, $text-color) {
  background-color: $background-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
}

// Sử dụng mixin với các giá trị khác nhau
.button-primary {
  @include button(#3498db, white);
}

.button-secondary {
  @include button(white, #333);
}
```

#### Functions với tham số:

```scss
// Định nghĩa function với tham số
@function calculate-width($container-width, $columns) {
  @return ($container-width / $columns) - 10px; // Giả sử margin là 10px
}

// Sử dụng function với các giá trị khác nhau
.column {
  width: calculate-width(
    960px,
    3
  ); // Tính toán kích thước của mỗi cột trong lưới có 3 cột
}
```

Trong ví dụ trên, chúng ta sử dụng tham số để truyền vào các mixins và functions, giúp tạo ra các quy tắc CSS linh hoạt và tái sử dụng được với các giá trị khác nhau. Điều này giúp mã SCSS trở nên dễ bảo trì và linh hoạt hơn.

---

---
