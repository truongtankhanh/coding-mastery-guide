## Thủ thuật lập trình Axios - Custom Instances

**Khái niệm:**

**Custom Instances** là tính năng cho phép bạn tạo ra các phiên bản riêng biệt của Axios với các cấu hình riêng biệt. Mỗi phiên bản được gọi là một **instance**.

**Ngữ cảnh:**

Custom Instances hữu ích trong các trường hợp sau:

- **Quản lý các cấu hình khác nhau cho các loại yêu cầu khác nhau:** Ví dụ, bạn có thể tạo một instance cho các yêu cầu API cần xác thực và một instance khác cho các yêu cầu API không cần xác thực.
- **Sử dụng Axios trong nhiều ứng dụng:** Mỗi ứng dụng có thể sử dụng một instance riêng với cấu hình phù hợp với nhu cầu của ứng dụng đó.

**Cách sử dụng:**

Để tạo một custom instance, bạn sử dụng hàm `axios.create()`. Hàm này nhận một đối tượng cấu hình làm tham số. Đối tượng cấu hình có thể bao gồm các thuộc tính sau:

- **`baseURL`:** URL cơ sở cho các yêu cầu được thực hiện bởi instance này.
- **`headers`:** Các header mặc định cho các yêu cầu được thực hiện bởi instance này.
- **`timeout`:** Thời gian chờ mặc định cho các yêu cầu được thực hiện bởi instance này.
- **`auth`:** Cấu hình xác thực cho các yêu cầu được thực hiện bởi instance này.

Ví dụ:

```javascript
const instance1 = axios.create({
  baseURL: "https://api.example.com/v1",
  headers: {
    Authorization: "Bearer my-token",
  },
});

const instance2 = axios.create({
  baseURL: "https://api.example.com/v2",
});

// Sử dụng instance1 để thực hiện yêu cầu API cần xác thực
instance1.get("/users");

// Sử dụng instance2 để thực hiện yêu cầu API không cần xác thực
instance2.get("/products");
```

**Ví dụ chi tiết:**

Giả sử bạn có một ứng dụng web sử dụng Axios để thực hiện các yêu cầu API đến hai dịch vụ khác nhau:

- **Dịch vụ A:** Cần xác thực bằng token
- **Dịch vụ B:** Không cần xác thực

Bạn có thể sử dụng custom instances để quản lý các cấu hình khác nhau cho hai dịch vụ này:

```javascript
const instanceA = axios.create({
  baseURL: "https://api.service-a.com/",
  headers: {
    Authorization: "Bearer my-token",
  },
});

const instanceB = axios.create({
  baseURL: "https://api.service-b.com/",
});

// Gọi API dịch vụ A
instanceA.get("/users").then((response) => {
  // Xử lý dữ liệu trả về
});

// Gọi API dịch vụ B
instanceB.get("/products").then((response) => {
  // Xử lý dữ liệu trả về
});
```

**Lợi ích:**

- **Sử dụng mã dễ dàng hơn:** Việc sử dụng custom instances giúp bạn quản lý các cấu hình khác nhau dễ dàng hơn, giúp mã của bạn dễ đọc và dễ hiểu hơn.
- **Tăng khả năng bảo trì:** Việc tách biệt các cấu hình giúp bạn dễ dàng bảo trì và cập nhật mã của mình.
- **Tăng hiệu suất:** Việc sử dụng custom instances giúp bạn tối ưu hóa hiệu suất cho các loại yêu cầu khác nhau.

**Tài liệu tham khảo:**

- Tài liệu Axios: [https://axios-http.com/vi/docs/instance](https://axios-http.com/vi/docs/instance)

**Lưu ý:**

- Việc sử dụng custom instances có thể làm cho mã của bạn phức tạp hơn. Do đó, bạn nên cân nhắc kỹ trước khi sử dụng tính năng này.
- Bạn nên đặt tên cho các instance của mình một cách rõ ràng để dễ dàng quản lý và phân biệt chúng.
