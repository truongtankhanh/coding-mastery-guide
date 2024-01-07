## Binary Datatypes

Các kiểu dữ liệu nhị phân trong SQL là nhóm kiểu dữ liệu được sử dụng để lưu trữ dữ liệu dưới dạng chuỗi bit hoặc byte thay vì dữ liệu văn bản hoặc số. Chúng được sử dụng để lưu trữ các dữ liệu nhị phân như hình ảnh, tệp nhị phân, hoặc các dữ liệu không phải là văn bản thông thường.

### 1. BINARY:

- **Khái niệm:** Lưu trữ chuỗi byte cố định.
- **Ngữ cảnh:** Thường được sử dụng để lưu trữ các giá trị có độ dài cố định như mã hash, địa chỉ MAC.
- **Ví dụ:** Lưu trữ mã hash SHA-256 có độ dài 32 byte.
  ```sql
  CREATE TABLE HashData (
      id INT,
      hash_value BINARY(32)
  );
  ```

### 2. VARBINARY:

- **Khái niệm:** Lưu trữ chuỗi byte có độ dài thay đổi.
- **Ngữ cảnh:** Thích hợp cho việc lưu trữ dữ liệu nhị phân có kích thước không cố định như hình ảnh, tệp nhị phân.
- **Ví dụ:** Lưu trữ dữ liệu ảnh có kích thước có thể thay đổi.
  ```sql
  CREATE TABLE ImageData (
      id INT,
      image_data VARBINARY(MAX)
  );
  ```

### 3. BLOB (Binary Large Object):

- **Khái niệm:** Lưu trữ dữ liệu nhị phân lớn.
- **Ngữ cảnh:** Sử dụng để lưu trữ các tệp nhị phân lớn như video, âm thanh.
- **Ví dụ:** Lưu trữ tệp nhị phân lớn trong cột BLOB.
  ```sql
  CREATE TABLE FileStorage (
      id INT,
      file_data BLOB
  );
  ```

### 4. RAW (Oracle):

- **Khái niệm:** Lưu trữ dữ liệu nhị phân dưới dạng chuỗi byte.
- **Ngữ cảnh:** Thường được sử dụng trong hệ thống Oracle để lưu trữ các dữ liệu nhị phân.
- **Ví dụ:** Lưu trữ dữ liệu nhị phân dưới dạng RAW.
  ```sql
  CREATE TABLE RawData (
      id INT,
      raw_value RAW(100)
  );
  ```

### 5. IMAGE (SQL Server):

- **Khái niệm:** Lưu trữ dữ liệu hình ảnh.
- **Ngữ cảnh:** Sử dụng trong SQL Server để lưu trữ các dữ liệu hình ảnh.
- **Ví dụ:** Lưu trữ dữ liệu hình ảnh trong cột IMAGE.
  ```sql
  CREATE TABLE ImageStore (
      id INT,
      image_data IMAGE
  );
  ```

Các loại dữ liệu nhị phân này cung cấp linh hoạt trong việc lưu trữ và xử lý các dữ liệu không phải là văn bản trong cơ sở dữ liệu SQL, mỗi loại có đặc điểm và ứng dụng riêng biệt.

---

## Exact Numeric Datatype

Các loại dữ liệu số chính xác (Exact Numeric Datatypes) trong SQL là nhóm kiểu dữ liệu dùng để lưu trữ giá trị số một cách chính xác, không mất thông tin về phần thập phân và sai số trong quá trình lưu trữ. Đây bao gồm các kiểu dữ liệu như INTEGER, SMALLINT, DECIMAL, NUMERIC, và BIGINT.

### 1. INTEGER và SMALLINT:

- **Khái niệm:** INTEGER là kiểu dữ liệu lưu trữ số nguyên có phạm vi giá trị từ -2,147,483,648 đến 2,147,483,647. SMALLINT có phạm vi nhỏ hơn.
- **Ngữ cảnh:** Thường được sử dụng để lưu trữ các giá trị số nguyên trong phạm vi nhất định.
- **Ví dụ:** Tạo bảng lưu trữ thông tin sinh viên với số hiệu sinh viên là INTEGER.
  ```sql
  CREATE TABLE Student (
      student_id INTEGER,
      name VARCHAR(50),
      age SMALLINT
  );
  ```

