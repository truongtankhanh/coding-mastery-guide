## Cách sử dụng Subqueries và Nested Queries để giải quyết các vấn đề phức tạp.

Subqueries và nested queries là công cụ mạnh mẽ trong SQL để giải quyết các vấn đề phức tạp hoặc truy xuất dữ liệu từ nhiều bảng khác nhau. Dưới đây là cách bạn có thể trình bày và trả lời câu hỏi này:

### 1. **Subqueries:**

- **Giải thích:** Subqueries là câu truy vấn được nhúng trong một câu truy vấn lớn hơn, thường sử dụng kết quả của câu truy vấn con để thực hiện truy vấn chính.
- **Ví dụ:** `SELECT name FROM customers WHERE id IN (SELECT customer_id FROM orders WHERE total_amount > 1000);`

### 2. **Nested Queries:**

- **Giải thích:** Nested queries là việc sử dụng một truy vấn lồng vào một truy vấn khác, thường dùng để kết hợp kết quả của các truy vấn và thực hiện các thao tác phức tạp hơn.
- **Ví dụ:** `SELECT name, (SELECT AVG(total_amount) FROM orders WHERE customer_id = customers.id) AS avg_order_amount FROM customers;`

### 3. **Giải Quyết Vấn Đề Phức Tạp:**

- **Giải thích:** Sử dụng subqueries hoặc nested queries để giải quyết các vấn đề phức tạp như tìm kiếm dữ liệu từ nhiều bảng, tính toán, hay áp dụng các điều kiện phức tạp.
- **Ví dụ:** Khi cần tìm thông tin của các khách hàng có tổng số lượng đơn hàng lớn hơn trung bình, bạn có thể sử dụng subquery để lấy danh sách các khách hàng đáp ứng điều kiện này.

### Cách Trả Lời:

"Subqueries và nested queries là công cụ mạnh mẽ trong SQL để giải quyết các vấn đề phức tạp. Ví dụ, tôi đã sử dụng subquery để lấy danh sách các khách hàng có tổng số lượng đơn hàng lớn hơn trung bình. Điều này giúp tôi xác định các khách hàng có hành vi mua hàng đặc biệt và tối ưu chiến lược tiếp thị."

Thêm ví dụ cụ thể từ kinh nghiệm của bạn sẽ giúp câu trả lời trở nên rõ ràng và minh họa hơn.

---

## Giải thích cách sử dụng OUTER JOINs (LEFT, RIGHT, FULL).

Sử dụng OUTER JOINs (LEFT, RIGHT, FULL) trong SQL là cách mạnh mẽ để kết hợp dữ liệu từ nhiều bảng và bao gồm cả các hàng không có kết quả trong cả hai bảng hoặc một trong hai bảng. Dưới đây là cách bạn có thể phân tích và trình bày câu hỏi này:

### 1. **LEFT JOIN:**

- **Giải thích:** LEFT JOIN trả về tất cả các hàng từ bảng bên trái (từ bảng đầu tiên trong câu lệnh JOIN) và các hàng phù hợp từ bảng bên phải (bảng thứ hai trong câu lệnh JOIN). Nếu không có kết quả phù hợp, các cột từ bảng bên phải sẽ có giá trị NULL.
- **Ví dụ:** `SELECT customers.name, orders.order_id FROM customers LEFT JOIN orders ON customers.customer_id = orders.customer_id;`

### 2. **RIGHT JOIN:**

- **Giải thích:** RIGHT JOIN tương tự như LEFT JOIN nhưng ngược lại. Nó trả về tất cả các hàng từ bảng bên phải và các hàng phù hợp từ bảng bên trái. Các cột từ bảng bên trái sẽ có giá trị NULL nếu không có kết quả phù hợp.
- **Ví dụ:** `SELECT customers.name, orders.order_id FROM customers RIGHT JOIN orders ON customers.customer_id = orders.customer_id;`

### 3. **FULL OUTER JOIN:**

- **Giải thích:** FULL OUTER JOIN trả về tất cả các hàng từ cả hai bảng. Nó kết hợp các hàng từ cả bảng bên trái và bảng bên phải và điền giá trị NULL cho các hàng không có kết quả phù hợp.
- **Ví dụ:** `SELECT customers.name, orders.order_id FROM customers FULL OUTER JOIN orders ON customers.customer_id = orders.customer_id;`

### 4. **Sử Dụng OUTER JOINs để Kết Hợp Dữ Liệu:**

- **Giải thích:** OUTER JOINs rất hữu ích khi bạn muốn kết hợp dữ liệu từ các bảng mà có thể không có kết quả phù hợp hoặc có kết quả không đầy đủ từ một trong các bảng đó.
- **Ví dụ:** Khi bạn muốn hiển thị tất cả các sản phẩm và số lượng tồn trong kho, bao gồm cả sản phẩm không có số lượng tồn, bạn có thể sử dụng LEFT JOIN giữa bảng sản phẩm và bảng tồn kho.

### Cách Trả Lời:

"OUTER JOINs như LEFT, RIGHT và FULL cung cấp cách mạnh mẽ để kết hợp dữ liệu từ nhiều bảng trong SQL. Ví dụ, tôi đã sử dụng LEFT JOIN để hiển thị danh sách khách hàng cùng với các đơn hàng của họ, bao gồm cả các khách hàng không có đơn hàng nào."

Việc cung cấp ví dụ cụ thể sẽ giúp minh họa rõ hơn về cách sử dụng OUTER JOINs trong môi trường thực tế.

---
