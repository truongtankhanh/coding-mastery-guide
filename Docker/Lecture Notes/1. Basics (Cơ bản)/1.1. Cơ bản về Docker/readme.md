## **Containerization:** Hiểu về khái niệm container và lợi ích của việc sử dụng chúng trong phát triển phần mềm.

Containerization là một kỹ thuật phân chia ứng dụng và môi trường chạy của nó thành các phần nhỏ gọn, được gọi là "containers". Mỗi container chứa tất cả các yếu tố cần thiết để chạy một ứng dụng, bao gồm mã nguồn, thư viện, cấu hình, dependencies, và các tài nguyên cần thiết khác. Các container được tạo ra từ các images, là các bản sao của một môi trường cụ thể và ứng dụng.

**Ngữ cảnh:**
Trong quá trình phát triển phần mềm, containerization cung cấp môi trường độc lập và cô lập giúp các nhà phát triển có thể triển khai ứng dụng một cách nhất quán trên nhiều môi trường khác nhau - từ môi trường phát triển đến môi trường sản xuất. Điều này giúp giảm thiểu sự khác biệt giữa môi trường phát triển và môi trường thực tế mà ứng dụng chạy.

**Cách sử dụng:**
Để sử dụng containerization với Docker, bạn có thể tuân theo các bước sau:

1. **Cài đặt Docker:**

   - Cài đặt Docker trên máy tính của bạn từ trang web chính thức của Docker.

2. **Tạo một Image:**

   - Sử dụng Dockerfile để xác định cách tạo một image cho ứng dụng của bạn.
   - Ví dụ, đây là một Dockerfile đơn giản:

   ```dockerfile
   FROM python:3.9

   WORKDIR /app

   COPY requirements.txt .
   RUN pip install -r requirements.txt

   COPY . .

   CMD ["python", "app.py"]
   ```

   Trong ví dụ này, Dockerfile sẽ tạo một image từ Python 3.9, cài đặt các dependencies từ `requirements.txt`, và chạy file `app.py` khi container được khởi động.

3. **Xây dựng Image:**

   - Sử dụng lệnh sau để xây dựng image từ Dockerfile:

   ```bash
   docker build -t myapp .
   ```

   Trong đó `myapp` là tên của image bạn muốn tạo.

4. **Chạy Container:**

   - Sử dụng lệnh `docker run` để khởi chạy container từ image:

   ```bash
   docker run -d -p 8080:80 myapp
   ```

   Trong đó `-p` là để chuyển tiếp cổng (port) từ container sang máy tính host, `8080:80` đưa cổng 80 trong container ra cổng 8080 của máy tính host.

Điều này sẽ tạo ra một container chứa ứng dụng của bạn, cung cấp môi trường độc lập có thể chạy trên bất kỳ máy tính nào có Docker mà không cần quan tâm đến các dependency hay môi trường khác.

---

## **Docker Engine:** Kiến thức về Docker Engine và cách nó hoạt động.

Docker Engine là thành phần cốt lõi của Docker, chịu trách nhiệm quản lý, tạo và chạy các container. Nó bao gồm một số phần chính như Docker daemon, Docker CLI, và một số thành phần hệ thống khác để quản lý các container và images.

**Ngữ cảnh:**
Docker Engine là phần mềm chạy trên máy tính hoặc server, cho phép tạo và quản lý các container. Nó cung cấp môi trường để chạy các ứng dụng được đóng gói trong các container, cho phép chúng hoạt động một cách độc lập, di động và đảm bảo tính nhất quán giữa các môi trường khác nhau.

**Cách sử dụng:**
Để sử dụng Docker Engine, bạn có thể thực hiện các bước sau:

1. **Cài đặt Docker Engine:**

   - Cài đặt Docker trên máy tính hoặc server của bạn từ trang web chính thức của Docker hoặc từ kho lưu trữ phần mềm của hệ điều hành mà bạn đang sử dụng.

