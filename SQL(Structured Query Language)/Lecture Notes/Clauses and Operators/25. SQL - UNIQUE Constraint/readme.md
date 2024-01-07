## UNIQUE Constraint trong SQL – Ngăn chặn duplicate dữ liệu

Ràng buộc `UNIQUE` trong SQL được sử dụng để đảm bảo rằng một cột hoặc một nhóm các cột không chứa giá trị trùng lặp trong mỗi hàng trong bảng. Điều này giúp ngăn chặn dữ liệu trùng lặp và duy trì tính toàn vẹn của dữ liệu trong cơ sở dữ liệu.

### Khái Niệm:

#### Ràng Buộc `UNIQUE`:

- Đảm bảo rằng một cột hoặc tập hợp các cột không chứa các giá trị trùng lặp trong mỗi hàng của bảng.
- Không cho phép các giá trị trùng lặp được thêm vào cột đó.

### Ngữ Cảnh:

Khi bạn muốn đảm bảo rằng một cột hoặc một nhóm các cột không chứa các giá trị trùng lặp, sử dụng ràng buộc `UNIQUE` là cần thiết.

### Cách Sử Dụng và Ví Dụ:

Để thêm ràng buộc `UNIQUE` vào một cột hoặc tập hợp các cột, bạn có thể sử dụng lệnh `ALTER TABLE` hoặc thêm ràng buộc khi tạo bảng.

#### Sử Dụng `ALTER TABLE`:

```sql
ALTER TABLE table_name
ADD CONSTRAINT constraint_name UNIQUE (column_name);
```

Ví dụ:

```sql
ALTER TABLE employees
ADD CONSTRAINT uk_employee_email UNIQUE (email);
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh để thay đổi cấu trúc của một bảng.
- `table_name`: Là tên của bảng bạn muốn thêm ràng buộc `UNIQUE`.
- `constraint_name`: Là tên bạn đặt cho ràng buộc (nếu có).
- `column_name`: Là tên cột bạn muốn áp dụng ràng buộc `UNIQUE`.

Ràng buộc `UNIQUE` đảm bảo rằng mỗi giá trị trong cột được áp dụng ràng buộc không thể xuất hiện hai lần hoặc nhiều hơn trong cột đó. Khi bạn cố gắng chèn hoặc cập nhật giá trị trùng lặp vào cột có ràng buộc `UNIQUE`, hệ thống sẽ không chấp nhận và thông báo lỗi. Điều này giúp ngăn chặn dữ liệu trùng lặp và duy trì tính toàn vẹn của cơ sở dữ liệu.

---

## Xoá Unique Constraint

Để xoá ràng buộc `UNIQUE` từ một cột hoặc một nhóm các cột trong SQL, bạn cần sử dụng lệnh `ALTER TABLE` và chỉ định tên ràng buộc mà bạn muốn xoá.

### Khái Niệm:

#### Xoá Ràng Buộc `UNIQUE`:

- Là việc loại bỏ ràng buộc `UNIQUE` từ một cột hoặc tập hợp các cột trong cơ sở dữ liệu.
- Cho phép giá trị trùng lặp được chấp nhận trong cột đó.

### Ngữ Cảnh:

Khi bạn muốn cho phép giá trị trùng lặp trong một cột hoặc tập hợp các cột mà trước đó đã được áp dụng ràng buộc `UNIQUE`, việc xoá ràng buộc này là cần thiết.

### Cách Sử Dụng và Ví Dụ:

Để xoá ràng buộc `UNIQUE`, bạn cần sử dụng lệnh `ALTER TABLE` và chỉ định tên ràng buộc bạn muốn loại bỏ.

#### Sử Dụng `ALTER TABLE`:

```sql
ALTER TABLE table_name
DROP CONSTRAINT constraint_name;
```

Ví dụ:

```sql
ALTER TABLE employees
DROP CONSTRAINT uk_employee_email;
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh thay đổi cấu trúc của một bảng.
- `table_name`: Là tên của bảng chứa ràng buộc bạn muốn xoá.
- `constraint_name`: Là tên của ràng buộc `UNIQUE` bạn muốn loại bỏ.

Lệnh `ALTER TABLE ... DROP CONSTRAINT` được sử dụng để loại bỏ ràng buộc `UNIQUE` từ cột hoặc tập hợp các cột trong cơ sở dữ liệu. Khi ràng buộc `UNIQUE` được xoá, các giá trị trùng lặp có thể được chấp nhận trong cột hoặc các cột mà ràng buộc này được áp dụng trước đó. Điều này có thể cần thiết trong trường hợp bạn muốn thay đổi quy tắc về tính duy nhất của dữ liệu trong cột.

---
