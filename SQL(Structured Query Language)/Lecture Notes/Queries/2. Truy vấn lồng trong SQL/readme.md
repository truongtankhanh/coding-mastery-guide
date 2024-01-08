# Các phép toán tập hợp

## Phép trừ

Trong SQL, truy vấn lồng là kỹ thuật mà một truy vấn được nhúng bên trong một truy vấn khác. Trong ngữ cảnh của phép trừ, truy vấn lồng có thể được sử dụng để lấy các bản ghi từ một bảng dựa trên điều kiện nào đó và loại bỏ các bản ghi đó khỏi kết quả của truy vấn chính.

### Ví dụ với phép trừ và truy vấn lồng:

Giả sử chúng ta có hai bảng, `students` và `excellent_students`. Chúng ta muốn lấy tất cả sinh viên từ bảng `students` nhưng loại bỏ những sinh viên xuất sắc từ bảng `excellent_students`.

```sql
SELECT student_id, student_name
FROM students
WHERE student_id NOT IN (
    SELECT student_id
    FROM excellent_students
);
```

Trong ví dụ này, truy vấn lồng (truy vấn con) là `SELECT student_id FROM excellent_students`, và nó được sử dụng trong mệnh đề `NOT IN` của truy vấn chính. Điều này có nghĩa là chúng ta đang lấy tất cả sinh viên từ bảng `students` trừ những sinh viên có trong bảng `excellent_students`.

### Giải thích chi tiết:

- `SELECT student_id FROM excellent_students`: Truy vấn lồng này trả về tất cả `student_id` của những sinh viên xuất sắc từ bảng `excellent_students`.
- `SELECT student_id, student_name FROM students`: Truy vấn chính này lấy `student_id` và `student_name` từ bảng `students`.
- `WHERE student_id NOT IN (...)`: Điều kiện `NOT IN` được sử dụng để loại bỏ những sinh viên có `student_id` tương tự những sinh viên có trong kết quả của truy vấn lồng.

Truy vấn lồng với phép trừ được sử dụng để loại bỏ các bản ghi từ kết quả của truy vấn chính dựa trên điều kiện được xác định trong truy vấn con. Điều này cho phép bạn thực hiện các phép tập hợp như phép trừ để lấy kết quả chính xác mà bạn muốn từ cơ sở dữ liệu của mình.

---

## Phép giao

Trong SQL, truy vấn lồng là kỹ thuật sử dụng một truy vấn bên trong một truy vấn khác. Trong ngữ cảnh của phép giao, truy vấn lồng được sử dụng để lấy các bản ghi tồn tại trong cả hai truy vấn được kết hợp.

### Ví dụ với phép giao và truy vấn lồng:

Giả sử chúng ta có hai bảng, `students` và `good_students`, và muốn lấy danh sách sinh viên mà đồng thời có trong cả hai bảng.

```sql
SELECT student_id, student_name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM good_students
);
```

Trong truy vấn này:

- Truy vấn lồng là `SELECT student_id FROM good_students`, trả về danh sách các `student_id` có trong bảng `good_students`.
- Truy vấn chính là `SELECT student_id, student_name FROM students`, trả về `student_id` và `student_name` từ bảng `students`.
- Điều kiện `WHERE student_id IN (...)` sử dụng kết quả của truy vấn lồng để chọn các sinh viên mà `student_id` của họ có trong cả hai bảng.

### Giải thích chi tiết:

- `SELECT student_id FROM good_students`: Truy vấn lồng này trả về danh sách các `student_id` có trong bảng `good_students`.
- `SELECT student_id, student_name FROM students`: Truy vấn chính này lấy `student_id` và `student_name` từ bảng `students`.
- `WHERE student_id IN (...)`: Điều kiện `IN` được sử dụng để chọn các sinh viên mà `student_id` của họ có trong danh sách sinh viên từ truy vấn lồng. Điều này chỉ lấy các sinh viên có `student_id` xuất hiện trong cả hai bảng.

Truy vấn lồng với phép giao cho phép bạn lấy các bản ghi từ cơ sở dữ liệu mà tồn tại trong cả hai truy vấn. Nó hữu ích khi bạn muốn trích xuất thông tin từ các bảng và chỉ quan tâm đến dữ liệu mà tồn tại ở cả hai nơi.

---

## Phép hội

Trong SQL, truy vấn lồng là kỹ thuật sử dụng một truy vấn bên trong một truy vấn khác. Trong ngữ cảnh của phép hội (intersect), truy vấn lồng được sử dụng để lấy các bản ghi xuất hiện trong cả hai truy vấn được kết hợp.

### Ví dụ với phép hội và truy vấn lồng:

Giả sử chúng ta có hai bảng, `students` và `excellent_students`, và muốn lấy danh sách sinh viên có trong cả hai bảng.

```sql
SELECT student_id, student_name
FROM students
WHERE student_id IN (
    SELECT student_id
    FROM excellent_students
);
```

Trong truy vấn này:

- Truy vấn lồng là `SELECT student_id FROM excellent_students`, trả về danh sách các `student_id` có trong bảng `excellent_students`.
- Truy vấn chính là `SELECT student_id, student_name FROM students`, trả về `student_id` và `student_name` từ bảng `students`.
- Điều kiện `WHERE student_id IN (...)` sử dụng kết quả của truy vấn lồng để chọn các sinh viên mà `student_id` của họ có trong cả hai bảng.