### 2. DECIMAL và NUMERIC:

- **Khái niệm:** DECIMAL và NUMERIC là kiểu dữ liệu dùng để lưu trữ số chính xác với số lượng chữ số thập phân được xác định trước.
- **Ngữ cảnh:** Thường được sử dụng trong tài chính, kế toán hoặc các ứng dụng yêu cầu độ chính xác cao.
- **Ví dụ:** Lưu trữ số lượng tiền mặt với độ chính xác lên đến 2 chữ số thập phân.
  ```sql
  CREATE TABLE FinancialData (
      transaction_id INT,
      amount DECIMAL(10, 2)
  );
  ```

### 3. BIGINT:

- **Khái niệm:** BIGINT là kiểu dữ liệu số nguyên có phạm vi rộng hơn INTEGER, lưu trữ giá trị từ -9,223,372,036,854,775,808 đến 9,223,372,036,854,775,807.
- **Ngữ cảnh:** Thường được sử dụng để lưu trữ các giá trị số nguyên lớn.
- **Ví dụ:** Lưu trữ số lượng người dùng trong hệ thống.
  ```sql
  CREATE TABLE UserStats (
      total_users BIGINT
  );
  ```

Các kiểu dữ liệu số chính xác trong SQL cung cấp khả năng lưu trữ và xử lý dữ liệu số một cách chính xác và dễ dàng, phù hợp cho nhiều mục đích khác nhau, từ lưu trữ thông tin đến tính toán trong các ứng dụng cơ sở dữ liệu.

---

## Approximate Numeric Datatype

Các loại dữ liệu số gần đúng (Approximate Numeric Datatypes) trong SQL là nhóm kiểu dữ liệu được sử dụng để lưu trữ các giá trị số với một mức độ gần đúng hoặc ước lượng, không lưu trữ chính xác mọi chữ số phần thập phân. Các kiểu dữ liệu này thường được sử dụng để xử lý dữ liệu số lớn hoặc khi độ chính xác cao không cần thiết.

### 1. FLOAT:

- **Khái niệm:** FLOAT là kiểu dữ liệu số gần đúng dùng để lưu trữ số thực với độ chính xác xấp xỉ.
- **Ngữ cảnh:** Thường được sử dụng khi cần lưu trữ số với phạm vi rộng và không cần độ chính xác cực kỳ cao.
- **Ví dụ:** Lưu trữ dữ liệu khoảng giá trị của cảm biến nhiệt độ.
  ```sql
  CREATE TABLE TemperatureData (
      timestamp DATETIME,
      temperature FLOAT
  );
  ```

### 2. REAL:

- **Khái niệm:** REAL là kiểu dữ liệu số gần đúng tương tự như FLOAT, nhưng thường có kích thước nhỏ hơn.
- **Ngữ cảnh:** Được sử dụng trong trường hợp cần lưu trữ số thực nhưng với kích thước nhỏ hơn so với FLOAT.
- **Ví dụ:** Lưu trữ dữ liệu đo lường lực lượng trong các thiết bị di động.
  ```sql
  CREATE TABLE ForceData (
      timestamp DATETIME,
      force REAL
  );
  ```

### 3. DOUBLE PRECISION:

- **Khái niệm:** DOUBLE PRECISION là kiểu dữ liệu số gần đúng có độ chính xác cao hơn FLOAT.
- **Ngữ cảnh:** Thường được sử dụng trong các ứng dụng yêu cầu độ chính xác cao hơn so với FLOAT.
- **Ví dụ:** Lưu trữ dữ liệu trong các phép tính khoa học hoặc kỹ thuật.
  ```sql
  CREATE TABLE ScientificData (
      experiment_id INT,
      result DOUBLE PRECISION
  );
  ```

