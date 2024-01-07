Câu lệnh `DELETE` trong SQL được sử dụng để xoá bỏ các bản ghi từ một bảng dữ liệu.

### Khái Niệm:

#### DELETE:

- `DELETE` là câu lệnh SQL dùng để xoá dữ liệu từ một bảng.
- Nó cho phép bạn xoá bỏ các bản ghi từ bảng dựa trên điều kiện xác định.

### Ngữ Cảnh:

Khi bạn cần xoá thông tin không còn hữu ích hoặc dữ liệu lỗi từ cơ sở dữ liệu, `DELETE` là công cụ mạnh mẽ để thực hiện việc này. Điều này giúp giữ cho cơ sở dữ liệu của bạn được sạch sẽ và chứa các dữ liệu hợp lý.

### Cách Sử Dụng và Ví Dụ:

Cú pháp của câu lệnh `DELETE` như sau:

```sql
DELETE FROM ten_bang WHERE dieu_kien;
```

Ví dụ:

Nếu bạn muốn xoá thông tin của nhân viên có `id` là 101 từ bảng `employees`, bạn có thể sử dụng câu lệnh sau:

```sql
DELETE FROM employees WHERE id = 101;
```

### Giải Thích Chi Tiết:

- `DELETE`: Là từ khóa để bắt đầu câu lệnh xoá dữ liệu.
- `ten_bang`: Là tên của bảng mà bạn muốn xoá dữ liệu.
- `WHERE`: Là điều kiện để xác định bản ghi cần xoá.
- `dieu_kien`: Là điều kiện để chỉ định bản ghi cần xoá. Nếu điều kiện này không được chỉ định, tất cả các bản ghi trong bảng sẽ bị xoá.

Câu lệnh `DELETE` cho phép bạn xoá dữ liệu từ bảng dựa trên điều kiện xác định. Điều này giúp bạn xác định chính xác các bản ghi nào cần được xoá và tránh việc mất dữ liệu không cần thiết. Lưu ý rằng việc xoá bản ghi là không thể hoàn tác, vì vậy cẩn thận khi sử dụng lệnh này để tránh mất mát dữ liệu quan trọng.
