## Khái niệm Interceptors trong Axios

**Interceptor** là một hàm được gọi trước hoặc sau khi thực hiện một yêu cầu HTTP trong Axios. Nó cho phép bạn kiểm soát toàn bộ quá trình xử lý yêu cầu và phản hồi, bao gồm:

- **Thêm header:** Interceptor giúp bạn thêm header chung cho tất cả các yêu cầu, ví dụ như token xác thực hoặc thông tin về trình duyệt.
- **Kiểm tra lỗi:** Interceptor giúp bạn chặn các yêu cầu không hợp lệ hoặc xử lý lỗi xảy ra trong quá trình thực hiện yêu cầu.
- **Thực hiện các thao tác trước và sau mỗi yêu cầu:** Interceptor cho phép bạn thực hiện các thao tác tùy chỉnh trước khi gửi yêu cầu và sau khi nhận được phản hồi.

## Ngữ cảnh sử dụng Interceptors

Interceptor thường được sử dụng trong các trường hợp sau:

- **Xác thực:** Interceptor giúp bạn thêm token xác thực vào header của tất cả các yêu cầu.
- **Xử lý lỗi:** Interceptor giúp bạn chặn các yêu cầu không hợp lệ hoặc hiển thị thông báo lỗi cho người dùng.
- **Ghi nhật ký:** Interceptor giúp bạn ghi lại thông tin về tất cả các yêu cầu và phản hồi để theo dõi và gỡ lỗi.
- **Cung cấp dữ liệu chung:** Interceptor giúp bạn cung cấp dữ liệu chung cho tất cả các yêu cầu, ví dụ như thông tin về phiên người dùng hoặc cài đặt ứng dụng.

## Ví dụ sử dụng Interceptors

Dưới đây là ví dụ về cách sử dụng interceptor để thêm header chung cho tất cả các yêu cầu:

```javascript
axios.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
```

Ví dụ này sử dụng interceptor `request` để thêm header `Authorization` với token xác thực vào tất cả các yêu cầu được gửi đi.

Dưới đây là ví dụ về cách sử dụng interceptor để xử lý lỗi:

```javascript
axios.interceptors.response.use(
  (response) => {
    if (response.status === 401) {
      // Xử lý lỗi 401: Unauthorized
    }
    return response;
  },
  (error) => {
    // Xử lý lỗi chung
    return Promise.reject(error);
  }
);
```

Ví dụ này sử dụng interceptor `response` để kiểm tra mã trạng thái của phản hồi. Nếu mã trạng thái là 401 (Unauthorized), interceptor sẽ xử lý lỗi 401.

## Tham khảo thêm

- Tài liệu chính thức về Interceptors trong Axios: [https://axios-http.com/docs/interceptors](https://axios-http.com/docs/interceptors)

## Lời kết

Interceptor là một công cụ mạnh mẽ trong Axios giúp bạn kiểm soát toàn bộ quá trình xử lý yêu cầu và phản hồi. Sử dụng interceptor giúp bạn viết mã code sạch hơn, dễ bảo trì hơn và xử lý các tình huống lỗi hiệu quả hơn.
