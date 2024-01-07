Trong SQL, toán tử đại diện (Wildcard) là một ký tự đặc biệt (thường là `%` hoặc `_`) được sử dụng trong các mẫu so sánh để tìm kiếm hoặc lọc các giá trị phù hợp mà không cần phải chính xác giống với một chuỗi cụ thể.

### Khái Niệm:

#### Toán Tử Đại Diện:

1. `%` (Percent): Thay thế cho một chuỗi bất kỳ, có thể là 0 hoặc nhiều ký tự.
2. `_` (Underscore): Thay thế cho một ký tự duy nhất.

### Ngữ Cảnh:

Khi bạn cần tìm kiếm hoặc lọc các giá trị dựa trên một mẫu có thể có nhiều biến thay đổi, toán tử đại diện giúp bạn thực hiện việc này một cách linh hoạt và mạnh mẽ.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của toán tử đại diện trong SQL như sau:

- `%`: Sử dụng trong một mẫu để so khớp bất kỳ chuỗi ký tự nào.
- `_`: Sử dụng để so khớp với một ký tự duy nhất.

Ví dụ:

1. Nếu bạn muốn tìm tất cả các tên bắt đầu bằng 'J' trong bảng `users`, bạn có thể sử dụng:

```sql
SELECT * FROM users WHERE name LIKE 'J%';
```

2. Nếu bạn muốn tìm tất cả các từ có độ dài là 3 ký tự và kết thúc bằng 'at' trong bảng `words`, bạn có thể sử dụng:

```sql
SELECT * FROM words WHERE word LIKE '__at';
```

### Giải Thích Chi Tiết:

- `LIKE`: Là điều kiện dùng để so sánh chuỗi với mẫu chứa các toán tử đại diện.
- `name`, `word`: Là tên của cột bạn muốn tìm kiếm.
- `'J%'`, `'__at'`: Là mẫu bạn muốn so sánh. `%` thay thế cho bất kỳ chuỗi nào, trong khi `_` thay thế cho một ký tự duy nhất.

Toán tử đại diện là một công cụ mạnh mẽ để tìm kiếm hoặc lọc các giá trị dựa trên các mẫu không chính xác hoặc có nhiều biến thay đổi. Sử dụng chúng trong mệnh đề `LIKE` giúp bạn tìm ra các kết quả phù hợp với yêu cầu tìm kiếm cụ thể của bạn.
