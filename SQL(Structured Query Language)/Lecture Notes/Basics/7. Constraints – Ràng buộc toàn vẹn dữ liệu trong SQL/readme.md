# Các loại ràng buộc phổ biến

## Ràng buộc Not Null

Ràng buộc Not Null trong SQL được sử dụng để đảm bảo rằng một cột trong bảng không chứa giá trị null, tức là giá trị trống hoặc không có giá trị. Điều này có nghĩa là khi bạn thêm dữ liệu mới hoặc cập nhật dữ liệu trong cột đó, bạn không thể để trống giá trị của cột này.

### Khái niệm:

Ràng buộc Not Null là một phần của việc xác định cấu trúc của bảng trong SQL. Khi tạo bảng hoặc sửa đổi cấu trúc của bảng, bạn có thể áp dụng ràng buộc Not Null cho một hoặc nhiều cột để đảm bảo tính nhất quán và độ chính xác của dữ liệu.

### Ngữ cảnh và cách sử dụng:

Khi thiết kế cơ sở dữ liệu, việc sử dụng ràng buộc Not Null rất hữu ích để đảm bảo tính toàn vẹn dữ liệu. Điều này phù hợp khi bạn muốn đảm bảo rằng một trường quan trọng không bao giờ để trống.

Để áp dụng ràng buộc Not Null trong SQL, bạn có thể sử dụng các lệnh như sau:

#### Khi tạo bảng:

```sql
CREATE TABLE TenBang (
    TenCot1 INT NOT NULL,
    TenCot2 VARCHAR(50) NOT NULL,
    ...
);
```

Trong ví dụ này, `TenCot1` và `TenCot2` đều có ràng buộc Not Null, nghĩa là chúng không thể chứa giá trị null.

#### Khi thêm ràng buộc vào cột trong bảng đã tồn tại:

```sql
ALTER TABLE TenBang
MODIFY COLUMN TenCot3 VARCHAR(100) NOT NULL;
```

Đây là ví dụ với cột `TenCot3`, khi bạn muốn thêm ràng buộc Not Null vào cột này sau khi bảng đã được tạo.

### Ví dụ:

Ví dụ, nếu bạn có một bảng 'Users' chứa thông tin người dùng, bạn có thể muốn đảm bảo rằng cột 'email' không bao giờ để trống:

```sql
CREATE TABLE Users (
    UserID INT PRIMARY KEY,
    Username VARCHAR(50) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    Password VARCHAR(50) NOT NULL
);
```

Trong đó, `Username`, `Email`, và `Password` đều có ràng buộc Not Null để đảm bảo rằng mỗi người dùng được thêm vào bảng đều có thông tin cần thiết.

Ràng buộc Not Null là một phần quan trọng của việc quản lý dữ liệu trong cơ sở dữ liệu SQL, giúp đảm bảo tính nhất quán và độ chính xác của thông tin lưu trữ.

---

## Ràng buộc UNIQUE

Ràng buộc UNIQUE trong SQL được sử dụng để đảm bảo rằng một cột hoặc một nhóm các cột trong bảng không chứa bất kỳ giá trị trùng lặp nào. Nó đảm bảo rằng các giá trị trong cột hoặc nhóm cột được xác định là duy nhất trong toàn bộ bảng.

### Khái niệm:

Ràng buộc UNIQUE là một cách để đảm bảo tính duy nhất của dữ liệu trong cột hoặc nhóm cột. Nó ngăn chặn việc lưu trữ các giá trị trùng lặp, giúp bảo vệ tính toàn vẹn của dữ liệu.

### Ngữ cảnh và cách sử dụng:

Khi bạn muốn đảm bảo rằng một cột hoặc một nhóm các cột không chứa bất kỳ giá trị trùng lặp nào trong bảng, bạn có thể sử dụng ràng buộc UNIQUE. Điều này thường được áp dụng cho các trường dữ liệu mà bạn muốn đảm bảo tính duy nhất, chẳng hạn như số điện thoại, email, mã số sinh viên, mã nhân viên, và nhiều trường hợp khác.

### Ví dụ:

Đây là cách áp dụng ràng buộc UNIQUE trong SQL:

#### Khi tạo bảng:

```sql
CREATE TABLE SinhVien (
    MaSV INT PRIMARY KEY,
    HoTen NVARCHAR(100) NOT NULL,
    Email VARCHAR(50) UNIQUE,
    SoDienThoai VARCHAR(15) UNIQUE
);
```

