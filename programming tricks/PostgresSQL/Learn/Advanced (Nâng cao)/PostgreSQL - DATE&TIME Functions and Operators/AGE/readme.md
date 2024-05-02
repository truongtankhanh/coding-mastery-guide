## Hàm và Toán tử DATE/TIME - AGE trong PostgreSQL

**Khái niệm:**

Hàm `AGE()` trong PostgreSQL được sử dụng để tính toán khoảng thời gian giữa hai giá trị timestamp hoặc date. Hàm này trả về một giá trị INTERVAL thể hiện sự khác biệt về năm, tháng và ngày.

**Ngữ cảnh:**

Hàm `AGE()` được sử dụng trong nhiều trường hợp khác nhau, bao gồm:

- **Tính toán tuổi của một người:** Hàm `AGE()` có thể được sử dụng để tính toán tuổi của một người dựa trên ngày sinh của họ.
- **Tính toán thời gian còn lại của một dự án:** Hàm `AGE()` có thể được sử dụng để tính toán thời gian còn lại của một dự án dựa trên ngày bắt đầu và ngày kết thúc dự kiến.
- **So sánh hai giá trị timestamp hoặc date:** Hàm `AGE()` có thể được sử dụng để so sánh hai giá trị timestamp hoặc date để xác định giá trị nào mới hơn.

**Cách sử dụng:**

Hàm `AGE()` có hai dạng:

- **Dạng 1:**

```sql
AGE(timestamp)
```

Dạng này chỉ sử dụng một giá trị timestamp. Hàm `AGE()` sẽ trả về khoảng thời gian giữa giá trị timestamp được cung cấp và thời điểm hiện tại.

- **Dạng 2:**

```sql
AGE(timestamp1, timestamp2)
```

Dạng này sử dụng hai giá trị timestamp. Hàm `AGE()` sẽ trả về khoảng thời gian giữa hai giá trị timestamp được cung cấp.

**Ví dụ:**

```sql
-- Tính toán tuổi của một người sinh ngày 1 tháng 1 năm 2000

SELECT AGE(TIMESTAMP '2000-01-01');

-- Tính toán thời gian còn lại của dự án bắt đầu ngày 1 tháng 3 năm 2023 và kết thúc dự kiến ​​ngày 31 tháng 12 năm 2023

SELECT AGE(TIMESTAMP '2023-12-31', TIMESTAMP '2023-03-01');

-- So sánh hai giá trị timestamp

SELECT AGE(TIMESTAMP '2023-04-09') > AGE(TIMESTAMP '2023-03-08');
```

**Kết quả:**

```sql
-- 23 years 3 months 8 days
-- 9 months 29 days
-- t
```

**Lưu ý:**

- Hàm `AGE()` chỉ hoạt động với các giá trị timestamp và date.
- Hàm `AGE()` không tính đến thời gian.

**Tham khảo thêm:**

- Trang web chính thức của PostgreSQL: [https://www.postgresql.org/](https://www.postgresql.org/)
- Bài viết về Hàm và Toán tử DATE/TIME: [https://www.postgresql.org/docs/current/functions-datetime.html](https://www.postgresql.org/docs/current/functions-datetime.html)

**Hỗ trợ:**

- Cộng đồng PostgreSQL Việt Nam: [https://www.postgresql.org/community/](https://www.postgresql.org/community/)
- Trang web Stack Overflow: [https://stackoverflow.com/questions/tagged/postgresql](https://stackoverflow.com/questions/tagged/postgresql)
