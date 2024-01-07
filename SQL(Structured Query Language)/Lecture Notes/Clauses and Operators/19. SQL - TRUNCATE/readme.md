Lệnh `TRUNCATE` trong SQL được sử dụng để xóa tất cả các dữ liệu từ một bảng nhưng vẫn giữ cấu trúc của bảng đó. Nó là một phương pháp nhanh chóng và hiệu quả hơn so với lệnh `DELETE`.

### Khái Niệm:

#### TRUNCATE:

- Là lệnh SQL để xóa toàn bộ dữ liệu từ một bảng, nhưng không xóa cấu trúc của bảng.
- Hoạt động nhanh hơn lệnh `DELETE` vì không ghi lại từng dòng dữ liệu trong bảng vào log của cơ sở dữ liệu.

### Ngữ Cảnh:

Khi bạn cần xóa tất cả các dữ liệu trong bảng mà không muốn thay đổi cấu trúc của bảng đó, `TRUNCATE` là lựa chọn phù hợp.

### Cách Sử Dụng và Ví Dụ:

Cú pháp cơ bản của lệnh `TRUNCATE` trong SQL như sau:

```sql
TRUNCATE TABLE table_name;
```

Ví dụ:

Nếu bạn muốn xóa tất cả các dữ liệu từ bảng `products`, bạn có thể sử dụng lệnh sau:

```sql
TRUNCATE TABLE products;
```

### Giải Thích Chi Tiết:

- `TRUNCATE TABLE`: Là cú pháp lệnh để xóa toàn bộ dữ liệu từ một bảng trong cơ sở dữ liệu.
- `table_name`: Là tên của bảng bạn muốn xóa dữ liệu.

Lệnh `TRUNCATE` xóa toàn bộ dữ liệu từ bảng mà không ghi lại từng dòng dữ liệu vào log của cơ sở dữ liệu. Điều này làm cho nó nhanh hơn so với lệnh `DELETE`, đặc biệt là khi bạn cần xóa một lượng lớn dữ liệu từ bảng. Tuy nhiên, hãy lưu ý rằng `TRUNCATE` không thể được sử dụng nếu bạn cần điều chỉnh các điều kiện lọc hoặc xóa một số dòng cụ thể, vì nó sẽ xóa toàn bộ dữ liệu trong bảng một cách nguyên sơ.
