## RDBMS là gì?

Hệ quản trị cơ sở dữ liệu quan hệ (RDBMS) là một loại hệ thống quản lý cơ sở dữ liệu được thiết kế để lưu trữ và quản lý dữ liệu trong các bảng có mối quan hệ với nhau dựa trên các khóa chính và các quan hệ giữa chúng.

### Khái niệm:

- **RDBMS (Relational Database Management System):** Là một hệ thống quản lý cơ sở dữ liệu dựa trên mô hình quan hệ, trong đó dữ liệu được tổ chức dưới dạng các bảng có mối quan hệ với nhau thông qua khóa chính và khóa ngoại.

### Ngữ cảnh và cách sử dụng:

- **Mô hình quan hệ:** RDBMS sử dụng mô hình quan hệ để tổ chức dữ liệu thành các bảng có cấu trúc, có các hàng và cột, và các bảng có thể liên kết với nhau thông qua các khóa.
- **Ngôn ngữ truy vấn:** RDBMS thường sử dụng ngôn ngữ truy vấn SQL để truy cập và quản lý dữ liệu.

### Ví dụ:

Ví dụ về RDBMS là MySQL, PostgreSQL, Microsoft SQL Server, Oracle Database. Dưới đây là một ví dụ về cách tạo bảng trong MySQL:

#### Tạo bảng trong MySQL:

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    FOREIGN KEY (DepartmentID) REFERENCES Departments(DepartmentID)
);
```

### Giải thích:

- Trong ví dụ trên, `CREATE TABLE` được sử dụng để tạo một bảng mới có tên `Employees`.
- Bảng này có các cột như `EmployeeID`, `FirstName`, `LastName`, và `DepartmentID`.
- `EmployeeID` được xác định là khóa chính của bảng với `PRIMARY KEY`.
- `DepartmentID` được thiết lập là một khóa ngoại để tham chiếu đến bảng `Departments`.

RDBMS cung cấp một cách tiếp cận cơ bản nhưng mạnh mẽ để lưu trữ và quản lý dữ liệu, cho phép các quan hệ giữa dữ liệu để được định nghĩa và duy trì một cách hiệu quả.

---

## Bảng là gì?

Trong SQL, một bảng là một cấu trúc dữ liệu cơ bản để lưu trữ thông tin trong một hệ quản trị cơ sở dữ liệu quan hệ (RDBMS). Bảng được tổ chức thành các hàng và cột, mỗi hàng chứa thông tin về một mục dữ liệu cụ thể và mỗi cột đại diện cho một thuộc tính hoặc một loại dữ liệu.

### Khái niệm:

- **Bảng:** Là một cấu trúc dữ liệu trong RDBMS, được tổ chức thành các hàng và cột, mỗi hàng thể hiện một bản ghi cụ thể và mỗi cột chứa thông tin về một thuộc tính cụ thể.

### Ngữ cảnh và cách sử dụng:

- **Lưu trữ dữ liệu:** Bảng được sử dụng để lưu trữ thông tin theo cách tổ chức, hỗ trợ việc truy xuất, cập nhật và xóa dữ liệu dễ dàng.
- **Quan hệ giữa bảng:** Trong mô hình quan hệ, các bảng có thể liên kết với nhau thông qua các khóa chính và khóa ngoại để tạo quan hệ giữa chúng.

### Ví dụ:

Dưới đây là ví dụ về cách tạo một bảng trong SQL (ví dụ sử dụng MySQL):

#### Tạo bảng "Students":

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    Grade VARCHAR(2)
);
```

### Giải thích:

- Trong ví dụ trên, `CREATE TABLE` được sử dụng để tạo một bảng mới có tên là `Students`.
- Bảng này có các cột như `StudentID`, `FirstName`, `LastName`, `Age`, `Grade`.
- `StudentID` được xác định là khóa chính của bảng với `PRIMARY KEY`.

