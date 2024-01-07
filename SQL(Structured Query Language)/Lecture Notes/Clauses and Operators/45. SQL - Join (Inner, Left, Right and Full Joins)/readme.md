## Inner Join

Trong SQL, `INNER JOIN` là một loại join dùng để kết hợp dữ liệu từ hai bảng dựa trên một điều kiện, trả về các hàng có điều kiện kết nối là TRUE.

### Ngữ cảnh:

`INNER JOIN` được sử dụng khi bạn muốn kết hợp dữ liệu từ hai bảng dựa trên một điều kiện chung, trả về chỉ các bản ghi có sự khớp từ cả hai bảng.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `INNER JOIN`:

Giả sử bạn có hai bảng `orders` và `customers`, và bạn muốn lấy thông tin đơn đặt hàng cùng với thông tin của khách hàng:

```sql
SELECT orders.order_id, orders.order_date, customers.customer_name
FROM orders
INNER JOIN customers ON orders.customer_id = customers.customer_id;
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `INNER JOIN` được sử dụng để kết hợp dữ liệu từ bảng `orders` và `customers` dựa trên điều kiện `orders.customer_id = customers.customer_id`. Điều này kết hợp các bản ghi từ cả hai bảng với điều kiện rằng `customer_id` trong bảng `orders` phải khớp với `customer_id` trong bảng `customers`.

Kết quả trả về sẽ chứa các hàng mà `customer_id` khớp từ cả hai bảng, nghĩa là chỉ có các đơn đặt hàng (order) có thông tin khách hàng (customer). Các hàng không có sự khớp sẽ không được bao gồm trong kết quả.

---

## Left Join

Trong SQL, `LEFT JOIN` là một loại join dùng để kết hợp dữ liệu từ hai bảng dựa trên một điều kiện, trả về tất cả các hàng từ bảng bên trái và các hàng từ bảng phải có điều kiện kết nối là TRUE hoặc NULL.

### Ngữ cảnh:

`LEFT JOIN` thường được sử dụng khi bạn muốn lấy tất cả các hàng từ bảng bên trái kể cả khi không có sự khớp với điều kiện trong bảng bên phải.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `LEFT JOIN`:

Giả sử bạn có hai bảng `students` và `scores`, và bạn muốn lấy thông tin tất cả học sinh và điểm số (nếu có):

```sql
SELECT students.student_id, students.student_name, scores.score
FROM students
LEFT JOIN scores ON students.student_id = scores.student_id;
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `LEFT JOIN` được sử dụng để kết hợp dữ liệu từ bảng `students` và `scores` dựa trên điều kiện `students.student_id = scores.student_id`. Kết quả sẽ chứa tất cả các hàng từ bảng `students`, bất kể có sự khớp với `student_id` trong bảng `scores` hay không.

Nếu có sự khớp, thông tin về điểm số sẽ được lấy. Nếu không có sự khớp, các cột từ bảng `scores` sẽ chứa giá trị NULL. Kết quả sẽ bao gồm tất cả học sinh và điểm số nếu có, hoặc NULL nếu không có thông tin điểm số cho học sinh đó.

---

## Right Join

`RIGHT JOIN` trong SQL là một loại join dùng để kết hợp dữ liệu từ hai bảng dựa trên một điều kiện, trả về tất cả các hàng từ bảng bên phải và các hàng từ bảng trái có điều kiện kết nối là TRUE hoặc NULL.

### Ngữ cảnh:

`RIGHT JOIN` thường được sử dụng khi bạn muốn lấy tất cả các hàng từ bảng bên phải kể cả khi không có sự khớp với điều kiện trong bảng bên trái.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `RIGHT JOIN`:

Giả sử bạn có hai bảng `orders` và `customers`, và bạn muốn lấy thông tin đơn đặt hàng cùng với thông tin của khách hàng (nếu có):

```sql
SELECT orders.order_id, orders.order_date, customers.customer_name
FROM orders
RIGHT JOIN customers ON orders.customer_id = customers.customer_id;
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `RIGHT JOIN` được sử dụng để kết hợp dữ liệu từ bảng `orders` và `customers` dựa trên điều kiện `orders.customer_id = customers.customer_id`. Kết quả sẽ chứa tất cả các hàng từ bảng `customers`, bất kể có sự khớp với `customer_id` trong bảng `orders` hay không.

Nếu có sự khớp, thông tin về đơn đặt hàng sẽ được lấy. Nếu không có sự khớp, các cột từ bảng `orders` sẽ chứa giá trị NULL. Kết quả sẽ bao gồm tất cả thông tin khách hàng và thông tin đơn đặt hàng nếu có, hoặc NULL nếu không có thông tin đơn đặt hàng cho khách hàng đó.

---

## Full Join

`FULL JOIN` trong SQL là một loại join kết hợp dữ liệu từ hai bảng dựa trên một điều kiện, trả về tất cả các hàng từ cả bảng bên trái và bảng bên phải, và các hàng từ cả hai bảng có điều kiện kết nối là TRUE hoặc NULL.

### Ngữ cảnh:

`FULL JOIN` được sử dụng khi bạn muốn kết hợp tất cả các dữ liệu từ cả hai bảng, bao gồm cả những hàng không khớp với điều kiện.

### Cách sử dụng và Ví dụ:

Ví dụ sử dụng `FULL JOIN`:

Giả sử bạn có hai bảng `employees` và `departments`, và bạn muốn lấy thông tin về tất cả nhân viên cùng với thông tin về phòng ban (nếu có):

```sql
SELECT employees.employee_id, employees.employee_name, departments.department_name
FROM employees
FULL JOIN departments ON employees.department_id = departments.department_id;
```

### Giải thích chi tiết:

Trong ví dụ trên, câu lệnh `FULL JOIN` được sử dụng để kết hợp dữ liệu từ bảng `employees` và `departments` dựa trên điều kiện `employees.department_id = departments.department_id`. Kết quả sẽ chứa tất cả các hàng từ cả hai bảng.

Nếu có sự khớp, thông tin về nhân viên và phòng ban tương ứng sẽ được lấy. Nếu không có sự khớp, các cột từ bảng nào không có thông tin sẽ chứa giá trị NULL. Kết quả sẽ bao gồm tất cả thông tin nhân viên và thông tin phòng ban nếu có, hoặc NULL nếu không có thông tin phòng ban hoặc nhân viên.

---
