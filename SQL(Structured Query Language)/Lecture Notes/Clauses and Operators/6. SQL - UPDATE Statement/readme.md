Câu lệnh `UPDATE` trong SQL được sử dụng để thay đổi dữ liệu trong một hoặc nhiều bản ghi có sẵn trong một bảng.

### Khái Niệm:

#### UPDATE:

- `UPDATE` là câu lệnh SQL dùng để cập nhật dữ liệu trong một bảng.
- Nó cho phép bạn thay đổi giá trị của một hoặc nhiều cột trong một hoặc nhiều bản ghi trong bảng.

### Ngữ Cảnh:

Khi bạn cần thay đổi hoặc cập nhật thông tin trong cơ sở dữ liệu, ví dụ như cập nhật thông tin của người dùng, sản phẩm, hoặc thông tin đặt hàng, `UPDATE` là công cụ mạnh mẽ để thực hiện việc này.

### Cách Sử Dụng và Ví Dụ:

Cú pháp của câu lệnh `UPDATE` như sau:

```sql
UPDATE ten_bang
SET ten_cot1 = gia_tri_moi1, ten_cot2 = gia_tri_moi2, ...
WHERE dieu_kien;
```

Ví dụ:

Nếu bạn muốn cập nhật thông tin lương của nhân viên có `id` là 101 từ 5000 thành 5500, bạn có thể sử dụng câu lệnh sau:

```sql
UPDATE employees
SET salary = 5500
WHERE id = 101;
```

### Giải Thích Chi Tiết:

- `UPDATE`: Là từ khóa để bắt đầu câu lệnh cập nhật dữ liệu.
- `ten_bang`: Là tên của bảng bạn muốn cập nhật.
- `ten_cot1, ten_cot2, ...`: Là tên của các cột mà bạn muốn cập nhật.
- `gia_tri_moi1, gia_tri_moi2, ...`: Là giá trị mới bạn muốn thay đổi cho các cột tương ứng.
- `WHERE`: Là điều kiện để xác định bản ghi cần cập nhật.
- `dieu_kien`: Là điều kiện để chỉ định bản ghi cần cập nhật. Nếu điều kiện này không được chỉ định, tất cả các bản ghi trong bảng sẽ bị cập nhật.

Câu lệnh `UPDATE` giúp bạn thực hiện các thay đổi dữ liệu trong cơ sở dữ liệu một cách linh hoạt, đồng thời cho phép bạn xác định rõ ràng bản ghi nào cần được cập nhật thông qua điều kiện `WHERE`. Điều này giúp bạn cập nhật dữ liệu một cách chính xác và tiết kiệm thời gian.
