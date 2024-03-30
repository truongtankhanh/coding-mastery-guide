## Cấu hình mạng overlay trong Docker

**Khái niệm:**

- **Mạng overlay:** là một mạng ảo được tạo ra trên một mạng vật lý.
- **Docker network driver:** là một phần mềm cho phép Docker tạo và quản lý mạng cho các container.
- **Overlay network driver:** là một loại network driver cho phép tạo mạng overlay cho các container.

**Ngữ cảnh:**

Mạng overlay được sử dụng trong các trường hợp sau:

- **Kết nối các container trên các host khác nhau:** Mạng overlay cho phép các container trên các host khác nhau trong cùng một cluster giao tiếp với nhau.
- **Cung cấp khả năng bảo mật:** Mạng overlay có thể được sử dụng để cô lập các container và giới hạn lưu lượng truy cập giữa các container.
- **Tăng khả năng mở rộng:** Mạng overlay có thể dễ dàng mở rộng để hỗ trợ nhiều container hơn.

**Cách sử dụng:**

**1. Tạo mạng overlay:**

```
docker network create --driver overlay my-network
```

Lệnh này sẽ tạo một mạng overlay tên là `my-network`.

**2. Kết nối container với mạng overlay:**

```
docker run --rm -it --network my-network nginx
```

Lệnh này sẽ khởi động một container Nginx được kết nối với mạng overlay `my-network`.

**Ví dụ:**

Giả sử bạn muốn triển khai một ứng dụng web gồm hai container: Nginx và database. Bạn có thể sử dụng mạng overlay để kết nối hai container này như sau:

**1. Tạo mạng overlay:**

```
docker network create --driver overlay my-network
```

**2. Khởi động container Nginx và database:**

```
docker run --rm -it --network my-network nginx
docker run --rm -it --network my-network postgres
```

Với cấu hình này, container Nginx và database có thể giao tiếp với nhau qua mạng overlay.

**Kết luận:**

Mạng overlay là một công cụ hữu ích để kết nối các container trên các host khác nhau và cung cấp khả năng bảo mật và mở rộng cho các ứng dụng container.

**Lưu ý:**

- Mạng overlay có thể phức tạp hơn so với mạng bridge.
- Nên sử dụng mạng overlay khi bạn cần kết nối các container trên các host khác nhau hoặc cần cung cấp khả năng bảo mật cho các ứng dụng container.
