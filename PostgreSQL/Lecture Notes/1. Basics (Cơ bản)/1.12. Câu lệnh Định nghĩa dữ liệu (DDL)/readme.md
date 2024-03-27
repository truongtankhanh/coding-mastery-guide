1. **Tạo Bảng (CREATE TABLE)**:

   - Câu lệnh CREATE TABLE được sử dụng để tạo một bảng mới trong cơ sở dữ liệu PostgreSQL.
   - Cú pháp:
     ```sql
     CREATE TABLE table_name (
         column1 data_type constraints,
         column2 data_type constraints,
         ...
     );
     ```
   - Ví dụ:
     ```sql
     CREATE TABLE employees (
         employee_id SERIAL PRIMARY KEY,
         name VARCHAR(100) NOT NULL,
         age INT,
         department VARCHAR(50)
     );
     ```

2. **Chỉnh sửa Bảng (ALTER TABLE)**:

   - Câu lệnh ALTER TABLE được sử dụng để thay đổi cấu trúc của bảng hiện có trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     ALTER TABLE table_name action;
     ```
   - Ví dụ:
     - Thêm cột mới:
       ```sql
       ALTER TABLE employees ADD COLUMN email VARCHAR(100);
       ```
     - Đổi tên cột:
       ```sql
       ALTER TABLE employees RENAME COLUMN department TO dept;
       ```
     - Xóa cột:
       ```sql
       ALTER TABLE employees DROP COLUMN age;
       ```

3. **Xóa Bảng (DROP TABLE)**:

   - Câu lệnh DROP TABLE được sử dụng để xóa một bảng khỏi cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     DROP TABLE table_name;
     ```
   - Ví dụ:
     ```sql
     DROP TABLE employees;
     ```

4. **Chú thích (COMMENT)**:
   - Câu lệnh COMMENT được sử dụng để thêm chú thích vào các đối tượng trong cơ sở dữ liệu như bảng, cột hoặc chỉ mục.
   - Cú pháp:
     ```sql
     COMMENT ON table_name IS 'comment';
     COMMENT ON COLUMN table_name.column_name IS 'comment';
     ```
   - Ví dụ:
     ```sql
     COMMENT ON TABLE employees IS 'A table storing employee information.';
     COMMENT ON COLUMN employees.name IS 'The name of the employee.';
     ```