Các kiểu dữ liệu số gần đúng trong SQL được sử dụng khi cần lưu trữ các giá trị số với độ chính xác không cần thiết cao hoặc khi cần xử lý dữ liệu số lớn mà không cần đến mức độ chính xác tuyệt đối.

---

## Character String Datatype

Các kiểu dữ liệu chuỗi ký tự (Character String Datatypes) trong SQL là nhóm kiểu dữ liệu được sử dụng để lưu trữ và xử lý các chuỗi ký tự và văn bản. Các kiểu dữ liệu này bao gồm CHAR, VARCHAR, TEXT và các biến thể khác nhau có thể khác nhau tùy theo hệ thống quản lý cơ sở dữ liệu.

### 1. CHAR:

- **Khái niệm:** CHAR là kiểu dữ liệu chuỗi ký tự có độ dài cố định.
- **Ngữ cảnh:** Thường được sử dụng khi độ dài chuỗi ký tự không thay đổi và cần được lưu trữ cố định.
- **Ví dụ:** Lưu trữ mã quốc gia có độ dài cố định là 2 ký tự.
  ```sql
  CREATE TABLE CountryCodes (
      country_code CHAR(2),
      country_name VARCHAR(50)
  );
  ```

### 2. VARCHAR:

- **Khái niệm:** VARCHAR là kiểu dữ liệu chuỗi ký tự có độ dài có thể biến đổi.
- **Ngữ cảnh:** Thường được sử dụng khi độ dài chuỗi ký tự có thể thay đổi và cần tiết kiệm không gian lưu trữ.
- **Ví dụ:** Lưu trữ thông tin về tên người dùng.
  ```sql
  CREATE TABLE Users (
      user_id INT,
      username VARCHAR(50),
      email VARCHAR(100)
  );
  ```

### 3. TEXT:

- **Khái niệm:** TEXT là kiểu dữ liệu dùng để lưu trữ dữ liệu văn bản lớn.
- **Ngữ cảnh:** Thường được sử dụng để lưu trữ nội dung dài như bài viết, mô tả chi tiết.
- **Ví dụ:** Lưu trữ nội dung bài đăng trong mạng xã hội.
  ```sql
  CREATE TABLE Posts (
      post_id INT,
      user_id INT,
      post_content TEXT
  );
  ```

Các kiểu dữ liệu chuỗi ký tự này cung cấp linh hoạt trong việc lưu trữ và xử lý các chuỗi ký tự và văn bản trong cơ sở dữ liệu, mỗi loại có đặc điểm và ứng dụng riêng biệt tùy thuộc vào yêu cầu cụ thể của ứng dụng.

---

## Unicode Character String Datatype

Các loại dữ liệu chuỗi ký tự Unicode (Unicode Character String Datatypes) trong SQL là nhóm kiểu dữ liệu được sử dụng để lưu trữ và xử lý các chuỗi ký tự đa ngôn ngữ, bao gồm các ký tự từ nhiều bộ mã hóa khác nhau như UTF-8, UTF-16.

### 1. NCHAR:

- **Khái niệm:** NCHAR là kiểu dữ liệu chuỗi ký tự Unicode có độ dài cố định, sử dụng bộ mã hóa Unicode.
- **Ngữ cảnh:** Thường được sử dụng khi cần lưu trữ dữ liệu chuỗi ký tự đa ngôn ngữ và độ dài chuỗi không thay đổi.
- **Ví dụ:** Lưu trữ tên người dùng trong các ứng dụng đa ngôn ngữ.
  ```sql
  CREATE TABLE MultilingualUser (
      user_id INT,
      username NCHAR(50)
  );
  ```

### 2. NVARCHAR:

- **Khái niệm:** NVARCHAR là kiểu dữ liệu chuỗi ký tự Unicode có độ dài có thể thay đổi.
- **Ngữ cảnh:** Thường được sử dụng khi cần lưu trữ các chuỗi ký tự đa ngôn ngữ có độ dài linh hoạt.
- **Ví dụ:** Lưu trữ thông tin về mô tả sản phẩm có thể được hiển thị bằng nhiều ngôn ngữ.
  ```sql
  CREATE TABLE ProductDescription (
      product_id INT,
      description NVARCHAR(500)
  );
  ```

