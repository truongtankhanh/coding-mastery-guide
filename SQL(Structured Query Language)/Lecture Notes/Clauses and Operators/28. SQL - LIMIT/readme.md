## Cách sử dụng LIMIT trong SQL

Trong SQL, `LIMIT` được sử dụng để hạn chế số lượng hàng mà một câu truy vấn trả về từ cơ sở dữ liệu.

### Khái Niệm:

#### LIMIT:

- Là một từ khóa trong SQL được sử dụng để hạn chế số lượng kết quả trả về từ một truy vấn.
- Thường được sử dụng với các truy vấn `SELECT` để giới hạn số lượng hàng được trả về.

### Ngữ Cảnh:

Khi bạn cần lấy một số lượng nhất định các hàng từ cơ sở dữ liệu mà không cần phải lấy tất cả dữ liệu, `LIMIT` sẽ hữu ích.

### Cách Sử Dụng và Ví Dụ:

Sử dụng `LIMIT` trong câu truy vấn SQL để giới hạn số lượng hàng được trả về.

#### Sử Dụng `LIMIT`:

```sql
SELECT column1, column2
FROM table_name
LIMIT number_of_rows;
```

Ví dụ:

```sql
SELECT *
FROM orders
LIMIT 10;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `LIMIT number_of_rows`: Là số lượng hàng bạn muốn trả về từ kết quả truy vấn.

Lệnh `LIMIT` được sử dụng sau `SELECT` để chỉ định số lượng hàng mà truy vấn sẽ trả về. Điều này rất hữu ích khi bạn chỉ quan tâm đến một số hàng đầu tiên hoặc giới hạn kích thước kết quả trả về từ cơ sở dữ liệu. Trong ví dụ, truy vấn sẽ trả về chỉ 10 hàng từ bảng `orders`.

---

## Sử dụng LIMIT kết với với OFFSET

Khi sử dụng `LIMIT` kết hợp với `OFFSET` trong SQL, chúng ta có thể xác định số lượng hàng mà câu truy vấn sẽ trả về cùng với vị trí bắt đầu của tập kết quả.

### Khái Niệm:

#### LIMIT và OFFSET:

- `LIMIT` xác định số lượng hàng muốn trả về từ kết quả truy vấn.
- `OFFSET` xác định vị trí bắt đầu của tập kết quả.

### Ngữ Cảnh:

Khi bạn muốn truy vấn chỉ một phần của dữ liệu, ví dụ: trang tiếp theo trong một danh sách, bạn có thể sử dụng `LIMIT` và `OFFSET`.

### Cách Sử Dụng và Ví Dụ:

Sử dụng `LIMIT` kết hợp với `OFFSET` trong câu truy vấn SQL để xác định số lượng hàng và vị trí bắt đầu của kết quả.

#### Sử Dụng `LIMIT` và `OFFSET`:

```sql
SELECT column1, column2
FROM table_name
LIMIT number_of_rows OFFSET start_position;
```

Ví dụ:

```sql
SELECT *
FROM orders
LIMIT 5 OFFSET 10;
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `LIMIT number_of_rows`: Xác định số lượng hàng bạn muốn trả về.
- `OFFSET start_position`: Xác định vị trí bắt đầu của tập kết quả.

Khi sử dụng `LIMIT` và `OFFSET`, `LIMIT` xác định số lượng hàng bạn muốn trả về và `OFFSET` xác định hàng bắt đầu từ vị trí nào trong kết quả truy vấn. Trong ví dụ, truy vấn sẽ trả về 5 hàng bắt đầu từ hàng thứ 11 trong bảng `orders`. Điều này thường được sử dụng để phân trang kết quả trong ứng dụng hoặc lấy các phần dữ liệu từ một số lượng lớn hàng.

---

## LIMIT ALL trong SQL

Trong SQL, `LIMIT ALL` được sử dụng để truy vấn tất cả các hàng từ kết quả của một câu lệnh SELECT. Mặc định, khi không sử dụng `LIMIT`, tất cả các hàng thỏa mãn điều kiện sẽ được trả về.

### Khái Niệm:

#### LIMIT ALL:

- `LIMIT ALL` không giới hạn số lượng hàng trả về từ kết quả truy vấn.
- Đây là tùy chọn mặc định khi bạn muốn lấy tất cả các hàng thỏa mãn điều kiện.

### Ngữ Cảnh:

Khi bạn muốn rõ ràng chỉ ra rằng muốn lấy tất cả các hàng thỏa mãn điều kiện từ câu lệnh `SELECT`.

### Cách Sử Dụng và Ví Dụ:

`LIMIT ALL` được sử dụng trong câu lệnh `SELECT` để chỉ ra rằng muốn lấy tất cả các hàng từ kết quả truy vấn.

#### Sử Dụng `LIMIT ALL`:

```sql
SELECT column1, column2
FROM table_name
WHERE condition
LIMIT ALL;
```

Ví dụ:

```sql
SELECT *
FROM orders
LIMIT ALL;
```

### Giải Thích Chi Tiết:

Khi sử dụng `LIMIT ALL`, không có giới hạn cụ thể về số lượng hàng trả về từ kết quả truy vấn. Thay vào đó, tất cả các hàng thỏa mãn điều kiện sẽ được trả về. Điều này có thể sử dụng khi bạn muốn mô tả rõ ràng rằng muốn lấy toàn bộ kết quả mà không giới hạn số lượng hàng. Tuy nhiên, thường không cần sử dụng `LIMIT ALL` vì đây là hành vi mặc định của truy vấn SELECT khi không có lệnh `LIMIT` được chỉ định.

---
