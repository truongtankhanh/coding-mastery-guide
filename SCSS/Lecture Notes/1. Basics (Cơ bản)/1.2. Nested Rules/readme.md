Trong SCSS, "Nested Rules" (Quy tắc lồng nhau) là một tính năng cho phép bạn lồng một quy tắc CSS bên trong một quy tắc khác. Điều này giúp tạo ra một cấu trúc tổ chức hợp lý hơn cho mã của bạn, giúp mã CSS trở nên dễ đọc hơn và dễ bảo trì hơn. Dưới đây là một phân tích chi tiết:

### Khái niệm:

Nested Rules trong SCSS cho phép bạn nhóm các quy tắc CSS bên trong nhau dựa trên cấu trúc của các yếu tố HTML mà chúng áp dụng. Điều này tạo ra một cấu trúc phân cấp, tương tự như cấu trúc của tài liệu HTML, giúp mã của bạn trở nên rõ ràng và dễ hiểu hơn.

### Ngữ cảnh:

Nested Rules thường được sử dụng khi bạn muốn áp dụng các quy tắc CSS cho các phần tử con trong một phần tử cha cụ thể. Điều này giúp giảm sự lặp lại trong mã của bạn và làm cho việc quản lý và bảo trì mã CSS dễ dàng hơn.

### Cách sử dụng:

Để sử dụng Nested Rules trong SCSS, bạn chỉ cần viết các quy tắc CSS bên trong các cặp ngoặc nhọn `{}` của một quy tắc cha.

Ví dụ:

```scss
// Quy tắc lồng nhau
.container {
  width: 100%;

  // Quy tắc con
  .box {
    background-color: #f0f0f0;
    padding: 10px;

    // Quy tắc con của quy tắc con
    p {
      font-size: 16px;
    }
  }

  // Quy tắc khác
  .header {
    font-weight: bold;
  }
}
```

Trong ví dụ trên, quy tắc `.box` và `.header` được lồng bên trong quy tắc `.container`. Các quy tắc con có thể tiếp tục lồng vào nhau một cách sâu hơn tùy theo cấu trúc của mã CSS của bạn.

Khi biên dịch SCSS thành CSS, các quy tắc lồng nhau này sẽ được chuyển đổi thành CSS tương ứng, với các quy tắc con kế thừa các thuộc tính của quy tắc cha của chúng.
