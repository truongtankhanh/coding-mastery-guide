## Tùy chỉnh cách SCSS được biên dịch thành CSS bằng cách sử dụng các output style như `expanded`, `nested`, `compact`, `compressed`.

### Khái niệm:

Trong SCSS, các output style như `expanded`, `nested`, `compact`, `compressed` là các cách để tùy chỉnh cách SCSS được biên dịch thành CSS. Mỗi style có cách hiển thị mã CSS đầu ra khác nhau, phù hợp với các mục đích sử dụng khác nhau.

### Ngữ cảnh:

- Khi biên dịch SCSS thành CSS, bạn có thể chọn một output style phù hợp với nhu cầu cụ thể của dự án.
- Các style khác nhau có thể thích hợp với các môi trường phát triển khác nhau, ví dụ như khi phát triển, testing hoặc triển khai sản phẩm.

### Cách sử dụng:

Cú pháp để sử dụng các output style trong quá trình biên dịch SCSS thành CSS như sau:

```bash
sass input.scss output.css --style <output_style>
```

Trong đó:

- `input.scss` là file SCSS bạn muốn biên dịch.
- `output.css` là tên file CSS đầu ra.
- `<output_style>` là một trong các output style như `expanded`, `nested`, `compact`, `compressed`.

#### Ví dụ:

1. **Expanded**:
   - Là style được hiển thị dài dòng và có các dòng trống giữa các rule.

```bash
sass input.scss output.css --style expanded
```

2. **Nested**:
   - Là style mặc định của SCSS, các rule được lồng vào nhau một cách rõ ràng.

```bash
sass input.scss output.css --style nested
```

3. **Compact**:
   - Là style ngắn gọn hơn, các rule được hiển thị một cách gọn gàng và không có dòng trống giữa chúng.

```bash
sass input.scss output.css --style compact
```

4. **Compressed**:
   - Là style được nén, loại bỏ tất cả dấu cách và dòng trống không cần thiết, tạo ra mã CSS nhỏ gọn nhất.

```bash
sass input.scss output.css --style compressed
```

Bằng cách chọn một output style phù hợp, bạn có thể kiểm soát được cách mã CSS được hiển thị và tối ưu hóa cho môi trường phát triển và triển khai sản phẩm.

---

---
