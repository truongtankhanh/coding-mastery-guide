## Kết nối container với dịch vụ bên ngoài

**Khái niệm:**

- **Kết nối container với dịch vụ bên ngoài:** là việc cho phép container truy cập các dịch vụ chạy trên các máy chủ khác hoặc trên internet.
- **Docker network driver:** là một phần mềm cho phép Docker tạo và quản lý mạng cho các container.
- **Bridge network driver:** là loại network driver phổ biến nhất cho phép các container kết nối với các dịch vụ bên ngoài.
- **Port forwarding:** là kỹ thuật cho phép chuyển tiếp lưu lượng truy cập từ một cổng sang một cổng khác.

**Ngữ cảnh:**

Kết nối container với dịch vụ bên ngoài là một việc cần thiết trong các trường hợp sau:

- **Truy cập cơ sở dữ liệu:** Container cần truy cập cơ sở dữ liệu chạy trên một máy chủ khác.
- **Truy cập API:** Container cần truy cập API được cung cấp bởi một dịch vụ bên ngoài.
- **Gửi email:** Container cần gửi email bằng cách sử dụng dịch vụ email bên ngoài.

**Cách sử dụng:**

**1. Sử dụng bridge network driver:**

Đây là cách đơn giản nhất để kết nối container với dịch vụ bên ngoài. Khi bạn sử dụng bridge network driver, container sẽ được cấp một địa chỉ IP trong cùng subnet với các máy chủ khác trên mạng.

**2. Sử dụng port forwarding:**

Bạn có thể sử dụng port forwarding để chuyển tiếp lưu lượng truy cập từ một cổng trên container sang một cổng trên một máy chủ khác.

**Ví dụ:**

Giả sử bạn muốn triển khai một ứng dụng web sử dụng cơ sở dữ liệu PostgreSQL chạy trên một máy chủ khác. Bạn có thể sử dụng bridge network driver và port forwarding để kết nối container với cơ sở dữ liệu như sau:

**1. Khởi động container Nginx:**

```
docker run --rm -it --network bridge -p 80:80 nginx
```

Lệnh này sẽ khởi động một container Nginx với cổng 80 được chuyển tiếp sang cổng 80 trên máy chủ.

**2. Khởi động container PostgreSQL:**

```
docker run --rm -it --network bridge -p 5432:5432 postgres
```

Lệnh này sẽ khởi động một container PostgreSQL với cổng 5432 được chuyển tiếp sang cổng 5432 trên máy chủ.

**3. Cấu hình ứng dụng web:**

Cấu hình ứng dụng web để sử dụng địa chỉ IP của container PostgreSQL và cổng 5432.

**Kết luận:**

Kết nối container với dịch vụ bên ngoài là một việc đơn giản và có thể được thực hiện bằng nhiều cách khác nhau.

**Lưu ý:**

- Nên sử dụng firewall để bảo vệ container khỏi các truy cập trái phép.
- Nên sử dụng các biện pháp bảo mật khác để bảo vệ dữ liệu nhạy cảm được truyền tải giữa container và dịch vụ bên ngoài.
