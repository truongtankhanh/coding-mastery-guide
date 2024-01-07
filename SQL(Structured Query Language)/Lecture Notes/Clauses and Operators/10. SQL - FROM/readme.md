Mệnh đề `FROM` trong SQL được sử dụng để xác định bảng hoặc các nguồn dữ liệu mà bạn muốn truy vấn thông tin từ đó trong câu lệnh `SELECT`.

### Khái Niệm:

#### FROM:

- Mệnh đề `FROM` xác định bảng hoặc nguồn dữ liệu mà bạn muốn truy vấn thông tin từ đó.
- Nó được sử dụng trong câu lệnh `SELECT` để chỉ định nguồn dữ liệu bạn đang làm việc.

### Ngữ Cảnh:

Khi bạn cần lấy dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu, `FROM` là mệnh đề quan trọng để xác định nguồn dữ liệu cần truy vấn.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `FROM` trong câu lệnh `SELECT` như sau:

```sql
SELECT column1, column2, ...
FROM table_name;
```

Ví dụ:

Nếu bạn muốn lấy thông tin về `name` và `age` từ bảng `users`, câu lệnh sẽ là:

```sql
SELECT name, age
FROM users;
```

### Giải Thích Chi Tiết:

- `SELECT`: Là từ khóa để bắt đầu câu lệnh truy vấn dữ liệu.
- `column1, column2, ...`: Là tên của các cột bạn muốn lấy dữ liệu.
- `FROM`: Là mệnh đề để chỉ định nguồn dữ liệu bạn đang truy vấn.
- `table_name`: Là tên của bảng mà bạn muốn truy vấn dữ liệu.

Mệnh đề `FROM` cho phép bạn xác định bảng hoặc nguồn dữ liệu mà bạn muốn lấy thông tin từ đó trong câu lệnh `SELECT`. Điều này cho phép bạn kết hợp các bảng, chọn dữ liệu từ nhiều nguồn khác nhau và thực hiện các truy vấn phức tạp hơn để lấy dữ liệu theo nhu cầu của bạn.