Trong ví dụ này, cột `Email` và `SoDienThoai` có ràng buộc UNIQUE, điều này có nghĩa là mỗi giá trị trong các cột này phải là duy nhất trong toàn bộ bảng. Bạn không thể chèn hai hàng có cùng giá trị email hoặc số điện thoại.

#### Khi thêm ràng buộc vào cột trong bảng đã tồn tại:

```sql
ALTER TABLE SinhVien
ADD CONSTRAINT UC_Email UNIQUE (Email);
```

Đây là cách thêm ràng buộc UNIQUE vào cột `Email` trong bảng `SinhVien` sau khi bảng đã được tạo.

### Giải thích:

Ràng buộc UNIQUE là một công cụ mạnh mẽ để đảm bảo tính duy nhất của dữ liệu trong cột hoặc nhóm cột, giúp tránh được việc nhập nhầm dữ liệu và đảm bảo rằng các thông tin như các địa chỉ email, số điện thoại, mã số... không bao giờ bị trùng lặp trong bảng dữ liệu.

---

## Ràng buộc PRIMARY KEY

Ràng buộc PRIMARY KEY trong SQL là một khái niệm quan trọng được sử dụng để định danh duy nhất mỗi hàng trong bảng dữ liệu. Nó không cho phép giá trị của cột chứa ràng buộc PRIMARY KEY bị trùng lặp hoặc là giá trị null.

### Khái niệm:

Ràng buộc PRIMARY KEY là một cách để đảm bảo rằng mỗi hàng trong bảng có một định danh duy nhất. Nó thường được áp dụng cho một cột hoặc một nhóm các cột trong bảng và có thể được sử dụng để liên kết các bảng với nhau thông qua các quan hệ khóa ngoại.

### Ngữ cảnh và cách sử dụng:

Khi thiết kế cơ sở dữ liệu, ràng buộc PRIMARY KEY thường được áp dụng cho trường dữ liệu mà bạn muốn sử dụng làm định danh duy nhất cho mỗi hàng trong bảng. Thường thì, các cột như mã số sinh viên, mã nhân viên, mã sản phẩm hoặc các trường dữ liệu mà bạn muốn không bao giờ trùng lặp được chọn làm PRIMARY KEY.

### Ví dụ:

Đây là cách sử dụng ràng buộc PRIMARY KEY trong SQL:

#### Khi tạo bảng:

```sql
CREATE TABLE SinhVien (
    MaSV INT PRIMARY KEY,
    HoTen NVARCHAR(100) NOT NULL,
    NgaySinh DATE,
    GioiTinh NVARCHAR(10)
);
```

Trong đó, cột `MaSV` được đặt làm PRIMARY KEY. Điều này đảm bảo rằng mỗi giá trị trong cột `MaSV` là duy nhất và không thể trùng lặp trong bảng `SinhVien`.

#### Khi sử dụng nhiều cột làm PRIMARY KEY:

```sql
CREATE TABLE DonHang (
    MaDH INT,
    MaKH INT,
    NgayDat DATE,
    PRIMARY KEY (MaDH, MaKH)
);
```

Trong trường hợp này, cả hai cột `MaDH` và `MaKH` đồng thời được sử dụng làm PRIMARY KEY. Điều này có nghĩa là sự kết hợp của giá trị từ cả hai cột phải là duy nhất để xác định mỗi hàng trong bảng `DonHang`.

Ràng buộc PRIMARY KEY là một phần quan trọng của việc thiết kế cơ sở dữ liệu vì nó đảm bảo tính duy nhất của mỗi hàng trong bảng, tạo ra một cách thức hiệu quả để tham chiếu đến từng hàng trong cơ sở dữ liệu.

---

## Ràng buộc FOREIGN KEY

Ràng buộc FOREIGN KEY trong SQL được sử dụng để xác định mối quan hệ giữa hai bảng dữ liệu trong cơ sở dữ liệu. Nó thiết lập một liên kết giữa cột hoặc các cột trong bảng thứ nhất (bảng cha) với cột hoặc các cột trong bảng thứ hai (bảng con). Ràng buộc FOREIGN KEY đảm bảo rằng các giá trị trong cột của bảng con phải tương ứng với các giá trị trong cột của bảng cha.

### Khái niệm:

Ràng buộc FOREIGN KEY giúp xác định một quan hệ giữa hai bảng dữ liệu trong cơ sở dữ liệu. Nó cho phép bạn xác định một cột hoặc một nhóm các cột trong bảng con, được liên kết với cột hoặc cột trong bảng cha.

### Ngữ cảnh và cách sử dụng:

