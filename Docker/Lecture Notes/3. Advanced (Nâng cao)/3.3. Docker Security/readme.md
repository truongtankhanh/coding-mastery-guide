### Quản lý đặc quyền và cấu hình bảo mật nâng cao:

1. **AppArmor và SELinux:**
   - **Khái niệm:** AppArmor và SELinux là các hệ thống kiểm soát truy cập dựa trên chính sách (MAC) giúp hạn chế quyền truy cập của các container vào hệ thống host.
   - **Ngữ cảnh và cách sử dụng:** Bạn có thể kích hoạt và cấu hình AppArmor hoặc SELinux cho Docker daemon và containers thông qua các tệp cấu hình.

   Ví dụ với SELinux:
   - Kiểm tra trạng thái của SELinux:
     ```bash
     sestatus
     ```
   - Kích hoạt SELinux cho Docker daemon:
     - Sửa file `/etc/docker/daemon.json` (hoặc tạo nếu không có) và thêm:
       ```json
       {
         "selinux-enabled": true
       }
       ```
   - Tạo và chạy container với SELinux:
     ```bash
     docker run --security-opt label=type:container_t my-image
     ```

2. **Seccomp Profiles:**
   - **Khái niệm:** Seccomp (secure computing mode) là một cơ chế bảo mật trong Linux kernel, cho phép hạn chế các system calls mà một process có thể thực hiện.
   - **Ngữ cảnh và cách sử dụng:** Docker cho phép bạn định nghĩa các seccomp profiles để hạn chế system calls cho các container.

   Ví dụ:
   - Tạo một file `my-seccomp-profile.json` để định nghĩa các system calls bị hạn chế.
     ```json
     {
       "defaultAction": "SCMP_ACT_ALLOW",
       "syscalls": [
         {
           "name": "mkdir",
           "action": "SCMP_ACT_ERRNO"
         },
         {
           "name": "rmdir",
           "action": "SCMP_ACT_ERRNO"
         }
         // ...các system calls khác
       ]
     }
     ```
   - Chạy container với seccomp profile:
     ```bash
     docker run --security-opt seccomp=my-seccomp-profile.json my-image
     ```

### Kiểm tra và quét lỗ hổng tự động trong images và containers:

- **Kiểm tra lỗ hổng tự động trong images:**
  - Sử dụng các công cụ như Trivy, Clair hoặc Anchore để quét lỗ hổng tự động trong các images Docker để xác định các vấn đề bảo mật và cập nhật dependencies.
  - Ví dụ với Trivy:
    ```bash
    trivy image <tên_image>
    ```

- **Kiểm tra lỗ hổng trong containers:**
  - Sử dụng công cụ như Docker Bench hoặc Lynis để kiểm tra các container đang chạy để phát hiện các lỗ hổng bảo mật.
  - Ví dụ với Docker Bench:
    ```bash
    docker run -it --net host --pid host --cap-add audit_control -v /var/lib:/var/lib --label docker_bench_security docker/docker-bench-security
    ```

Các công cụ này giúp quản lý đặc quyền và cấu hình bảo mật nâng cao cho containers và images Docker, đồng thời cung cấp các phương tiện để kiểm tra và quét lỗ hổng tự động, giúp tăng cường bảo mật cho môi trường Docker của bạn.