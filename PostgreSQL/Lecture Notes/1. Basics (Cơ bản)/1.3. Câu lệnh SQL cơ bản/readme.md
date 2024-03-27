1. **SELECT**:

   - Sử dụng để truy vấn dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     SELECT column1, column2, ...
     FROM table_name
     WHERE condition;
     ```

2. **INSERT**:

   - Sử dụng để thêm dữ liệu mới vào bảng trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     INSERT INTO table_name (column1, column2, ...)
     VALUES (value1, value2, ...);
     ```

3. **UPDATE**:

   - Sử dụng để cập nhật dữ liệu đã tồn tại trong bảng.
   - Cú pháp:
     ```sql
     UPDATE table_name
     SET column1 = value1, column2 = value2, ...
     WHERE condition;
     ```

4. **DELETE**:

   - Sử dụng để xóa dữ liệu từ bảng trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     DELETE FROM table_name
     WHERE condition;
     ```

5. **WHERE clause**:

   - Sử dụng để lọc dữ liệu dựa trên điều kiện nhất định.
   - Cú pháp:
     ```sql
     SELECT column1, column2, ...
     FROM table_name
     WHERE condition;
     ```

6. **ORDER BY clause**:

   - Sử dụng để sắp xếp kết quả truy vấn theo một hoặc nhiều cột.
   - Cú pháp:
     ```sql
     SELECT column1, column2, ...
     FROM table_name
     ORDER BY column1 ASC|DESC, column2 ASC|DESC, ...;
     ```

7. **GROUP BY clause**:

   - Sử dụng để nhóm các hàng dữ liệu dựa trên một hoặc nhiều cột.
   - Cú pháp:
     ```sql
     SELECT column1, aggregate_function(column2)
     FROM table_name
     GROUP BY column1;
     ```

8. **HAVING clause**:
   - Sử dụng để lọc kết quả của câu lệnh GROUP BY dựa trên một điều kiện.
   - Cú pháp:
     ```sql
     SELECT column1, aggregate_function(column2)
     FROM table_name
     GROUP BY column1
     HAVING condition;
     ```
