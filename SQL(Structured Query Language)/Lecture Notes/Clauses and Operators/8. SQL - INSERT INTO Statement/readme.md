Lệnh `INSERT INTO` trong SQL được sử dụng để thêm dữ liệu mới vào trong một bảng đã được tạo trước đó trong cơ sở dữ liệu.

### Khái Niệm:

#### INSERT INTO:

- `INSERT INTO` là câu lệnh SQL để thêm dữ liệu mới vào một bảng.
- Nó cho phép bạn chèn các giá trị mới vào các cột tương ứng trong bảng.

### Ngữ Cảnh:

Khi bạn cần thêm dữ liệu mới vào bảng, ví dụ như thêm thông tin về người dùng mới, sản phẩm mới hoặc thông tin đặt hàng, `INSERT INTO` là công cụ để thực hiện việc này.

### Cách Sử Dụng và Ví Dụ:

Cú pháp của câu lệnh `INSERT INTO` như sau:

```sql
INSERT INTO ten_bang (cot1, cot2, ...)
VALUES (gia_tri1, gia_tri2, ...);
```

Ví dụ:

Nếu bạn muốn thêm thông tin về một nhân viên mới vào bảng `employees` với `id` là 103, `name` là "Alice" và `salary` là 6000, bạn có thể sử dụng câu lệnh sau:

```sql
INSERT INTO employees (id, name, salary)
VALUES (103, 'Alice', 6000);
```

### Giải Thích Chi Tiết:

- `INSERT INTO`: Là từ khóa để bắt đầu câu lệnh thêm dữ liệu.
- `ten_bang`: Là tên của bảng mà bạn muốn thêm dữ liệu.
- `(cot1, cot2, ...)`: Là danh sách các cột mà bạn muốn chèn dữ liệu vào.
- `VALUES`: Là từ khóa để chỉ định các giá trị sẽ được thêm vào.
- `(gia_tri1, gia_tri2, ...)`: Là các giá trị tương ứng cho các cột được chỉ định.

Câu lệnh `INSERT INTO` cho phép bạn thêm dữ liệu mới vào bảng. Bạn chỉ định tên bảng và các giá trị tương ứng cho các cột mà bạn muốn thêm vào. Việc này giúp bảng của bạn được cập nhật với thông tin mới một cách dễ dàng và linh hoạt.
