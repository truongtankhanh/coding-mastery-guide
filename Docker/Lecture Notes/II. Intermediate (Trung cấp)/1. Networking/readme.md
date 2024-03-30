## Networking trong Docker

**1. Khái niệm mạng Docker:**

Mạng Docker là một mạng ảo cho phép kết nối các container với nhau và với thế giới bên ngoài. Nó cung cấp một cách đơn giản và hiệu quả để quản lý kết nối mạng giữa các container trong môi trường Docker.

**2. Tạo mạng Docker:**

Để tạo mạng Docker, bạn có thể sử dụng lệnh `docker network create`. Lệnh này có các tùy chọn sau:

- **--driver:** Loại mạng. Loại mạng phổ biến nhất là `bridge`.
- **--name:** Tên mạng.
- **--subnet:** Phạm vi địa chỉ IP cho mạng.
- **--gateway:** Cổng mặc định cho mạng.

**Ví dụ:**

```
docker network create my-network
```

Lệnh này sẽ tạo một mạng Bridge với tên `my-network`.

**3. Kết nối container với mạng:**

Sau khi tạo mạng, bạn có thể kết nối các container với mạng đó bằng cách sử dụng lệnh `docker run` hoặc `docker compose`.

**Ví dụ:**

```
docker run --network my-network nginx
```

Lệnh này sẽ khởi chạy một container nginx trên mạng `my-network`.

**4. Sử dụng Docker Compose để quản lý mạng:**

Ngoài ra, bạn có thể sử dụng Docker Compose để định cấu hình mạng Docker cho các ứng dụng phức tạp hơn.

**Ví dụ sử dụng Docker Compose:**

```
version: "3"

services:
  web:
    image: nginx
    ports:
      - "80:80"
  db:
    image: postgres
    networks:
      - my-network

networks:
  my-network:
    driver: bridge
```

**Trong ví dụ này:**

- Dịch vụ `web` được khởi chạy trên mạng Bridge với cổng 80 được ánh xạ đến cổng 80 bên ngoài.
- Dịch vụ `db` được khởi chạy trên mạng Bridge và có thể truy cập được bởi dịch vụ `web`.

**Tóm lại:**

Mạng Docker là một công cụ mạnh mẽ để quản lý kết nối mạng giữa các container. Bằng cách sử dụng mạng Docker, bạn có thể dễ dàng tạo ra các môi trường ứng dụng được cô lập và bảo mật.

**Tài liệu tham khảo:**

- Docker Compose Networking: [https://docs.docker.com/compose/networking/](https://docs.docker.com/compose/networking/)

**Lưu ý:**

- Bạn có thể sử dụng nhiều loại mạng khác nhau ngoài mạng Bridge.
- Bạn có thể tùy chỉnh cấu hình mạng Docker để đáp ứng nhu cầu của mình.
