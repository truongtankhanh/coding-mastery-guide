Docker Compose là một công cụ giúp định nghĩa và quản lý các ứng dụng đa-container thông qua việc sử dụng một file YAML để mô tả cấu trúc của các services, networks, và volumes.

**Ngữ cảnh:**
Khi bạn muốn triển khai một ứng dụng có nhiều phần mềm thành phần, nhưng không muốn phải gõ nhiều lệnh Docker để khởi động từng container riêng lẻ, Docker Compose giúp bạn định nghĩa và quản lý cấu trúc của các container một cách dễ dàng thông qua file YAML.

**Cách sử dụng:**

1. **Tạo file Docker Compose:**

   - Tạo một file có tên `docker-compose.yml` trong thư mục dự án của bạn.

2. **Định nghĩa các services:**

   - Sử dụng các keys như `services`, `networks`, và `volumes` để định nghĩa các container, mạng và khối lưu trữ.
   - Ví dụ:

   ```yaml
   version: "3"
   services:
     webapp:
       image: nginx:latest
       ports:
         - "8080:80"
       volumes:
         - ./html:/usr/share/nginx/html
     database:
       image: mysql:latest
       environment:
         MYSQL_ROOT_PASSWORD: password
         MYSQL_DATABASE: mydb
   ```

   Trong ví dụ này, chúng ta đang định nghĩa hai services: `webapp` là một container chạy nginx với một volume mount, và `database` là một container chạy MySQL với một số biến môi trường.

3. **Các lệnh cơ bản của Docker Compose:**

   - `docker-compose up`: Khởi động các services được định nghĩa trong file docker-compose.yml.
   - `docker-compose down`: Dừng và xóa các services đã khởi động.
   - `docker-compose logs`: Xem logs của các services.
   - `docker-compose ps`: Hiển thị trạng thái của các services.

   Ví dụ: Chạy các services từ file `docker-compose.yml`:

   ```bash
   docker-compose up
   ```

   Lệnh này sẽ khởi động các container dựa trên cấu hình trong file YAML.

Docker Compose giúp quản lý một cách dễ dàng các ứng dụng có nhiều container thông qua việc định nghĩa chúng trong một file YAML duy nhất, giúp tạo ra môi trường phát triển đồng nhất và dễ quản lý.
