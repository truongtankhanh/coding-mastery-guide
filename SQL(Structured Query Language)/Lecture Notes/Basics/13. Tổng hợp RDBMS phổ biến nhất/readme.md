## Database và Database Management System là gì?

Một cơ sở dữ liệu (Database) là một tập hợp có tổ chức của dữ liệu được lưu trữ và tổ chức để có thể dễ dàng truy cập, cập nhật và quản lý. Trong khi đó, Hệ thống quản lý cơ sở dữ liệu (Database Management System - DBMS) là phần mềm được sử dụng để tạo, quản lý và tương tác với cơ sở dữ liệu.

### Khái niệm:

- **Cơ sở dữ liệu (Database):** Là một tập hợp có tổ chức của dữ liệu liên quan được lưu trữ dưới dạng các tệp tin hoặc bảng để sử dụng và truy cập dễ dàng.
- **Hệ thống quản lý cơ sở dữ liệu (DBMS):** Là phần mềm cho phép tạo, quản lý và tương tác với cơ sở dữ liệu.

### Ngữ cảnh và cách sử dụng:

- **Lưu trữ và tổ chức dữ liệu:** Cơ sở dữ liệu lưu trữ dữ liệu của một tổ chức hoặc ứng dụng một cách có tổ chức, giúp việc truy xuất và quản lý dữ liệu trở nên dễ dàng.
- **Phần mềm quản lý:** DBMS cung cấp các công cụ và chức năng để quản lý cơ sở dữ liệu, bao gồm việc tạo, cập nhật, xóa và truy xuất dữ liệu.

### Ví dụ:

Dưới đây là một ví dụ về cách sử dụng cơ sở dữ liệu và DBMS:

#### Tạo bảng trong cơ sở dữ liệu MySQL:

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT
);
```

#### Sử dụng truy vấn để truy xuất dữ liệu từ bảng Employees:

```sql
SELECT * FROM Employees WHERE DepartmentID = 1;
```

### Giải thích:

- Trong ví dụ trên, câu lệnh SQL được sử dụng để tạo bảng "Employees" trong cơ sở dữ liệu MySQL.
- Sau đó, một truy vấn SQL được sử dụng để truy xuất tất cả các nhân viên thuộc phòng ban có ID là 1 từ bảng "Employees".

Cơ sở dữ liệu và hệ thống quản lý cơ sở dữ liệu (DBMS) là những phần quan trọng trong việc lưu trữ, quản lý và truy xuất dữ liệu trong các ứng dụng và hệ thống thông tin. DBMS cung cấp các công cụ cần thiết để tương tác với cơ sở dữ liệu một cách hiệu quả và an toàn.

---

## Tìm hiểu về MySQL

MySQL là một hệ thống quản lý cơ sở dữ liệu quan hệ mã nguồn mở (RDBMS) phổ biến được sử dụng rộng rãi trong các ứng dụng web và các hệ thống thông tin do tính ổn định, linh hoạt và khả năng mở rộng của nó.

### Khái niệm:

- **MySQL:** Là một hệ thống quản lý cơ sở dữ liệu mã nguồn mở, cung cấp một cơ sở dữ liệu quan hệ để lưu trữ và quản lý dữ liệu.

### Ngữ cảnh và cách sử dụng:

- **Lưu trữ và quản lý dữ liệu:** MySQL cho phép lưu trữ dữ liệu vào các bảng có cấu trúc quan hệ và cung cấp ngôn ngữ truy vấn mạnh mẽ để tương tác với dữ liệu.
- **Hỗ trợ nhiều loại ứng dụng:** Nó thường được sử dụng cho các ứng dụng web, từ các trang web nhỏ đến các hệ thống lớn.

### Ví dụ:

Dưới đây là ví dụ về việc sử dụng MySQL để tạo và truy vấn cơ sở dữ liệu:

#### Kết nối với MySQL:

```bash
mysql -u username -p
```

#### Tạo cơ sở dữ liệu:

```sql
CREATE DATABASE company;
```

#### Tạo bảng trong cơ sở dữ liệu:

```sql
USE company;

