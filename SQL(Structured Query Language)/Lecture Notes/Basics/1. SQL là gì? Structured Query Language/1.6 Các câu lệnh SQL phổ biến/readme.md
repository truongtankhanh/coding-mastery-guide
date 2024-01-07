## Truy vấn Update trong SQL là gì?

Truy vấn UPDATE trong SQL được sử dụng để cập nhật dữ liệu trong các bảng có sẵn trong cơ sở dữ liệu. Nó cho phép người dùng thay đổi giá trị của một hoặc nhiều cột trong bảng dựa trên điều kiện được chỉ định.

**Ngữ cảnh của Truy vấn UPDATE:**
UPDATE là một phần quan trọng của ngôn ngữ truy vấn dữ liệu trong SQL, cho phép người dùng thực hiện các thao tác cập nhật dữ liệu một cách linh hoạt và hiệu quả.

**Cách sử dụng và ví dụ về Truy vấn UPDATE trong SQL:**

Giả sử chúng ta có một bảng "employees" với các cột "id", "name", "department", và chúng ta muốn cập nhật thông tin phòng ban của nhân viên có id là 1.

```sql
UPDATE employees
SET department = 'HR'
WHERE id = 1;
```

Trong ví dụ này:

- **UPDATE employees:** Xác định bảng mà chúng ta muốn cập nhật.
- **SET department = 'HR':** Xác định cột mà chúng ta muốn cập nhật và giá trị mới cho cột đó.
- **WHERE id = 1:** Xác định điều kiện để xác định bản ghi cần cập nhật. Trong trường hợp này, chỉ những bản ghi có id là 1 sẽ được cập nhật.

Khi truy vấn UPDATE được thực thi, tất cả các bản ghi trong bảng "employees" có id là 1 sẽ có thông tin phòng ban được cập nhật thành 'HR'.

Truy vấn UPDATE trong SQL là một công cụ mạnh mẽ để điều chỉnh và cập nhật dữ liệu trong cơ sở dữ liệu, cho phép thay đổi thông tin một cách linh hoạt dựa trên các điều kiện xác định.

---

## Truy vấn Insert trong SQL là gì?

Truy vấn INSERT trong SQL được sử dụng để thêm dữ liệu mới vào trong bảng của cơ sở dữ liệu. Nó cho phép người dùng thêm một hoặc nhiều bản ghi mới vào trong bảng với các giá trị được chỉ định.

**Ngữ cảnh của Truy vấn INSERT:**
INSERT là một trong những câu lệnh quan trọng nhất trong SQL, cho phép người dùng thêm dữ liệu mới vào cơ sở dữ liệu, từ đó làm phong phú và cập nhật nội dung của bảng.

**Cách sử dụng và ví dụ về Truy vấn INSERT trong SQL:**

Giả sử chúng ta có một bảng "employees" với các cột "id", "name", "department", và chúng ta muốn thêm một bản ghi mới cho một nhân viên vào bảng này.

```sql
INSERT INTO employees (id, name, department)
VALUES (1, 'John Doe', 'IT');
```

Trong ví dụ này:

- **INSERT INTO employees:** Xác định bảng mà chúng ta muốn thêm dữ liệu mới vào.
- **(id, name, department):** Xác định các cột trong bảng mà chúng ta muốn cung cấp dữ liệu.
- **VALUES (1, 'John Doe', 'IT'):** Chứa các giá trị mới mà chúng ta muốn thêm vào. Các giá trị này tương ứng với các cột được chỉ định ở trên, theo thứ tự tương ứng.

Khi truy vấn INSERT được thực thi, một bản ghi mới sẽ được thêm vào bảng "employees" với các giá trị tương ứng là id=1, name='John Doe', và department='IT'.

Truy vấn INSERT trong SQL là một công cụ quan trọng để thêm dữ liệu mới vào cơ sở dữ liệu và đóng vai trò quan trọng trong việc duy trì và cập nhật dữ liệu của bảng.

---

## Truy vấn Select trong SQL là gì?

