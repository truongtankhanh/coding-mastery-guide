## Sử dụng Maps để lưu trữ dữ liệu phức tạp và tái sử dụng chúng trong mã SCSS.

Trong SCSS, Maps (bản đồ) là cách để lưu trữ dữ liệu phức tạp dưới dạng cặp key-value và tái sử dụng chúng trong mã SCSS.

### Khái niệm:

- **Maps trong SCSS**: Maps là một cấu trúc dữ liệu cho phép bạn lưu trữ dữ liệu theo cặp key-value. Mỗi key là một chuỗi và tương ứng với một giá trị.

### Ngữ cảnh:

- Maps thường được sử dụng khi bạn cần lưu trữ dữ liệu phức tạp như các cấu hình, thuộc tính cho các phần tử, hoặc các biến có nhiều giá trị khác nhau.

- Sử dụng Maps giúp mã CSS trở nên dễ bảo trì hơn, vì bạn có thể chỉnh sửa các giá trị một cách dễ dàng từ một vị trí duy nhất.

### Cách sử dụng:

#### Khai báo và sử dụng Maps:

```scss
// Định nghĩa Map
$colors: (
  primary: #3498db,
  secondary: #2ecc71,
  warning: #e67e22,
);

// Sử dụng Map
.button {
  background-color: map-get(
    $colors,
    primary
  ); // Lấy giá trị tương ứng với key 'primary' từ Map
}

.alert {
  background-color: map-get(
    $colors,
    warning
  ); // Lấy giá trị tương ứng với key 'warning' từ Map
}
```

#### Sử dụng Maps cho các cấu hình phức tạp:

```scss
// Định nghĩa Map cho các cấu hình font
$fonts: (
  body: (
    family: "Roboto",
    size: 16px,
    weight: normal,
  ),
  heading: (
    family: "Arial",
    size: 24px,
    weight: bold,
  ),
);

// Sử dụng Map cho các phần tử
body {
  font-family: map-get(
    map-get($fonts, body),
    family
  ); // Lấy giá trị family cho body từ Map
  font-size: map-get(
    map-get($fonts, body),
    size
  ); // Lấy giá trị size cho body từ Map
  font-weight: map-get(
    map-get($fonts, body),
    weight
  ); // Lấy giá trị weight cho body từ Map
}

h1 {
  font-family: map-get(
    map-get($fonts, heading),
    family
  ); // Lấy giá trị family cho heading từ Map
  font-size: map-get(
    map-get($fonts, heading),
    size
  ); // Lấy giá trị size cho heading từ Map
  font-weight: map-get(
    map-get($fonts, heading),
    weight
  ); // Lấy giá trị weight cho heading từ Map
}
```

Trong ví dụ trên, chúng ta sử dụng Maps để lưu trữ dữ liệu phức tạp như màu sắc và cấu hình font. Sau đó, chúng ta sử dụng hàm `map-get()` để truy cập và tái sử dụng các giá trị từ Maps trong mã SCSS. Điều này giúp mã SCSS trở nên linh hoạt và dễ bảo trì hơn.

---

---

## Tích hợp Maps vào các mixins và functions.

Trong SCSS, tích hợp Maps vào các mixins và functions là một cách mạnh mẽ để tạo ra các quy tắc CSS linh hoạt và dễ bảo trì, cho phép tái sử dụng các cấu hình phức tạp một cách hiệu quả.

### Khái niệm:

- **Tích hợp Maps vào mixins và functions**: Bằng cách truyền Maps như là tham số cho các mixins và functions, bạn có thể sử dụng các giá trị trong Maps để tạo ra các quy tắc CSS hoặc thực hiện các tính toán phức tạp.

### Ngữ cảnh:

- Khi bạn cần tái sử dụng các cấu hình phức tạp, như các bộ thuộc tính CSS, việc tích hợp Maps vào mixins và functions là một cách hiệu quả để quản lý và tái sử dụng dữ liệu.

- Điều này giúp mã SCSS trở nên dễ bảo trì hơn, vì bạn có thể điều chỉnh cấu hình chỉ từ một vị trí duy nhất.

### Cách sử dụng:

#### Tích hợp Maps vào Mixins:

```scss
// Định nghĩa mixin sử dụng Maps
@mixin text-styling($config) {
  font-family: map-get($config, family);
  font-size: map-get($config, size);
  font-weight: map-get($config, weight);
  color: map-get($config, color);
}

// Sử dụng mixin với Maps
.heading {
  @include text-styling(
    (
      family: "Arial",
      size: 24px,
      weight: bold,
      color: #333,
    )
  );
}

.paragraph {
  @include text-styling(
    (
      family: "Roboto",
      size: 16px,
      weight: normal,
      color: #666,
    )
  );
}
```

#### Tích hợp Maps vào Functions:

```scss
// Định nghĩa function sử dụng Maps
@function calculate-column-width($grid-config, $columns) {
  $total-width: map-get($grid-config, total-width);
  $gutter-width: map-get($grid-config, gutter-width);
  $column-width: ($total-width - ($gutter-width * ($columns - 1))) / $columns;
  @return $column-width;
}

// Sử dụng function với Maps
$grid-config: (
  total-width: 960px,
  gutter-width: 20px,
);

.column {
  width: calculate-column-width(
    $grid-config,
    3
  ); // Tính toán chiều rộng của mỗi cột trong lưới có 3 cột
}
```

Trong ví dụ trên, chúng ta sử dụng Maps như là tham số cho các mixins và functions. Điều này giúp chúng ta tạo ra các quy tắc CSS linh hoạt và tính toán phức tạp một cách dễ dàng và tái sử dụng được.

---

---