Khi có mối quan hệ giữa các bảng trong cơ sở dữ liệu (ví dụ: một bảng chứa thông tin khách hàng và một bảng chứa các đơn đặt hàng của khách hàng), ràng buộc FOREIGN KEY giúp đảm bảo tính nhất quán của dữ liệu giữa các bảng. Nó cũng giúp thực hiện các hoạt động như cập nhật và xóa dữ liệu một cách an toàn và logic.

### Ví dụ:

Đây là cách sử dụng ràng buộc FOREIGN KEY trong SQL:

#### Khi tạo bảng:

```sql
CREATE TABLE KhachHang (
    MaKH INT PRIMARY KEY,
    TenNV NVARCHAR(100),
    Email NVARCHAR(100)
);

CREATE TABLE DonHang (
    MaDH INT PRIMARY KEY,
    MaKH INT,
    NgayDat DATE,
    FOREIGN KEY (MaKH) REFERENCES KhachHang(MaKH)
);
```

Trong ví dụ này, cột `MaKH` trong bảng `DonHang` được định nghĩa là FOREIGN KEY tham chiếu đến cột `MaKH` trong bảng `KhachHang`. Điều này ngụ ý rằng mỗi giá trị trong cột `MaKH` của bảng `DonHang` phải tồn tại trong cột `MaKH` của bảng `KhachHang`. Nếu bạn cố gắng thêm một đơn hàng với `MaKH` không tồn tại trong bảng `KhachHang`, hệ thống sẽ không cho phép và sẽ gây ra lỗi về ràng buộc FOREIGN KEY.

### Giải thích:

Ràng buộc FOREIGN KEY là một công cụ mạnh mẽ để xác định mối quan hệ giữa các bảng trong cơ sở dữ liệu. Nó đảm bảo tính nhất quán của dữ liệu và giúp bảo vệ tính toàn vẹn khi thực hiện các thao tác như cập nhật, xóa và thêm mới dữ liệu. Đồng thời, nó cũng cung cấp khả năng tạo quan hệ giữa các bảng, giúp tối ưu hóa và cải thiện hiệu suất trong việc truy vấn cơ sở dữ liệu.

---

## Ràng buộc CHECK

Ràng buộc CHECK trong SQL được sử dụng để xác định điều kiện cho giá trị được chèn vào một cột trong một bảng dữ liệu. Nó kiểm tra điều kiện được xác định và chỉ cho phép các giá trị thỏa mãn điều kiện đó được thêm vào cột.

### Khái niệm:

Ràng buộc CHECK cho phép bạn áp dụng một điều kiện đặc biệt cho một cột trong bảng dữ liệu. Khi bạn xác định ràng buộc CHECK, chỉ những giá trị thỏa mãn điều kiện đó mới được phép thêm vào cột.

### Ngữ cảnh và cách sử dụng:

Khi bạn muốn đảm bảo rằng các giá trị trong một cột phải tuân theo một điều kiện cụ thể, bạn có thể sử dụng ràng buộc CHECK. Ví dụ, bạn muốn một cột chứa chỉ những giá trị lớn hơn 0 hoặc chỉ chứa giá trị thuộc một phạm vi nhất định.

### Ví dụ:

Dưới đây là cách sử dụng ràng buộc CHECK trong SQL:

#### Khi tạo bảng:

```sql
CREATE TABLE MonHoc (
    MaMH INT PRIMARY KEY,
    TenMH NVARCHAR(100) NOT NULL,
    SoTinChi INT CHECK (SoTinChi > 0),
    DiemThapNhat FLOAT CHECK (DiemThapNhat >= 0 AND DiemThapNhat <= 10)
);
```

Trong ví dụ này, cột `SoTinChi` có ràng buộc CHECK để đảm bảo rằng giá trị nhập vào phải lớn hơn 0. Tương tự, cột `DiemThapNhat` có ràng buộc CHECK để kiểm tra rằng giá trị phải nằm trong khoảng từ 0 đến 10.

### Giải thích:

Ràng buộc CHECK là một cách mạnh mẽ để đảm bảo rằng dữ liệu được chèn vào cột phải tuân theo một điều kiện xác định. Nó hữu ích khi bạn cần kiểm tra tính hợp lệ của dữ liệu trước khi cho phép chèn vào cơ sở dữ liệu. Ràng buộc CHECK giúp bảo vệ tính toàn vẹn của dữ liệu và ngăn chặn việc thêm các giá trị không hợp lệ vào cột.

---

## Ràng buộc DEFAULT