### Giải thích chi tiết:

- `SELECT student_id FROM excellent_students`: Truy vấn lồng này trả về danh sách các `student_id` có trong bảng `excellent_students`.
- `SELECT student_id, student_name FROM students`: Truy vấn chính này lấy `student_id` và `student_name` từ bảng `students`.
- `WHERE student_id IN (...)`: Điều kiện `IN` được sử dụng để chọn các sinh viên mà `student_id` của họ có trong danh sách sinh viên từ truy vấn lồng. Điều này chỉ lấy các sinh viên có `student_id` xuất hiện trong cả hai bảng.

Truy vấn lồng với phép hội cho phép bạn lấy các bản ghi từ cơ sở dữ liệu mà xuất hiện trong cả hai truy vấn. Nó hữu ích khi bạn muốn trích xuất thông tin từ các bảng và chỉ quan tâm đến dữ liệu mà xuất hiện trong cả hai nơi.

---

## Phép chia

Trong SQL, phép chia (division) không phải lúc nào cũng được hỗ trợ rộng rãi, và không tất cả các hệ quản trị cơ sở dữ liệu đều có cú pháp cho phép chia. Phép chia trong SQL thường được sử dụng để lấy các giá trị trong một tập hợp mà không có liên quan đến một tập hợp khác.

Tuy nhiên, với một số hệ quản trị cơ sở dữ liệu, truy vấn lồng với phép chia có thể được thực hiện bằng cách sử dụng các truy vấn con và các toán tử tập hợp để đạt được mục tiêu tương tự.

### Ví dụ về truy vấn lồng và phép chia:

Giả sử chúng ta có hai bảng: `courses` và `students`, trong đó `courses` chứa thông tin về các khóa học, và `students` chứa thông tin về sinh viên và các khóa học mà họ đã đăng ký. Để lấy danh sách các sinh viên đã đăng ký tất cả các khóa học có sẵn trong cơ sở dữ liệu, chúng ta có thể sử dụng truy vấn lồng với các phép giao và hợp.

```sql
SELECT student_id, student_name
FROM students AS s
WHERE NOT EXISTS (
    SELECT course_id
    FROM courses AS c
    WHERE NOT EXISTS (
        SELECT *
        FROM student_courses AS sc
        WHERE sc.course_id = c.course_id
        AND sc.student_id = s.student_id
    )
);
```

### Giải thích chi tiết:

- Truy vấn lồng được sử dụng để lấy danh sách các sinh viên đã đăng ký tất cả các khóa học có sẵn trong cơ sở dữ liệu.
- Trong ví dụ này, truy vấn lồng sử dụng một loạt các truy vấn con để kiểm tra xem mỗi sinh viên đã đăng ký tất cả các khóa học hay không.
- Câu truy vấn này kiểm tra mỗi sinh viên và lọc ra những sinh viên mà không tồn tại khóa học nào mà họ chưa đăng ký.

Truy vấn lồng với phép chia trong SQL thường được sử dụng để xác định các bản ghi trong một tập hợp mà không có liên quan đến tập hợp khác, và nó thường được thực hiện bằng cách sử dụng các truy vấn con và các toán tử tập hợp. Tuy nhiên, cú pháp cụ thể có thể thay đổi tùy theo hệ quản trị cơ sở dữ liệu bạn sử dụng.

---

# Sử dụng Gom nhóm

Trong SQL, truy vấn lồng có thể sử dụng phù hợp với các truy vấn con trong các trường hợp sử dụng phép gom nhóm. Phép gom nhóm (GROUP BY) được sử dụng để nhóm các hàng dữ liệu có cùng giá trị trong một hoặc nhiều cột, thường kết hợp với các hàm tổng hợp như SUM(), COUNT(), AVG(), MAX(), MIN() để thực hiện các tính toán trên các nhóm này.

### Ví dụ với truy vấn lồng và phép gom nhóm:

Giả sử chúng ta có bảng `orders` với thông tin về đơn hàng và các mục đơn hàng, và chúng ta muốn lấy tổng số lượng sản phẩm bán ra của mỗi khách hàng.

```sql
SELECT customer_id, SUM(quantity) AS total_quantity
FROM (
    SELECT customer_id, quantity
    FROM orders
) AS subquery
GROUP BY customer_id;
```

### Giải thích chi tiết:

- Trong ví dụ này, truy vấn lồng (truy vấn con) là `SELECT customer_id, quantity FROM orders`, trả về `customer_id` và `quantity` từ bảng `orders`.
- Truy vấn chính sử dụng kết quả của truy vấn lồng và sử dụng phép gom nhóm (`GROUP BY customer_id`) để nhóm các đơn hàng theo `customer_id`.
- Hàm tổng hợp SUM() được sử dụng để tính tổng `quantity` (số lượng) của mỗi khách hàng.
- Kết quả trả về sẽ là tổng số lượng sản phẩm mà mỗi khách hàng đã mua.

Truy vấn lồng trong ngữ cảnh của phép gom nhóm cho phép bạn áp dụng các hàm tổng hợp và phép gom nhóm cho kết quả của truy vấn con, rồi tiếp tục thực hiện các tính toán trên dữ liệu đã gom nhóm để trả về kết quả mong muốn.

---
