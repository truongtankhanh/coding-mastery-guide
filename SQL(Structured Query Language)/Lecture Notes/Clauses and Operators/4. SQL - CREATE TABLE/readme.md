Tạo bảng trong SQL là quá trình định nghĩa cấu trúc của một bảng dữ liệu trong cơ sở dữ liệu. Đây là bước quan trọng để lưu trữ và quản lý dữ liệu theo cách có tổ chức trong hệ thống quản lý cơ sở dữ liệu.

### Khái Niệm:

#### Tạo Bảng:

- Tạo bảng trong SQL bằng câu lệnh `CREATE TABLE`.
- Định nghĩa cấu trúc của bảng bao gồm tên bảng, các cột và kiểu dữ liệu của mỗi cột.

### Ngữ Cảnh:

Khi bạn cần lưu trữ thông tin về các đối tượng cụ thể trong cơ sở dữ liệu, việc tạo bảng giúp bạn xác định cấu trúc dữ liệu một cách chi tiết. Mỗi cột trong bảng đại diện cho một loại thông tin cụ thể và mỗi hàng trong bảng là một bản ghi chứa thông tin chi tiết về đối tượng.

### Cách Sử Dụng và Ví Dụ:

Cú pháp của lệnh `CREATE TABLE` như sau:

```sql
CREATE TABLE ten_bang (
    ten_cot1 kieu_du_lieu1,
    ten_cot2 kieu_du_lieu2,
    ...
);
```

Ví dụ:

Nếu bạn muốn tạo một bảng có tên là `employees` với các cột như `id`, `name`, và `salary`, bạn có thể sử dụng câu lệnh sau:

```sql
CREATE TABLE employees (
    id INT,
    name VARCHAR(50),
    salary DECIMAL(10, 2)
);
```

### Giải Thích Chi Tiết:

- `CREATE TABLE`: Là câu lệnh để tạo bảng mới.
- `ten_bang`: Là tên của bảng mà bạn muốn tạo.
- `ten_cot1, ten_cot2, ...`: Là tên của các cột trong bảng.
- `kieu_du_lieu1, kieu_du_lieu2, ...`: Là kiểu dữ liệu của các cột tương ứng.

Trong ví dụ trên:

- Cột `id` có kiểu dữ liệu là `INT` (số nguyên).
- Cột `name` có kiểu dữ liệu là `VARCHAR(50)` (chuỗi với độ dài tối đa 50 ký tự).
- Cột `salary` có kiểu dữ liệu là `DECIMAL(10, 2)` (số thập phân với tổng cộng 10 chữ số, trong đó 2 chữ số sau dấu thập phân).

Việc tạo bảng xác định cấu trúc dữ liệu và các ràng buộc cho các cột trong bảng, làm cho việc lưu trữ và truy xuất dữ liệu dễ dàng và hiệu quả trong cơ sở dữ liệu.
