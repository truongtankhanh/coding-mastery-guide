1. **WHERE clause**:

   - WHERE clause được sử dụng trong các câu lệnh SELECT, UPDATE, DELETE để lọc dữ liệu dựa trên các điều kiện cụ thể.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE condition;
     ```

2. **Các toán tử so sánh**:

   - PostgreSQL hỗ trợ các toán tử so sánh như "=", "<>", ">", ">=", "<", "<=", IS NULL, IS NOT NULL để so sánh giá trị của cột với giá trị đã cho hoặc NULL.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE column1 = 'value' AND column2 > 10;
     ```

3. **Các toán tử logic**:

   - PostgreSQL hỗ trợ các toán tử logic như AND, OR, NOT để kết hợp các điều kiện.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE column1 = 'value' AND (column2 > 10 OR column3 IS NULL);
     ```

4. **IN và NOT IN**:

   - Toán tử IN được sử dụng để kiểm tra xem một giá trị có trong danh sách hay không.
   - Toán tử NOT IN được sử dụng để kiểm tra xem một giá trị không có trong danh sách.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE column1 IN ('value1', 'value2', 'value3');
     ```

5. **BETWEEN và NOT BETWEEN**:

   - BETWEEN được sử dụng để kiểm tra xem một giá trị có nằm trong một phạm vi giá trị hay không.
   - NOT BETWEEN được sử dụng để kiểm tra xem một giá trị không nằm trong một phạm vi giá trị.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE column1 BETWEEN 10 AND 20;
     ```

6. **LIKE và NOT LIKE**:

   - LIKE được sử dụng để kiểm tra xem một chuỗi có phù hợp với một mẫu chuỗi hay không (có thể sử dụng % và \_ như là các ký tự đại diện).
   - NOT LIKE được sử dụng để kiểm tra xem một chuỗi không phù hợp với một mẫu chuỗi.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE column1 LIKE 'abc%';
     ```

7. **NULL và NOT NULL**:
   - NULL được sử dụng để kiểm tra xem một giá trị có là NULL hay không.
   - NOT NULL được sử dụng để kiểm tra xem một giá trị không là NULL.
   - Ví dụ:
     ```sql
     SELECT column1, column2
     FROM table_name
     WHERE column1 IS NULL;
     ```
