## Mệnh đề GROUP BY

Mệnh đề `GROUP BY` trong SQL được sử dụng để nhóm các hàng dữ liệu thành các tập hợp dựa trên giá trị của một hoặc nhiều cột. Nó thường được sử dụng với các hàm tổng hợp như `SUM()`, `COUNT()`, `AVG()`, và `MAX()`, để thực hiện phép tính trên các nhóm dữ liệu.

### Khái Niệm:

Mệnh đề `GROUP BY` được sử dụng để phân nhóm dữ liệu dựa trên giá trị trong một hoặc nhiều cột, tạo thành các nhóm riêng biệt.

### Ngữ Cảnh:

Khi bạn muốn phân nhóm các hàng dữ liệu dựa trên các giá trị trong cột nào đó và áp dụng các hàm tổng hợp để tính toán trên các nhóm dữ liệu này.

### Cách Sử Dụng và Ví Dụ:

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1;
```

Ví dụ:

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department;
```

### Giải Thích Chi Tiết:

- `SELECT column1, aggregate_function(column2)`: Là cú pháp để chọn cột cần hiển thị cùng với các hàm tổng hợp để tính toán trên các nhóm dữ liệu.
- `FROM table_name`: Là tên của bảng chứa dữ liệu cần phân nhóm.
- `GROUP BY column1`: Là mệnh đề xác định cột để phân nhóm dữ liệu.

Trong ví dụ, câu lệnh `SELECT department, AVG(salary) FROM employees GROUP BY department` sẽ nhóm các nhân viên theo phòng ban (`department`) và tính trung bình lương (`AVG(salary)`) của từng phòng ban. Kết quả trả về sẽ hiển thị mỗi phòng ban và lương trung bình của nhân viên trong phòng ban đó. Mệnh đề `GROUP BY` giúp tổ chức dữ liệu thành các nhóm dựa trên giá trị trong cột `department`.

---

## Mệnh đề Having

Mệnh đề `HAVING` trong SQL được sử dụng để lọc các nhóm dữ liệu sau khi mệnh đề `GROUP BY` đã được áp dụng. Nó cho phép bạn áp dụng các điều kiện để lọc các nhóm dựa trên kết quả của các hàm tổng hợp như `SUM()`, `COUNT()`, `AVG()`, `MAX()`, `MIN()`,...

### Khái Niệm:

Mệnh đề `HAVING` giúp lọc các nhóm dữ liệu sau khi đã phân nhóm bởi `GROUP BY` dựa trên kết quả của các hàm tổng hợp.

### Ngữ Cảnh:

Thường được sử dụng khi bạn muốn áp dụng điều kiện cho kết quả của các hàm tổng hợp sau khi đã phân nhóm.

### Cách Sử Dụng và Ví Dụ:

```sql
SELECT column1, aggregate_function(column2)
FROM table_name
GROUP BY column1
HAVING condition;
```

Ví dụ:

```sql
SELECT department, AVG(salary)
FROM employees
GROUP BY department
HAVING AVG(salary) > 5000;
```

### Giải Thích Chi Tiết:

- `SELECT column1, aggregate_function(column2)`: Là cú pháp để chọn cột cần hiển thị cùng với các hàm tổng hợp để tính toán trên các nhóm dữ liệu.
- `FROM table_name`: Là tên của bảng chứa dữ liệu cần phân nhóm.
- `GROUP BY column1`: Là mệnh đề xác định cột để phân nhóm dữ liệu.
- `HAVING condition`: Là mệnh đề áp dụng điều kiện lọc các nhóm dữ liệu.

Trong ví dụ, câu lệnh `SELECT department, AVG(salary) FROM employees GROUP BY department HAVING AVG(salary) > 5000` sẽ tính trung bình lương (`AVG(salary)`) của từng phòng ban và chỉ hiển thị các phòng ban mà lương trung bình của họ cao hơn 5000. Mệnh đề `HAVING` được sử dụng để lọc kết quả của `GROUP BY` dựa trên kết quả của hàm tổng hợp `AVG(salary)`.

---