Bảng là cấu trúc cơ bản nhưng quan trọng trong RDBMS, cho phép tổ chức dữ liệu một cách có tổ chức và linh hoạt, làm cho việc quản lý và truy xuất dữ liệu dễ dàng hơn.

---

## Trường là gì?

Trong ngữ cảnh của cơ sở dữ liệu và SQL, một trường (field) là một phần của bảng dữ liệu, đại diện cho một loại dữ liệu cụ thể (ví dụ: số nguyên, chuỗi ký tự, ngày tháng...) và định nghĩa các thuộc tính của mỗi bản ghi trong bảng.

### Khái niệm:

- **Trường (Field):** Là một cột trong bảng dữ liệu, mô tả một thuộc tính cụ thể của dữ liệu, định nghĩa kiểu dữ liệu và giới hạn các giá trị có thể chứa.

### Ngữ cảnh và cách sử dụng:

- **Đặc điểm của dữ liệu:** Mỗi trường đại diện cho một loại dữ liệu cụ thể (ví dụ: số nguyên, chuỗi ký tự) và định nghĩa đặc điểm của mỗi bản ghi trong bảng.
- **Cấu trúc bảng:** Trường cùng với các trường khác tạo nên cấu trúc của bảng, xác định loại dữ liệu và định nghĩa thuộc tính của dữ liệu.

### Ví dụ:

Dưới đây là một ví dụ về việc tạo bảng với các trường trong SQL (ví dụ sử dụng MySQL):

#### Tạo bảng "Students" với các trường:

```sql
CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    Age INT,
    Grade VARCHAR(2)
);
```

### Giải thích:

- Trong ví dụ trên, `CREATE TABLE` được sử dụng để tạo bảng mới có tên là `Students`.
- Các trường trong bảng bao gồm `StudentID`, `FirstName`, `LastName`, `Age`, `Grade`.
- Mỗi trường định nghĩa một thuộc tính cụ thể của dữ liệu, như `FirstName` và `LastName` chứa chuỗi ký tự, `Age` là số nguyên.

Trường (field) trong SQL là thành phần quan trọng trong việc xác định và định nghĩa các thuộc tính của dữ liệu trong bảng, giúp tổ chức và mô tả thông tin một cách cụ thể và rõ ràng.

---

## Bản ghi hay hàng là gì?

Trong cơ sở dữ liệu và SQL, một bản ghi (record) hoặc hàng (row) đề cập đến một bộ thông tin hoặc một dòng dữ liệu cụ thể trong một bảng. Mỗi bản ghi đại diện cho một bộ thông tin hoàn chỉnh với các giá trị tương ứng cho mỗi trường trong bảng.

### Khái niệm:

- **Bản ghi (Record) hoặc Hàng (Row):** Là một dòng dữ liệu trong bảng, bao gồm các giá trị của từng trường (field) trong bảng.

### Ngữ cảnh và cách sử dụng:

- **Dữ liệu cụ thể:** Mỗi bản ghi chứa thông tin đầy đủ và cụ thể về một mục trong cơ sở dữ liệu, với giá trị tương ứng trong từng trường.
- **Quản lý dữ liệu:** Bản ghi được sử dụng để tổ chức và lưu trữ dữ liệu theo cách có thể truy cập, cập nhật và xóa.

### Ví dụ:

Dưới đây là một ví dụ về bản ghi trong một bảng dữ liệu (ví dụ sử dụng SQL):

#### Bảng "Students" với các bản ghi:

```sql
SELECT * FROM Students;
```

```
+-----------+------------+-----------+-----+-------+
| StudentID | FirstName  | LastName  | Age | Grade |
+-----------+------------+-----------+-----+-------+
| 1         | John       | Doe       | 20  | A     |
| 2         | Jane       | Smith     | 22  | B     |
| 3         | Alice      | Johnson   | 21  | A     |
+-----------+------------+-----------+-----+-------+
```

### Giải thích:

