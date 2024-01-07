## Cú pháp của lệnh USE trong SQL

Lệnh `USE` trong SQL được sử dụng để chọn cơ sở dữ liệu mà bạn muốn làm việc. Khi bạn làm việc với hệ thống quản lý cơ sở dữ liệu có nhiều cơ sở dữ liệu khác nhau, `USE` giúp bạn chuyển đổi giữa các cơ sở dữ liệu để thực hiện các truy vấn và thao tác trên cơ sở dữ liệu cụ thể đó.

### Khái Niệm:

#### Lệnh USE:

- `USE` là một trong những lệnh cơ bản của SQL.
- Nó cho phép người dùng chọn cơ sở dữ liệu mà họ muốn làm việc.

### Ngữ Cảnh:

SQL cho phép bạn làm việc với nhiều cơ sở dữ liệu khác nhau trên cùng một hệ thống. Khi sử dụng `USE`, bạn có thể chọn cơ sở dữ liệu mà bạn muốn truy cập để thực hiện các thao tác như truy vấn dữ liệu, cập nhật dữ liệu, hoặc tạo bảng mới.

### Cách Sử Dụng và Ví Dụ:

Cú pháp của lệnh `USE` đơn giản:

```sql
USE ten_cua_database;
```

Ví dụ:

Nếu bạn muốn chọn cơ sở dữ liệu "company" để làm việc, bạn có thể sử dụng lệnh sau:

```sql
USE company;
```

### Giải Thích Chi Tiết:

- `USE`: Là từ khóa để bắt đầu lệnh chọn cơ sở dữ liệu.
- `ten_cua_database`: Đây là tên của cơ sở dữ liệu mà bạn muốn chọn để thực hiện các truy vấn và thao tác sau đó.

Khi bạn thực hiện lệnh `USE`, hệ thống quản lý cơ sở dữ liệu sẽ chuyển đổi ngữ cảnh làm việc của bạn sang cơ sở dữ liệu được chọn. Tất cả các truy vấn và thao tác sau đó sẽ ảnh hưởng đến cơ sở dữ liệu này cho đến khi bạn chuyển đổi sang cơ sở dữ liệu khác hoặc kết thúc phiên làm việc.

Điều này cho phép bạn làm việc với dữ liệu trong cơ sở dữ liệu cụ thể mà không cần phải thêm tên cơ sở dữ liệu vào mỗi truy vấn hoặc lệnh mà bạn thực hiện.

---

## Ví dụ về lệnh USE trong SQL

Đây là một ví dụ về cách sử dụng lệnh `USE` trong SQL để chọn cơ sở dữ liệu để làm việc:

Giả sử bạn đang làm việc trên hệ thống quản lý cơ sở dữ liệu MySQL, và bạn có các cơ sở dữ liệu như `employees`, `products`, và `sales`. Để chọn cơ sở dữ liệu `employees` để thực hiện các truy vấn và thao tác dữ liệu, bạn sẽ sử dụng lệnh `USE` như sau:

### Ví dụ:

```sql
USE employees;
```

Khi bạn thực hiện câu lệnh này trong SQL, hệ thống quản lý cơ sở dữ liệu MySQL sẽ chuyển ngữ cảnh làm việc của bạn từ cơ sở dữ liệu hiện tại sang cơ sở dữ liệu `employees`. Tất cả các truy vấn và thao tác dữ liệu tiếp theo sẽ được thực hiện trên cơ sở dữ liệu này cho đến khi bạn chuyển đổi ngữ cảnh làm việc sang một cơ sở dữ liệu khác bằng cách sử dụng lại lệnh `USE` với tên của cơ sở dữ liệu khác.

Lệnh `USE` rất hữu ích khi bạn cần làm việc với nhiều cơ sở dữ liệu khác nhau trong cùng một hệ thống quản lý cơ sở dữ liệu. Nó giúp bạn chuyển đổi dễ dàng giữa các cơ sở dữ liệu để thực hiện các thao tác và truy vấn mà không cần phải chỉ định tên cơ sở dữ liệu trong mỗi truy vấn.

---
