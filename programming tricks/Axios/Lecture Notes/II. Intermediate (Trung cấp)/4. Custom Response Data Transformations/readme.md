## Thủ thuật lập trình Axios - Chuyển đổi dữ liệu phản hồi tùy chỉnh

**Khái niệm:**

**Chuyển đổi dữ liệu phản hồi tùy chỉnh** là tính năng cho phép bạn xử lý dữ liệu phản hồi trước khi nó được truyền vào hàm xử lý thành công hoặc lỗi.

**Ngữ cảnh:**

Chuyển đổi dữ liệu phản hồi tùy chỉnh hữu ích trong các trường hợp sau:

- **Chuyển đổi dữ liệu sang định dạng khác:** Ví dụ, bạn có thể chuyển đổi dữ liệu JSON sang định dạng JavaScript.
- **Thêm dữ liệu bổ sung vào dữ liệu phản hồi:** Ví dụ, bạn có thể thêm timestamp vào dữ liệu phản hồi.
- **Loại bỏ dữ liệu không cần thiết khỏi dữ liệu phản hồi:** Ví dụ, bạn có thể loại bỏ các thuộc tính không cần thiết khỏi dữ liệu phản hồi.

**Cách sử dụng:**

Để sử dụng tính năng chuyển đổi dữ liệu phản hồi tùy chỉnh, bạn sử dụng thuộc tính `transformResponse` của đối tượng cấu hình yêu cầu. Thuộc tính `transformResponse` là một mảng các hàm. Mỗi hàm được gọi lần lượt với dữ liệu phản hồi và trả về dữ liệu đã được xử lý.

**Ví dụ:**

```javascript
const instance = axios.create({
  transformResponse: [
    (data) => {
      // Chuyển đổi dữ liệu JSON sang định dạng JavaScript
      return JSON.parse(data);
    },
    (data) => {
      // Thêm timestamp vào dữ liệu phản hồi
      data.timestamp = Date.now();
      return data;
    },
  ],
});

instance.get("/api/users").then((response) => {
  // Xử lý dữ liệu trả về
});
```

**Ví dụ chi tiết:**

Giả sử bạn có một API trả về dữ liệu JSON với định dạng sau:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

Bạn có thể sử dụng `transformResponse` để chuyển đổi dữ liệu JSON sang định dạng JavaScript và thêm timestamp vào dữ liệu phản hồi:

```javascript
const instance = axios.create({
  transformResponse: [
    (data) => {
      // Chuyển đổi dữ liệu JSON sang định dạng JavaScript
      return JSON.parse(data);
    },
    (data) => {
      // Thêm timestamp vào dữ liệu phản hồi
      data.timestamp = Date.now();
      return data;
    },
  ],
});

instance.get("/api/users").then((response) => {
  // Xử lý dữ liệu trả về
  console.log(response.data); // { id: 1, name: 'John Doe', email: 'johndoe@example.com', timestamp: 1674972000000 }
});
```

**Lợi ích:**

- **Tăng tính linh hoạt:** Việc sử dụng `transformResponse` giúp bạn tăng tính linh hoạt trong cách xử lý dữ liệu phản hồi.
- **Giảm thiểu mã:** Việc sử dụng `transformResponse` giúp bạn giảm thiểu mã bằng cách cho phép bạn xử lý dữ liệu phản hồi ở một vị trí tập trung.

**Lưu ý:**

- Bạn nên đảm bảo rằng các hàm `transformResponse` được viết chính xác và hiệu quả.
- Bạn nên sử dụng các thư viện hoặc framework hỗ trợ xử lý dữ liệu để đơn giản hóa việc xử lý dữ liệu.