- Trong ví dụ trên, `Students` là tên của bảng.
- Mỗi hàng trong bảng (`John Doe`, `Jane Smith`, `Alice Johnson`) là một bản ghi hoặc hàng, đại diện cho thông tin của một sinh viên với các giá trị tương ứng cho mỗi trường (StudentID, FirstName, LastName, Age, Grade).

Bản ghi là các dòng dữ liệu trong bảng, mỗi hàng biểu diễn thông tin hoàn chỉnh về một mục trong cơ sở dữ liệu và có thể được truy cập, cập nhật hoặc xóa theo yêu cầu.

---

## Cột là gì?

Trong cơ sở dữ liệu và SQL, một cột (column) là một thành phần của bảng dữ liệu, đại diện cho một loại dữ liệu cụ thể và chứa các giá trị tương ứng với mỗi bản ghi trong bảng.

### Khái niệm:

- **Cột (Column):** Là một thành phần của bảng dữ liệu, mô tả một thuộc tính cụ thể của dữ liệu và chứa các giá trị tương ứng của từng bản ghi trong bảng.

### Ngữ cảnh và cách sử dụng:

- **Đặc điểm của dữ liệu:** Mỗi cột trong bảng đại diện cho một loại dữ liệu cụ thể (ví dụ: số nguyên, chuỗi ký tự) và chứa các giá trị của từng bản ghi.
- **Tạo cấu trúc bảng:** Các cột cùng với các cột khác tạo nên cấu trúc của bảng, xác định loại dữ liệu và định nghĩa thuộc tính của dữ liệu.

### Ví dụ:

Dưới đây là một ví dụ về cách tạo bảng với các cột trong SQL (ví dụ sử dụng MySQL):

#### Tạo bảng "Employees" với các cột:

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT,
    Salary DECIMAL(10, 2)
);
```

### Giải thích:

- Trong ví dụ trên, `CREATE TABLE` được sử dụng để tạo bảng mới có tên là `Employees`.
- Các cột trong bảng bao gồm `EmployeeID`, `FirstName`, `LastName`, `DepartmentID`, `Salary`.
- Mỗi cột định nghĩa một thuộc tính cụ thể của dữ liệu, như `FirstName` và `LastName` chứa chuỗi ký tự, `Salary` là một số thập phân.

Cột trong SQL là thành phần quan trọng trong việc xác định và định nghĩa các thuộc tính của dữ liệu trong bảng, giúp tổ chức và mô tả thông tin một cách cụ thể và rõ ràng.

---

## Giá trị NULL là gì?

Giá trị NULL trong SQL đề cập đến một trường hợp mà giá trị dữ liệu không tồn tại hoặc chưa được xác định. NULL không phải là giá trị cụ thể; nó chỉ định rằng dữ liệu không có sẵn hoặc chưa biết.

### Khái niệm:

- **NULL:** Là một giá trị đặc biệt trong SQL, biểu thị cho dữ liệu không có sẵn, không được xác định, hoặc không tồn tại.

### Ngữ cảnh và cách sử dụng:

- **Chưa biết hoặc không tồn tại:** NULL thường được sử dụng khi giá trị dữ liệu không được nhập hoặc không biết tại thời điểm nhập liệu.
- **Xử lý dữ liệu:** NULL có thể ảnh hưởng đến các phép toán và hàm trong SQL, và cần được xử lý một cách đặc biệt trong các truy vấn.

### Ví dụ:

Dưới đây là ví dụ về việc sử dụng NULL trong một bảng dữ liệu:

#### Tạo bảng "Products" với giá trị NULL:

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50),
    Price DECIMAL(10, 2),
    Description VARCHAR(100)
);

INSERT INTO Products (ProductID, ProductName, Price, Description)
VALUES
    (1, 'Phone', 599.99, 'Smartphone with great features'),
    (2, 'Laptop', NULL, 'High-performance laptop'),
    (3, 'Tablet', 299.99, NULL);
```

### Giải thích:

