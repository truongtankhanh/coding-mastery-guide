Mệnh đề `ORDER BY` trong SQL được sử dụng để sắp xếp kết quả truy vấn dữ liệu dựa trên một hoặc nhiều cột từ bảng theo thứ tự tăng dần hoặc giảm dần.

### Khái Niệm:

#### ORDER BY:

- Mệnh đề `ORDER BY` dùng để sắp xếp kết quả truy vấn dữ liệu theo thứ tự tăng dần hoặc giảm dần của một hoặc nhiều cột.
- Nó được sử dụng trong câu lệnh `SELECT` để sắp xếp kết quả trả về từ cơ sở dữ liệu.

### Ngữ Cảnh:

Khi bạn cần hiển thị hoặc xử lý dữ liệu theo một thứ tự cụ thể, `ORDER BY` giúp bạn sắp xếp kết quả theo yêu cầu của mình.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `ORDER BY` trong câu lệnh `SELECT` như sau:

```sql
SELECT column1, column2, ...
FROM table_name
ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
```

Ví dụ:

Nếu bạn muốn lấy thông tin về `name`, `age` từ bảng `users` và sắp xếp theo `age` tăng dần, câu lệnh sẽ là:

```sql
SELECT name, age
FROM users
ORDER BY age ASC;
```

### Giải Thích Chi Tiết:

- `SELECT`: Là từ khóa để bắt đầu câu lệnh truy vấn dữ liệu.
- `column1, column2, ...`: Là tên của các cột bạn muốn lấy dữ liệu.
- `FROM`: Là mệnh đề để chỉ định nguồn dữ liệu bạn đang truy vấn.
- `table_name`: Là tên của bảng mà bạn muốn truy vấn dữ liệu.
- `ORDER BY`: Là mệnh đề để sắp xếp kết quả trả về dựa trên các cột xác định.
- `column1 [ASC|DESC], column2 [ASC|DESC], ...`: Là tên của các cột bạn muốn sắp xếp theo và thứ tự sắp xếp, mặc định là tăng dần (`ASC`). Bạn cũng có thể sử dụng `DESC` để sắp xếp giảm dần.

Mệnh đề `ORDER BY` cho phép bạn sắp xếp kết quả truy vấn theo thứ tự tăng hoặc giảm dần của một hoặc nhiều cột. Điều này giúp bạn hiển thị hoặc xử lý dữ liệu theo một thứ tự cụ thể theo nhu cầu của mình.
