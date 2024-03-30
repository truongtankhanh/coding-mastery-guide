## Tự động chuyển đổi dữ liệu JSON trong Axios

**Axios** là một thư viện JavaScript phổ biến giúp đơn giản hóa việc thực hiện các yêu cầu HTTP. Một trong những tính năng hữu ích của Axios là **tự động chuyển đổi dữ liệu JSON**.

### Khái niệm

**Tự động chuyển đổi dữ liệu JSON** trong Axios có nghĩa là bạn không cần phải chuyển đổi dữ liệu JavaScript sang định dạng JSON trước khi gửi đi với yêu cầu. Axios sẽ tự động thực hiện việc chuyển đổi này cho bạn.

### Ngữ cảnh sử dụng

**Tự động chuyển đổi dữ liệu JSON** hữu ích trong các trường hợp sau:

- **Gửi dữ liệu JSON đến API:** Bạn có thể gửi dữ liệu JavaScript sang API dưới dạng JSON mà không cần phải chuyển đổi thủ công.
- **Nhận dữ liệu JSON từ API:** Axios sẽ tự động chuyển đổi dữ liệu JSON trả về từ API sang đối tượng JavaScript.

### Ví dụ sử dụng

Dưới đây là ví dụ về cách sử dụng **tự động chuyển đổi dữ liệu JSON**:

**Gửi dữ liệu JSON:**

```javascript
const data = {
  name: "John Doe",
  email: "johndoe@example.com",
};

axios.post("https://api.example.com/users", data);
```

Ví dụ này gửi dữ liệu trong object `data` đến API với yêu cầu POST. Axios sẽ tự động chuyển đổi object `data` sang định dạng JSON trước khi gửi đi.

**Nhận dữ liệu JSON:**

```javascript
axios.get("https://api.example.com/users").then((response) => {
  const users = response.data;
  // Sử dụng dữ liệu users
});
```

Ví dụ này nhận dữ liệu JSON từ API với yêu cầu GET. Axios sẽ tự động chuyển đổi dữ liệu JSON trả về từ API sang object JavaScript và gán cho biến `users`.

## Lời kết

**Tự động chuyển đổi dữ liệu JSON** là một tính năng tiện lợi giúp bạn tiết kiệm thời gian và công sức khi sử dụng Axios. Sử dụng tính năng này giúp bạn đơn giản hóa việc gửi và nhận dữ liệu JSON với các yêu cầu HTTP.
