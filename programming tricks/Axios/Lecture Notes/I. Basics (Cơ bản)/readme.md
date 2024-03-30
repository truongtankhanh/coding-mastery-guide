1. **Interceptors**: Sử dụng interceptors để kiểm soát toàn bộ các yêu cầu và phản hồi. Bạn có thể sử dụng chúng để thêm các tiêu đề, kiểm tra lỗi hoặc thực hiện các thao tác trước và sau mỗi yêu cầu.

```javascript
// Thêm một interceptor cho mỗi yêu cầu
axios.interceptors.request.use(
  (config) => {
    // Thực hiện bất kỳ thay đổi nào trước khi yêu cầu được gửi
    return config;
  },
  (error) => {
    // Xử lý lỗi khi yêu cầu không thể được gửi
    return Promise.reject(error);
  }
);

// Thêm một interceptor cho mỗi phản hồi
axios.interceptors.response.use(
  (response) => {
    // Thực hiện bất kỳ thay đổi nào trước khi phản hồi được trả về
    return response;
  },
  (error) => {
    // Xử lý lỗi khi nhận phản hồi không thành công
    return Promise.reject(error);
  }
);
```

2. **Cài đặt mặc định**: Thiết lập cài đặt mặc định cho tất cả các yêu cầu, chẳng hạn như cài đặt base URL hoặc các tiêu đề mặc định.

```javascript
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = "Bearer token";
```

3. **Dùng Async/Await**: Sử dụng async/await để viết mã dễ đọc hơn khi làm việc với Axios.

```javascript
async function fetchData() {
  try {
    const response = await axios.get("/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
```

4. **Xử lý lỗi global**: Bắt các lỗi global một cách dễ dàng thông qua interceptor hoặc try...catch.

```javascript
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // Xử lý lỗi khi cần đăng nhập lại
    } else {
      return Promise.reject(error);
    }
  }
);
```

5. **Tùy chỉnh tiêu đề**: Đặt các tiêu đề mà bạn muốn gửi cùng với yêu cầu.

```javascript
const config = {
  headers: {
    "Content-Type": "application/json",
    "X-Custom-Header": "value",
  },
};

axios.post("/api", data, config);
```

6. **Gửi dữ liệu**: Axios cho phép bạn gửi dữ liệu với các yêu cầu POST, PUT hoặc PATCH.

```javascript
const data = {
  key: "value",
};

axios
  .post("/api", data)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

7. **Thiết lập timeout**: Đặt thời gian chờ tối đa cho yêu cầu.

```javascript
axios
  .get("/api", { timeout: 5000 })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

8. **Hủy yêu cầu**: Hủy yêu cầu khi cần thiết, ví dụ như khi người dùng rời đi hoặc yêu cầu không còn cần thiết nữa.

```javascript
const source = axios.CancelToken.source();

axios
  .get("/api", { cancelToken: source.token })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    if (axios.isCancel(error)) {
      console.log("Request canceled:", error.message);
    } else {
      console.error("Error:", error);
    }
  });

// Hủy yêu cầu
source.cancel("Request canceled by the user.");
```

9. **Chuyển đổi dữ liệu**: Axios tự động chuyển đổi dữ liệu JSON.

```javascript
axios
  .get("/api")
  .then((response) => {
    // Dữ liệu JSON được chuyển đổi tự động
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```

10. **Xác thực dựa trên cổng**: Sử dụng các phiên bản của Axios để xác thực dựa trên cổng.

```javascript
const instance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 5000,
  headers: {
    Authorization: "Bearer token",
  },
});

instance
  .get("/api")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
```
