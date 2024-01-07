Mệnh đề `INSERT IGNORE` trong SQL được sử dụng để chèn dữ liệu vào bảng, nhưng nó tránh việc chèn các hàng dẫn đến lỗi do vi phạm ràng buộc duy nhất hoặc khóa chính.

### Khái Niệm:

#### INSERT IGNORE:

- `INSERT IGNORE` cho phép bạn chèn dữ liệu vào bảng mà không gây ra lỗi do vi phạm ràng buộc duy nhất hoặc khóa chính.
- Khi có sự trùng lặp dữ liệu, `INSERT IGNORE` sẽ bỏ qua việc chèn hàng đó vào bảng.

### Ngữ Cảnh:

Khi bạn muốn chèn dữ liệu vào bảng mà không gặp lỗi do trùng lặp hoặc vi phạm ràng buộc.

### Cách Sử Dụng và Ví Dụ:

Sử dụng `INSERT IGNORE` trong câu lệnh `INSERT` để chèn dữ liệu vào bảng mà không gây lỗi do trùng lặp.

#### Sử Dụng `INSERT IGNORE`:

```sql
INSERT IGNORE INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);
```

Ví dụ:

```sql
INSERT IGNORE INTO customers (id, name)
VALUES (1, 'Alice'),
       (2, 'Bob'),
       (3, 'Alice'); -- Hàng này sẽ bị bỏ qua vì trùng lặp 'Alice'
```

### Giải Thích Chi Tiết:

- `INSERT IGNORE INTO`: Là cú pháp cho biết bạn đang chèn dữ liệu vào bảng và muốn sử dụng chế độ `IGNORE`.
- `table_name`: Là tên của bảng bạn muốn chèn dữ liệu.
- `(column1, column2, ...)`: Các cột mà bạn muốn chèn dữ liệu.
- `VALUES (value1, value2, ...)`: Là giá trị bạn muốn chèn vào các cột tương ứng.

Khi sử dụng `INSERT IGNORE`, nếu dữ liệu bạn muốn chèn đã tồn tại trong bảng (theo cột ràng buộc duy nhất hoặc khóa chính), hàng đó sẽ bị bỏ qua và không chèn vào bảng, từ đó giúp giảm thiểu lỗi khi chèn dữ liệu. Tuy nhiên, chỉ những hàng dẫn đến việc vi phạm ràng buộc mới bị bỏ qua, các hàng khác sẽ được chèn bình thường.