Truy vấn SELECT trong SQL được sử dụng để truy xuất dữ liệu từ cơ sở dữ liệu. Nó cho phép người dùng lựa chọn các cột cụ thể hoặc tất cả các cột từ một hoặc nhiều bảng, và có thể áp dụng các điều kiện để lọc dữ liệu trả về theo yêu cầu.

**Ngữ cảnh của Truy vấn SELECT:**
SELECT là một trong những câu lệnh quan trọng nhất trong SQL, cho phép người dùng truy vấn dữ liệu từ cơ sở dữ liệu để hiển thị thông tin hoặc thực hiện các tính toán trên dữ liệu.

**Cách sử dụng và ví dụ về Truy vấn SELECT trong SQL:**

Giả sử chúng ta có một bảng "employees" với các cột "id", "name", "department", và chúng ta muốn truy vấn tất cả thông tin về nhân viên trong bảng.

```sql
SELECT * FROM employees;
```

Trong ví dụ này:

- **SELECT \*:** Chọn tất cả các cột từ bảng.
- **FROM employees:** Xác định bảng mà chúng ta muốn truy vấn dữ liệu từ.

Khi truy vấn SELECT được thực thi, tất cả thông tin từ tất cả các cột của bảng "employees" sẽ được trả về.

Ngoài ra, SELECT cũng cho phép lựa chọn các cột cụ thể hoặc áp dụng các điều kiện để lọc dữ liệu:

```sql
SELECT name, department FROM employees WHERE department = 'IT';
```

Trong truy vấn trên, chỉ có các cột "name" và "department" từ bảng "employees" được chọn và chỉ các bản ghi có phòng ban là 'IT' mới được trả về.

Truy vấn SELECT trong SQL là một công cụ mạnh mẽ để truy xuất dữ liệu từ cơ sở dữ liệu, cho phép hiển thị thông tin cụ thể hoặc thực hiện các phép tính trên dữ liệu tùy theo nhu cầu.

---

## Mệnh đề Order By

Mệnh đề ORDER BY trong SQL được sử dụng để sắp xếp kết quả của truy vấn theo một hoặc nhiều cột cụ thể. Mệnh đề này cho phép người dùng xác định thứ tự sắp xếp của kết quả trả về từ truy vấn SELECT.

**Ngữ cảnh của Mệnh đề ORDER BY:**
ORDER BY là một công cụ quan trọng để sắp xếp kết quả truy vấn theo yêu cầu của người dùng. Nó cho phép hiển thị dữ liệu một cách có tổ chức dựa trên giá trị của một hoặc nhiều cột.

**Cách sử dụng và ví dụ về Mệnh đề ORDER BY trong SQL:**

Giả sử chúng ta có bảng "employees" với các cột "id", "name", và "salary", và chúng ta muốn truy vấn tất cả nhân viên từ bảng này và sắp xếp theo thứ tự tăng dần của lương.

```sql
SELECT * FROM employees ORDER BY salary ASC;
```

Trong ví dụ này:

- **SELECT \*:** Chọn tất cả các cột từ bảng "employees".
- **FROM employees:** Xác định bảng mà chúng ta muốn truy vấn dữ liệu từ.
- **ORDER BY salary ASC:** Sắp xếp kết quả theo cột "salary" theo thứ tự tăng dần (ASC là viết tắt của "ascending").

Khi truy vấn ORDER BY được thực thi, kết quả sẽ trả về tất cả các thông tin về nhân viên từ bảng "employees" và được sắp xếp theo thứ tự tăng dần của cột "salary".

ORDER BY cũng cho phép sử dụng DESC (descending) để sắp xếp theo thứ tự giảm dần:

```sql
SELECT * FROM employees ORDER BY salary DESC;
```

Truy vấn trên sẽ trả về kết quả tương tự nhưng sắp xếp theo thứ tự giảm dần của cột "salary".

Mệnh đề ORDER BY trong SQL là một công cụ quan trọng để tổ chức và hiển thị dữ liệu một cách có cấu trúc, dễ đọc và dễ hiểu.

---

## Mệnh đề Group By

