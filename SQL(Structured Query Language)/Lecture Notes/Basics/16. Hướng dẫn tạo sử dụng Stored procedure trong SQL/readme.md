Stored Procedure trong SQL là một tập hợp các câu lệnh SQL được lưu trữ dưới dạng một đối tượng trong cơ sở dữ liệu. Nó cho phép lưu trữ và tái sử dụng các phần mã SQL, giúp tăng hiệu suất, bảo trì dễ dàng và giảm sự phức tạp của ứng dụng.

### Khái niệm:

- **Stored Procedure:** Là một tập hợp các câu lệnh SQL đã được đặt tên và lưu trữ trong cơ sở dữ liệu để thực thi khi được gọi.

### Ngữ cảnh và cách sử dụng:

- **Tạo và lưu trữ:** Viết một tập hợp các câu lệnh SQL trong một khối và lưu trữ chúng dưới dạng một stored procedure trong cơ sở dữ liệu.
- **Tái sử dụng và hiệu suất:** Stored procedure có thể được gọi và tái sử dụng từ nhiều ứng dụng khác nhau, giúp tăng hiệu suất và giảm độ phức tạp của mã nguồn.

### Ví dụ:

Dưới đây là cách tạo một stored procedure trong SQL để lấy thông tin của các nhân viên từ bảng `employees`:

#### Tạo stored procedure:

```sql
CREATE PROCEDURE GetEmployeeInfo
AS
BEGIN
    SELECT employee_id, employee_name, salary FROM employees;
END;
```

#### Gọi stored procedure:

```sql
EXEC GetEmployeeInfo;
```

### Giải thích:

- Stored procedure `GetEmployeeInfo` được tạo để lấy thông tin của các nhân viên từ bảng `employees`.
- Trong trường hợp này, stored procedure chỉ đơn giản là một câu lệnh SELECT, nhưng nó có thể chứa nhiều câu lệnh phức tạp hơn để thực hiện các tác vụ khác nhau.
- Sau khi stored procedure được tạo, nó có thể được gọi bất cứ khi nào cần thiết bằng cách sử dụng lệnh `EXEC`.

### Ưu điểm của việc sử dụng stored procedure:

1. **Tái sử dụng mã nguồn:** Giúp giảm độ phức tạp của mã nguồn bằng cách lưu trữ các tác vụ thường xuyên thực hiện trong cơ sở dữ liệu.
2. **Hiệu suất cao:** Giảm thời gian thực thi vì nó đã được biên dịch trước và lưu trữ trong cơ sở dữ liệu.

Stored procedure trong SQL là một công cụ mạnh mẽ cho việc lưu trữ, tái sử dụng và thực thi các tác vụ phức tạp trong cơ sở dữ liệu, giúp tăng hiệu suất và quản lý mã nguồn một cách hiệu quả.
