## Hàm Count trong SQL

Hàm `COUNT()` trong SQL được sử dụng để đếm số lượng hàng hoặc giá trị không NULL trong một cột hoặc tập dữ liệu.

**Ngữ cảnh và khái niệm:**

- `COUNT()` là một hàm tổng hợp (aggregate function) thường được sử dụng để tính số lượng hàng hoặc giá trị không NULL trong một cột.
- Hàm này rất hữu ích khi bạn cần biết số lượng bản ghi hoặc giá trị trong cơ sở dữ liệu.

**Cách sử dụng:**

Cú pháp cơ bản của `COUNT()` như sau:

```sql
SELECT COUNT(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột bạn muốn đếm số lượng giá trị không NULL.
- `table_name` là tên bảng chứa cột mà bạn muốn đếm.

Ví dụ, để đếm số lượng người dùng có tên không rỗng từ bảng `users`:

```sql
SELECT COUNT(name) AS total_users FROM users;
```

**Giải thích chi tiết:**

- Khi sử dụng `COUNT()`, bạn có thể chỉ định tên cột để đếm số lượng giá trị không NULL trong cột đó.
- Nếu bạn sử dụng `COUNT(*)`, hàm sẽ đếm tất cả các hàng (bao gồm cả các hàng có giá trị NULL).
- Kết quả của `COUNT()` thường được trả về dưới dạng một cột với tên mà bạn đã chỉ định (trong ví dụ là `total_users`).

Hàm `COUNT()` thường được sử dụng trong các truy vấn phức tạp hơn khi bạn cần thống kê số lượng bản ghi hoặc giá trị đáp ứng một điều kiện cụ thể, hoặc để biết kích thước của dữ liệu.

---

## Hàm Sum trong SQL

Hàm `SUM()` trong SQL là một hàm tổng hợp (aggregate function) được sử dụng để tính tổng các giá trị trong một cột hoặc tập dữ liệu.

**Ngữ cảnh và khái niệm:**

- `SUM()` thường được sử dụng để tính tổng của các giá trị số trong một cột.
- Hàm này rất hữu ích khi bạn cần tính toán tổng của các giá trị số trong cơ sở dữ liệu.

**Cách sử dụng:**

Cú pháp cơ bản của `SUM()` như sau:

```sql
SELECT SUM(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị số bạn muốn tính tổng.
- `table_name` là tên bảng chứa cột mà bạn muốn tính tổng.

Ví dụ, để tính tổng của cột `price` từ bảng `products`:

```sql
SELECT SUM(price) AS total_price FROM products;
```

**Giải thích chi tiết:**

- Hàm `SUM()` sẽ tổng hợp các giá trị số trong cột được chỉ định và trả về tổng của chúng.
- Kết quả của `SUM()` thường được trả về dưới dạng một cột với tên mà bạn đã chỉ định (trong ví dụ là `total_price`).

`SUM()` thường được sử dụng khi bạn cần tính tổng các giá trị số, như tổng doanh thu, tổng số tiền thanh toán, hoặc bất kỳ tập hợp nào của các giá trị số trong cơ sở dữ liệu của bạn.

---

## Hàm Avg trong SQL

Hàm `AVG()` trong SQL là một hàm tổng hợp (aggregate function) được sử dụng để tính trung bình cộng của các giá trị trong một cột hoặc tập dữ liệu.

**Ngữ cảnh và khái niệm:**

- `AVG()` được sử dụng để tính trung bình cộng của các giá trị số trong một cột.
- Hàm này rất hữu ích khi bạn cần tính toán giá trị trung bình của các số trong cơ sở dữ liệu.

**Cách sử dụng:**

Cú pháp cơ bản của `AVG()` như sau:

```sql
SELECT AVG(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị số bạn muốn tính trung bình cộng.
- `table_name` là tên bảng chứa cột mà bạn muốn tính trung bình cộng.

Ví dụ, để tính trung bình cộng của cột `age` từ bảng `students`:

```sql
SELECT AVG(age) AS average_age FROM students;
```

**Giải thích chi tiết:**

- Hàm `AVG()` sẽ tính trung bình cộng của các giá trị số trong cột được chỉ định và trả về kết quả.
- Kết quả của `AVG()` thường được trả về dưới dạng một cột với tên mà bạn đã chỉ định (trong ví dụ là `average_age`).

`AVG()` thường được sử dụng khi bạn cần tính giá trị trung bình của một tập hợp các giá trị số, như trung bình điểm số của sinh viên, trung bình giá của các sản phẩm, hoặc bất kỳ tập hợp nào của các giá trị số trong cơ sở dữ liệu của bạn.

---

## Hàm Min trong SQL

Hàm `MIN()` trong SQL là một hàm tổng hợp (aggregate function) được sử dụng để tìm giá trị nhỏ nhất trong một cột hoặc tập dữ liệu.

**Ngữ cảnh và khái niệm:**

- `MIN()` được sử dụng để tìm giá trị nhỏ nhất trong một cột chứa các giá trị số hoặc chuỗi.
- Hàm này rất hữu ích khi bạn cần tìm giá trị nhỏ nhất trong cơ sở dữ liệu.

**Cách sử dụng:**

Cú pháp cơ bản của `MIN()` như sau:

```sql
SELECT MIN(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị bạn muốn tìm giá trị nhỏ nhất.
- `table_name` là tên bảng chứa cột mà bạn muốn tìm giá trị nhỏ nhất.

Ví dụ, để tìm giá trị nhỏ nhất của cột `price` từ bảng `products`:

```sql
SELECT MIN(price) AS min_price FROM products;
```

**Giải thích chi tiết:**

- Hàm `MIN()` sẽ tìm giá trị nhỏ nhất trong cột được chỉ định và trả về kết quả.
- Kết quả của `MIN()` thường được trả về dưới dạng một cột với tên mà bạn đã chỉ định (trong ví dụ là `min_price`).

`MIN()` thường được sử dụng khi bạn cần tìm giá trị nhỏ nhất trong một tập hợp các giá trị số hoặc chuỗi, chẳng hạn như tìm giá trị nhỏ nhất trong danh sách giá cả, tìm ngày đầu tiên của sự kiện, hoặc bất kỳ tập hợp nào của các giá trị trong cơ sở dữ liệu của bạn.

---

## Hàm Max trong SQL

Hàm `MAX()` trong SQL là một hàm tổng hợp (aggregate function) được sử dụng để tìm giá trị lớn nhất trong một cột hoặc tập dữ liệu.

**Ngữ cảnh và khái niệm:**

- `MAX()` được sử dụng để tìm giá trị lớn nhất trong một cột chứa các giá trị số hoặc chuỗi.
- Hàm này rất hữu ích khi bạn cần tìm giá trị lớn nhất trong cơ sở dữ liệu.

**Cách sử dụng:**

Cú pháp cơ bản của `MAX()` như sau:

```sql
SELECT MAX(column_name) FROM table_name;
```

Trong đó:

- `column_name` là tên cột chứa các giá trị bạn muốn tìm giá trị lớn nhất.
- `table_name` là tên bảng chứa cột mà bạn muốn tìm giá trị lớn nhất.

Ví dụ, để tìm giá trị lớn nhất của cột `salary` từ bảng `employees`:

```sql
SELECT MAX(salary) AS max_salary FROM employees;
```

**Giải thích chi tiết:**

- Hàm `MAX()` sẽ tìm giá trị lớn nhất trong cột được chỉ định và trả về kết quả.
- Kết quả của `MAX()` thường được trả về dưới dạng một cột với tên mà bạn đã chỉ định (trong ví dụ là `max_salary`).

`MAX()` thường được sử dụng khi bạn cần tìm giá trị lớn nhất trong một tập hợp các giá trị số hoặc chuỗi, chẳng hạn như tìm giá trị lớn nhất trong danh sách lương nhân viên, tìm ngày cuối cùng của sự kiện, hoặc bất kỳ tập hợp nào của các giá trị trong cơ sở dữ liệu của bạn.

---
