Để xoá một bảng từ cơ sở dữ liệu bằng SQL, chúng ta sử dụng câu lệnh `DROP TABLE`. Câu lệnh này hoàn toàn loại bỏ bảng cùng với tất cả dữ liệu và cấu trúc liên quan đến bảng đó.

### Khái Niệm:

#### DROP TABLE:

- `DROP TABLE` là câu lệnh trong SQL để xoá một bảng từ cơ sở dữ liệu.
- Nó loại bỏ hoàn toàn bảng cùng với tất cả dữ liệu và cấu trúc liên quan đến bảng đó.

### Ngữ Cảnh:

Khi bạn không còn cần một bảng nào đó trong cơ sở dữ liệu hoặc muốn xoá một bảng để thực hiện các thay đổi cấu trúc dữ liệu, `DROP TABLE` là lựa chọn phù hợp. Lưu ý rằng việc này sẽ xóa hết dữ liệu trong bảng và không thể hoàn tác sau khi đã thực hiện.

### Cách Sử Dụng và Ví Dụ:

Cú pháp của lệnh `DROP TABLE` đơn giản:

```sql
DROP TABLE ten_bang;
```

Ví dụ:

Nếu bạn muốn xoá bảng `employees` từ cơ sở dữ liệu, câu lệnh sẽ như sau:

```sql
DROP TABLE employees;
```

### Giải Thích Chi Tiết:

- `DROP TABLE`: Là câu lệnh để xoá bảng.
- `ten_bang`: Là tên của bảng mà bạn muốn xoá khỏi cơ sở dữ liệu.

Khi bạn thực hiện câu lệnh `DROP TABLE`, hệ thống quản lý cơ sở dữ liệu sẽ loại bỏ hoàn toàn bảng và mọi dữ liệu được lưu trong bảng đó. Điều này cần phải được thực hiện cẩn thận vì mọi thay đổi không thể hoàn tác và dữ liệu sẽ bị mất vĩnh viễn sau khi bạn thực hiện lệnh này.

Đảm bảo rằng bạn chỉ thực hiện lệnh `DROP TABLE` khi bạn chắc chắn không còn cần bảng đó nữa và đã sao lưu dữ liệu quan trọng từ bảng trước khi xoá.
