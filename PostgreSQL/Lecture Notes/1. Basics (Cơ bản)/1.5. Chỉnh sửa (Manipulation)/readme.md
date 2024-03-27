1. **Thêm dữ liệu (INSERT)**:

   - Sử dụng để thêm dữ liệu mới vào bảng trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     INSERT INTO table_name (column1, column2, ...)
     VALUES (value1, value2, ...);
     ```
   - Ví dụ:
     ```sql
     INSERT INTO employees (name, age, department)
     VALUES ('John Doe', 30, 'IT');
     ```

2. **Cập nhật dữ liệu (UPDATE)**:

   - Sử dụng để cập nhật dữ liệu đã tồn tại trong bảng.
   - Cú pháp:
     ```sql
     UPDATE table_name
     SET column1 = value1, column2 = value2, ...
     WHERE condition;
     ```
   - Ví dụ:
     ```sql
     UPDATE employees
     SET age = 31, department = 'HR'
     WHERE name = 'John Doe';
     ```

3. **Xóa dữ liệu (DELETE)**:

   - Sử dụng để xóa dữ liệu từ bảng trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     DELETE FROM table_name
     WHERE condition;
     ```
   - Ví dụ:
     ```sql
     DELETE FROM employees
     WHERE age > 60;
     ```

4. **Chỉnh sửa cơ bản với TRANSACTION**:
   - PostgreSQL hỗ trợ giao dịch (TRANSACTION) để đảm bảo tính toàn vẹn và nhất quán của dữ liệu trong quá trình thực hiện các thao tác chỉnh sửa.
   - Cú pháp:
     ```sql
     BEGIN; -- Bắt đầu giao dịch
     -- Thực hiện các thao tác INSERT, UPDATE, DELETE
     COMMIT; -- Kết thúc giao dịch và lưu thay đổi
     ROLLBACK; -- Hủy bỏ các thay đổi và quay về trạng thái ban đầu
     ```