- Trong ví dụ trên, bảng `Products` chứa thông tin về các sản phẩm.
- Trường `Price` cho sản phẩm 'Laptop' và `Description` cho sản phẩm 'Tablet' được thiết lập là NULL, chỉ ra rằng giá hoặc mô tả của sản phẩm chưa được xác định.

NULL trong SQL thường được sử dụng để biểu thị thông tin không tồn tại hoặc không được xác định, và cần phải được xử lý một cách đặc biệt trong các truy vấn hoặc phép toán để tránh các lỗi hoặc kết quả không mong muốn.

---

## Ràng buộc trong SQL

Ràng buộc trong SQL là cách để áp đặt quy tắc và điều kiện đối với dữ liệu trong cơ sở dữ liệu. Nó đảm bảo rằng các giá trị được thêm vào hoặc sửa đổi trong các bảng phải tuân theo những quy định nhất định để đảm bảo tính nhất quán và độ chính xác của dữ liệu.

### Khái niệm:

- **Ràng buộc (Constraint):** Là quy tắc được áp đặt trên các cột hoặc bảng trong cơ sở dữ liệu để kiểm tra và đảm bảo tính hợp lý, nhất quán và độ chính xác của dữ liệu.

### Ngữ cảnh và cách sử dụng:

- **Áp dụng quy tắc dữ liệu:** Ràng buộc được sử dụng để đảm bảo rằng dữ liệu được thêm vào hoặc sửa đổi trong các bảng tuân theo các quy tắc nhất định.
- **Loại ràng buộc:** Có nhiều loại ràng buộc như ràng buộc khóa chính (Primary Key), ràng buộc khóa ngoại (Foreign Key), ràng buộc NOT NULL, ràng buộc UNIQUE, ràng buộc CHECK...

### Ví dụ:

Dưới đây là một số ví dụ về cách sử dụng ràng buộc trong SQL:

#### Ràng buộc NOT NULL:

Ràng buộc này đảm bảo rằng giá trị trong cột không được phép NULL.

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    DepartmentID INT
);
```

#### Ràng buộc UNIQUE:

Ràng buộc này đảm bảo rằng giá trị trong cột là duy nhất, không được lặp lại.

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(50) UNIQUE,
    Price DECIMAL(10, 2)
);
```

#### Ràng buộc FOREIGN KEY:

Ràng buộc này xác định một quan hệ giữa hai bảng thông qua các cột và đảm bảo rằng các giá trị trong cột đó phải tồn tại trong cột khác.

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    ProductID INT,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);
```

Ràng buộc trong SQL đóng vai trò quan trọng trong việc đảm bảo tính nhất quán và độ chính xác của dữ liệu trong cơ sở dữ liệu, giúp ngăn chặn việc thêm dữ liệu không hợp lệ hoặc không mong muốn.

---

## Toàn vẹn dữ liệu trong SQL

Toàn vẹn dữ liệu (Data Integrity) trong SQL đề cập đến việc đảm bảo tính nhất quán, độ chính xác và hợp lý của dữ liệu trong cơ sở dữ liệu. Nó bao gồm các ràng buộc và quy tắc để đảm bảo rằng dữ liệu được lưu trữ và xử lý một cách chính xác và nhất quán.

### Khái niệm:

- **Toàn vẹn dữ liệu (Data Integrity):** Là tính chất của dữ liệu trong cơ sở dữ liệu, đảm bảo tính chính xác, nhất quán và đầy đủ của dữ liệu.

### Ngữ cảnh và cách sử dụng:

- **Ràng buộc dữ liệu:** Sử dụng các ràng buộc khóa chính, khóa ngoại, NOT NULL, UNIQUE, CHECK để áp đặt quy tắc và giới hạn dữ liệu có thể được thêm vào hoặc sửa đổi trong cơ sở dữ liệu.
- **Giữ tính nhất quán:** Đảm bảo dữ liệu luôn đáp ứng các quy định và ràng buộc đã được định nghĩa.

### Ví dụ:

Dưới đây là ví dụ về sử dụng ràng buộc và các phương thức khác để duy trì toàn vẹn dữ liệu trong SQL:

#### Tạo bảng "Customers" với ràng buộc và quy tắc:

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(100) UNIQUE,
    Age INT CHECK (Age >= 18),
    MembershipLevel VARCHAR(20) DEFAULT 'Basic',
    CONSTRAINT chk_valid_membership CHECK (MembershipLevel IN ('Basic', 'Premium', 'Gold'))
);
```

