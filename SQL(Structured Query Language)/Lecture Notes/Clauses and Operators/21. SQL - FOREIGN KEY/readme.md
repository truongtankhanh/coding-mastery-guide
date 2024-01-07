Một khóa ngoại (Foreign Key) trong cơ sở dữ liệu là một cột hoặc tập hợp các cột trong một bảng, tham chiếu đến khóa chính (Primary Key) của một bảng khác. Nó tạo ra một mối quan hệ giữa hai bảng, cho phép liên kết dữ liệu giữa chúng.

### Khái Niệm:

#### Khóa Ngoại (Foreign Key):

- Là một hoặc nhiều cột trong một bảng dữ liệu.
- Tham chiếu đến khóa chính của một bảng khác.
- Xác định mối quan hệ giữa các bảng trong cơ sở dữ liệu.

### Ngữ Cảnh:

Khi bạn muốn thiết lập mối quan hệ giữa hai bảng dữ liệu dựa trên cột hoặc tập hợp các cột có chung giá trị, sử dụng khóa ngoại là cần thiết.

### Cách Sử Dụng và Ví Dụ:

Để tạo khóa ngoại trong SQL, bạn cần sử dụng lệnh `ALTER TABLE`.

#### Sử Dụng `ALTER TABLE`:

```sql
ALTER TABLE child_table
ADD CONSTRAINT fk_constraint_name
FOREIGN KEY (foreign_key_column)
REFERENCES parent_table(primary_key_column);
```

Ví dụ:

```sql
ALTER TABLE orders
ADD CONSTRAINT fk_customer_id
FOREIGN KEY (customer_id)
REFERENCES customers(customer_id);
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là lệnh SQL để chỉnh sửa cấu trúc của một bảng.
- `child_table`: Là tên của bảng bạn muốn thêm khóa ngoại vào.
- `fk_constraint_name`: Là tên bạn đặt cho ràng buộc (constraint) khóa ngoại.
- `foreign_key_column`: Là cột trong bảng `child_table` mà bạn muốn làm khóa ngoại.
- `parent_table`: Là tên của bảng có khóa chính được tham chiếu.
- `primary_key_column`: Là cột khóa chính trong bảng `parent_table`.

Khóa ngoại cho phép xác định một mối quan hệ giữa hai bảng dữ liệu. Nó giúp duy trì tính toàn vẹn của dữ liệu bằng cách đảm bảo rằng mỗi giá trị trong cột khóa ngoại phải tương ứng với một giá trị trong cột khóa chính của bảng mẹ (parent table). Ngoài ra, nó cũng cung cấp khả năng thực hiện các thao tác liên quan giữa các bảng, như xóa hoặc cập nhật tự động dữ liệu trong các bảng con khi có thay đổi trong bảng mẹ.