CREATE TABLE Employees (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT
);
```

#### Thêm dữ liệu vào bảng:

```sql
INSERT INTO Employees (FirstName, LastName, DepartmentID) VALUES
('John', 'Doe', 1),
('Jane', 'Smith', 2),
('Alice', 'Johnson', 1);
```

#### Truy vấn dữ liệu từ bảng:

```sql
SELECT * FROM Employees WHERE DepartmentID = 1;
```

### Giải thích:

- Trong ví dụ trên, câu lệnh SQL được sử dụng để tạo cơ sở dữ liệu "company" và bảng "Employees" trong MySQL.
- Sau đó, dữ liệu được thêm vào bảng và một truy vấn SQL được sử dụng để truy xuất tất cả các nhân viên thuộc phòng ban có ID là 1 từ bảng "Employees".

MySQL cung cấp một môi trường mạnh mẽ để lưu trữ và quản lý dữ liệu cho các ứng dụng và hệ thống khác nhau. Nó được ưa chuộng bởi tính ổn định, hiệu suất cao và sự linh hoạt trong việc sử dụng.

---

## Tìm hiểu về MS SQL Server

Microsoft SQL Server là một hệ thống quản lý cơ sở dữ liệu quan hệ (RDBMS) phổ biến được phát triển bởi Microsoft. Nó cung cấp một môi trường mạnh mẽ để lưu trữ và quản lý dữ liệu cho các ứng dụng do tính ổn định, bảo mật và khả năng mở rộng của nó.

### Khái niệm:

- **MS SQL Server:** Là một hệ thống quản lý cơ sở dữ liệu quan hệ (RDBMS) được phát triển bởi Microsoft, cung cấp một cơ sở dữ liệu cho các ứng dụng và hệ thống thông tin.

### Ngữ cảnh và cách sử dụng:

- **Lưu trữ và quản lý dữ liệu:** MS SQL Server cho phép lưu trữ dữ liệu vào các bảng có cấu trúc quan hệ và cung cấp ngôn ngữ truy vấn Transact-SQL (T-SQL) mạnh mẽ để tương tác với dữ liệu.
- **Hỗ trợ nhiều loại ứng dụng:** Nó thường được sử dụng cho các ứng dụng doanh nghiệp, từ ứng dụng web đến các hệ thống lớn.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng Microsoft SQL Server để tạo và truy vấn cơ sở dữ liệu:

#### Kết nối với SQL Server Management Studio (SSMS):

Kết nối với SQL Server để tương tác với cơ sở dữ liệu thông qua SSMS.

#### Tạo cơ sở dữ liệu:

```sql
CREATE DATABASE company;
```

#### Tạo bảng trong cơ sở dữ liệu:

```sql
USE company;

CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    DepartmentID INT
);
```

#### Thêm dữ liệu vào bảng:

```sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID) VALUES
(1, N'John', N'Doe', 1),
(2, N'Jane', N'Smith', 2),
(3, N'Alice', N'Johnson', 1);
```

#### Truy vấn dữ liệu từ bảng:

```sql
SELECT * FROM Employees WHERE DepartmentID = 1;
```

### Giải thích:

- Trong ví dụ trên, câu lệnh SQL được sử dụng để tạo cơ sở dữ liệu "company" và bảng "Employees" trong MS SQL Server.
- Sau đó, dữ liệu được thêm vào bảng và một truy vấn SQL được sử dụng để truy xuất tất cả các nhân viên thuộc phòng ban có ID là 1 từ bảng "Employees".

Microsoft SQL Server cung cấp một môi trường mạnh mẽ để lưu trữ và quản lý dữ liệu cho các ứng dụng và hệ thống khác nhau. Nó được ưa chuộng bởi tính ổn định, hiệu suất cao và sự linh hoạt trong việc sử dụng.

---

## Tìm hiểu về Oracle

Oracle là một hệ thống quản lý cơ sở dữ liệu quan hệ (RDBMS) được phát triển bởi công ty Oracle Corporation. Nó cung cấp một môi trường mạnh mẽ để lưu trữ, quản lý và tương tác với cơ sở dữ liệu cho các ứng dụng do tính ổn định, bảo mật cao và khả năng mở rộng của nó.

### Khái niệm:

- **Oracle:** Là một hệ thống quản lý cơ sở dữ liệu quan hệ (RDBMS) phổ biến được phát triển bởi Oracle Corporation, cung cấp cơ sở dữ liệu cho các ứng dụng và hệ thống thông tin.

### Ngữ cảnh và cách sử dụng:

- **Lưu trữ và quản lý dữ liệu:** Oracle cung cấp một cơ sở dữ liệu có cấu trúc quan hệ và sử dụng ngôn ngữ truy vấn SQL mạnh mẽ để thao tác với dữ liệu.
- **Được sử dụng trong nhiều lĩnh vực:** Nó thường được sử dụng trong các ứng dụng doanh nghiệp, từ các hệ thống quản lý tổ chức đến ứng dụng web lớn.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng Oracle để tạo và truy vấn cơ sở dữ liệu:

#### Kết nối với Oracle Database:

Kết nối với Oracle Database thông qua SQL\*Plus hoặc SQL Developer.

#### Tạo cơ sở dữ liệu:

```sql
CREATE DATABASE company;
```

#### Tạo bảng trong cơ sở dữ liệu:

```sql
CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    FirstName VARCHAR2(50),
    LastName VARCHAR2(50),
    DepartmentID NUMBER
);
```

#### Thêm dữ liệu vào bảng:

```sql
INSERT INTO Employees (EmployeeID, FirstName, LastName, DepartmentID) VALUES
(1, 'John', 'Doe', 1),
(2, 'Jane', 'Smith', 2),
(3, 'Alice', 'Johnson', 1);
```

#### Truy vấn dữ liệu từ bảng:

```sql
SELECT * FROM Employees WHERE DepartmentID = 1;
```

### Giải thích:

- Trong ví dụ trên, câu lệnh SQL được sử dụng để tạo cơ sở dữ liệu "company" và bảng "Employees" trong Oracle Database.
- Dữ liệu được thêm vào bảng và một truy vấn SQL được sử dụng để truy xuất tất cả các nhân viên thuộc phòng ban có ID là 1 từ bảng "Employees".

Oracle cung cấp một môi trường mạnh mẽ để lưu trữ và quản lý dữ liệu cho các ứng dụng và hệ thống khác nhau. Nó được ưa chuộng bởi tính ổn định, hiệu suất cao và sự linh hoạt trong việc sử dụng.

---

## Tìm hiểu về MS Access

Microsoft Access là một hệ thống quản lý cơ sở dữ liệu (DBMS) cấp desktop được phát triển bởi Microsoft. Nó thường được sử dụng cho các ứng dụng cỡ nhỏ hoặc dùng cho mục đích cá nhân do tính đơn giản và dễ sử dụng của nó.

### Khái niệm:

- **MS Access:** Là một DBMS cấp desktop của Microsoft, cung cấp một môi trường để lưu trữ và quản lý cơ sở dữ liệu.

### Ngữ cảnh và cách sử dụng:

- **Dành cho ứng dụng nhỏ:** Access thích hợp cho việc xây dựng ứng dụng hoặc cơ sở dữ liệu nhỏ, đặc biệt trong môi trường desktop hoặc cá nhân.
- **Giao diện dễ sử dụng:** Nó cung cấp một giao diện dễ sử dụng, cho phép người dùng không có kinh nghiệm về cơ sở dữ liệu tạo ra các ứng dụng và báo cáo một cách đơn giản.

### Ví dụ:

Dưới đây là một ví dụ về việc sử dụng MS Access để tạo và truy vấn cơ sở dữ liệu:

#### Tạo một cơ sở dữ liệu mới trong Access:

- Mở Microsoft Access, chọn "Blank database", sau đó nhập tên cho cơ sở dữ liệu mới.

#### Tạo một bảng:

- Nhấp vào tab "Table", sau đó chọn các trường và kiểu dữ liệu cho bảng.

#### Thêm dữ liệu vào bảng:

- Mở bảng, sau đó bắt đầu nhập dữ liệu trực tiếp vào các ô.

#### Truy vấn dữ liệu từ bảng:

- Sử dụng trình thiết kế truy vấn để tạo các truy vấn SQL hoặc sử dụng trình tạo truy vấn để lọc dữ liệu theo yêu cầu.

### Giải thích:

- MS Access được sử dụng chủ yếu cho các môi trường desktop hoặc cá nhân để xây dựng cơ sở dữ liệu đơn giản.
- Nó cung cấp một giao diện người dùng đơn giản và dễ sử dụng, thích hợp cho người dùng không có kiến thức chuyên sâu về cơ sở dữ liệu.

Access thường được sử dụng trong các môi trường văn phòng nhỏ, các ứng dụng cá nhân, hoặc trong các dự án đơn giản yêu cầu không gian lưu trữ và xử lý dữ liệu nhỏ. Tuy nhiên, khi yêu cầu về quy mô và hiệu suất tăng lên, các hệ thống cơ sở dữ liệu mạnh mẽ và phức tạp hơn như SQL Server hoặc Oracle thường được ưa chuộng hơn.

---
