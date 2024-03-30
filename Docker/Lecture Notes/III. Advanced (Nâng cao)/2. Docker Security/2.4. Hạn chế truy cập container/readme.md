## Hạn chế truy cập container

**Khái niệm:**

- **Hạn chế truy cập container:** là việc kiểm soát ai có thể truy cập vào container và những gì họ có thể làm trong container.
- **Namespace:** là một cách để cô lập các container trên cùng một host.
- **Network Policy:** là một tập hợp các quy tắc điều khiển lưu lượng truy cập mạng giữa các container.
- **Iptables:** là một công cụ cho phép bạn lọc lưu lượng truy cập mạng.

**Ngữ cảnh:**

Hạn chế truy cập container là một việc quan trọng để bảo mật các ứng dụng container và ngăn chặn truy cập trái phép.

**Cách sử dụng:**

Có nhiều cách để hạn chế truy cập container:

**1. Sử dụng namespace:**

```
docker run --rm -it --namespace my-namespace nginx
```

Lệnh này sẽ khởi động một container Nginx trong namespace `my-namespace`. Container này sẽ chỉ có thể truy cập các container khác trong cùng namespace.

**2. Sử dụng network policy:**

```
kubectl apply -f network-policy.yaml
```

Lệnh này sẽ áp dụng network policy được định nghĩa trong file `network-policy.yaml`. Network policy này sẽ chỉ cho phép container Nginx truy cập vào database.

**3. Sử dụng iptables:**

```
iptables -A INPUT -p tcp --dport 80 -j ACCEPT
```

Lệnh này sẽ cho phép tất cả các kết nối đến cổng 80 (HTTP) của container.

**Ví dụ:**

Giả sử bạn muốn triển khai một ứng dụng web gồm hai container: Nginx và database. Bạn có thể sử dụng namespace và network policy để hạn chế truy cập như sau:

**1. Khởi động container Nginx và database trong các namespace riêng biệt:**

```
docker run --rm -it --namespace web nginx
docker run --rm -it --namespace database postgres
```

**2. Tạo network policy cho phép container Nginx truy cập vào database:**

```
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: allow-nginx-to-database
spec:
  podSelector:
    matchLabels:
      app: nginx
  ingress:
  - from:
    - podSelector:
        matchLabels:
          app: database
    ports:
    - protocol: TCP
      port: 5432
```

**3. Áp dụng network policy:**

```
kubectl apply -f network-policy.yaml
```

Với cấu hình này, chỉ có container Nginx mới có thể truy cập vào database.

**Kết luận:**

Hạn chế truy cập container là một cách quan trọng để bảo mật các ứng dụng container. Có nhiều cách để hạn chế truy cập container, bao gồm sử dụng namespace, network policy và iptables.

**Lưu ý:**

- Việc hạn chế truy cập container có thể ảnh hưởng đến khả năng hoạt động của ứng dụng.
- Nên cân nhắc kỹ lưỡng trước khi áp dụng các biện pháp hạn chế truy cập.
