1. **Custom Instances**: Tạo các phiên bản tùy chỉnh của Axios với các cấu hình riêng biệt. Điều này cho phép bạn quản lý các cấu hình khác nhau cho các loại yêu cầu khác nhau hoặc thậm chí là cho các ứng dụng khác nhau.

```javascript
const instance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 1000,
  headers: { Authorization: "Bearer YOUR_TOKEN" },
});

// Sử dụng phiên bản tùy chỉnh
instance
  .get("/endpoint")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

2. **Sending Form Data**: Axios cho phép gửi dữ liệu dạng form thông qua phương thức POST bằng cách sử dụng `FormData`:

```javascript
const formData = new FormData();
formData.append("username", "example");

axios
  .post("/endpoint", formData)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

3. **Handling Errors**: Đảm bảo xử lý các lỗi một cách chính xác và hợp lý để cung cấp trải nghiệm tốt hơn cho người dùng.

```javascript
axios
  .get("/endpoint")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (error.response) {
      // Xử lý lỗi từ phía máy chủ
      console.error(error.response.data);
    } else if (error.request) {
      // Xử lý lỗi không nhận được phản hồi từ máy chủ
      console.error(error.request);
    } else {
      // Xử lý lỗi không thể gửi yêu cầu
      console.error("Lỗi", error.message);
    }
  });
```

4. **Custom Response Data Transformations**: Sử dụng `transformResponse` để xử lý dữ liệu phản hồi trước khi nó được truyền vào hàm xử lý thành công hoặc lỗi.

```javascript
axios
  .get("/endpoint", {
    transformResponse: axios.defaults.transformResponse.concat((data) => {
      // Xử lý dữ liệu phản hồi ở đây
      return data;
    }),
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

5. **Sending JSON Data**: Axios tự động chuyển đổi các đối tượng JavaScript thành JSON khi sử dụng `POST` hoặc `PUT`.

```javascript
const data = {
  username: "example",
  password: "password",
};

axios
  .post("/endpoint", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

6. **Multiple Concurrent Requests**: Thực hiện nhiều yêu cầu cùng một lúc và xử lý kết quả khi tất cả các yêu cầu đã hoàn thành.

```javascript
axios
  .all([axios.get("/endpoint1"), axios.get("/endpoint2")])
  .then(
    axios.spread((response1, response2) => {
      // Xử lý kết quả từ cả hai yêu cầu
      console.log(response1.data);
      console.log(response2.data);
    })
  )
  .catch((error) => {
    console.error(error);
  });
```

7. **Optimizing Performance**: Tối ưu hóa hiệu suất bằng cách sử dụng các kỹ thuật như caching hoặc sử dụng HTTP/2.

```javascript
axios
  .get("/endpoint", {
    // Sử dụng caching
    cache: true,
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```
