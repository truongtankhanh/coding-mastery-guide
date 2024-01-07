Mệnh đề `AS` trong SQL được sử dụng để đổi tên cho bảng hoặc cột trong kết quả truy vấn. Nó không thay đổi tên thực sự của bảng hoặc cột trong cơ sở dữ liệu mà chỉ làm thay đổi tên hiển thị của chúng trong kết quả truy vấn.

### Khái Niệm:

`AS` cho phép bạn đặt tên mới cho bảng hoặc cột trong kết quả truy vấn.

### Ngữ Cảnh:

Thường được sử dụng khi bạn muốn đổi tên hiển thị của bảng hoặc cột để làm cho kết quả truy vấn dễ đọc hoặc để cung cấp mô tả rõ ràng hơn.

### Cách Sử Dụng và Ví Dụ:

Đổi tên cho cột trong kết quả truy vấn:

```sql
SELECT column_name AS new_column_name
FROM table_name;
```

Đổi tên cho bảng tạm thời:

```sql
SELECT column_name
FROM table_name AS new_table_name;
```

Ví dụ:

```sql
SELECT first_name AS "First Name", last_name AS "Last Name"
FROM employees;
```

### Giải Thích Chi Tiết:

- `SELECT column_name AS new_column_name`: Là cú pháp để chọn cột và đặt tên mới cho cột trong kết quả truy vấn.
- `FROM table_name AS new_table_name`: Là cú pháp để chọn bảng và đặt tên mới cho bảng tạm thời trong kết quả truy vấn.
- `AS`: Là từ khóa được sử dụng để chỉ định tên mới cho bảng hoặc cột trong kết quả truy vấn.

Trong ví dụ, câu lệnh `SELECT first_name AS "First Name", last_name AS "Last Name" FROM employees` sẽ trả về kết quả với các cột `first_name` và `last_name` trong bảng `employees`, nhưng được hiển thị với tên mới là "First Name" và "Last Name" tương ứng. Tên mới này chỉ được sử dụng trong kết quả truy vấn và không thay đổi tên thực tế của cột trong cơ sở dữ liệu.
