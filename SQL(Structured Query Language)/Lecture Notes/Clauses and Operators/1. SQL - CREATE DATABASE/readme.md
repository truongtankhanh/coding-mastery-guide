Tạo một cơ sở dữ liệu trong SQL bắt đầu bằng câu lệnh `CREATE DATABASE`. Đây là một câu lệnh cơ bản để tạo một không gian lưu trữ dữ liệu mới trong hệ thống quản lý cơ sở dữ liệu (DBMS). SQL được sử dụng để tương tác với cơ sở dữ liệu và thực hiện các thao tác như tạo, đọc, cập nhật và xóa dữ liệu.

### Khái Niệm:

#### Database (Cơ sở dữ liệu):

- Một database là một tập hợp các dữ liệu có tổ chức, có thể được lưu trữ, truy xuất, và cập nhật dễ dàng.
- Nó có thể chứa nhiều bảng dữ liệu, mỗi bảng bao gồm các hàng (records) và các cột (fields) chứa thông tin cụ thể.

### Ngữ Cảnh:

SQL là ngôn ngữ truy vấn tiêu chuẩn được sử dụng để quản lý và tương tác với cơ sở dữ liệu. Khi tạo một cơ sở dữ liệu, người dùng cần có quyền truy cập hoặc quyền admin trên hệ thống quản lý cơ sở dữ liệu như MySQL, PostgreSQL, SQL Server, hoặc SQLite.

### Cách Sử Dụng và Ví Dụ:

Để tạo một cơ sở dữ liệu mới, bạn sử dụng câu lệnh `CREATE DATABASE` với cú pháp như sau (ví dụ với MySQL):

```sql
CREATE DATABASE ten_cua_database;
```

Ví dụ:

Nếu bạn muốn tạo một cơ sở dữ liệu có tên là "company" trong MySQL, câu lệnh sẽ là:

```sql
CREATE DATABASE company;
```

Điều này sẽ tạo một cơ sở dữ liệu mới có tên là "company" trong hệ thống MySQL.

### Giải Thích Chi Tiết:

- `CREATE DATABASE`: Đây là câu lệnh để tạo một cơ sở dữ liệu mới.
- `ten_cua_database`: Đây là phần mà bạn đặt tên cho cơ sở dữ liệu mới. Bạn có thể đặt bất kỳ tên nào phù hợp với yêu cầu và quy ước của hệ thống quản lý cơ sở dữ liệu bạn đang sử dụng.

Câu lệnh trên sẽ tạo ra một không gian lưu trữ mới với tên là "company" để bạn có thể bắt đầu tạo bảng, thêm dữ liệu và thực hiện các thao tác khác liên quan đến cơ sở dữ liệu này.

Hãy nhớ rằng, để thực hiện các lệnh SQL, bạn cần phải có quyền truy cập và quyền thực hiện các thao tác trên cơ sở dữ liệu từ phía hệ thống quản lý cơ sở dữ liệu.
