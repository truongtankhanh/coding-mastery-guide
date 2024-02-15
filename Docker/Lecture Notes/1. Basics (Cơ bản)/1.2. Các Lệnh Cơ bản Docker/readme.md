## `docker run`: Khởi chạy một container từ một image.

Lệnh `docker run` trong Docker được sử dụng để khởi chạy một container từ một image có sẵn.

**Ngữ cảnh:**
Khi bạn đã tạo một image thông qua Dockerfile hoặc đã lấy một image từ Docker Hub hoặc registry khác, bạn có thể sử dụng lệnh `docker run` để tạo ra một container chạy ứng dụng dựa trên image đó.

**Cách sử dụng:**

1. **Chạy Container từ Image:**

   - Sử dụng lệnh sau để khởi chạy một container từ một image:

   ```bash
   docker run [OPTIONS] IMAGE [COMMAND] [ARG...]
   ```

   - `OPTIONS`: Đây là các tùy chọn như `-d` (chạy container ở chế độ nền), `-p` (map cổng từ container ra host), `-v` (mount volume), `-e` (set biến môi trường) và nhiều tùy chọn khác.
   - `IMAGE`: Tên hoặc ID của image mà container sẽ được tạo ra từ.
   - `COMMAND`: Là command hoặc entrypoint mà container sẽ chạy khi khởi động.
   - `ARG...`: Các đối số được truyền vào command trong container.

2. **Ví dụ:**

   - Khởi chạy một container từ image có tên là `myapp`:

   ```bash
   docker run -d -p 8080:80 myapp
   ```

   Trong đó, `-d` là để chạy container ở chế độ nền, `-p` để chuyển tiếp cổng 80 trong container ra cổng 8080 của máy tính host, `myapp` là tên của image.

   - Chạy một container và thực hiện một command cụ thể:

   ```bash
   docker run ubuntu echo "Hello, Docker!"
   ```

   Trong đó, image `ubuntu` được sử dụng để chạy container và thực hiện lệnh `echo "Hello, Docker!"` trong container.

3. **Quản lý Containers:**

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

Lệnh `docker run` là cách cơ bản nhất để tạo và chạy một container từ một image cụ thể trong Docker, với khả năng tùy chỉnh thông qua các tùy chọn và commands được cung cấp.

---

## `docker build`: Tạo image từ Dockerfile.

Lệnh `docker build` trong Docker được sử dụng để tạo ra một image từ một Dockerfile, là một tập hợp các instructions mô tả cách xây dựng một image.

**Ngữ cảnh:**
Khi bạn có một Dockerfile định nghĩa cấu trúc và các bước cần thiết để xây dựng một ứng dụng hoặc môi trường, lệnh `docker build` cho phép bạn tạo ra một image từ Dockerfile đó.

**Cách sử dụng:**

1. **Sử dụng `docker build`:**

   - Sử dụng lệnh sau để build một image từ Dockerfile:

   ```bash
   docker build [OPTIONS] PATH | URL | -
   ```

   - `OPTIONS`: Đây là các tùy chọn như `-t` (đặt tên và tag cho image), `-f` (chọn Dockerfile khác ngoài Dockerfile mặc định), `-q` (ẩn output), và nhiều tùy chọn khác.
   - `PATH | URL | -`: Đường dẫn đến thư mục chứa Dockerfile hoặc URL của Dockerfile hoặc dấu - để sử dụng stdin.

2. **Ví dụ:**

   - Xây dựng image từ Dockerfile trong thư mục hiện tại:

   ```bash
   docker build -t myapp .
   ```

   Trong đó, `-t` để đặt tên và tag cho image và `myapp` là tên image bạn muốn đặt.

   - Xây dựng image từ Dockerfile tại một đường dẫn cụ thể:

   ```bash
   docker build -t myapp /path/to/Dockerfile
   ```

   Trong trường hợp này, `/path/to/Dockerfile` là đường dẫn tới Dockerfile.

3. **Quản lý Images:**

   - Kiểm tra danh sách images trên máy tính của bạn:

   ```bash
   docker images
   ```

   - Xóa một image:

   ```bash
   docker rmi <IMAGE_ID>
   ```

   Trong đó `<IMAGE_ID>` là ID của image bạn muốn xóa.

