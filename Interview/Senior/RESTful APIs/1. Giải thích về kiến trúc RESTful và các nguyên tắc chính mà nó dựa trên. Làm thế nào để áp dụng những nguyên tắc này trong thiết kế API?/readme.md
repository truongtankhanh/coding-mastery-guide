RESTful là một kiến trúc phần mềm được thiết kế để tạo ra các hệ thống phân phối, dựa trên nguyên tắc của REST (Representational State Transfer). Khi trả lời câu hỏi này, bạn có thể tập trung vào các nguyên tắc chính của REST và cách áp dụng chúng trong thiết kế API:

---

### Kiến trúc RESTful và Nguyên tắc chính

**Nguyên tắc của REST**:

1. **Cấu trúc dữ liệu được đại diện (Representation)**:

   - Dữ liệu được truyền qua API được biểu diễn dưới dạng các đối tượng hoặc tài nguyên, thường là JSON hoặc XML.

2. **Các endpoint duy nhất (Unique Endpoints)**:

   - Mỗi tài nguyên được đại diện bởi một endpoint duy nhất (ví dụ: `/users`, `/products`).

3. **Trạng thái giao diện làm động (Stateless Interaction)**:

   - Mỗi yêu cầu từ client đến server chứa đủ thông tin cần thiết để server hiểu yêu cầu, không cần phụ thuộc vào trạng thái trước đó.

4. **Giao diện thể hiện Hypermedia (HATEOAS)**:
   - Cung cấp các liên kết hypermedia (hyperlinks) trong các phản hồi để cho phép client điều hướng API một cách tự động.

**Áp dụng Nguyên tắc trong Thiết kế API**:

1. **Quy tắc Endpoint duy nhất**:

   - Thiết kế các endpoint dựa trên tài nguyên cần quản lý và tránh việc tạo quá nhiều endpoint không cần thiết.

2. **Cấu trúc Dữ liệu Biểu diễn**:

   - Sử dụng định dạng dữ liệu phổ biến như JSON hoặc XML để biểu diễn dữ liệu được trả về từ API.

3. **Tạo Liên kết Hypermedia**:

   - Cung cấp các liên kết trong phản hồi để cho phép client điều hướng API một cách tự động.

4. **Bảo trì Trạng thái Stateless**:
   - Yêu cầu từ client phải chứa đủ thông tin cần thiết để server hiểu yêu cầu mà không cần dựa vào trạng thái trước đó.

**Ví dụ Áp dụng Nguyên tắc RESTful trong Thiết kế API**:

```json
{
  "users": {
    "GET": "/users",
    "POST": "/users",
    "DELETE": "/users/{id}"
  }
}
```

---

Khi trả lời, tập trung vào các nguyên tắc cơ bản của REST và cách bạn áp dụng chúng trong thiết kế API. Sử dụng ví dụ JSON cụ thể để minh họa cách bạn thiết kế các endpoint và cung cấp thông tin về cấu trúc dữ liệu và liên kết hypermedia.
