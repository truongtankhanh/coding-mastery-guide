Lệnh `SELECT` trong SQL được sử dụng để truy vấn dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu. Nó cho phép bạn chọn ra các dòng và cột cụ thể từ bảng dữ liệu để hiển thị hoặc sử dụng cho mục đích xử lý dữ liệu khác.

### Khái Niệm:

#### SELECT:

- `SELECT` là câu lệnh SQL để truy vấn dữ liệu từ cơ sở dữ liệu.
- Nó cho phép bạn chọn các cột cụ thể hoặc toàn bộ cột từ bảng và xác định điều kiện để lọc dữ liệu.

### Ngữ Cảnh:

Khi bạn cần lấy dữ liệu từ cơ sở dữ liệu để hiển thị, phân tích hoặc xử lý, `SELECT` là công cụ cần thiết. Nó giúp bạn chọn ra dữ liệu cần thiết từ bảng hoặc các bảng kết hợp theo điều kiện xác định.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của câu lệnh `SELECT` như sau:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Ví dụ:

Nếu bạn muốn lấy thông tin về `name` và `age` từ bảng `users` cho những người có `age` lớn hơn 25, câu lệnh sẽ là:

```sql
SELECT name, age
FROM users
WHERE age > 25;
```

### Giải Thích Chi Tiết:

- `SELECT`: Là từ khóa để bắt đầu câu lệnh truy vấn dữ liệu.
- `column1, column2, ...`: Là tên của các cột bạn muốn lấy dữ liệu.
- `table_name`: Là tên của bảng mà bạn muốn truy vấn.
- `WHERE`: Là điều kiện để lọc dữ liệu. (Điều này là tùy chọn, bạn có thể bỏ qua nếu không cần thiết)

Câu lệnh `SELECT` cho phép bạn chọn ra các cột cụ thể từ bảng và áp dụng điều kiện để lọc dữ liệu nếu cần. Kết quả của câu lệnh `SELECT` sẽ trả về các dòng dữ liệu phù hợp với các điều kiện đã xác định, hoặc toàn bộ dữ liệu nếu không có điều kiện nào được chỉ định. Điều này giúp bạn truy xuất và xử lý dữ liệu một cách linh hoạt theo nhu cầu của bạn.
