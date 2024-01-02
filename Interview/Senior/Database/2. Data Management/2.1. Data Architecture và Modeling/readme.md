## Các phương pháp và mô hình cho Data Warehousing và Data Lake.

### Data Warehousing và Data Lake:

#### Data Warehousing:

- **Ý nghĩa:** Data Warehousing là việc tổ chức dữ liệu từ nhiều nguồn khác nhau vào một kho lưu trữ tập trung để phục vụ cho mục đích phân tích và báo cáo.
- **Phương pháp:** Sử dụng quy trình ETL (Extract, Transform, Load) để trích xuất dữ liệu từ các nguồn khác nhau, biến đổi nó thành dạng phù hợp và sau đó tải vào Data Warehouse.
- **Mô hình:** Dữ liệu được tổ chức theo dạng chiều chuẩn (star schema, snowflake schema) để tối ưu hoá truy vấn và phân tích.

_Ví dụ_: Một công ty bán lẻ sử dụng Data Warehouse để kết hợp dữ liệu từ các cửa hàng, kho hàng và trang web bán hàng để phân tích xu hướng mua sắm và dự báo nguồn cung.

#### Data Lake:

- **Ý nghĩa:** Data Lake là một kho lưu trữ lớn và linh hoạt cho mọi loại dữ liệu, từ cấu trúc đến phi cấu trúc, cho phép lưu trữ dữ liệu mà không cần xác định trước cấu trúc hoặc mục đích sử dụng cụ thể.
- **Phương pháp:** Dữ liệu được lưu trữ dưới dạng phi cấu trúc, không định dạng trước, cho phép lưu trữ các dữ liệu gốc mà không cần biến đổi.
- **Mô hình:** Dữ liệu được lưu trữ dưới dạng lớp, cho phép truy cập dữ liệu một cách linh hoạt.

_Ví dụ_: Một công ty công nghệ lớn có Data Lake lưu trữ tất cả dữ liệu từ các sản phẩm của họ, bao gồm dữ liệu từ máy chủ, ứng dụng di động, và cả dữ liệu người dùng như feedback từ các nền tảng khác nhau.

#### So sánh:

- Data Warehouse tập trung vào việc chuẩn hóa và tối ưu hoá dữ liệu cho mục đích phân tích cụ thể.
- Data Lake cho phép lưu trữ dữ liệu không cấu trúc và linh hoạt, phù hợp cho việc khám phá và sử dụng dữ liệu một cách linh hoạt.

Khi triển khai, việc lựa chọn giữa Data Warehouse và Data Lake phụ thuộc vào nhu cầu cụ thể của tổ chức hoặc dự án, từ việc sử dụng cấu trúc dữ liệu đến khả năng linh hoạt trong việc truy xuất dữ liệu.

---

## Thiết kế schema và data modeling cho các hệ thống phức tạp.

Khi thiết kế schema và data modeling cho hệ thống phức tạp, có một số điểm quan trọng cần xem xét:

### 1. Phân tích yêu cầu:

- **Xác định yêu cầu:** Hiểu rõ mục tiêu của hệ thống, loại dữ liệu cần lưu trữ và cách sử dụng dữ liệu.
- **Sử dụng trường hợp sử dụng:** Xác định các trường hợp sử dụng chính để hiểu cách dữ liệu sẽ được truy cập và thao tác.

### 2. Thiết kế schema:

- **Normalization vs. Denormalization:** Quyết định sử dụng normalization hoặc denormalization dựa trên yêu cầu và hiệu suất. Normalization giúp giảm dư thừa dữ liệu, trong khi denormalization tối ưu hóa truy vấn.
- **Quan hệ giữa các bảng:** Xác định các mối quan hệ giữa các bảng thông qua khóa ngoại và quan hệ một-nhiều, nhiều-nhiều.
- **Indexing:** Quyết định các trường nên được index để tối ưu hoá truy vấn.

### 3. Data Modeling:

- **Lựa chọn mô hình dữ liệu:** Sử dụng mô hình dữ liệu phù hợp như Entity-Relationship Diagrams (ERD), Document-based, Graph-based tùy thuộc vào loại dữ liệu và mối quan hệ.
- **Normalization và Denormalization:** Áp dụng quá trình normalization để giảm dư thừa dữ liệu và cải thiện tính nhất quán; đồng thời, denormalization có thể được áp dụng cho hiệu suất nếu cần thiết.
- **Khả năng mở rộng:** Đảm bảo mô hình có khả năng mở rộng, dễ dàng thêm mới hoặc điều chỉnh khi hệ thống phát triển.

### Ví dụ:

Giả sử bạn xây dựng một hệ thống quản lý khách hàng cho một công ty. Schema có thể bao gồm bảng Customers, Orders, và Products. Customers và Orders có mối quan hệ một-nhiều (mỗi khách hàng có thể có nhiều đơn hàng), Orders chứa thông tin về các sản phẩm (mối quan hệ nhiều-nhiều với Products). Bằng cách này, bạn có thể thiết kế schema để mô hình hóa dữ liệu khách hàng, đơn hàng và sản phẩm một cách hiệu quả.

Trong việc lựa chọn và thiết kế schema, việc hiểu rõ yêu cầu cụ thể của dự án và mục tiêu sử dụng dữ liệu sẽ giúp xây dựng một mô hình phù hợp và linh hoạt cho hệ thống.

---
