1. **INSERT**:

   - INSERT được sử dụng để thêm dữ liệu mới vào bảng.
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

2. **UPDATE**:

   - UPDATE được sử dụng để cập nhật dữ liệu đã tồn tại trong bảng.
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

3. **DELETE**:

   - DELETE được sử dụng để xóa dữ liệu từ bảng.
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

4. **SELECT (Tìm kiếm và Truy vấn)**:
   - SELECT không chỉ được sử dụng để truy vấn dữ liệu mà còn để thực hiện các thao tác tìm kiếm, phân tích và tính toán trên dữ liệu.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE condition;
     ```
