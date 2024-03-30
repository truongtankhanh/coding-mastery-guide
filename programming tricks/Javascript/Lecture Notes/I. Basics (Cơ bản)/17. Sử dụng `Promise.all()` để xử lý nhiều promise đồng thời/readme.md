## Sử dụng `Promise.all()` để xử lý nhiều promise đồng thời

**Khái niệm:**

`Promise.all()` là một phương thức được cung cấp sẵn trong JavaScript để xử lý nhiều promise đồng thời.

**Ngữ cảnh sử dụng:**

`Promise.all()` thường được sử dụng trong các trường hợp sau:

- Khi bạn cần thực hiện nhiều yêu cầu API đồng thời và chờ đợi tất cả kết quả trả về.
- Khi bạn cần xử lý nhiều thao tác bất đồng bộ một cách đồng thời.

**Cách sử dụng:**

Cú pháp cơ bản của `Promise.all()`:

```javascript
Promise.all([promise1, promise2, ...])
  .then(results => {
    // Xử lý kết quả trả về của tất cả các promise
  })
  .catch(error => {
    // Xử lý lỗi nếu có
  });
```

- `promise1, promise2, ...`: Danh sách các promise cần xử lý.
- `results`: Mảng chứa kết quả trả về của tất cả các promise.

**Ví dụ:**

Giả sử bạn cần lấy thông tin về sản phẩm và thông tin về người dùng từ hai API khác nhau. Bạn có thể sử dụng `Promise.all()` để thực hiện hai yêu cầu API đồng thời và chờ đợi kết quả trả về của cả hai trước khi hiển thị thông tin cho người dùng.

```javascript
const productPromise = fetch("/api/products/1");
const userPromise = fetch("/api/users/1");

Promise.all([productPromise, userPromise])
  .then((results) => {
    const product = results[0];
    const user = results[1];

    // Hiển thị thông tin sản phẩm và thông tin người dùng
  })
  .catch((error) => {
    // Xử lý lỗi nếu có
  });
```

**Lưu ý:**

- `Promise.all()` chỉ thực hiện khi tất cả các promise trong danh sách được giải quyết.
- Nếu một trong các promise bị lỗi, `Promise.all()` sẽ bị lỗi và không trả về kết quả.

**Kết luận:**

`Promise.all()` là một phương thức hữu ích giúp bạn xử lý nhiều promise đồng thời một cách dễ dàng và hiệu quả. Sử dụng `Promise.all()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