Ràng buộc DEFAULT trong SQL được sử dụng để chỉ định giá trị mặc định cho một cột trong bảng dữ liệu. Nó đảm bảo rằng nếu không có giá trị nào được cung cấp cho cột đó trong quá trình thêm dữ liệu mới, giá trị mặc định sẽ được sử dụng.

### Khái niệm:

Ràng buộc DEFAULT được áp dụng cho một cột để xác định giá trị mặc định sẽ được sử dụng khi một hàng mới được thêm vào bảng và không có giá trị nào được cung cấp cho cột đó.

### Ngữ cảnh và cách sử dụng:

Khi bạn muốn cột trong bảng có một giá trị mặc định nếu không có giá trị nào được cung cấp trong quá trình thêm dữ liệu, ràng buộc DEFAULT rất hữu ích. Điều này giúp tránh lỗi khi thêm dữ liệu và đồng thời cung cấp một giá trị mặc định logic cho cột.

### Ví dụ:

Dưới đây là cách sử dụng ràng buộc DEFAULT trong SQL:

#### Khi tạo bảng:

```sql
CREATE TABLE SinhVien (
    MaSV INT PRIMARY KEY,
    Ten NVARCHAR(100) NOT NULL,
    NgaySinh DATE,
    GioiTinh NVARCHAR(10) DEFAULT 'Không xác định'
);
```

Trong ví dụ này, cột `GioiTinh` có ràng buộc DEFAULT để đặt giá trị mặc định là `'Không xác định'`. Nếu không có giá trị nào được cung cấp khi thêm một sinh viên mới vào bảng `SinhVien`, cột `GioiTinh` sẽ tự động có giá trị là `'Không xác định'`.

### Giải thích:

Ràng buộc DEFAULT là một cách thuận tiện để xác định giá trị mặc định cho cột trong bảng. Nó giúp tránh lỗi và cung cấp một giá trị logic khi không có giá trị nào được cung cấp cho cột trong quá trình thêm dữ liệu mới. Điều này làm giảm sự phức tạp trong việc quản lý dữ liệu và đảm bảo tính nhất quán của cấu trúc bảng.

---

# Xóa bỏ ràng buộc (Drop Constraint)

Ràng buộc (constraints) trong SQL được sử dụng để bảo vệ tính toàn vẹn dữ liệu và định nghĩa quy tắc cho các cột hoặc bảng. Khi bạn muốn loại bỏ hoặc xóa ràng buộc đã được tạo, bạn sử dụng lệnh `ALTER TABLE` cùng với `DROP CONSTRAINT` để loại bỏ ràng buộc khỏi cột hoặc bảng.

### Khái niệm:

Xóa ràng buộc (Drop Constraint) là hành động để loại bỏ một ràng buộc đã được đặt trước đó trên cột hoặc bảng trong cơ sở dữ liệu. Điều này cho phép bạn thay đổi cấu trúc của bảng hoặc cột bằng cách loại bỏ ràng buộc.

### Ngữ cảnh và cách sử dụng:

Khi bạn cần thay đổi hoặc xóa ràng buộc đã được áp dụng trên cột hoặc bảng, ví dụ như khi bạn muốn thêm dữ liệu mới không tuân theo ràng buộc đã định nghĩa, bạn sẽ sử dụng `DROP CONSTRAINT`. Điều này cũng hữu ích khi bạn muốn thay đổi cấu trúc của cột hoặc bảng.

### Ví dụ:

Dưới đây là cách sử dụng `DROP CONSTRAINT` trong SQL:

#### Khi xóa ràng buộc từ cột:

```sql
ALTER TABLE TenBang
DROP CONSTRAINT TenRangBuoc;
```

Ở đây, `TenBang` là tên bảng và `TenRangBuoc` là tên ràng buộc bạn muốn xóa. Điều này sẽ loại bỏ ràng buộc đã được đặt trên cột trong bảng.

#### Khi xóa ràng buộc từ toàn bộ bảng:

```sql
ALTER TABLE TenBang
DROP CONSTRAINT TenRangBuoc;
```

Trong trường hợp này, `TenBang` là tên bảng và `TenRangBuoc` là tên ràng buộc bạn muốn xóa từ toàn bộ bảng.

### Giải thích:

Việc xóa ràng buộc là một phần quan trọng trong việc quản lý cấu trúc cơ sở dữ liệu. Nó cho phép bạn điều chỉnh hoặc thay đổi ràng buộc đã được áp dụng trước đó theo nhu cầu của bạn. Tuy nhiên, cần phải cẩn trọng khi xóa ràng buộc để đảm bảo tính toàn vẹn và logic của dữ liệu trong cơ sở dữ liệu.

---
