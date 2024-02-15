## Cấu hình mạng: Hiểu rõ về các loại mạng Docker như bridge, overlay, và host mode networking và cách cấu hình chúng.

Cấu hình mạng trong Docker là một phần quan trọng giúp xác định cách các container tương tác với nhau và với môi trường bên ngoài. Có ba loại mạng cơ bản mà Docker hỗ trợ là bridge, overlay và host mode networking.

### Bridge Network:

**Khái niệm:** Bridge network là một mạng cục bộ trong Docker. Mỗi bridge network tạo ra một phân vùng mạng riêng, cho phép các container trong cùng một bridge network kết nối với nhau thông qua một bridge (cầu nối). Mỗi container có thể được gán một địa chỉ IP duy nhất trong bridge network này.

**Cách sử dụng:**

- Tạo một bridge network mới trong Docker:
  ```bash
  docker network create my-bridge-network
  ```
- Tạo container mới và liên kết với bridge network:
  ```bash
  docker run -d --name container1 --network=my-bridge-network nginx
  ```
- Kết nối container đã tạo với một container khác trong cùng một bridge network:
  ```bash
  docker run -d --name container2 --network=my-bridge-network nginx
  ```

### Overlay Network:

**Khái niệm:** Overlay network cho phép các container trên các host khác nhau có thể giao tiếp với nhau. Điều này rất hữu ích khi bạn làm việc với một môi trường Docker phân tán, chạy trên nhiều máy chủ.

**Cách sử dụng:**

- Tạo overlay network:
  ```bash
  docker network create --driver=overlay my-overlay-network
  ```
- Tạo service trong overlay network:
  ```bash
  docker service create --name my-service --network=my-overlay-network nginx
  ```

### Host Mode Networking:

**Khái niệm:** Host mode networking cho phép container chia sẻ network namespace với máy host, nghĩa là chúng sẽ sử dụng network của máy host trực tiếp thay vì tạo ra một network namespace mới.

**Cách sử dụng:**

- Chạy container với host mode networking:
  ```bash
  docker run -d --name container3 --network=host nginx
  ```

### Ví dụ về kiểm tra các mạng đã tạo:

- Liệt kê tất cả các network trong Docker:
  ```bash
  docker network ls
  ```
- Xem thông tin chi tiết về một network cụ thể:
  ```bash
  docker network inspect my-bridge-network
  ```

Nhớ rằng, cấu hình mạng Docker không chỉ bao gồm việc tạo mạng mà còn liên quan đến việc định cấu hình và kết nối container với nhau hoặc với môi trường bên ngoài. Việc thực hành và tìm hiểu thêm qua các ví dụ sẽ giúp bạn nắm vững hơn về cách sử dụng các loại mạng Docker này.

---

## External connectivity: Quản lý kết nối của container với mạng bên ngoài và các container khác.

External connectivity trong Docker liên quan đến khả năng quản lý và cấu hình kết nối của các container với môi trường bên ngoài (mạng ngoài Docker) cũng như kết nối giữa các container khác nhau.

### Kết nối container với mạng bên ngoài:

**Khái niệm:** Để kết nối container với mạng bên ngoài, chúng ta thường sử dụng port mapping (port binding) để ánh xạ các cổng trên máy host với cổng của container.

**Cách sử dụng:**

- Ánh xạ cổng 8080 trên máy host với cổng 80 của container:
  ```bash
  docker run -d -p 8080:80 nginx
  ```
  Bây giờ, bạn có thể truy cập `localhost:8080` trên máy host để truy cập vào dịch vụ nginx chạy trong container.

### Kết nối giữa các container:

**Khái niệm:** Để kết nối giữa các container, bạn có thể sử dụng các mạng Docker đã được tạo hoặc tạo mạng riêng để kết nối chúng.

**Cách sử dụng:**

- Tạo một bridge network:
  ```bash
  docker network create my-bridge-network
  ```
- Tạo các container và gán chúng vào cùng một network:
  ```bash
  docker run -d --name container1 --network=my-bridge-network nginx
  docker run -d --name container2 --network=my-bridge-network nginx
  ```
  Hai container `container1` và `container2` sẽ có thể giao tiếp với nhau thông qua network `my-bridge-network`.

### Kiểm tra kết nối:

- Kiểm tra các cổng được mở và ánh xạ của container:
  ```bash
  docker port <container_id>
  ```
- Kiểm tra thông tin liên quan đến network của container:
  ```bash
  docker network inspect <network_name>
  ```

Cách tốt nhất để nắm vững về external connectivity trong Docker là thực hành thường xuyên. Bằng cách thử nghiệm các lệnh và cấu hình khác nhau, bạn sẽ hiểu rõ hơn về cách quản lý kết nối của container với môi trường bên ngoài và cách chúng tương tác với nhau.

---
