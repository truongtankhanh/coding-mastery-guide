1. **Kiểu dữ liệu số nguyên (Integer)**:

   - Kiểu dữ liệu integer được sử dụng để lưu trữ số nguyên không có dấu.
   - Cú pháp: INTEGER
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         id INTEGER,
         ...
     );
     ```

2. **Kiểu dữ liệu số thực (Floating-Point)**:

   - Kiểu dữ liệu số thực được sử dụng để lưu trữ số thực với dấu chấm động.
   - Cú pháp: FLOAT, REAL, DOUBLE PRECISION
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         price FLOAT,
         ...
     );
     ```

3. **Kiểu dữ liệu văn bản (Text)**:

   - Kiểu dữ liệu văn bản được sử dụng để lưu trữ chuỗi ký tự với chiều dài tùy ý.
   - Cú pháp: TEXT, VARCHAR(n), CHAR(n)
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         name TEXT,
         ...
     );
     ```

4. **Kiểu dữ liệu ngày tháng (Date and Time)**:

   - Kiểu dữ liệu ngày tháng được sử dụng để lưu trữ giá trị ngày và thời gian.
   - Cú pháp: DATE, TIME, TIMESTAMP
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         birth_date DATE,
         registration_time TIMESTAMP,
         ...
     );
     ```

5. **Kiểu dữ liệu boolean**:

   - Kiểu dữ liệu boolean được sử dụng để lưu trữ giá trị true hoặc false.
   - Cú pháp: BOOLEAN
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         is_active BOOLEAN,
         ...
     );
     ```

6. **Kiểu dữ liệu mảng (Array)**:

   - Kiểu dữ liệu mảng được sử dụng để lưu trữ một mảng các giá trị cùng kiểu.
   - Cú pháp: data_type[]
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         tags TEXT[],
         ...
     );
     ```

7. **Kiểu dữ liệu JSON và JSONB**:

   - Kiểu dữ liệu JSON và JSONB được sử dụng để lưu trữ dữ liệu JSON.
   - JSON lưu trữ dữ liệu JSON theo định dạng văn bản, trong khi JSONB lưu trữ dữ liệu dưới dạng định dạng nhị phân nén.
   - Cú pháp: JSON, JSONB
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         data JSON,
         ...
     );
     ```

8. **Kiểu dữ liệu hình học (Geometric)**:
   - Kiểu dữ liệu hình học được sử dụng để lưu trữ dữ liệu hình học như điểm, đường thẳng, hình tròn, v.v.
   - Cú pháp: các kiểu dữ liệu hình học cụ thể như POINT, LINE, CIRCLE, POLYGON, v.v.
   - Ví dụ:
     ```sql
     CREATE TABLE example (
         location POINT,
         ...
     );
     ```
