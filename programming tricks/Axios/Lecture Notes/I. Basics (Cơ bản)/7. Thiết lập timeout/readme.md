## Đặt thời gian chờ tối đa cho yêu cầu trong Axios

**Thời gian chờ tối đa** là thời gian tối đa mà Axios sẽ chờ đợi phản hồi cho một yêu cầu HTTP. Sau khi thời gian chờ tối đa trôi qua, Axios sẽ hủy yêu cầu và trả về lỗi.

### Khái niệm

**Thời gian chờ tối đa** được đặt trong thuộc tính `timeout` của cấu hình Axios. Thuộc tính `timeout` được chỉ định bằng mili giây.

### Ngữ cảnh sử dụng

Đặt thời gian chờ tối đa hữu ích trong các trường hợp sau:

- **Ngăn chặn các yêu cầu treo:** Nếu một yêu cầu mất quá nhiều thời gian để phản hồi, Axios sẽ hủy yêu cầu và bạn có thể xử lý lỗi.
- **Cải thiện hiệu suất:** Đặt thời gian chờ tối đa hợp lý giúp cải thiện hiệu suất ứng dụng bằng cách tránh lãng phí thời gian chờ đợi các yêu cầu không phản hồi.

### Ví dụ sử dụng

Dưới đây là ví dụ về cách đặt thời gian chờ tối đa cho yêu cầu:

```javascript
const axios = axios.create({
  timeout: 5000, // 5 giây
});

axios.get("https://api.example.com/users");
```

Ví dụ này đặt thời gian chờ tối đa là 5 giây cho yêu cầu GET đến API. Nếu yêu cầu không phản hồi trong vòng 5 giây, Axios sẽ hủy yêu cầu và trả về lỗi.

### Tham khảo thêm

- Tài liệu chính thức về thời gian chờ tối đa trong Axios: [https://axios-http.com/docs/req_config](https://axios-http.com/docs/req_config)

## Lời kết

Đặt thời gian chờ tối đa là một cách hiệu quả để ngăn chặn các yêu cầu treo và cải thiện hiệu suất ứng dụng. Sử dụng thời gian chờ tối đa giúp bạn đảm bảo ứng dụng của bạn hoạt động ổn định và xử lý các lỗi một cách hiệu quả.
