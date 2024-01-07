`CHECK Constraint` trong SQL là một ràng buộc (constraint) được sử dụng để kiểm tra giá trị của một cột trong một bảng để đảm bảo rằng giá trị đó phải tuân theo một điều kiện cụ thể.

### Ngữ cảnh:

`CHECK Constraint` được áp dụng để đảm bảo tính hợp lệ của dữ liệu khi thực hiện các thay đổi (insert, update) trong cột đó.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `CHECK Constraint`:

Giả sử bạn có một bảng `employees` và muốn đảm bảo rằng lương của nhân viên không âm:

```sql
CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    employee_name VARCHAR(50),
    salary DECIMAL(10, 2) CHECK (salary >= 0)
);
```

Trong ví dụ này, `CHECK Constraint` được áp dụng cho cột `salary`, đảm bảo rằng giá trị của cột này luôn không âm.

### Giải thích chi tiết:

- Khi bạn thêm hoặc cập nhật dữ liệu trong cột có `CHECK Constraint`, SQL sẽ kiểm tra điều kiện được đặt ra.
- Nếu giá trị không thỏa mãn điều kiện, thao tác thêm hoặc cập nhật sẽ bị từ chối và trả về lỗi.
- Trong ví dụ, mỗi khi bạn thêm hoặc cập nhật một nhân viên với `salary` nhỏ hơn 0, hệ thống sẽ không cho phép và sẽ báo lỗi.

`CHECK Constraint` có thể áp dụng nhiều điều kiện khác nhau như kiểm tra giá trị hợp lệ của một cột, ví dụ: kiểm tra số điện thoại phải có định dạng hợp lệ, ngày sinh phải lớn hơn một ngày cụ thể, và nhiều hơn nữa.

Ràng buộc CHECK cung cấp một cách để đảm bảo tính nhất quán và đúng đắn của dữ liệu trong cơ sở dữ liệu.