### 3. NTEXT:

- **Khái niệm:** NTEXT là kiểu dữ liệu chuỗi ký tự Unicode lớn, dùng để lưu trữ các văn bản đa ngôn ngữ lớn.
- **Ngữ cảnh:** Thường được sử dụng để lưu trữ nội dung phong phú như bài viết, mô tả chi tiết trong nhiều ngôn ngữ.
- **Ví dụ:** Lưu trữ nội dung bài blog trong một hệ thống đa ngôn ngữ.
  ```sql
  CREATE TABLE BlogPosts (
      post_id INT,
      content NTEXT
  );
  ```

Các kiểu dữ liệu chuỗi ký tự Unicode này cho phép lưu trữ và xử lý dữ liệu chuỗi ký tự đa ngôn ngữ một cách linh hoạt trong cơ sở dữ liệu, phục vụ cho việc xây dựng các ứng dụng hỗ trợ nhiều ngôn ngữ.

---

## Date and Time Datatype

Các loại dữ liệu ngày và thời gian (Date and Time Datatypes) trong SQL là nhóm kiểu dữ liệu được sử dụng để lưu trữ thông tin về ngày, thời gian hoặc cả ngày và thời gian. Các kiểu dữ liệu này bao gồm DATE, TIME, DATETIME, và TIMESTAMP.

### 1. DATE:

- **Khái niệm:** DATE là kiểu dữ liệu dùng để lưu trữ ngày trong định dạng 'YYYY-MM-DD'.
- **Ngữ cảnh:** Thường được sử dụng khi cần lưu trữ thông tin về ngày mà không quan tâm đến thời gian.
- **Ví dụ:** Lưu trữ thông tin ngày sinh của người dùng.
  ```sql
  CREATE TABLE Users (
      user_id INT,
      date_of_birth DATE
  );
  ```

### 2. TIME:

- **Khái niệm:** TIME là kiểu dữ liệu dùng để lưu trữ thời gian trong định dạng 'HH:MM:SS'.
- **Ngữ cảnh:** Thường được sử dụng khi cần lưu trữ thông tin về thời gian trong một ngày.
- **Ví dụ:** Lưu trữ thời gian khi một sự kiện diễn ra.
  ```sql
  CREATE TABLE Event (
      event_id INT,
      start_time TIME,
      end_time TIME
  );
  ```

### 3. DATETIME:

- **Khái niệm:** DATETIME là kiểu dữ liệu kết hợp cả thông tin về ngày và thời gian trong định dạng 'YYYY-MM-DD HH:MM:SS'.
- **Ngữ cảnh:** Thường được sử dụng khi cần lưu trữ cả ngày và thời gian của một sự kiện hoặc giao dịch.
- **Ví dụ:** Lưu trữ thông tin về thời điểm tạo và cập nhật bài viết.
  ```sql
  CREATE TABLE Posts (
      post_id INT,
      created_at DATETIME,
      updated_at DATETIME
  );
  ```

### 4. TIMESTAMP:

- **Khái niệm:** TIMESTAMP là kiểu dữ liệu dùng để lưu trữ thông tin về ngày và thời gian, thường được sử dụng để ghi nhận thời điểm thay đổi dữ liệu.
- **Ngữ cảnh:** Thường được sử dụng khi cần ghi nhận thời điểm thực hiện một thao tác trên dữ liệu.
- **Ví dụ:** Sử dụng TIMESTAMP để ghi nhận thời điểm cập nhật thông tin người dùng.
  ```sql
  CREATE TABLE UserLogs (
      user_id INT,
      action VARCHAR(50),
      timestamp TIMESTAMP
  );
  ```

Các kiểu dữ liệu ngày và thời gian này cho phép lưu trữ và xử lý thông tin về thời gian và ngày tháng một cách linh hoạt trong cơ sở dữ liệu, phục vụ cho việc lưu trữ thông tin thời gian liên quan đến ứng dụng hoặc hệ thống.

---
