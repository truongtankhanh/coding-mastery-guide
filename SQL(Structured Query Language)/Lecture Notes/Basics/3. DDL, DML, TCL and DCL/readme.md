## DDL – Data Definition Language

Ngôn ngữ định nghĩa dữ liệu (DDL - Data Definition Language) trong SQL là tập hợp các lệnh được sử dụng để định nghĩa, thay đổi và xóa các đối tượng trong cơ sở dữ liệu. DDL bao gồm các lệnh chính sau:

### Khái Niệm:

- **CREATE:** Tạo mới các đối tượng như bảng, chỉ mục, thủ tục lưu trữ, hàm.
- **ALTER:** Thay đổi cấu trúc của các đối tượng đã tồn tại, như thêm hoặc xóa cột, thay đổi kiểu dữ liệu.
- **DROP:** Xóa bỏ các đối tượng không cần thiết khỏi cơ sở dữ liệu.
- **TRUNCATE:** Xóa tất cả các bản ghi trong một bảng và giải phóng không gian bộ nhớ được sử dụng.
- **COMMENT:** Thêm ý kiến vào từ điển dữ liệu để mô tả các đối tượng.
- **RENAME:** Đổi tên cho các đối tượng.

### Ngữ Cảnh:

- **CREATE TABLE:** Sử dụng để tạo mới một bảng trong cơ sở dữ liệu.

  ```sql
  CREATE TABLE Employees (
      EmployeeID INT PRIMARY KEY,
      LastName VARCHAR(50),
      FirstName VARCHAR(50),
      HireDate DATE,
      DepartmentID INT,
      CONSTRAINT fk_Department FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
  );
  ```

- **ALTER TABLE:** Sử dụng để thay đổi cấu trúc của bảng đã tồn tại, thêm hoặc xóa cột.

  ```sql
  ALTER TABLE Employees
  ADD Salary DECIMAL(10,2);
  ```

- **DROP TABLE:** Sử dụng để xóa bỏ một bảng khỏi cơ sở dữ liệu.

  ```sql
  DROP TABLE Employees;
  ```

- **TRUNCATE TABLE:** Sử dụng để xóa tất cả các bản ghi trong bảng.

  ```sql
  TRUNCATE TABLE Employees;
  ```

- **COMMENT ON:** Sử dụng để thêm ý kiến mô tả vào từ điển dữ liệu.

  ```sql
  COMMENT ON TABLE Employees IS 'Table containing employee information';
  ```

- **RENAME TABLE:** Sử dụng để đổi tên một bảng.
  ```sql
  RENAME TABLE Employees TO Staff;
  ```

### Cách Sử Dụng:

- Dùng để tạo, sửa đổi và xóa các đối tượng trong cơ sở dữ liệu.
- Cho phép quản lý cấu trúc và mô hình dữ liệu.
- Cần phải cẩn thận vì thay đổi có thể ảnh hưởng đến dữ liệu hiện có.

DDL là một phần quan trọng của SQL và cho phép quản lý cấu trúc cơ sở dữ liệu một cách linh hoạt và an toàn.

---

## DML – Data Manipulation Language

Ngôn ngữ thao tác dữ liệu (DML - Data Manipulation Language) trong SQL là tập hợp các lệnh được sử dụng để thao tác trực tiếp trên dữ liệu trong cơ sở dữ liệu. DML bao gồm các lệnh chính sau:

### Khái Niệm:

- **SELECT:** Lấy dữ liệu từ cơ sở dữ liệu, cho phép truy xuất thông tin từ bảng.

  ```sql
  SELECT FirstName, LastName FROM Employees WHERE DepartmentID = 10;
  ```

- **INSERT:** Chèn dữ liệu mới vào bảng trong cơ sở dữ liệu.

  ```sql
  INSERT INTO Employees (FirstName, LastName, DepartmentID) VALUES ('John', 'Doe', 10);
  ```

- **UPDATE:** Cập nhật dữ liệu hiện có trong một bảng.

  ```sql
  UPDATE Employees SET DepartmentID = 20 WHERE LastName = 'Doe';
  ```

- **DELETE:** Xóa tất cả các bản ghi hoặc các bản ghi cụ thể khỏi bảng cơ sở dữ liệu.
  ```sql
  DELETE FROM Employees WHERE LastName = 'Doe';
  ```

### Ngữ Cảnh:

- **SELECT:** Sử dụng để truy xuất thông tin từ bảng dữ liệu, có thể kết hợp với các điều kiện để lấy dữ liệu cụ thể.
- **INSERT:** Dùng để thêm dữ liệu mới vào bảng trong cơ sở dữ liệu.
- **UPDATE:** Sửa đổi hoặc cập nhật thông tin trong bảng dữ liệu đã tồn tại.
- **DELETE:** Xóa bỏ dữ liệu từ bảng, có thể xóa toàn bộ hoặc theo điều kiện.

### Cách Sử Dụng:

- Dùng để thao tác trực tiếp với dữ liệu trong cơ sở dữ liệu.
- SELECT để truy xuất thông tin, INSERT để thêm mới, UPDATE để chỉnh sửa, và DELETE để xóa bỏ dữ liệu.

Ví dụ:

1. **SELECT:** Lấy thông tin tên và tuổi của những người có tuổi lớn hơn 30 từ bảng người dùng.

   ```sql
   SELECT Name, Age FROM Users WHERE Age > 30;
   ```

2. **INSERT:** Thêm một người dùng mới vào bảng.

   ```sql
   INSERT INTO Users (Name, Age) VALUES ('Alice', 25);
   ```

