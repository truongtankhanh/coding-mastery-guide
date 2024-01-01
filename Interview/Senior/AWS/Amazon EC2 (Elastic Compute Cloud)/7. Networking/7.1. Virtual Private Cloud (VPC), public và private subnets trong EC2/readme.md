## VPC là gì và vai trò của nó trong môi trường EC2?

Virtual Private Cloud (VPC) là một dịch vụ cung cấp bởi Amazon Web Services (AWS), cho phép bạn tạo ra một môi trường điện toán đám mây độc lập, cô lập và an toàn trong AWS. VPC cho phép bạn tạo ra mạng riêng ảo, điều khiển các môi trường mạng, và cấu hình phạm vi IP của riêng bạn trong cloud.

Vai trò chính của VPC trong môi trường EC2 bao gồm:

1. **Cô lập Mạng:** VPC cho phép tạo ra một môi trường mạng ảo riêng biệt, cho phép phân chia và cô lập tài nguyên trong mạng một cách an toàn. Bạn có thể kiểm soát quản lý và cấu hình tài nguyên mạng như subnets, route tables, và network gateways.

2. **An Toàn và Bảo Mật:** VPC cung cấp cơ chế bảo mật mạnh mẽ bằng cách sử dụng Security Groups và Network Access Control Lists (ACLs) để kiểm soát lưu lượng mạng đến và đi từ các instance EC2.

3. **Địa chỉ IP Tùy Chỉnh:** Bạn có thể tạo ra một IP address range của riêng bạn (CIDR block) để sử dụng trong VPC, cho phép bạn quản lý địa chỉ IP tùy ý cho các instance và các tài nguyên khác trong môi trường cloud.

4. **Tích hợp Nhiều Dịch Vụ AWS:** VPC cho phép kết nối và tích hợp với nhiều dịch vụ khác trong AWS như RDS, S3, và Lambda. Điều này cho phép tài nguyên EC2 trong VPC truy cập các dịch vụ khác một cách an toàn và dễ dàng.

5. **Tùy chỉnh Kết nối Mạng:** VPC cung cấp khả năng tùy chỉnh kết nối mạng với mạng truy cập công cộng hoặc mạng truy cập riêng tư, cũng như tùy chọn để kết nối với các mạng on-premises thông qua VPN hoặc Direct Connect.

Ví dụ cụ thể: Bạn có thể tạo một VPC với nhiều subnets, mỗi subnet được đặt trong một Availability Zone (AZ) khác nhau để đảm bảo sự khả dụng cao và đồng nhất. Bằng cách cấu hình Security Groups và Network ACLs, bạn có thể kiểm soát truy cập mạng vào và ra từ các instance EC2 trong VPC, tạo ra một môi trường mạng an toàn và cô lập.

---

## Sự khác biệt giữa public và private subnets trong VPC của EC2?

Sự khác biệt chính giữa public và private subnets trong VPC của EC2 nằm ở khả năng truy cập internet và bảo mật:

1. **Public Subnets:**

   - **Internet Accessible:** Các public subnet có thể truy cập internet thông qua Internet Gateway. Instance trong public subnet có thể có địa chỉ IP public và có thể được truy cập từ internet.
   - **Sử dụng cho các dịch vụ Public:** Public subnets thường được sử dụng cho các service layer cần kết nối trực tiếp với internet như web servers, load balancers, hoặc các dịch vụ mà cần phải truy cập từ bên ngoài.

2. **Private Subnets:**
   - **Không Truy Cập Trực Tiếp từ Internet:** Các private subnet không có đường đi trực tiếp đến internet thông qua Internet Gateway. Instances trong private subnet có thể có địa chỉ IP private và không thể truy cập từ internet mà thông qua NAT Gateway hoặc NAT Instance nếu cần.
   - **Bảo Mật Hơn:** Do không trực tiếp tiếp xúc với internet, private subnet thường được sử dụng cho các thành phần như databases, các back-end servers, và các phần mềm không cần phải trực tiếp kết nối từ bên ngoài.

Ví dụ cụ thể: Giả sử bạn triển khai một ứng dụng web. Các web servers và load balancers có thể được đặt trong public subnets để có thể truy cập từ internet, trong khi các database servers và các hệ thống back-end không cần truy cập trực tiếp từ bên ngoài sẽ được đặt trong private subnets để tăng cường bảo mật.

---

## Cách thiết lập và quản lý một VPC và các subnet trong môi trường EC2.

Thiết lập và quản lý VPC (Virtual Private Cloud) và các subnet trong môi trường EC2 đòi hỏi các bước cụ thể:

### 1. Thiết lập VPC:

- **Bước 1: Định rõ nhu cầu và thiết kế mạng:**

  - Xác định IP range cho VPC: CIDR block (ví dụ: 10.0.0.0/16).
  - Xác định số lượng subnets, kích thước CIDR cho mỗi subnet.

- **Bước 2: Tạo VPC:**

  - Sử dụng AWS Management Console hoặc AWS CLI để tạo VPC với CIDR range đã chọn.

- **Bước 3: Tạo Internet Gateway (IGW) và kết nối với VPC:**

  - Tạo IGW và gắn nó với VPC để cho phép kết nối ra internet.

- **Bước 4: Tạo Route Tables:**
  - Tạo route table cho VPC và kết nối nó với IGW để các subnet có thể truy cập internet thông qua IGW.

### 2. Tạo Subnets:

- **Bước 5: Tạo Subnets:**

  - Sử dụng CIDR block đã chọn, tạo các subnet và gắn chúng với VPC.
  - Phân bố các subnet public và private dựa trên yêu cầu và thiết kế của hệ thống.

- **Bước 6: Liên kết Route Tables với Subnets:**
  - Liên kết route table với các subnet: public subnet sử dụng route table điều hướng qua IGW, private subnet sử dụng route table có thể điều hướng qua NAT Gateway hoặc NAT Instance nếu cần truy cập internet.

### Ví dụ cụ thể:

- Bạn muốn triển khai một ứng dụng web. Bạn tạo một VPC với CIDR range 10.0.0.0/16.
- Tạo public subnet (CIDR: 10.0.1.0/24) cho web servers và kết nối nó với route table điều hướng qua IGW.
- Tạo private subnet (CIDR: 10.0.2.0/24) cho database servers và liên kết nó với route table sử dụng NAT Gateway hoặc NAT Instance để truy cập internet nếu cần thiết.

Quản lý VPC và subnet còn liên quan đến việc quản lý security groups, network ACLs, và các thành phần bảo mật khác để đảm bảo an toàn và hiệu suất của hệ thống.

---
