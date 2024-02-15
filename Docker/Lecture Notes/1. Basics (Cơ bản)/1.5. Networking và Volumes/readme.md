## Cách quản lý mạng và kết nối giữa các container.

Quản lý mạng và kết nối giữa các container trong Docker là quá trình điều chỉnh và quản lý cách mà các container giao tiếp với nhau hoặc với môi trường bên ngoài.

**Ngữ cảnh:**
Khi bạn có nhiều container cần liên kết với nhau hoặc cần truy cập từ môi trường bên ngoài, quản lý mạng và kết nối giữa các container trở nên quan trọng để đảm bảo chúng có thể giao tiếp và hoạt động đúng cách.

**Cách sử dụng:**

1. **Tạo mạng Docker:**

   - Sử dụng lệnh `docker network create` để tạo một mạng trong Docker:

   ```bash
   docker network create my_network
   ```

   Điều này sẽ tạo ra một mạng có tên là `my_network` để các container kết nối.

2. **Kết nối container với mạng:**

   - Khi bạn tạo container, sử dụng tùy chọn `--network` để kết nối container với mạng đã tạo:

   ```bash
   docker run --name my_container --network my_network my_image
   ```

   Lệnh trên sẽ tạo một container có tên là `my_container` và kết nối nó vào mạng `my_network`.

3. **Liên kết các container:**

   - Đối với các ứng dụng mà cần giao tiếp với nhau, bạn có thể liên kết các container bằng cách sử dụng tùy chọn `--link` khi chạy container:

   ```bash
   docker run --name my_app --link my_db:mysql my_image
   ```

   Điều này sẽ tạo một container có tên là `my_app` và liên kết nó với container `my_db` với tên alias `mysql`, cho phép `my_app` truy cập vào `my_db`.

4. **Xem danh sách mạng và kết nối của container:**

   - Sử dụng lệnh `docker network ls` để liệt kê các mạng Docker đã tạo.
   - Sử dụng lệnh `docker network inspect <NETWORK_ID>` để xem chi tiết về một mạng cụ thể.
   - Sử dụng lệnh `docker inspect <CONTAINER_ID>` để xem các thông tin kết nối của một container cụ thể.

   ```bash
   docker network ls
   docker network inspect my_network
   docker inspect my_container
   ```

Quản lý mạng và kết nối giữa các container trong Docker cho phép bạn xác định cách mà các container tương tác và giao tiếp với nhau hoặc với môi trường bên ngoài, tạo ra một môi trường chạy ứng dụng linh hoạt và có thể điều chỉnh được.

---

## Sử dụng volumes để lưu trữ dữ liệu bên ngoài container.

Volumes trong Docker cho phép lưu trữ dữ liệu bên ngoài các container, giúp dữ liệu tồn tại lâu dài và có thể chia sẻ giữa các container khác nhau hoặc với môi trường máy host.

**Ngữ cảnh:**
Khi bạn muốn lưu trữ dữ liệu như cơ sở dữ liệu, file logs, hoặc các tập tin quan trọng mà không muốn mất khi container bị xóa hoặc khởi động lại, volumes là giải pháp lưu trữ dữ liệu bên ngoài container.

**Cách sử dụng:**

1. **Tạo volumes:**

   - Sử dụng lệnh `docker volume create` để tạo một volume mới:

   ```bash
   docker volume create my_volume
   ```

   Điều này sẽ tạo một volume mới có tên là `my_volume`.

2. **Liên kết volumes với container:**

   - Khi khởi chạy container, sử dụng tùy chọn `-v` để liên kết một volume với container:

   ```bash
   docker run -d --name my_container -v my_volume:/path/in/container my_image
   ```

   Trong đó, `my_volume` là tên của volume đã tạo và `/path/in/container` là đường dẫn trong container mà volume sẽ được mount vào.

3. **Sử dụng volumes trong compose file:**

   - Nếu bạn sử dụng Docker Compose, có thể định nghĩa volumes trong file YAML:

   ```yaml
   version: "3"
   services:
     my_app:
       image: my_image
       volumes:
         - my_volume:/path/in/container
   volumes:
     my_volume:
   ```

   Điều này sẽ tạo một volume có tên là `my_volume` và liên kết nó với container `my_app`.

4. **Xem danh sách volumes và chi tiết về volumes:**

   - Sử dụng lệnh `docker volume ls` để liệt kê các volumes.
   - Sử dụng lệnh `docker volume inspect <VOLUME_NAME>` để xem chi tiết về một volume cụ thể.

   ```bash
   docker volume ls
   docker volume inspect my_volume
   ```

Volumes trong Docker là một cách tiện lợi để lưu trữ dữ liệu bên ngoài container, giúp bạn duy trì dữ liệu và chia sẻ nó giữa các container một cách dễ dàng và linh hoạt.

---