3. **UPDATE:** Cập nhật tuổi của người dùng có tên là 'Alice'.

   ```sql
   UPDATE Users SET Age = 26 WHERE Name = 'Alice';
   ```

4. **DELETE:** Xóa người dùng có tuổi nhỏ hơn 25.
   ```sql
   DELETE FROM Users WHERE Age < 25;
   ```

DML cung cấp khả năng thao tác trực tiếp trên dữ liệu trong cơ sở dữ liệu, cho phép thực hiện các thay đổi, truy vấn và xóa bỏ dữ liệu dựa trên nhu cầu của ứng dụng hoặc người dùng.

---

## TCL – Transaction Control Language

Ngôn ngữ kiểm soát giao dịch (TCL - Transaction Control Language) trong SQL là tập hợp các lệnh được sử dụng để kiểm soát và quản lý giao dịch trong cơ sở dữ liệu. TCL bao gồm các lệnh COMMIT, ROLLBACK và SAVEPOINT.

### Khái Niệm:

- **COMMIT:** Lệnh này được sử dụng để lưu trữ tất cả các thay đổi đã được thực hiện trong giao dịch và áp dụng chúng vào cơ sở dữ liệu.

  ```sql
  COMMIT;
  ```

- **ROLLBACK:** Lệnh này được sử dụng để hủy bỏ tất cả các thay đổi trong giao dịch và phục hồi cơ sở dữ liệu về trạng thái trước khi giao dịch bắt đầu.

  ```sql
  ROLLBACK;
  ```

- **SAVEPOINT:** Lệnh này được sử dụng để thiết lập một điểm lưu trữ (savepoint) trong quá trình thực hiện giao dịch, để có thể rollback đến điểm này sau này.
  ```sql
  SAVEPOINT savepoint_name;
  ```

### Ngữ Cảnh:

- **COMMIT:** Sử dụng khi muốn lưu trữ các thay đổi đã thực hiện và áp dụng chúng vào cơ sở dữ liệu.
- **ROLLBACK:** Sử dụng khi cần hủy bỏ toàn bộ hoặc một phần thay đổi trong giao dịch và quay trở lại trạng thái trước khi giao dịch bắt đầu.
- **SAVEPOINT:** Sử dụng để thiết lập một điểm lưu trữ, cho phép rollback từ điểm này mà không ảnh hưởng đến các thay đổi sau.

### Cách Sử Dụng:

- **COMMIT:** Khi một giao dịch hoàn thành và muốn áp dụng các thay đổi vào cơ sở dữ liệu vĩnh viễn.
- **ROLLBACK:** Trong trường hợp có lỗi xảy ra hoặc muốn hủy bỏ các thay đổi.
- **SAVEPOINT:** Để thiết lập một điểm kiểm soát trung gian để rollback giao dịch từ điểm này.

Ví dụ:

1. **COMMIT:** Lưu trữ tất cả các thay đổi đã được thực hiện trong giao dịch.

   ```sql
   COMMIT;
   ```

2. **ROLLBACK:** Hủy bỏ toàn bộ giao dịch và quay trở lại trạng thái trước khi giao dịch bắt đầu.

   ```sql
   ROLLBACK;
   ```

3. **SAVEPOINT:** Thiết lập một điểm lưu trữ trong giao dịch để rollback từ điểm này.
   ```sql
   SAVEPOINT my_savepoint;
   ```

TCL là một phần quan trọng của SQL, cho phép quản lý giao dịch một cách linh hoạt và an toàn trong cơ sở dữ liệu.

---

## DCL – Data Control Language

Ngôn ngữ kiểm soát dữ liệu (DCL - Data Control Language) trong SQL là tập hợp các lệnh được sử dụng để kiểm soát quyền truy cập và an ninh của dữ liệu trong cơ sở dữ liệu. DCL bao gồm các lệnh chính như GRANT và REVOKE.

### Khái Niệm:

- **GRANT:** Lệnh này được sử dụng để cấp quyền cho người dùng hoặc vai trò cụ thể để thực hiện các hoạt động như SELECT, INSERT, UPDATE, DELETE trên các đối tượng trong cơ sở dữ liệu.

  ```sql
  GRANT SELECT ON Employees TO user1;
  ```

- **REVOKE:** Lệnh này được sử dụng để thu hồi hoặc gỡ bỏ quyền truy cập đã được cấp phép từ một người dùng hoặc vai trò cụ thể.
  ```sql
  REVOKE INSERT ON Employees FROM user2;
  ```

### Ngữ Cảnh:

- **GRANT:** Sử dụng khi muốn cấp quyền truy cập cho người dùng hoặc vai trò cụ thể.
- **REVOKE:** Sử dụng khi muốn thu hồi quyền truy cập đã được cấp phép từ người dùng hoặc vai trò cụ thể.

### Cách Sử Dụng:

- **GRANT:** Để cấp quyền truy cập nhất định cho người dùng hoặc vai trò.
- **REVOKE:** Để thu hồi quyền truy cập đã được cấp phép từ người dùng hoặc vai trò.

Ví dụ:

1. **GRANT:** Cấp quyền SELECT cho người dùng user1 trên bảng Employees.

   ```sql
   GRANT SELECT ON Employees TO user1;
   ```

2. **REVOKE:** Thu hồi quyền INSERT từ người dùng user2 trên bảng Employees.
   ```sql
   REVOKE INSERT ON Employees FROM user2;
   ```

DCL quản lý quyền truy cập vào dữ liệu, cho phép quản trị viên cơ sở dữ liệu kiểm soát và giám sát quyền truy cập của người dùng và vai trò trong hệ thống cơ sở dữ liệu.

---
