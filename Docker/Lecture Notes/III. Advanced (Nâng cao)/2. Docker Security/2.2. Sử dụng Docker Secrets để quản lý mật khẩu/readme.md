## Sử dụng Docker Secrets để quản lý mật khẩu

**Khái niệm:**

- **Docker Secrets:** là một tính năng của Docker cho phép bạn lưu trữ các dữ liệu nhạy cảm, chẳng hạn như mật khẩu, một cách an toàn.
- **Secret:** là một tập hợp các cặp key-value được lưu trữ dưới dạng mã hóa.
- **Volume:** là một thư mục được chia sẻ giữa container và host.

**Ngữ cảnh:**

Sử dụng Docker Secrets để quản lý mật khẩu là một cách an toàn hơn so với việc lưu trữ mật khẩu trong môi trường container hoặc trong file cấu hình.

**Cách sử dụng:**

**1. Tạo secret:**

```
docker secret create my-secret password=my-password
```

Lệnh này sẽ tạo một secret có tên `my-secret` với key `password` và value `my-password`.

**2. Truy cập secret trong container:**

Bạn có thể truy cập secret trong container bằng cách sử dụng môi trường hoặc volume.

**a. Truy cập secret bằng môi trường:**

```
docker run -e SECRET_PASSWORD=$(docker secret inspect my-secret password) my-image
```

Lệnh này sẽ khởi động một container với biến môi trường `SECRET_PASSWORD` được đặt thành giá trị của key `password` trong secret `my-secret`.

**b. Truy cập secret bằng volume:**

```
docker run -v /run/secrets:/secrets my-image
```

Lệnh này sẽ khởi động một container với volume `/run/secrets` được gắn vào host. Secret `my-secret` sẽ được lưu trữ trong file `/run/secrets/my-secret`.

**Ví dụ:**

Giả sử bạn muốn triển khai một ứng dụng web sử dụng cơ sở dữ liệu PostgreSQL. Bạn có thể sử dụng Docker Secrets để lưu trữ mật khẩu PostgreSQL như sau:

**1. Tạo secret:**

```
docker secret create my-secret password=my-password
```

**2. Triển khai ứng dụng web:**

```
docker run -e POSTGRES_PASSWORD=$(docker secret inspect my-secret password) -p 5432:5432 postgres
```

Lệnh này sẽ khởi động một container PostgreSQL với biến môi trường `POSTGRES_PASSWORD` được đặt thành giá trị của key `password` trong secret `my-secret`.

**Kết luận:**

Sử dụng Docker Secrets là một cách an toàn và hiệu quả để quản lý mật khẩu trong môi trường container.

**Lưu ý:**

- Docker Secrets không phải là giải pháp thay thế cho trình quản lý mật khẩu chuyên dụng.
- Nên sử dụng Docker Secrets kết hợp với các biện pháp bảo mật khác để bảo vệ dữ liệu nhạy cảm.
