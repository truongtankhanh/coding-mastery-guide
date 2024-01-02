**Khái niệm:**

- Các cấu trúc kết hợp trong lập trình là các cấu trúc dữ liệu mà mỗi phần tử trong đó có thể chứa nhiều hơn một giá trị hoặc phần tử khác. Cấu trúc kết hợp thường được sử dụng để tổ chức và lưu trữ dữ liệu có tính chất phức tạp hơn so với các cấu trúc dữ liệu cơ bản như mảng hoặc danh sách.

**Ngữ cảnh:**

- **Tính linh hoạt:** Cấu trúc kết hợp cho phép lưu trữ nhiều loại dữ liệu khác nhau trong một phần tử duy nhất.
- **Dễ dàng mở rộng:** Các phần tử có thể chứa các cấu trúc dữ liệu phức tạp hơn như danh sách, mảng, hoặc các cấu trúc kết hợp khác.
- **Ứng dụng rộng rãi:** Sử dụng trong việc biểu diễn dữ liệu phức tạp, tổ chức thông tin, hoặc lưu trữ thông tin liên quan.

**Cách sử dụng và ví dụ về cấu trúc kết hợp:**

Dưới đây là một ví dụ đơn giản về cách sử dụng cấu trúc kết hợp bằng Python sử dụng từ điển (dictionary):

```python
# Tạo một cấu trúc kết hợp đơn giản với từ điển
person = {
    "name": "John",
    "age": 30,
    "email": "john@example.com",
    "address": {
        "street": "123 Street",
        "city": "Cityville",
        "zipcode": "12345"
    },
    "skills": ["Python", "JavaScript", "SQL"]
}

# Truy cập và in ra thông tin từ cấu trúc kết hợp
print("Name:", person["name"])  # Output: Name: John
print("Age:", person["age"])  # Output: Age: 30
print("Email:", person["email"])  # Output: Email: john@example.com
print("Address:", person["address"]["city"])  # Output: Address: Cityville
print("Skills:", ", ".join(person["skills"]))  # Output: Skills: Python, JavaScript, SQL
```

Trong ví dụ này, chúng ta sử dụng từ điển để tạo một cấu trúc kết hợp đơn giản. Từ điển này chứa thông tin về một người, bao gồm tên, tuổi, email, địa chỉ (bao gồm đường, thành phố, mã bưu điện), và kỹ năng (lưu trữ dưới dạng một danh sách).

Cấu trúc kết hợp cho phép tổ chức thông tin một cách linh hoạt và phù hợp với việc lưu trữ thông tin liên quan và có cấu trúc phức tạp hơn.
