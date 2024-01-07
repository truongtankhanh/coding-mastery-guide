## Sử dụng EXISTS với SELECT

Toán tử `EXISTS` trong SQL được sử dụng để kiểm tra sự tồn tại của dữ liệu trong một tập hợp kết quả từ một câu lệnh con (subquery). Nó trả về kết quả là `TRUE` nếu câu lệnh con có kết quả, ngược lại trả về `FALSE`.

### Khái Niệm:

#### Toán Tử `EXISTS`:

- `EXISTS` được sử dụng để kiểm tra sự tồn tại của dữ liệu trong một tập hợp kết quả từ một câu lệnh con.
- Kết quả trả về là `TRUE` nếu câu lệnh con có ít nhất một dòng dữ liệu, ngược lại trả về `FALSE`.

### Ngữ Cảnh:

Khi bạn muốn kiểm tra xem có dữ liệu nào khớp với điều kiện được chỉ định trong câu lệnh con hay không.

### Cách Sử Dụng và Ví Dụ:

Sử dụng toán tử `EXISTS` trong mệnh đề `WHERE` của câu truy vấn để kiểm tra sự tồn tại của dữ liệu từ câu lệnh con.

#### Sử Dụng Toán Tử `EXISTS`:

```sql
SELECT column1, column2
FROM table_name
WHERE EXISTS (subquery);
```

Ví dụ:

```sql
SELECT *
FROM employees
WHERE EXISTS (SELECT * FROM departments WHERE departments.id = employees.department_id);
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là danh sách các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `WHERE EXISTS (subquery)`: Là mệnh đề kiểm tra sự tồn tại của dữ liệu từ câu lệnh con.

Trong ví dụ, `WHERE EXISTS (SELECT * FROM departments WHERE departments.id = employees.department_id)` sẽ trả về các nhân viên nếu có ít nhất một bộ phận mà nhân viên đó thuộc về (dựa trên `department_id`). Toán tử `EXISTS` được sử dụng để kiểm tra sự tồn tại của kết quả từ câu lệnh con, nếu câu lệnh con trả về ít nhất một hàng dữ liệu thì điều kiện là đúng và hàng được lựa chọn.

---

## Sử dụng NOT với EXISTS

Toán tử `NOT EXISTS` trong SQL được sử dụng để kiểm tra không có dữ liệu nào khớp với điều kiện được chỉ định trong câu lệnh con (subquery). Nó trả về kết quả là `TRUE` nếu câu lệnh con không có kết quả nào, ngược lại trả về `FALSE`.

### Khái Niệm:

#### Toán Tử `NOT EXISTS`:

- `NOT EXISTS` được sử dụng để kiểm tra không có dữ liệu nào khớp với điều kiện trong câu lệnh con.
- Kết quả trả về là `TRUE` nếu câu lệnh con không có dòng dữ liệu nào, ngược lại trả về `FALSE`.

### Ngữ Cảnh:

Khi bạn muốn kiểm tra xem không có dòng nào khớp với điều kiện trong câu lệnh con hay không.

### Cách Sử Dụng và Ví Dụ:

Sử dụng toán tử `NOT EXISTS` trong mệnh đề `WHERE` của câu truy vấn để kiểm tra không có dữ liệu từ câu lệnh con.

#### Sử Dụng Toán Tử `NOT EXISTS`:

```sql
SELECT column1, column2
FROM table_name
WHERE NOT EXISTS (subquery);
```

Ví dụ:

```sql
SELECT *
FROM employees
WHERE NOT EXISTS (SELECT * FROM terminated_employees WHERE terminated_employees.employee_id = employees.id);
```

### Giải Thích Chi Tiết:

- `SELECT column1, column2`: Là danh sách các cột bạn muốn lấy từ bảng.
- `FROM table_name`: Là tên của bảng bạn muốn truy vấn dữ liệu.
- `WHERE NOT EXISTS (subquery)`: Là mệnh đề kiểm tra không có dữ liệu từ câu lệnh con.

Trong ví dụ, `WHERE NOT EXISTS (SELECT * FROM terminated_employees WHERE terminated_employees.employee_id = employees.id)` sẽ trả về các nhân viên không có trong danh sách nhân viên đã bị sa thải (terminated_employees). Toán tử `NOT EXISTS` kiểm tra không có dữ liệu từ câu lệnh con, nếu câu lệnh con không trả về bất kỳ hàng dữ liệu nào, thì điều kiện là đúng và hàng được lựa chọn.

---

## Sử dụng EXISTS Với DELETE

Câu lệnh SQL `DELETE` kết hợp với `EXISTS` được sử dụng để xóa dữ liệu từ một bảng dựa trên điều kiện có sự tồn tại của dữ liệu trong câu lệnh con (subquery). Khi câu lệnh con trả về kết quả là `TRUE`, các dòng thỏa mãn điều kiện của câu lệnh con sẽ bị xóa.

### Khái Niệm:

Khi bạn muốn xóa các hàng từ một bảng dựa trên một điều kiện được thiết lập từ một tập hợp dữ liệu hoặc một câu lệnh con.

### Ngữ Cảnh:

Thường được sử dụng khi bạn muốn xóa dữ liệu từ một bảng dựa trên các điều kiện phức tạp hoặc khi dữ liệu cần xóa tồn tại trong một tập hợp kết quả từ một câu lệnh con.

### Cách Sử Dụng và Ví Dụ:

```sql
DELETE FROM table_name
WHERE EXISTS (subquery);
```

Ví dụ:

```sql
DELETE FROM employees
WHERE EXISTS (SELECT * FROM terminated_employees WHERE terminated_employees.employee_id = employees.id);
```

### Giải Thích Chi Tiết:

- `DELETE FROM table_name`: Là cú pháp xóa dữ liệu từ bảng.
- `WHERE EXISTS (subquery)`: Là điều kiện xóa dữ liệu từ bảng dựa trên kết quả của câu lệnh con.

Trong ví dụ, câu lệnh `DELETE FROM employees WHERE EXISTS (SELECT * FROM terminated_employees WHERE terminated_employees.employee_id = employees.id)` sẽ xóa các nhân viên từ bảng "employees" nếu tồn tại trong bảng "terminated_employees" với thông tin tương ứng. Nếu câu lệnh con trả về kết quả là `TRUE` (có nhân viên trong bảng "terminated_employees" với ID tương ứng trong bảng "employees"), các dòng thỏa mãn điều kiện này sẽ bị xóa khỏi bảng "employees".

---

## Sử dụng EXISTS với UPDATE

Câu lệnh `UPDATE` kết hợp với `EXISTS` được sử dụng để cập nhật dữ liệu trong một bảng dựa trên điều kiện có sự tồn tại của dữ liệu từ câu lệnh con (subquery). Khi câu lệnh con trả về kết quả là `TRUE`, các hàng thỏa mãn điều kiện của câu lệnh con sẽ được cập nhật.

### Khái Niệm:

Đây là một cách cập nhật dữ liệu từ một bảng dựa trên điều kiện có sự tồn tại của dữ liệu từ một tập hợp kết quả từ câu lệnh con.

### Ngữ Cảnh:

Thường được sử dụng khi bạn muốn cập nhật dữ liệu trong một bảng dựa trên các điều kiện phức tạp hoặc khi dữ liệu cần cập nhật tồn tại trong một tập hợp kết quả từ một câu lệnh con.

### Cách Sử Dụng và Ví Dụ:

```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE EXISTS (subquery);
```

Ví dụ:

```sql
UPDATE products
SET price = price * 1.1
WHERE EXISTS (SELECT * FROM special_discounts WHERE special_discounts.product_id = products.id);
```

### Giải Thích Chi Tiết:

- `UPDATE table_name`: Là cú pháp cập nhật dữ liệu trong bảng.
- `SET column1 = value1, column2 = value2, ...`: Là phần xác định các cột cần cập nhật và giá trị mới tương ứng cho từng cột.
- `WHERE EXISTS (subquery)`: Là điều kiện cập nhật dữ liệu từ bảng dựa trên kết quả của câu lệnh con.

Trong ví dụ, câu lệnh `UPDATE products SET price = price * 1.1 WHERE EXISTS (SELECT * FROM special_discounts WHERE special_discounts.product_id = products.id)` sẽ tăng giá của sản phẩm lên 10% nếu sản phẩm đó có trong bảng `special_discounts`. Nếu câu lệnh con trả về kết quả là `TRUE` (có sản phẩm trong bảng `special_discounts`), thì giá của sản phẩm sẽ được cập nhật.

---
