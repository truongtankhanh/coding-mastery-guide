Trong SCSS (Sassy CSS), việc sử dụng biến là một cách hiệu quả để lưu trữ các giá trị như màu sắc, kích thước, font chữ và sử dụng chúng trong toàn bộ mã SCSS. Việc này giúp cho việc quản lý mã nguồn trở nên dễ dàng hơn, giúp tái sử dụng mã và thay đổi các giá trị một cách nhanh chóng.

### Khái niệm:

Biến trong SCSS là một cách để lưu trữ một giá trị và gán một tên cho nó để sử dụng lại trong mã SCSS. Điều này giúp tạo ra mã nguồn linh hoạt hơn và dễ dàng quản lý.

### Ngữ cảnh:

Sử dụng biến trong SCSS có thể áp dụng trong nhiều tình huống, từ định nghĩa màu sắc chính, kích thước phông chữ, cho đến việc quản lý các giá trị được sử dụng lại nhiều lần trong các phần tử giao diện khác nhau.

### Cách sử dụng:

Để sử dụng biến trong SCSS, bạn cần định nghĩa biến bằng cách sử dụng ký hiệu `$` và gán giá trị cho biến đó. Sau đó, bạn có thể sử dụng biến đó trong toàn bộ mã SCSS.

Ví dụ:

```scss
// Định nghĩa biến màu sắc chính
$primary-color: #3498db;

// Định nghĩa biến kích thước phông chữ
$font-size-base: 16px;

// Sử dụng biến trong mã SCSS
body {
  font-size: $font-size-base;
  color: $primary-color;
}

// Định nghĩa biến kích thước padding
$padding-small: 5px;
$padding-medium: 10px;

// Sử dụng biến trong các phần tử khác nhau
.container {
  padding: $padding-medium;
}

.button {
  padding: $padding-small;
}
```

Trong ví dụ trên, chúng ta đã định nghĩa và sử dụng các biến để lưu trữ màu sắc, kích thước phông chữ, và kích thước padding. Khi cần thay đổi các giá trị này, bạn chỉ cần chỉnh sửa một lần trong định nghĩa biến và tất cả các vị trí sử dụng biến đó sẽ tự động cập nhật.
