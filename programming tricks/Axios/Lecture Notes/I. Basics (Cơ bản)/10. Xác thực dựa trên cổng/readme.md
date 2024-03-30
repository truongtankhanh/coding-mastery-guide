## Xác thực dựa trên cổng với Axios

**Xác thực dựa trên cổng** là một phương thức xác thực yêu cầu HTTP bằng cách sử dụng cổng TCP. Axios hỗ trợ xác thực dựa trên cổng bằng cách sử dụng các phiên bản.

### Khái niệm

**Xác thực dựa trên cổng** hoạt động bằng cách yêu cầu máy khách kết nối với một cổng cụ thể trên máy chủ. Máy chủ sẽ xác thực máy khách dựa trên cổng mà nó kết nối.

### Ngữ cảnh sử dụng

**Xác thực dựa trên cổng** hữu ích trong các trường hợp sau:

- **Bảo mật các API nội bộ:** Bạn có thể sử dụng xác thực dựa trên cổng để bảo mật các API nội bộ chỉ có thể truy cập được từ các máy chủ cụ thể.
- **Hạn chế truy cập vào các tài nguyên:** Bạn có thể sử dụng xác thực dựa trên cổng để hạn chế truy cập vào các tài nguyên cụ thể chỉ có thể truy cập được từ các máy chủ cụ thể.

### Ví dụ sử dụng

Dưới đây là ví dụ về cách sử dụng **xác thực dựa trên cổng** với Axios:

```javascript
const axios = axios.create({
  baseURL: "https://api.example.com",
  auth: {
    username: "user",
    password: "password",
  },
});

axios.get("/users");
```

Ví dụ này sử dụng `auth` để cấu hình xác thực cơ bản với tên người dùng là `user` và mật khẩu là `password`. Axios sẽ tự động thêm thông tin xác thực vào header của yêu cầu.

## Lời kết

**Xác thực dựa trên cổng** là một phương thức xác thực đơn giản và hiệu quả có thể được sử dụng với Axios để bảo mật các API và tài nguyên.

**Lưu ý:**

- Xác thực dựa trên cổng không an toàn như các phương thức xác thực khác, chẳng hạn như OAuth.
- Bạn nên sử dụng HTTPS cùng với xác thực dựa trên cổng để bảo mật dữ liệu của bạn.
