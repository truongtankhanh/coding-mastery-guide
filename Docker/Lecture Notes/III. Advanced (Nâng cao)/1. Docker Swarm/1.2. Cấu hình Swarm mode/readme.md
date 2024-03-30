## Cấu hình Swarm mode

**Khái niệm:**

- **Swarm mode:** là chế độ hoạt động đặc biệt của Docker Engine cho phép biến một nhóm máy chủ (host) Docker thành một cụm (cluster) thống nhất.
- **Cluster:** là tập hợp các máy chủ (node) được kết nối với nhau và hoạt động như một hệ thống duy nhất.
- **Node:** là máy chủ riêng lẻ trong cluster.
- **Manager:** là node có vai trò quản lý cluster, bao gồm việc điều phối các tác vụ, scheduling container, và xử lý sự cố.
- **Worker:** là node có vai trò chạy container được scheduling bởi manager.

**Ngữ cảnh:**

Swarm mode được sử dụng trong các trường hợp sau:

- **Triển khai ứng dụng trên nhiều máy chủ:** Swarm mode cho phép bạn triển khai ứng dụng của mình trên nhiều máy chủ một cách dễ dàng và hiệu quả.
- **Tăng khả năng mở rộng:** Swarm mode giúp bạn dễ dàng mở rộng cluster của mình bằng cách thêm vào các node mới.
- **Tăng tính sẵn sàng cao:** Swarm mode tự động khởi động lại các container bị lỗi và đảm bảo ứng dụng của bạn luôn hoạt động.

**Cách sử dụng:**

**1. Khởi tạo cluster:**

```
docker swarm init
```

Lệnh này sẽ khởi tạo một cluster mới với một node duy nhất, node này sẽ đóng vai trò là manager.

**2. Thêm node vào cluster:**

```
docker swarm join --token SWMTKN-1-397872629234213521234567890abcdef... <manager-ip>:2377
```

Lệnh này sẽ thêm một node mới vào cluster.

**3. Cấu hình manager:**

Bạn có thể cấu hình manager bằng cách sử dụng các flag sau:

- **--listen-addr:** địa chỉ IP mà manager sẽ lắng nghe kết nối.
- **--advertise-addr:** địa chỉ IP mà manager sẽ sử dụng để quảng bá bản thân cho các node khác.
- **--election-tick:** thời gian chờ giữa các lần bầu cử manager mới.
- **--heartbeat-tick:** thời gian chờ giữa các lần gửi tin nhắn 心跳 từ manager đến các node khác.

**4. Cấu hình worker:**

Bạn có thể cấu hình worker bằng cách sử dụng các flag sau:

- **--listen-addr:** địa chỉ IP mà worker sẽ lắng nghe kết nối.
- **--advertise-addr:** địa chỉ IP mà worker sẽ sử dụng để quảng bá bản thân cho manager.

**Ví dụ:**

Giả sử bạn muốn tạo một cluster gồm 2 node:

**1. Khởi tạo cluster trên node 1:**

```
docker swarm init
```

**2. Thêm node 2 vào cluster:**

```
docker swarm join --token SWMTKN-1-397872629234213521234567890abcdef... <node-1-ip>:2377
```

**3. Kiểm tra cluster:**

```
docker swarm list nodes
```

Lệnh này sẽ hiển thị danh sách các node trong cluster.

**Kết luận:**

Swarm mode là một tính năng mạnh mẽ của Docker Engine cho phép bạn quản lý cluster container một cách dễ dàng và hiệu quả.

**Lưu ý:**

- Swarm mode là một tính năng nâng cao của Docker Engine.
- Nên sử dụng Swarm mode khi bạn cần triển khai ứng dụng trên nhiều máy chủ hoặc cần tăng khả năng mở rộng và tính sẵn sàng cao cho ứng dụng của bạn.

**Ngoài ra, bạn có thể tham khảo thêm các tài liệu sau:**

- Tài liệu Docker Swarm: [https://docs.docker.com/engine/swarm/](https://docs.docker.com/engine/swarm/)
