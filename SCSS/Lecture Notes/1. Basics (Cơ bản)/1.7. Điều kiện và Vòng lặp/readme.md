Trong SCSS, bạn có thể sử dụng điều kiện và vòng lặp để kiểm soát luồng của mã CSS của mình, tạo ra các quy tắc CSS phức tạp và làm cho mã của bạn linh hoạt hơn. Dưới đây là một phân tích chi tiết:

### Khái niệm:

- **Điều kiện (Conditionals)**: Cho phép bạn thực hiện một số hành động dựa trên điều kiện nào đó. Bạn có thể sử dụng các cấu trúc điều kiện như `@if`, `@else if`, và `@else` trong SCSS.
- **Vòng lặp (Loops)**: Cho phép bạn lặp lại một phần của mã CSS nhiều lần. SCSS hỗ trợ các loại vòng lặp như `@for`, `@each`, và `@while`.

### Ngữ cảnh:

- Điều kiện và vòng lặp thường được sử dụng khi bạn cần tạo ra các biến CSS có giá trị biến đổi dựa trên điều kiện hoặc cần lặp lại các quy tắc CSS cho một tập hợp phần tử hoặc giá trị.

### Cách sử dụng:

Dưới đây là các ví dụ về cách sử dụng điều kiện và vòng lặp trong SCSS:

#### Điều kiện:

```scss
$font-size: 16px;
$bg-color: #ffffff;

@if $font-size > 14px {
  body {
    font-size: $font-size;
  }
} @else {
  body {
    font-size: 14px;
  }
}

$theme: light;

@if $theme == light {
  body {
    background-color: $bg-color;
    color: #333333;
  }
} @else if $theme == dark {
  body {
    background-color: #333333;
    color: #ffffff;
  }
} @else {
  // Xử lý khi không có điều kiện nào thỏa mãn
}
```

#### Vòng lặp:

```scss
// Vòng lặp @for
@for $i from 1 through 5 {
  .item-#{$i} {
    width: 20px * $i;
  }
}

// Vòng lặp @each
$list: one, two, three;

@each $item in $list {
  .#{$item} {
    content: $item;
  }
}
```

Trong ví dụ trên, chúng ta sử dụng điều kiện để kiểm tra giá trị của biến và tạo ra các quy tắc CSS tương ứng dựa trên điều kiện. Đối với vòng lặp, chúng ta sử dụng `@for` để lặp qua một loạt giá trị và tạo ra các quy tắc CSS tương ứng và `@each` để lặp qua các phần tử trong một danh sách và áp dụng các quy tắc CSS cho mỗi phần tử.
