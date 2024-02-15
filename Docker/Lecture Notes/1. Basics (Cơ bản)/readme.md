1. **Cơ bản về Docker:**
   - **Containerization:** Hiểu về khái niệm container và lợi ích của việc sử dụng chúng trong phát triển phần mềm.
   - **Docker Engine:** Kiến thức về Docker Engine và cách nó hoạt động.
   - **Image và Container:** Sự khác biệt giữa image và container, cách tạo và quản lý chúng.

2. **Các Lệnh Cơ bản Docker:**
   - `docker run`: Khởi chạy một container từ một image.
   - `docker build`: Tạo image từ Dockerfile.
   - `docker pull/push`: Lấy hoặc đẩy image từ/đến Docker Hub hoặc một registry khác.
   - `docker ps`: Xem danh sách các container đang chạy.
   - `docker stop/start/restart`: Dừng, khởi động lại hoặc khởi động container.
   - `docker logs`: Xem logs của một container.

3. **Dockerfile:**
   - Cách tạo một Dockerfile để xây dựng image.
   - Các lệnh phổ biến như `FROM`, `RUN`, `COPY`, `CMD`, và `ENTRYPOINT`.

4. **Docker Compose:**
   - Sử dụng Docker Compose để định nghĩa và quản lý các ứng dụng đa-container thông qua file YAML.

5. **Networking và Volumes:**
   - Cách quản lý mạng và kết nối giữa các container.
   - Sử dụng volumes để lưu trữ dữ liệu bên ngoài container.

6. **Debugging và Monitoring:**
   - Cách debug một container.
   - Cách sử dụng Docker logs và các công cụ monitoring để theo dõi container.

7. **Best Practices và Security:**
   - Các best practices khi sử dụng Docker.
   - Các lỗ hổng bảo mật phổ biến và cách để bảo vệ container.