Mệnh đề GROUP BY trong SQL được sử dụng để nhóm các hàng dữ liệu dựa trên các giá trị của một hoặc nhiều cột và áp dụng các hàm tổng hợp như SUM, AVG, COUNT, MAX, MIN cho từng nhóm này.

**Ngữ cảnh của Mệnh đề GROUP BY:**
GROUP BY là một công cụ mạnh mẽ để tổ chức và phân nhóm dữ liệu theo các tiêu chí cụ thể, rồi thực hiện các tính toán hoặc phân tích trên các nhóm này.

**Cách sử dụng và ví dụ về Mệnh đề GROUP BY trong SQL:**

Giả sử chúng ta có bảng "orders" với các cột "product_id", "customer_id", và "amount", và chúng ta muốn tính tổng số tiền đã chi tiêu cho mỗi sản phẩm.

```sql
SELECT product_id, SUM(amount) AS total_amount
FROM orders
GROUP BY product_id;
```

Trong ví dụ này:

- **SELECT product_id:** Chọn cột "product_id" từ bảng "orders".
- **SUM(amount) AS total_amount:** Sử dụng hàm tổng hợp SUM để tính tổng số tiền ("amount") cho mỗi sản phẩm và đặt tên cho cột kết quả là "total_amount".
- **FROM orders:** Xác định bảng mà chúng ta muốn truy vấn dữ liệu từ.
- **GROUP BY product_id:** Phân nhóm dữ liệu theo cột "product_id".

Khi truy vấn GROUP BY được thực thi, kết quả sẽ trả về tổng số tiền đã chi tiêu cho mỗi sản phẩm trong bảng "orders".

Mệnh đề GROUP BY cũng có thể kết hợp với HAVING để lọc các nhóm dựa trên điều kiện cụ thể:

```sql
SELECT product_id, SUM(amount) AS total_amount
FROM orders
GROUP BY product_id
HAVING SUM(amount) > 1000;
```

Truy vấn trên sẽ trả về các sản phẩm có tổng số tiền chi tiêu lớn hơn 1000.

Mệnh đề GROUP BY trong SQL là một công cụ quan trọng để phân nhóm và thực hiện các tính toán tổng hợp trên dữ liệu, giúp phân tích và hiểu rõ hơn về dữ liệu của bạn.

---

## Từ khóa Distinct

Từ khóa DISTINCT trong SQL được sử dụng để loại bỏ các bản ghi trùng lặp từ kết quả truy vấn SELECT, chỉ hiển thị các giá trị duy nhất.

**Ngữ cảnh của từ khóa DISTINCT:**
Khi bạn cần chỉ hiển thị các giá trị duy nhất từ một cột hoặc các cột trong kết quả truy vấn, từ khóa DISTINCT là một công cụ hữu ích để loại bỏ các giá trị trùng lặp.

**Cách sử dụng và ví dụ về từ khóa DISTINCT trong SQL:**

Giả sử chúng ta có bảng "orders" với cột "customer_id" và chúng ta muốn liệt kê tất cả các khách hàng duy nhất từ bảng này.

```sql
SELECT DISTINCT customer_id
FROM orders;
```

Trong ví dụ này:

- **SELECT DISTINCT customer_id:** Chọn tất cả các giá trị duy nhất của cột "customer_id" từ bảng "orders".

Khi truy vấn được thực thi, kết quả sẽ trả về danh sách các giá trị duy nhất của cột "customer_id", loại bỏ bất kỳ giá trị nào trùng lặp.

Từ khóa DISTINCT cũng có thể được sử dụng với nhiều cột để xác định các bộ giá trị duy nhất.

```sql
SELECT DISTINCT column1, column2
FROM table_name;
```

Ví dụ này sẽ trả về tất cả các bộ giá trị duy nhất từ cột "column1" và "column2" từ bảng "table_name", loại bỏ bất kỳ bộ giá trị nào trùng lặp.

Từ khóa DISTINCT trong SQL là một công cụ hữu ích để chỉ hiển thị các giá trị duy nhất từ kết quả truy vấn SELECT, giúp bạn hiểu rõ hơn về dữ liệu mà bạn đang làm việc.

