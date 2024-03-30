## Sử dụng async/await với Axios

**Async/await** là cú pháp JavaScript giúp viết mã bất đồng bộ dễ đọc và dễ hiểu hơn. Khi sử dụng async/await với Axios, bạn có thể viết mã theo trình tự tuần tự, giống như đang xử lý các thao tác đồng bộ.

### Khái niệm

**Async/await** bao gồm hai từ khóa:

- **Async:** Từ khóa này được sử dụng để đánh dấu một hàm là hàm bất đồng bộ.
- **Await:** Từ khóa này được sử dụng để chờ đợi một Promise được giải quyết.

**Promise** là một đối tượng JavaScript đại diện cho một thao tác bất đồng bộ. Khi một Promise được giải quyết, nó sẽ trả về một giá trị hoặc một lỗi.

### Ngữ cảnh sử dụng

Sử dụng async/await với Axios hữu ích trong các trường hợp sau:

- **Bạn cần thực hiện nhiều yêu cầu HTTP liên tiếp.**
- **Bạn cần xử lý kết quả của một yêu cầu HTTP trước khi thực hiện yêu cầu tiếp theo.**

### Ví dụ sử dụng

Dưới đây là ví dụ về cách sử dụng async/await để thực hiện hai yêu cầu HTTP liên tiếp:

```javascript
async function getData() {
  const response1 = await axios.get("https://api.example.com/users");
  const response2 = await axios.get("https://api.example.com/posts");

  // Xử lý dữ liệu của response1 và response2
}
```

Ví dụ này sử dụng async/await để thực hiện hai yêu cầu HTTP:

- Yêu cầu đầu tiên lấy danh sách người dùng từ API.
- Yêu cầu thứ hai lấy danh sách bài viết từ API.

Sau khi cả hai yêu cầu được giải quyết, mã sẽ xử lý dữ liệu của cả hai response.

### Tham khảo thêm

- Tài liệu chính thức về async/await trong JavaScript: [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/async_function)

## Lời kết

Sử dụng async/await với Axios giúp bạn viết mã bất đồng bộ dễ đọc và dễ hiểu hơn. Việc sử dụng async/await giúp bạn viết code sạch hơn, dễ bảo trì hơn và xử lý các yêu cầu HTTP hiệu quả hơn.
