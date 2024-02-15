### Docker:

**Khái niệm:**
Docker là một nền tảng cho việc tạo, triển khai và quản lý các ứng dụng trong các container. Nó sử dụng công nghệ containerization để đóng gói các ứng dụng và tất cả các phụ thuộc của chúng thành các container, tạo ra môi trường cô lập và di động. Docker sử dụng Docker Engine để quản lý các container, cung cấp một giao diện dễ sử dụng để xây dựng, chạy và quản lý các ứng dụng.

**Ngữ cảnh và cách sử dụng:**

- **Tạo container:** Sử dụng lệnh `docker run` để tạo một container từ một image có sẵn trên Docker Hub hoặc local.

  ```
  docker run -it ubuntu:latest /bin/bash
  ```

  Đây là ví dụ tạo một container từ image Ubuntu và mở một session bash bên trong container.

- **Build image:** Tạo một image từ một Dockerfile.

  ```
  docker build -t myapp .
  ```

  Đây là ví dụ sử dụng Dockerfile để xây dựng một image có tên là `myapp`.

- **Quản lý container:** Các lệnh như `docker ps`, `docker stop`, `docker start`, `docker rm` để liệt kê, dừng, khởi động và xóa các container.

### Các runtime container khác:

**Containerd:**

- **Khái niệm:** Containerd là một runtime container được thiết kế để quản lý các container và các image container.
- **Cách hoạt động:** Containerd là một thành phần quan trọng trong hệ sinh thái của Docker và cung cấp các chức năng quản lý container cơ bản như tạo, xóa, và quản lý container. Nó không cung cấp các công cụ dành cho người dùng cuối, nhưng là nền tảng cho các công cụ như Docker để tương tác với các container.

**CRI-O:**

- **Khái niệm:** CRI-O là một runtime container tập trung vào việc triển khai các container chạy trong Kubernetes.
- **Cách hoạt động:** CRI-O thực hiện giao tiếp với Kubernetes qua Container Runtime Interface (CRI), cung cấp các chức năng cơ bản để tạo và quản lý các container.

**rkt (rktlet):**

- **Khái niệm:** rkt, hay còn gọi là rktlet, là một runtime container được phát triển bởi CoreOS (nay thuộc Red Hat).
- **Cách hoạt động:** rkt tập trung vào việc cung cấp tính an toàn và bảo mật cao, cho phép chạy các ứng dụng trong các container mà không cần sự phụ thuộc nhiều vào daemon.

**Ví dụ về việc sử dụng:**

- Để sử dụng `containerd`, Docker sử dụng nó như một thành phần quản lý thấp hơn để tương tác với các container.
- CRI-O thường được kết hợp với Kubernetes để triển khai các ứng dụng trong các container.

Mỗi runtime container có đặc điểm riêng về cách hoạt động và mục tiêu sử dụng, tùy thuộc vào ngữ cảnh và yêu cầu cụ thể của ứng dụng hoặc hệ thống.
