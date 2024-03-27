1. **Câu lệnh SELECT**:

   - SELECT là câu lệnh cơ bản được sử dụng để truy vấn dữ liệu từ một hoặc nhiều bảng trong cơ sở dữ liệu.
   - Cú pháp:
     ```sql
     SELECT column1, column2, ...
     FROM table_name;
     ```
   - Ví dụ:
     ```sql
     SELECT name, age, department
     FROM employees;
     ```

2. **Lọc dữ liệu với WHERE clause**:

   - Sử dụng WHERE clause để lọc dữ liệu dựa trên các điều kiện nhất định.
   - Cú pháp:
     ```sql
     SELECT column1, column2, ...
     FROM table_name
     WHERE condition;
     ```
   - Ví dụ:
     ```sql
     SELECT name, age
     FROM employees
     WHERE department = 'IT';
     ```

3. **Sắp xếp kết quả với ORDER BY clause**:

   - Sử dụng ORDER BY clause để sắp xếp kết quả truy vấn theo một hoặc nhiều cột.
   - Cú pháp:
     ```sql
     SELECT column1, column2, ...
     FROM table_name
     ORDER BY column1 [ASC|DESC], column2 [ASC|DESC], ...;
     ```
   - Ví dụ:
     ```sql
     SELECT name, age
     FROM employees
     ORDER BY age DESC;
     ```

4. **Nhóm kết quả với GROUP BY clause**:

   - Sử dụng GROUP BY clause để nhóm các hàng dữ liệu dựa trên một hoặc nhiều cột.
   - Cú pháp:
     ```sql
     SELECT column1, aggregate_function(column2)
     FROM table_name
     GROUP BY column1;
     ```
   - Ví dụ:
     ```sql
     SELECT department, COUNT(*)
     FROM employees
     GROUP BY department;
     ```

5. **Lọc kết quả nhóm với HAVING clause**:
   - Sử dụng HAVING clause để lọc kết quả của GROUP BY dựa trên một điều kiện.
   - Cú pháp:
     ```sql
     SELECT column1, aggregate_function(column2)
     FROM table_name
     GROUP BY column1
     HAVING condition;
     ```
   - Ví dụ:
     ```sql
     SELECT department, AVG(age)
     FROM employees
     GROUP BY department
     HAVING AVG(age) > 30;
     ```
