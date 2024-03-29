Trong SCSS, bạn có thể sử dụng các câu lệnh điều kiện như `@if`, `@else` và các vòng lặp như `@for`, `@each`, `@while` để tạo ra mã CSS linh hoạt và dễ bảo trì.

### Khái niệm:

- **Câu lệnh điều kiện `@if`, `@else`**: Cho phép bạn kiểm tra điều kiện và thực hiện các hành động tương ứng nếu điều kiện đúng hoặc sai.
- **Các vòng lặp `@for`, `@each`, `@while`**: Cho phép bạn lặp lại các hành động nhiều lần dựa trên một tập hợp giá trị hoặc điều kiện.

### Ngữ cảnh:

- Câu lệnh điều kiện và vòng lặp là công cụ quan trọng trong việc tạo ra các quy tắc CSS linh hoạt, nhất là khi bạn muốn áp dụng các kiểu CSS khác nhau dựa trên điều kiện hoặc lặp lại các thuộc tính CSS cho nhiều phần tử.

### Cách sử dụng:

#### Câu lệnh điều kiện `@if`, `@else`:

```scss
// Sử dụng @if, @else để đặt các điều kiện và áp dụng các quy tắc CSS tương ứng
@mixin text-color($background-color) {
  @if (lightness($background-color) > 50%) {
    color: black;
  } @else {
    color: white;
  }
}

// Sử dụng mixin
.button {
  background-color: #3498db;
  @include text-color(#3498db);
}
```

#### Các vòng lặp `@for`, `@each`, `@while`:

```scss
// Sử dụng @for để lặp lại các thuộc tính CSS với giá trị từ 1 đến 5
@for $i from 1 through 5 {
  .column-#{$i} {
    width: 20px * $i;
  }
}

// Sử dụng @each để lặp qua một danh sách các items và áp dụng các quy tắc CSS cho mỗi item
@each $color in blue, red, green {
  .button-#{$color} {
    background-color: $color;
  }
}

// Sử dụng @while để lặp lại các thuộc tính CSS cho đến khi điều kiện không còn đúng nữa
$i: 6;
@while $i > 0 {
  .item-#{$i} {
    width: 50px + $i * 10px;
  }
  $i: $i - 2;
}
```

Trong ví dụ trên, chúng ta sử dụng các câu lệnh điều kiện `@if`, `@else` để thiết lập màu chữ dựa trên màu nền và sử dụng các vòng lặp `@for`, `@each`, `@while` để tạo ra các quy tắc CSS linh hoạt và tự động. Những tính năng này giúp mã SCSS trở nên mạnh mẽ và dễ bảo trì hơn.
