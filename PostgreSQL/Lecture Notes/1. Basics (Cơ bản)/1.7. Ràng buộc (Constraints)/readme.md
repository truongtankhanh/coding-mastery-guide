1. **Ràng buộc Khóa Chính (Primary Key)**:

   - Ràng buộc khóa chính được sử dụng để đảm bảo rằng mỗi bản ghi trong bảng có một giá trị duy nhất trong cột được chỉ định.
   - Cú pháp:
     ```sql
     CREATE TABLE table_name (
         column1 data_type PRIMARY KEY,
         ...
     );
     ```
   - Ví dụ:
     ```sql
     CREATE TABLE employees (
         employee_id SERIAL PRIMARY KEY,
         name VARCHAR(100),
         ...
     );
     ```

2. **Ràng buộc Khóa Ngoại (Foreign Key)**:

   - Ràng buộc khóa ngoại được sử dụng để xác định mối quan hệ giữa hai bảng, đảm bảo rằng mỗi giá trị trong cột tham chiếu tương ứng với một giá trị duy nhất trong bảng tham chiếu.
   - Cú pháp:
     ```sql
     CREATE TABLE table_name (
         column1 data_type REFERENCES another_table_name(column_name),
         ...
     );
     ```
   - Ví dụ:
     ```sql
     CREATE TABLE orders (
         order_id SERIAL PRIMARY KEY,
         customer_id INT REFERENCES customers(customer_id),
         ...
     );
     ```

3. **Ràng buộc Duy Nhất (Unique)**:

   - Ràng buộc duy nhất đảm bảo rằng mỗi giá trị trong cột có một giá trị duy nhất, nhưng không yêu cầu cột đó là khóa chính.
   - Cú pháp:
     ```sql
     CREATE TABLE table_name (
         column1 data_type UNIQUE,
         ...
     );
     ```
   - Ví dụ:
     ```sql
     CREATE TABLE employees (
         email VARCHAR(100) UNIQUE,
         ...
     );
     ```

4. **Ràng buộc Không Rỗng (Not Null)**:

   - Ràng buộc không rỗng đảm bảo rằng mỗi giá trị trong cột không được phép là NULL.
   - Cú pháp:
     ```sql
     CREATE TABLE table_name (
         column1 data_type NOT NULL,
         ...
     );
     ```
   - Ví dụ:
     ```sql
     CREATE TABLE employees (
         name VARCHAR(100) NOT NULL,
         ...
     );
     ```

5. **Ràng buộc Kiểm Tra (Check)**:
   - Ràng buộc kiểm tra đảm bảo rằng giá trị trong cột phải thỏa mãn một điều kiện nhất định.
   - Cú pháp:
     ```sql
     CREATE TABLE table_name (
         column1 data_type CONSTRAINT constraint_name CHECK (condition),
         ...
     );
     ```
   - Ví dụ:
     ```sql
     CREATE TABLE employees (
         age INT CONSTRAINT check_age CHECK (age >= 18),
         ...
     );
     ```