Lệnh `docker build` cho phép bạn tự động hóa quá trình xây dựng các image từ các Dockerfile, cho phép bạn tạo ra các môi trường chuẩn hoá và tái sử dụng được cho các ứng dụng của mình.

---

## `docker pull/push`: Lấy hoặc đẩy image từ/đến Docker Hub hoặc một registry khác.

Lệnh `docker pull` và `docker push` trong Docker được sử dụng để tải về (pull) và đẩy (push) các images từ/đến Docker Hub hoặc một registry khác.

**Ngữ cảnh:**
Khi bạn cần sử dụng một image từ một nguồn trên mạng như Docker Hub hoặc một registry khác, `docker pull` cho phép bạn tải image về máy của mình. Ngược lại, khi bạn muốn chia sẻ image bạn đã tạo ra hoặc sử dụng với người khác, `docker push` cho phép bạn đẩy image lên registry để người khác có thể lấy về.

**Cách sử dụng:**

1. **Sử dụng `docker pull`:**

   - Sử dụng lệnh sau để tải về một image từ một registry:

   ```bash
   docker pull [OPTIONS] NAME[:TAG|@DIGEST]
   ```

   - `OPTIONS`: Đây là các tùy chọn như `--all-tags` (tải về tất cả các tags của image), `--platform` (tải về image dành cho một platform cụ thể), và các tùy chọn khác.
   - `NAME[:TAG|@DIGEST]`: Tên của image cần tải về, có thể đi kèm với tag hoặc digest.

2. **Ví dụ về `docker pull`:**

   - Tải về image với tên `ubuntu` từ Docker Hub:

   ```bash
   docker pull ubuntu
   ```

   - Tải về image với tên `nginx` và tag `latest` từ Docker Hub:

   ```bash
   docker pull nginx:latest
   ```

3. **Sử dụng `docker push`:**

   - Sử dụng lệnh sau để đẩy một image lên registry:

   ```bash
   docker push [OPTIONS] NAME[:TAG]
   ```

   - `OPTIONS`: Đây là các tùy chọn như `--all-tags` (đẩy tất cả các tags của image), `--platform` (đẩy image dành cho một platform cụ thể), và các tùy chọn khác.
   - `NAME[:TAG]`: Tên của image cần đẩy lên registry, đi kèm với tag.

4. **Ví dụ về `docker push`:**

   - Đẩy image với tên `myapp` lên Docker Hub:

   ```bash
   docker push myapp
   ```

   - Đẩy image với tên `myapp` và tag `v1.0` lên Docker Hub:

   ```bash
   docker push myapp:v1.0
   ```

Lệnh `docker pull` và `docker push` cho phép bạn tải về và đẩy các images từ/đến một registry, giúp bạn quản lý việc chia sẻ và sử dụng images trong quá trình phát triển và triển khai ứng dụng.

---

## `docker ps`: Xem danh sách các container đang chạy.

Lệnh `docker ps` trong Docker được sử dụng để hiển thị danh sách các container đang chạy trên máy tính của bạn.

**Ngữ cảnh:**
Khi bạn đang làm việc với Docker và muốn kiểm tra trạng thái của các container, `docker ps` là công cụ để xem danh sách các container đang chạy để bạn có thể kiểm tra, quản lý hoặc thực hiện các thao tác khác.

**Cách sử dụng:**

1. **Sử dụng `docker ps`:**

   - Sử dụng lệnh sau để hiển thị danh sách các container đang chạy:

   ```bash
   docker ps [OPTIONS]
   ```

   - `OPTIONS`: Có thể có các tùy chọn như `-a` (hiển thị tất cả các container, bao gồm cả các container đã dừng), `-q` (hiển thị chỉ ID của container), `-s` (hiển thị dung lượng các container), và nhiều tùy chọn khác.

2. **Ví dụ về `docker ps`:**

   - Hiển thị danh sách các container đang chạy:

   ```bash
   docker ps
   ```

   - Hiển thị tất cả các container (bao gồm cả container đã dừng):

   ```bash
   docker ps -a
   ```

   - Hiển thị chỉ ID của các container đang chạy:

   ```bash
   docker ps -q
   ```

   - Hiển thị dung lượng các container:

   ```bash
   docker ps -s
   ```