2. **Khởi động Docker Daemon:**

   - Docker Daemon (dockerd) là một dịch vụ chạy ngầm trên hệ thống của bạn và quản lý các container và images.
   - Đảm bảo rằng Docker Daemon đã được khởi động và hoạt động bằng cách kiểm tra trạng thái của nó. Trên hầu hết các hệ điều hành, bạn có thể sử dụng lệnh sau:

   ```bash
   sudo systemctl status docker
   ```

3. **Sử dụng Docker CLI:**

   - Docker Command-Line Interface (CLI) là công cụ chính để tương tác với Docker Engine.
   - Sử dụng Docker CLI để tạo, quản lý và chạy các container và images. Ví dụ:

   - Lấy danh sách các images trên máy tính của bạn:

   ```bash
   docker images
   ```

   - Khởi chạy một container từ một image:

   ```bash
   docker run -d -p 8080:80 myapp
   ```

   - Trong đó `myapp` là tên của image và `-d` là để chạy container ở chế độ nền.

4. **Quản lý Container và Images:**
   - Sử dụng Docker CLI để quản lý các container và images, bao gồm tạo, xóa, chạy, dừng container, cũng như xây dựng và xóa images.

Docker Engine cung cấp một cơ sở hạ tầng mạnh mẽ để tạo và quản lý các container, cho phép bạn tập trung vào việc phát triển ứng dụng mà không cần quan tâm đến cấu hình hệ thống phức tạp.

---

## **Image và Container:** Sự khác biệt giữa image và container, cách tạo và quản lý chúng.

Image và Container là hai khái niệm chính trong Docker, đóng vai trò quan trọng trong việc tạo ra và chạy các ứng dụng trong môi trường containerized.

**Ngữ cảnh:**

- **Image:** Đây là một template chỉ định cách mà một container sẽ hoạt động. Image chứa tất cả những thứ cần thiết để chạy một ứng dụng: mã nguồn, thư viện, dependencies, cấu hình, và môi trường.
- **Container:** Là một instance của một image. Khi một image được khởi chạy, nó tạo ra một container, một môi trường chạy độc lập có thể chạy ứng dụng cụ thể.

**Cách sử dụng:**

1. **Tạo Image:**

   - Sử dụng Dockerfile để tạo image. Ví dụ, đây là một Dockerfile đơn giản:

   ```dockerfile
   FROM node:14

   WORKDIR /app

   COPY package.json .
   RUN npm install

   COPY . .

   CMD ["npm", "start"]
   ```

   - Để tạo image từ Dockerfile này, sử dụng lệnh:

   ```bash
   docker build -t myapp .
   ```

   Trong đó, `myapp` là tên image bạn muốn đặt.

2. **Quản lý Images:**

   - Kiểm tra danh sách images trên máy tính của bạn:

   ```bash
   docker images
   ```

   - Xóa một image:

   ```bash
   docker rmi <IMAGE_ID>
   ```

   Trong đó `<IMAGE_ID>` là ID của image bạn muốn xóa.

3. **Chạy Container từ Image:**

   - Sử dụng lệnh `docker run` để khởi chạy container từ image:

   ```bash
   docker run -d -p 8080:3000 myapp
   ```

   Trong đó `-p` là để chuyển tiếp cổng (port) từ container ra máy tính host, `8080:3000` đưa cổng 3000 trong container ra cổng 8080 của máy tính host.

4. **Quản lý Containers:**

   - Kiểm tra danh sách các container đang chạy:

   ```bash
   docker ps
   ```

   - Dừng một container:

   ```bash
   docker stop <CONTAINER_ID>
   ```

   - Xóa một container:

   ```bash
   docker rm <CONTAINER_ID>
   ```

   Trong đó `<CONTAINER_ID>` là ID của container bạn muốn dừng hoặc xóa.

Image và container là hai khái niệm chủ chốt trong Docker, cho phép bạn tạo và quản lý môi trường chạy ứng dụng một cách linh hoạt và cô lập.

---