### Giải thích:

- Trong ví dụ trên, bảng `Customers` được tạo với các ràng buộc:
  - `NOT NULL` để đảm bảo `FirstName` và `LastName` không thể có giá trị NULL.
  - `UNIQUE` để đảm bảo mỗi `Email` là duy nhất.
  - `CHECK` để đảm bảo `Age` không nhỏ hơn 18.
  - `DEFAULT` để đặt giá trị mặc định cho `MembershipLevel` là 'Basic'.
  - `CHECK` để kiểm tra `MembershipLevel` chỉ chấp nhận các giá trị 'Basic', 'Premium', hoặc 'Gold'.

Toàn vẹn dữ liệu trong SQL đóng vai trò quan trọng trong việc đảm bảo rằng dữ liệu được lưu trữ và xử lý theo các quy tắc nhất định, ngăn chặn dữ liệu không hợp lệ hoặc không đáng tin cậy.

---

## Chuẩn hóa cơ sở dữ liệu

Chuẩn hóa cơ sở dữ liệu là quá trình thiết kế cơ sở dữ liệu để loại bỏ sự lặp lại dữ liệu và đảm bảo tính nhất quán, hiệu suất và dễ bảo trì của hệ thống. Nó bao gồm việc chia nhỏ cơ sở dữ liệu thành các bảng có quan hệ, tạo các ràng buộc và quy tắc để duy trì tính toàn vẹn dữ liệu.

### Khái niệm:

- **Chuẩn hóa cơ sở dữ liệu:** Là quá trình thiết kế cơ sở dữ liệu để loại bỏ sự lặp lại, giảm thiểu dữ liệu trùng lặp và đảm bảo tính nhất quán, hiệu suất và dễ bảo trì của hệ thống.

### Ngữ cảnh và cách sử dụng:

- **Bảo trì tính nhất quán:** Chuẩn hóa giúp đảm bảo rằng thông tin không bị phân mảnh và có thể được dễ dàng cập nhật và thêm mới.
- **Quy tắc chuẩn hóa:** Sử dụng các quy tắc chuẩn hóa như chuẩn hóa cấp độ (NF1, NF2, NF3), loại bỏ sự lặp lại dữ liệu, chia nhỏ cơ sở dữ liệu thành các bảng có quan hệ.

### Ví dụ:

Dưới đây là ví dụ về cách chuẩn hóa cơ sở dữ liệu:

#### Thiết kế cơ sở dữ liệu không chuẩn hóa:

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentName VARCHAR(50),
    DepartmentLocation VARCHAR(50)
);
```

#### Chuẩn hóa cơ sở dữ liệu:

```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50),
    DepartmentID INT
);

CREATE TABLE Departments (
    DepartmentID INT PRIMARY KEY,
    DepartmentName VARCHAR(50),
    DepartmentLocation VARCHAR(50)
);
```

### Giải thích:

- Trong ví dụ không chuẩn hóa, thông tin về bộ phận (tên và địa điểm) được lặp lại cho mỗi nhân viên, dẫn đến lãng phí và sự lặp lại không cần thiết.
- Trong ví dụ đã chuẩn hóa, thông tin về bộ phận được chia thành một bảng riêng biệt (Departments), mỗi bộ phận được đại diện bởi một ID duy nhất và các thông tin khác về bộ phận chỉ cần được lưu trữ một lần duy nhất.

Chuẩn hóa cơ sở dữ liệu giúp cải thiện hiệu suất, giảm thiểu sự lặp lại dữ liệu và tạo ra cấu trúc cơ sở dữ liệu dễ quản lý và bảo trì.

---
