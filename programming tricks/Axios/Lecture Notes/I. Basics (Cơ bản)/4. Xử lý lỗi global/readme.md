## Bắt lỗi global trong Axios

**Bắt lỗi global** là kỹ thuật xử lý các lỗi xảy ra trong bất kỳ yêu cầu HTTP nào được thực hiện bởi Axios. Việc bắt lỗi global giúp bạn dễ dàng theo dõi và xử lý các lỗi, đảm bảo ứng dụng của bạn hoạt động ổn định.

### Khái niệm

Có hai cách phổ biến để bắt lỗi global trong Axios:

- **Interceptor:** Interceptor là một hàm được gọi trước hoặc sau khi thực hiện một yêu cầu HTTP. Bạn có thể sử dụng interceptor để chặn các yêu cầu không hợp lệ hoặc xử lý lỗi xảy ra trong quá trình thực hiện yêu cầu.
- **Try...catch:** Try...catch là một khối mã JavaScript giúp bạn xử lý các lỗi xảy ra trong một khối mã cụ thể.

### Ngữ cảnh sử dụng

Bắt lỗi global hữu ích trong các trường hợp sau:

- **Bạn muốn hiển thị thông báo lỗi cho người dùng.**
- **Bạn muốn ghi lại thông tin lỗi để theo dõi và gỡ lỗi.**
- **Bạn muốn thực hiện các hành động tự động khi xảy ra lỗi.**

### Ví dụ sử dụng

**Interceptor:**

Dưới đây là ví dụ về cách sử dụng interceptor để bắt lỗi global:

```javascript
axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // Xử lý lỗi 401: Unauthorized
    }
    return response;
  },
  (error) => {
    // Xử lý lỗi chung
    return Promise.reject(error);
  }
);
```

Ví dụ này sử dụng interceptor `response` để kiểm tra mã trạng thái của phản hồi. Nếu mã trạng thái là 401 (Unauthorized), interceptor sẽ xử lý lỗi 401.

**Try...catch:**

Dưới đây là ví dụ về cách sử dụng try...catch để bắt lỗi global:

```javascript
try {
  const response = await axios.get("https://api.example.com/users");
  // Xử lý dữ liệu của response
} catch (error) {
  // Xử lý lỗi
}
```

Ví dụ này sử dụng try...catch để xử lý lỗi xảy ra khi thực hiện yêu cầu GET đến API.

### Tham khảo thêm

- Tài liệu chính thức về interceptor trong Axios: [https://axios-http.com/docs/interceptors](https://axios-http.com/docs/interceptors)
- Tài liệu chính thức về try...catch trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Lời kết

Bắt lỗi global là một kỹ thuật quan trọng giúp bạn đảm bảo ứng dụng của bạn hoạt động ổn định. Sử dụng interceptor hoặc try...catch giúp bạn dễ dàng theo dõi và xử lý các lỗi xảy ra trong bất kỳ yêu cầu HTTP nào được thực hiện bởi Axios.
