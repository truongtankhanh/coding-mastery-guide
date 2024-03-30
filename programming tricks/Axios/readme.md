# Những Kỹ Thuật Lập Trình Cho Axios Mà Bạn Có Thể Chưa Biết

Axios là một thư viện JavaScript mạnh mẽ cho việc gửi các yêu cầu HTTP từ trình duyệt hoặc Node.js. Nó cung cấp một giao diện dễ sử dụng để tương tác với các API và làm cho việc xử lý yêu cầu HTTP trở nên đơn giản hơn. Trong bài viết này, chúng ta sẽ khám phá một số kỹ thuật lập trình tiện ích cho Axios mà bạn có thể chưa biết.

## 1. Sử Dụng Interceptors

Interceptor là một trong những tính năng mạnh mẽ nhất của Axios, cho phép bạn can thiệp vào quá trình gửi hoặc nhận yêu cầu trước khi chúng được xử lý hoặc sau khi chúng đã được xử lý. Điều này rất hữu ích khi bạn muốn thực hiện các hành động như thêm headers, xử lý lỗi toàn cục, hoặc thậm chí là giám sát yêu cầu. Dưới đây là một ví dụ về cách sử dụng interceptor để thêm token vào mỗi yêu cầu:

```javascript
import axios from "axios";

// Thêm một interceptor để thêm token vào mỗi yêu cầu
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
```

## 2. Tùy Chọn Mặc Định

Bạn có thể thiết lập các tùy chọn mặc định cho tất cả các yêu cầu Axios bằng cách sử dụng `axios.defaults`. Điều này tiết kiệm thời gian và công sức khi bạn muốn sử dụng các cài đặt giống nhau cho nhiều yêu cầu. Ví dụ, bạn có thể thiết lập baseUrl mặc định như sau:

```javascript
axios.defaults.baseURL = "https://api.example.com";
```

## 3. Sử Dụng Cancel Token

Cancel token là một cơ chế cho phép bạn hủy bỏ một yêu cầu Axios trước khi nó hoàn thành. Điều này hữu ích khi bạn muốn ngăn chặn yêu cầu không cần thiết, như khi người dùng thực hiện một hành động mới và bạn không còn quan tâm đến kết quả của yêu cầu cũ nữa. Dưới đây là một ví dụ về cách sử dụng cancel token:

```javascript
import axios from "axios";

// Tạo một source mới cho cancel token
const cancelSource = axios.CancelToken.source();

// Thực hiện yêu cầu Axios với cancel token
axios.get("/api/data", {
  cancelToken: cancelSource.token,
});

// Hủy bỏ yêu cầu
cancelSource.cancel("Request canceled by user.");
```
