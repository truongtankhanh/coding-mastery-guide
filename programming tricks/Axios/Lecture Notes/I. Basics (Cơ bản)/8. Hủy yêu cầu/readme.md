## Hủy yêu cầu với Signal trong Axios

**Hủy yêu cầu** là thao tác dừng một yêu cầu HTTP đang được thực hiện bởi Axios. Việc hủy yêu cầu hữu ích trong các trường hợp như người dùng rời đi hoặc yêu cầu không còn cần thiết nữa.

**Signal** là một API tiêu chuẩn JavaScript mới cho phép bạn hủy các yêu cầu HTTP một cách đơn giản và hiệu quả.

### Khái niệm

**Hủy yêu cầu với Signal** trong Axios được thực hiện bằng cách truyền `signal` vào cấu hình yêu cầu. Signal là một đối tượng có thể được sử dụng để hủy yêu cầu.

### Ngữ cảnh sử dụng

Hủy yêu cầu với Signal hữu ích trong các trường hợp sau:

- **Người dùng rời đi:** Nếu người dùng rời khỏi trang web hoặc ứng dụng trước khi yêu cầu được hoàn tất, bạn có thể hủy yêu cầu để tránh lãng phí tài nguyên.
- **Yêu cầu không còn cần thiết:** Nếu bạn không còn cần kết quả của một yêu cầu, bạn có thể hủy yêu cầu để tiết kiệm tài nguyên.
- **Lỗi mạng:** Nếu xảy ra lỗi mạng, bạn có thể hủy yêu cầu và thử lại sau.

### Ví dụ sử dụng

Dưới đây là ví dụ về cách hủy yêu cầu với Signal:

```javascript
const controller = new AbortController();

const axios = axios.get("https://api.example.com/users", {
  signal: controller.signal,
});

// Hủy yêu cầu khi người dùng rời đi
const unsubscribe = () => {
  controller.abort();
};

// Gọi unsubscribe khi người dùng rời đi
```

Ví dụ này sử dụng `AbortController` để tạo một bộ điều khiển hủy. Bộ điều khiển hủy được truyền vào yêu cầu GET. Khi người dùng rời đi, bạn có thể gọi phương thức `abort()` của bộ điều khiển hủy để hủy yêu cầu.

### Tham khảo thêm

- Tài liệu chính thức về Signal trong Axios: [https://axios-http.com/docs/cancellation](https://axios-http.com/docs/cancellation)

## Lời kết

Hủy yêu cầu với Signal là một cách hiệu quả và tương thích với nhiều trình duyệt để hủy các yêu cầu trong Axios. Sử dụng Signal giúp bạn tiết kiệm tài nguyên và cải thiện hiệu suất ứng dụng.

**Lưu ý:**

- `AbortController` và `Signal` được hỗ trợ bởi hầu hết các trình duyệt hiện đại, bao gồm Chrome, Firefox, Safari và Edge.
- Nếu bạn đang sử dụng phiên bản Axios cũ hơn 1.0.0, bạn có thể sử dụng `cancelToken`. Tuy nhiên, bạn nên cập nhật lên phiên bản mới hơn để sử dụng `AbortController` và `Signal`.
