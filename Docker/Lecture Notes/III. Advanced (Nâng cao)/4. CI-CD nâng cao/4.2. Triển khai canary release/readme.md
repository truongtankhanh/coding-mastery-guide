## Triển khai Canary Release

**Khái niệm:**

- **Canary release:** là một kỹ thuật triển khai phần mềm mới cho một nhóm nhỏ người dùng trước khi triển khai cho toàn bộ người dùng.
- **Docker:** là một nền tảng mã nguồn mở để phát triển, vận hành và triển khai các ứng dụng.
- **Docker Compose:** là một công cụ giúp bạn định nghĩa và triển khai các ứng dụng đa container.

**Ngữ cảnh:**

Canary release được sử dụng trong các trường hợp sau:

- **Giảm thiểu rủi ro:** Triển khai canary release giúp bạn giảm thiểu rủi ro ảnh hưởng đến toàn bộ người dùng nếu phần mềm mới có lỗi.
- **Thu thập phản hồi:** Triển khai canary release giúp bạn thu thập phản hồi từ một nhóm nhỏ người dùng trước khi triển khai cho toàn bộ người dùng.
- **Cải thiện hiệu suất:** Triển khai canary release giúp bạn cải thiện hiệu suất của phần mềm mới trước khi triển khai cho toàn bộ người dùng.

**Cách sử dụng:**

**1. Tạo hai phiên bản ứng dụng:**

- **Phiên bản hiện tại:** Phiên bản ứng dụng đang được sử dụng bởi toàn bộ người dùng.
- **Phiên bản mới:** Phiên bản ứng dụng mới mà bạn muốn triển khai.

**2. Sử dụng Docker Compose để định nghĩa hai phiên bản ứng dụng:**

```
version: "3"

services:
  app-current:
    image: "my-app:current"
    ports:
      - "80:80"
  app-new:
    image: "my-app:new"
    ports:
      - "8080:80"
```

**3. Triển khai phiên bản mới cho một nhóm nhỏ người dùng:**

```
docker-compose up -d app-new
```

Lệnh này sẽ khởi động container cho phiên bản mới của ứng dụng.

**4. Cấu hình bộ cân bằng tải để chuyển hướng lưu lượng truy cập từ một nhóm nhỏ người dùng đến phiên bản mới:**

```
upstream app {
  server localhost:80;
  server localhost:8080;
}

server {
  listen 80;
  server_name localhost;

  location / {
    proxy_pass http://app;
  }
}
```

**5. Theo dõi hiệu suất và thu thập phản hồi từ nhóm nhỏ người dùng:**

- Theo dõi các chỉ số, chẳng hạn như thời gian phản hồi và tỷ lệ lỗi.
- Thu thập phản hồi từ người dùng về phiên bản mới.

**6. Triển khai phiên bản mới cho toàn bộ người dùng:**

```
docker-compose scale app-current=0
docker-compose scale app-new=1
```

Lệnh này sẽ tắt container cho phiên bản hiện tại và khởi động container cho phiên bản mới.

**Kết luận:**

Canary release là một kỹ thuật hiệu quả để triển khai phần mềm mới một cách an toàn và hiệu quả.

**Lưu ý:**

- Nên triển khai canary release cho một nhóm nhỏ người dùng đại diện cho toàn bộ người dùng.
- Nên theo dõi hiệu suất và thu thập phản hồi từ nhóm nhỏ người dùng trước khi triển khai cho toàn bộ người dùng.
