## DDL – Ngôn ngữ định nghĩa dữ liệu (Data Definition Language)

DDL (Data Definition Language) là một phần của SQL được sử dụng để định nghĩa và quản lý cấu trúc dữ liệu trong cơ sở dữ liệu quan hệ. Nó cho phép người dùng tạo, sửa đổi và xóa các đối tượng cơ sở dữ liệu như bảng, chỉ mục, ràng buộc và các đối tượng khác.

**Ngữ cảnh của DDL:**
DDL đóng vai trò quan trọng trong việc xác định cấu trúc của cơ sở dữ liệu. Nó giúp định nghĩa các đối tượng và mối quan hệ giữa chúng, tạo nền tảng cho việc lưu trữ và truy cập dữ liệu.

**Cách sử dụng và ví dụ về DDL trong SQL:**

1. **CREATE (Tạo):**

   - Tạo mới một bảng trong cơ sở dữ liệu:

   ```sql
   CREATE TABLE employees (
       id INT PRIMARY KEY,
       name VARCHAR(50),
       department VARCHAR(50)
   );
   ```

   Lệnh trên tạo một bảng "employees" với các cột id, name, và department.

2. **ALTER (Sửa đổi):**

   - Thêm một cột mới vào bảng đã tồn tại:

   ```sql
   ALTER TABLE employees ADD COLUMN salary DECIMAL(10, 2);
   ```

   Lệnh trên thêm một cột "salary" với kiểu dữ liệu số có hai chữ số sau dấu phẩy vào bảng "employees".

3. **DROP (Xóa):**

   - Xóa bảng hoặc đối tượng từ cơ sở dữ liệu:

   ```sql
   DROP TABLE employees;
   ```

   Lệnh trên sẽ xóa bảng "employees" khỏi cơ sở dữ liệu.

4. **RENAME (Đổi tên):**

   - Đổi tên của bảng hoặc cột:

   ```sql
   ALTER TABLE employees RENAME COLUMN department TO dept;
   ```

   Lệnh trên đổi tên cột từ "department" thành "dept" trong bảng "employees".

5. **CONSTRAINTS (Ràng buộc):**

   - Thêm ràng buộc vào các cột:

   ```sql
   CREATE TABLE orders (
       order_id INT PRIMARY KEY,
       customer_id INT,
       order_date DATE,
       FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
   );
   ```

   Lệnh trên tạo bảng "orders" với ràng buộc khóa ngoại (FOREIGN KEY) đến cột "customer_id" trong bảng "customers".

DDL trong SQL cung cấp các công cụ quan trọng để định nghĩa và quản lý cấu trúc dữ liệu trong cơ sở dữ liệu, đồng thời đảm bảo tính nhất quán và hiệu suất khi truy cập dữ liệu.

---

## DML – Ngôn ngữ thao tác dữ liệu(Data Manipulation Language)

DML (Data Manipulation Language) là một phần quan trọng trong SQL, cho phép người dùng thao tác và quản lý dữ liệu trong các bảng của cơ sở dữ liệu quan hệ. DML bao gồm các lệnh để thêm, sửa đổi, xóa dữ liệu và truy vấn dữ liệu từ cơ sở dữ liệu.

**Ngữ cảnh của DML:**
DML là công cụ cho phép người dùng tương tác trực tiếp với dữ liệu trong cơ sở dữ liệu. Nó cho phép thực hiện các thao tác thêm, sửa đổi, xóa và truy vấn dữ liệu để đáp ứng nhu cầu cụ thể của người dùng.

**Cách sử dụng và ví dụ về DML trong SQL:**

1. **INSERT (Thêm mới):**

   - Thêm một bản ghi mới vào bảng:

   ```sql
   INSERT INTO employees (id, name, department) VALUES (1, 'John Doe', 'IT');
   ```

   Lệnh trên thêm một bản ghi mới vào bảng "employees" với các giá trị cho các cột id, name và department.

2. **UPDATE (Cập nhật):**

   - Cập nhật thông tin trong bảng:

   ```sql
   UPDATE employees SET department = 'HR' WHERE id = 1;
   ```

   Lệnh trên cập nhật giá trị của cột "department" thành 'HR' cho bản ghi có id là 1 trong bảng "employees".

3. **DELETE (Xóa):**

   - Xóa bản ghi từ bảng:

   ```sql
   DELETE FROM employees WHERE id = 1;
   ```

   Lệnh trên xóa bản ghi có id là 1 khỏi bảng "employees".

4. **SELECT (Truy vấn):**

   - Truy vấn dữ liệu từ bảng:

   ```sql
   SELECT * FROM employees WHERE department = 'IT';
   ```

   Lệnh trên truy vấn và trả về tất cả các bản ghi từ bảng "employees" mà cột "department" có giá trị là 'IT'.

DML cho phép người dùng thực hiện các thao tác cơ bản và quan trọng nhất trên dữ liệu trong cơ sở dữ liệu. Điều này giúp điều chỉnh và duy trì dữ liệu theo nhu cầu cụ thể của ứng dụng hoặc người dùng cuối.

---

## DCL – Ngôn ngữ điều khiển dữ liệu (Data Control Language)

DCL (Data Control Language) là một phần quan trọng của SQL được sử dụng để quản lý quyền truy cập và bảo mật trong cơ sở dữ liệu. DCL cho phép người quản trị cơ sở dữ liệu cấp quyền và thu hồi quyền từ người dùng để kiểm soát việc truy cập và thực hiện thao tác trên dữ liệu.

**Ngữ cảnh của DCL:**
DCL là công cụ quản lý quyền truy cập dữ liệu trong cơ sở dữ liệu. Nó được sử dụng để xác định ai có quyền truy cập, thực hiện thao tác như thêm, sửa, xóa hoặc truy vấn dữ liệu trong các bảng.

**Cách sử dụng và ví dụ về DCL trong SQL:**

1. **GRANT (Cấp quyền):**

   - Cấp quyền truy cập đến cơ sở dữ liệu hoặc các đối tượng trong cơ sở dữ liệu cho người dùng cụ thể:

   ```sql
   GRANT SELECT, INSERT ON employees TO user1;
   ```

   Lệnh trên cấp quyền SELECT và INSERT cho người dùng "user1" để truy cập và thêm dữ liệu vào bảng "employees".

2. **REVOKE (Thu hồi quyền):**

   - Thu hồi quyền truy cập đã được cấp cho người dùng:

   ```sql
   REVOKE INSERT ON employees FROM user1;
   ```

   Lệnh trên thu hồi quyền INSERT khỏi người dùng "user1" để họ không thể thêm dữ liệu vào bảng "employees".

DCL giúp quản trị viên cơ sở dữ liệu kiểm soát việc truy cập và thực hiện các thao tác trên dữ liệu. Việc quản lý quyền truy cập là yếu tố quan trọng để đảm bảo an toàn và bảo mật của dữ liệu trong cơ sở dữ liệu.

---
