## ALTER TABLE – ADD

Lệnh `ALTER TABLE` với tùy chọn `ADD` trong SQL được sử dụng để thêm một cột mới hoặc ràng buộc vào bảng đã tồn tại trong cơ sở dữ liệu.

### Khái Niệm:

#### ALTER TABLE - ADD:

- Cho phép bạn thêm một cột mới hoặc ràng buộc vào bảng đã tồn tại.
- Điều chỉnh cấu trúc của bảng một cách linh hoạt mà không làm mất dữ liệu hiện có.

### Ngữ Cảnh:

Khi bạn cần mở rộng hoặc điều chỉnh cấu trúc của bảng bằng cách thêm một cột mới hoặc một ràng buộc, lệnh `ALTER TABLE - ADD` rất hữu ích.

### Cách Sử Dụng và Ví Dụ:

Để thêm một cột mới vào bảng, bạn sử dụng lệnh `ALTER TABLE` với tùy chọn `ADD COLUMN`.

#### Sử Dụng `ALTER TABLE - ADD COLUMN`:

```sql
ALTER TABLE table_name
ADD COLUMN column_name data_type;
```

Ví dụ:

```sql
ALTER TABLE employees
ADD COLUMN phone_number VARCHAR(20);
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh thay đổi cấu trúc của một bảng.
- `table_name`: Là tên của bảng mà bạn muốn thêm cột hoặc ràng buộc.
- `ADD COLUMN`: Là tùy chọn để chỉ ra bạn đang thêm một cột mới.
- `column_name`: Là tên của cột mới bạn muốn thêm vào.
- `data_type`: Là kiểu dữ liệu của cột mới.

Lệnh `ALTER TABLE - ADD COLUMN` cho phép bạn thêm một cột mới vào bảng. Bạn cần chỉ định tên cột mới và kiểu dữ liệu của cột đó. Việc này sẽ mở rộng cấu trúc của bảng mà không ảnh hưởng đến dữ liệu hiện có trong bảng. Nó giúp bạn mở rộng hoặc điều chỉnh cấu trúc của bảng một cách linh hoạt để phản ánh thông tin mới hoặc yêu cầu của ứng dụng.

---

## ALTER TABLE – DROP

Lệnh `ALTER TABLE` với tùy chọn `DROP` trong SQL được sử dụng để loại bỏ một cột hoặc ràng buộc từ bảng đã tồn tại trong cơ sở dữ liệu.

### Khái Niệm:

#### ALTER TABLE - DROP:

- Cho phép bạn loại bỏ một cột hoặc ràng buộc khỏi bảng.
- Điều chỉnh cấu trúc của bảng một cách linh hoạt mà không làm mất dữ liệu hiện có.

### Ngữ Cảnh:

Khi bạn cần thay đổi hoặc điều chỉnh cấu trúc của bảng bằng cách loại bỏ một cột không còn cần thiết hoặc một ràng buộc không cần dùng đến, lệnh `ALTER TABLE - DROP` sẽ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Để loại bỏ một cột từ bảng, bạn sử dụng lệnh `ALTER TABLE` với tùy chọn `DROP COLUMN`.

#### Sử Dụng `ALTER TABLE - DROP COLUMN`:

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

Ví dụ:

```sql
ALTER TABLE employees
DROP COLUMN phone_number;
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh thay đổi cấu trúc của một bảng.
- `table_name`: Là tên của bảng mà bạn muốn loại bỏ cột hoặc ràng buộc.
- `DROP COLUMN`: Là tùy chọn để chỉ ra bạn đang loại bỏ một cột từ bảng.
- `column_name`: Là tên của cột bạn muốn loại bỏ.

Lệnh `ALTER TABLE - DROP COLUMN` cho phép bạn loại bỏ một cột từ bảng. Khi bạn thực hiện lệnh này, cột được chỉ định sẽ bị loại bỏ khỏi bảng mà không ảnh hưởng đến dữ liệu hiện có trong cột. Điều này giúp bạn điều chỉnh cấu trúc của bảng một cách linh hoạt và loại bỏ thông tin không còn cần thiết.

---

## ALTER TABLE – MODIFY

Lệnh `ALTER TABLE` với tùy chọn `MODIFY` trong SQL được sử dụng để thay đổi kiểu dữ liệu hoặc thuộc tính của một cột đã tồn tại trong bảng.

### Khái Niệm:

#### ALTER TABLE - MODIFY:

- Cho phép bạn thay đổi kiểu dữ liệu hoặc thuộc tính của một cột đã tồn tại trong bảng.
- Điều chỉnh cấu trúc của cột một cách linh hoạt mà không làm mất dữ liệu hiện có.

### Ngữ Cảnh:

Khi bạn cần thay đổi kiểu dữ liệu của một cột hoặc điều chỉnh thuộc tính của nó, lệnh `ALTER TABLE - MODIFY` có thể được sử dụng.

### Cách Sử Dụng và Ví Dụ:

Để thay đổi kiểu dữ liệu của một cột, bạn sử dụng lệnh `ALTER TABLE` với tùy chọn `MODIFY COLUMN`.

#### Sử Dụng `ALTER TABLE - MODIFY COLUMN`:

```sql
ALTER TABLE table_name
MODIFY COLUMN column_name new_data_type;
```

Ví dụ:

```sql
ALTER TABLE employees
MODIFY COLUMN salary DECIMAL(10, 2);
```

### Giải Thích Chi Tiết:

- `ALTER TABLE`: Là câu lệnh thay đổi cấu trúc của một bảng.
- `table_name`: Là tên của bảng chứa cột bạn muốn thay đổi.
- `MODIFY COLUMN`: Là tùy chọn để chỉ ra bạn đang thay đổi kiểu dữ liệu hoặc thuộc tính của một cột.
- `column_name`: Là tên của cột bạn muốn thay đổi.
- `new_data_type`: Là kiểu dữ liệu mới bạn muốn gán cho cột.

Lệnh `ALTER TABLE - MODIFY COLUMN` cho phép bạn thay đổi kiểu dữ liệu hoặc thuộc tính của một cột trong bảng. Bạn cần chỉ định tên cột và kiểu dữ liệu mới bạn muốn áp dụng cho cột đó. Việc này sẽ điều chỉnh cấu trúc của cột mà không làm mất dữ liệu hiện có trong cột đó. Điều này giúp bạn điều chỉnh hoặc cải thiện cấu trúc dữ liệu trong bảng một cách linh hoạt.

---
