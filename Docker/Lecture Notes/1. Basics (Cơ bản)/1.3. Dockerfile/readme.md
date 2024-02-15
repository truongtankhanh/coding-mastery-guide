## Cách tạo một Dockerfile để xây dựng image.

Một Dockerfile là một tệp văn bản chứa một loạt các instructions, định nghĩa các bước cụ thể để xây dựng một image. Docker sử dụng Dockerfile để tự động hóa việc xây dựng các image, cung cấp sự linh hoạt và khả năng tái sử dụng trong việc tạo ra các môi trường chạy ứng dụng.

**Ngữ cảnh:**
Khi bạn muốn xây dựng một image Docker để triển khai ứng dụng hoặc môi trường, Dockerfile là công cụ để định nghĩa các bước cần thiết để tạo ra image đó.

**Cách sử dụng:**

1. **Tạo một Dockerfile:**

   - Sử dụng trình soạn thảo văn bản để tạo một tệp có tên `Dockerfile`.
   - Định nghĩa các instructions trong Dockerfile để xây dựng image. Ví dụ:

   ```dockerfile
   # Sử dụng một image cơ sở
   FROM node:14

   # Thiết lập thư mục làm việc trong container
   WORKDIR /app

   # Sao chép package.json và package-lock.json vào container
   COPY package*.json ./

   # Cài đặt dependencies
   RUN npm install

   # Sao chép các file còn lại vào container
   COPY . .

   # Mở cổng 8080
   EXPOSE 8080

   # Command để chạy ứng dụng khi container được khởi chạy
   CMD ["npm", "start"]
   ```

   Trong ví dụ trên, Dockerfile định nghĩa các bước cần thiết để tạo một image sử dụng Node.js, cài đặt dependencies, sao chép mã nguồn và cấu hình môi trường chạy ứng dụng Node.js.

2. **Tạo image từ Dockerfile:**

   - Sử dụng lệnh `docker build` để tạo image từ Dockerfile:

   ```bash
   docker build -t myapp .
   ```

   Trong đó, `-t` được sử dụng để đặt tên và tag cho image (ở đây là `myapp`), và `.` biểu thị đường dẫn tới thư mục chứa Dockerfile (đây là thư mục hiện tại).

3. **Kiểm tra image đã được tạo:**

   - Sử dụng lệnh `docker images` để kiểm tra danh sách các images:

   ```bash
   docker images
   ```

   Bạn sẽ thấy image `myapp` đã được tạo và được liệt kê trong danh sách images.

Dockerfile là công cụ quan trọng để tự động hóa việc xây dựng các image Docker từ các instructions định nghĩa trong file văn bản, giúp bạn tạo ra các môi trường chạy ứng dụng linh hoạt và có thể tái sử dụng.

---

## Các lệnh phổ biến như `FROM`, `RUN`, `COPY`, `CMD`, và `ENTRYPOINT`.

Các lệnh phổ biến trong Dockerfile như `FROM`, `RUN`, `COPY`, `CMD`, và `ENTRYPOINT` định nghĩa các bước cụ thể để xây dựng một image Docker từ Dockerfile.

**Ngữ cảnh:**
Các lệnh này giúp bạn tạo ra một image Docker đầy đủ, chứa tất cả những gì cần thiết để chạy ứng dụng hoặc môi trường của bạn.

**Cách sử dụng:**

1. **`FROM`:**

   - `FROM` xác định image cơ sở cho image bạn đang tạo. Đây là lệnh đầu tiên trong một Dockerfile và chỉ định image gốc để bắt đầu từ.

   ```dockerfile
   FROM node:14
   ```

   Trong ví dụ trên, `node:14` là image cơ sở, nó sẽ được sử dụng để xây dựng image mới.

2. **`RUN`:**

   - `RUN` thực thi các command trong container và tạo một layer mới cho mỗi command.

   ```dockerfile
   RUN npm install
   ```

   Lệnh trên sẽ cài đặt các dependencies của ứng dụng Node.js trong image.

3. **`COPY`:**

   - `COPY` sao chép các files từ máy host vào image.

   ```dockerfile
   COPY . /app
   ```

   Lệnh trên sẽ sao chép tất cả các files từ thư mục hiện tại của máy host vào thư mục `/app` trong image.

4. **`CMD`:**

   - `CMD` chỉ định command mặc định để chạy khi container được khởi chạy từ image.

   ```dockerfile
   CMD ["npm", "start"]
   ```

   Lệnh này sẽ chạy `npm start` khi container được khởi chạy.

5. **`ENTRYPOINT`:**

   - `ENTRYPOINT` giống như `CMD` nhưng không thể bị override bởi command khi chạy container.

   ```dockerfile
   ENTRYPOINT ["node", "app.js"]
   ```

   Điều này sẽ thực thi command `node app.js` khi container khởi chạy và không thể được ghi đè khi chạy container.

Ví dụ trên cho thấy cách sử dụng các lệnh phổ biến trong Dockerfile để xây dựng một image. Mỗi lệnh có mục đích và chức năng riêng để tạo ra một image hoàn chỉnh có thể chạy được.

---
