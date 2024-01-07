Trigger trong SQL là một đối tượng cơ sở dữ liệu có thể kích hoạt tự động khi có sự kiện xảy ra trong cơ sở dữ liệu. Có thể tạo trigger để thực hiện các hành động như thêm, sửa, xoá dữ liệu hoặc thực hiện các tác vụ phức tạp hơn khi có sự kiện nhất định xảy ra.

### Khái niệm:

- **Trigger:** Là một loại đối tượng cơ sở dữ liệu được kích hoạt tự động khi có sự kiện được định nghĩa trước xảy ra trong cơ sở dữ liệu.

### Ngữ cảnh và cách sử dụng:

- **Khi sử dụng trigger:** Định rõ sự kiện (INSERT, UPDATE, DELETE) và bảng mà trigger sẽ được kích hoạt.
- **Hành động của trigger:** Xác định hành động cần thực hiện khi trigger được kích hoạt.

### Ví dụ:

Dưới đây là cách tạo một trigger trong SQL để ghi log khi có sự thay đổi trong bảng `employees`:

#### Tạo trigger cho sự kiện UPDATE:

```sql
CREATE TRIGGER log_employee_changes
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_changes (employee_id, change_time, change_description)
    VALUES (NEW.employee_id, NOW(), 'Employee details updated');
END;
```

### Giải thích:

- Trigger `log_employee_changes` được kích hoạt sau mỗi lần có sự thay đổi trong bảng `employees` sau sự kiện UPDATE.
- `FOR EACH ROW` chỉ ra rằng trigger này sẽ được thực thi cho mỗi hàng dữ liệu bị ảnh hưởng.
- Trong trigger, một bản ghi mới sẽ được thêm vào bảng `employee_changes` mỗi khi có sự thay đổi, ghi lại thông tin về nhân viên và thời gian thay đổi.

### Ưu điểm của việc sử dụng trigger:

1. **Tự động hóa các hành động:** Trigger giúp tự động hóa các hành động khi có sự kiện xảy ra trong cơ sở dữ liệu.
2. **Ghi log và kiểm soát dữ liệu:** Có thể sử dụng trigger để ghi log, kiểm tra dữ liệu và thực hiện các hành động phức tạp khác.

Trigger trong SQL cung cấp một cách tiếp cận mạnh mẽ để tự động hóa các hành động trong cơ sở dữ liệu khi có sự kiện xảy ra, giúp quản lý dữ liệu hiệu quả và tăng tính đáng tin cậy của hệ thống.
