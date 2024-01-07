Mệnh đề `WHERE` trong SQL được sử dụng để lọc dữ liệu từ một bảng dựa trên một hoặc nhiều điều kiện được chỉ định.

### Khái Niệm:

#### WHERE:

- Mệnh đề `WHERE` xác định điều kiện mà dữ liệu cần phải thỏa mãn để được lấy ra từ bảng.
- Nó được sử dụng trong câu lệnh `SELECT`, `UPDATE`, `DELETE` để áp dụng điều kiện lọc.

### Ngữ Cảnh:

Khi bạn cần lấy ra dữ liệu cụ thể hoặc áp dụng thay đổi vào dữ liệu dựa trên một điều kiện nào đó, `WHERE` là mệnh đề quan trọng để lựa chọn hoặc thay đổi dữ liệu phù hợp.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của mệnh đề `WHERE` trong câu lệnh `SELECT` như sau:

```sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
```

Ví dụ:

Nếu bạn muốn lấy thông tin về người dùng có `age` lớn hơn 30 từ bảng `users`, câu lệnh sẽ là:

```sql
SELECT *
FROM users
WHERE age > 30;
```

### Giải Thích Chi Tiết:

- `SELECT`: Là từ khóa để bắt đầu câu lệnh truy vấn dữ liệu.
- `column1, column2, ...`: Là tên của các cột bạn muốn lấy dữ liệu.
- `FROM`: Là mệnh đề để chỉ định nguồn dữ liệu bạn đang truy vấn.
- `table_name`: Là tên của bảng mà bạn muốn truy vấn dữ liệu.
- `WHERE`: Là mệnh đề để áp dụng điều kiện lọc dữ liệu.
- `condition`: Là điều kiện mà dữ liệu cần phải thỏa mãn để được lấy ra.

Mệnh đề `WHERE` cho phép bạn áp dụng các điều kiện lọc dữ liệu trong các câu lệnh SQL. Bạn có thể sử dụng nó để lựa chọn các dòng dữ liệu mà bạn quan tâm hoặc áp dụng các thay đổi chỉ định dựa trên điều kiện. Điều này giúp bạn truy vấn và xử lý dữ liệu một cách linh hoạt và chính xác theo nhu cầu của mình.