---

## Mệnh đề Where

Mệnh đề WHERE trong SQL được sử dụng để lọc dữ liệu từ cơ sở dữ liệu dựa trên các điều kiện được chỉ định. Nó cho phép bạn chọn các bản ghi cụ thể mà thỏa mãn điều kiện đặt ra.

**Ngữ cảnh của Mệnh đề WHERE:**
Mệnh đề WHERE giúp bạn trích xuất các bản ghi cụ thể từ cơ sở dữ liệu, chỉ hiển thị những dữ liệu mà bạn quan tâm dựa trên các điều kiện đã xác định.

**Cách sử dụng và ví dụ về Mệnh đề WHERE trong SQL:**

Giả sử chúng ta có bảng "employees" với các cột "id", "name", và "department", và chúng ta muốn lấy thông tin của nhân viên có id là 1.

```sql
SELECT * FROM employees WHERE id = 1;
```

Trong ví dụ này:

- **SELECT \*:** Chọn tất cả các cột từ bảng "employees".
- **FROM employees:** Xác định bảng mà chúng ta muốn truy vấn dữ liệu từ.
- **WHERE id = 1:** Áp dụng điều kiện, chỉ lấy các bản ghi có giá trị của cột "id" bằng 1.

Khi truy vấn WHERE được thực thi, kết quả sẽ trả về thông tin của nhân viên có id là 1 từ bảng "employees".

Mệnh đề WHERE cũng cho phép sử dụng các điều kiện phức tạp hơn như AND, OR, NOT để kết hợp nhiều điều kiện trong một truy vấn:

```sql
SELECT * FROM employees WHERE department = 'IT' AND salary > 50000;
```

Truy vấn trên sẽ trả về thông tin của những nhân viên thuộc phòng ban 'IT' và có mức lương lớn hơn 50,000 từ bảng "employees".

Mệnh đề WHERE trong SQL là một công cụ quan trọng để lọc dữ liệu và chỉ hiển thị các bản ghi thỏa mãn các điều kiện cụ thể mà bạn quan tâm.

---

## Mệnh đề AND & OR

Mệnh đề AND và OR trong SQL được sử dụng để kết hợp các điều kiện trong mệnh đề WHERE để lọc dữ liệu từ cơ sở dữ liệu.

**Ngữ cảnh của Mệnh đề AND và OR:**

- **AND:** Sử dụng khi bạn muốn chỉ lấy các bản ghi thỏa mãn cả hai điều kiện.
- **OR:** Sử dụng khi bạn muốn chỉ lấy các bản ghi thỏa mãn ít nhất một trong hai điều kiện.

**Cách sử dụng và ví dụ về Mệnh đề AND và OR trong SQL:**

1. **Mệnh đề AND:**

Giả sử chúng ta muốn lấy thông tin của nhân viên có phòng ban là 'IT' và mức lương lớn hơn 50,000 từ bảng "employees".

```sql
SELECT * FROM employees WHERE department = 'IT' AND salary > 50000;
```

Trong truy vấn này, chúng ta sử dụng mệnh đề AND để lấy các bản ghi chỉ khi cả hai điều kiện đều đúng: phòng ban là 'IT' và mức lương lớn hơn 50,000.

2. **Mệnh đề OR:**

Giả sử chúng ta muốn lấy thông tin của nhân viên có phòng ban là 'IT' hoặc mức lương lớn hơn 100,000 từ bảng "employees".

```sql
SELECT * FROM employees WHERE department = 'IT' OR salary > 100000;
```

Ở đây, chúng ta sử dụng mệnh đề OR để lấy các bản ghi khi ít nhất một trong hai điều kiện là đúng: phòng ban là 'IT' hoặc mức lương lớn hơn 100,000.

Mệnh đề AND và OR trong SQL là những công cụ mạnh mẽ để kết hợp các điều kiện và lọc dữ liệu một cách linh hoạt, cho phép bạn lấy ra các bản ghi thỏa mãn các điều kiện cụ thể mà bạn quan tâm.

---
