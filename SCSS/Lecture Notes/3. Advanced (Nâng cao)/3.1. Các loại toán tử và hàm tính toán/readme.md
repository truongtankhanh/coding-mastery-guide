## Tính toán số học, thực hiện các phép tính phức tạp hơn trong SCSS như cộng, trừ, nhân, chia.

Trong SCSS, bạn có thể thực hiện các phép tính số học như cộng, trừ, nhân, chia để tính toán giá trị CSS một cách linh hoạt.

### Khái niệm:

- **Phép tính số học trong SCSS**: SCSS hỗ trợ các phép tính số học cơ bản như cộng (+), trừ (-), nhân (\*), chia (/), cũng như các phép tính phức tạp hơn như tính toán với biến và các giá trị CSS.

### Ngữ cảnh:

- Phép tính số học trong SCSS thường được sử dụng khi bạn cần tính toán giá trị CSS dựa trên các biến, kích thước hoặc các giá trị khác.

- Điều này hữu ích khi bạn cần tính toán các thuộc tính CSS dựa trên các yếu tố động như kích thước màn hình hoặc các biến khác.

### Cách sử dụng:

```scss
// Sử dụng phép tính cơ bản
$width: 1000px;
$padding: 20px;
.container {
  width: $width - $padding * 2; // Tính toán kích thước của container
}

// Sử dụng phép tính với các giá trị CSS
$base-font-size: 16px;
$heading-font-size: $base-font-size * 2; // Tính toán kích thước font cho tiêu đề

// Sử dụng phép tính trong việc tính toán biến
$base-width: 200px;
$multiplier: 2;
$dynamic-width: $base-width * $multiplier; // Tính toán chiều rộng dựa trên một hệ số

// Sử dụng phép tính trong các thuộc tính CSS
.element {
  width: 100% / 3; // Chia đều chiều rộng cho 3 phần
  margin-left: (10px + 5px) * 2; // Tính toán margin-left dựa trên một phép tính
}
```

Trong ví dụ trên, chúng ta sử dụng phép tính số học để tính toán các giá trị CSS như chiều rộng, font-size, margin và sử dụng các biến và giá trị CSS khác để thực hiện các phép tính này. Điều này giúp mã SCSS trở nên linh hoạt và dễ bảo trì hơn.

---

---

## Sử dụng các hàm tính toán như `percentage()`, `round()`, `min()`, `max()`, v.v.

Trong SCSS, bạn có thể sử dụng các hàm tính toán như `percentage()`, `round()`, `min()`, `max()` để thực hiện các phép tính phức tạp và xử lý giá trị số.

### Khái niệm:

- **Các hàm tính toán trong SCSS**: SCSS cung cấp một loạt các hàm tính toán có sẵn để thực hiện các phép tính phức tạp trên các giá trị số, như tính phần trăm, làm tròn, tìm giá trị nhỏ nhất, giá trị lớn nhất, v.v.

### Ngữ cảnh:

- Các hàm tính toán trong SCSS thường được sử dụng khi bạn cần thực hiện các phép tính số học phức tạp hoặc xử lý các giá trị số để tính toán giá trị CSS.

- Điều này có thể hữu ích khi bạn cần tính toán các thuộc tính CSS dựa trên các giá trị số động hoặc các giá trị CSS khác.

### Cách sử dụng:

```scss
// Sử dụng hàm percentage() để tính phần trăm
$width: 500px;
$container-width: percentage(
  400px / $width
); // Tính phần trăm của 400px so với $width

// Sử dụng hàm round() để làm tròn số
$number: 4.6;
$rounded-number: round($number); // Làm tròn số 4.6 thành 5

// Sử dụng hàm min() để tìm giá trị nhỏ nhất
$min-value: min(
  10px,
  20px,
  30px
); // Tìm giá trị nhỏ nhất trong danh sách là 10px

// Sử dụng hàm max() để tìm giá trị lớn nhất
$max-value: max(
  10px,
  20px,
  30px
); // Tìm giá trị lớn nhất trong danh sách là 30px
```

Trong ví dụ trên, chúng ta sử dụng các hàm `percentage()`, `round()`, `min()`, `max()` để thực hiện các phép tính phức tạp trên các giá trị số và lưu kết quả vào các biến khác nhau. Điều này giúp mã SCSS trở nên linh hoạt và dễ bảo trì hơn.

---

---