Lệnh `docker ps` là một công cụ hữu ích để xem trạng thái của các container đang chạy, giúp bạn theo dõi và quản lý các container khi làm việc với Docker.

---

## `docker stop/start/restart`: Dừng, khởi động lại hoặc khởi động container.

Các lệnh `docker stop`, `docker start`, và `docker restart` trong Docker được sử dụng để dừng, khởi động lại hoặc khởi động một container đã dừng.

**Ngữ cảnh:**
Khi bạn cần quản lý trạng thái của các container, từ việc dừng container hiện đang chạy đến việc khởi động lại một container đã dừng, các lệnh này sẽ giúp bạn quản lý quá trình hoạt động của các container trong môi trường Docker.

**Cách sử dụng:**

1. **Sử dụng `docker stop`:**

   - Sử dụng lệnh sau để dừng một container đang chạy:

   ```bash
   docker stop [OPTIONS] CONTAINER [CONTAINER...]
   ```

   - `OPTIONS`: Có thể có các tùy chọn như `--time`, `--time=10` (đặt thời gian tối đa để container dừng trước khi bị force stop), và các tùy chọn khác.
   - `CONTAINER`: ID hoặc tên của container bạn muốn dừng.

2. **Sử dụng `docker start`:**

   - Sử dụng lệnh sau để khởi động lại một container đã dừng:

   ```bash
   docker start [OPTIONS] CONTAINER [CONTAINER...]
   ```

   - `OPTIONS`: Có thể có các tùy chọn như `--attach`, `--attach=STDOUT` (kết nối STDOUT của container với terminal của bạn khi container được khởi động), và các tùy chọn khác.

3. **Sử dụng `docker restart`:**

   - Sử dụng lệnh sau để khởi động lại một container:

   ```bash
   docker restart [OPTIONS] CONTAINER [CONTAINER...]
   ```

   - `OPTIONS`: Có thể có các tùy chọn giống như trong `docker stop` và `docker start`.

4. **Ví dụ:**

   - Dừng container có ID là `abcdef123456`:

   ```bash
   docker stop abcdef123456
   ```

   - Khởi động lại container có tên là `my_container`:

   ```bash
   docker restart my_container
   ```

   - Khởi động một container và kết nối STDOUT của nó với terminal:

   ```bash
   docker start --attach my_container
   ```

Các lệnh `docker stop`, `docker start`, và `docker restart` là công cụ quan trọng để quản lý trạng thái của các container trong Docker, cho phép bạn điều khiển hoạt động của chúng một cách linh hoạt.

---

## `docker logs`: Xem logs của một container.

Lệnh `docker logs` trong Docker được sử dụng để xem các logs (nhật ký) của một container cụ thể.

**Ngữ cảnh:**
Khi bạn đang muốn xem thông tin chi tiết về các hoạt động, thông báo lỗi, hay bất kỳ thông tin nào mà container ghi lại trong quá trình chạy, `docker logs` cho phép bạn truy cập vào các logs của container đó.

**Cách sử dụng:**

1. **Sử dụng `docker logs`:**

   - Sử dụng lệnh sau để xem logs của một container:

   ```bash
   docker logs [OPTIONS] CONTAINER
   ```

   - `OPTIONS`: Có thể có các tùy chọn như `--since`, `--follow` (theo dõi logs trong thời gian thực), `--tail` (hiển thị số lượng dòng logs cuối cùng), và các tùy chọn khác.
   - `CONTAINER`: ID hoặc tên của container bạn muốn xem logs.

2. **Ví dụ về `docker logs`:**

   - Xem logs của container có ID là `abcdef123456`:

   ```bash
   docker logs abcdef123456
   ```

   - Xem logs của container theo thời gian gần đây:

   ```bash
   docker logs --since 1h my_container
   ```

   - Xem logs của container và theo dõi logs mới trong thời gian thực:

   ```bash
   docker logs --follow my_container
   ```

   - Xem chỉ 10 dòng logs cuối cùng của container:

   ```bash
   docker logs --tail 10 my_container
   ```

Lệnh `docker logs` là một công cụ hữu ích để xem và theo dõi các logs của container, giúp bạn kiểm tra và hiểu rõ hơn về hoạt động và tình trạng của container trong quá trình chạy.

---
