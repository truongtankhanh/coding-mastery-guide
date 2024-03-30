## Thiết lập cài đặt mặc định trong Axios

Axios cho phép bạn thiết lập cài đặt mặc định cho tất cả các yêu cầu được thực hiện. Cài đặt mặc định giúp bạn tiết kiệm thời gian và công sức khi viết code, vì bạn không cần phải cấu hình lại các cài đặt này cho từng yêu cầu.

### Khái niệm

Cài đặt mặc định trong Axios bao gồm:

- **Base URL:** URL cơ sở được sử dụng cho tất cả các yêu cầu.
- **Headers:** Tiêu đề mặc định được thêm vào tất cả các yêu cầu.
- **Timeout:** Thời gian chờ mặc định cho tất cả các yêu cầu.
- **Adapter:** Adapter được sử dụng để thực hiện các yêu cầu HTTP.
- **Proxy:** Proxy được sử dụng để chuyển tiếp các yêu cầu HTTP.

### Ngữ cảnh sử dụng

Thiết lập cài đặt mặc định hữu ích trong các trường hợp sau:

- **Bạn sử dụng cùng một base URL cho tất cả các yêu cầu.**
- **Bạn cần thêm các tiêu đề chung cho tất cả các yêu cầu.**
- **Bạn muốn đặt thời gian chờ mặc định cho tất cả các yêu cầu.**
- **Bạn muốn sử dụng một adapter hoặc proxy cụ thể cho tất cả các yêu cầu.**

### Ví dụ sử dụng

Dưới đây là ví dụ về cách thiết lập base URL mặc định:

```javascript
axios.defaults.baseURL = "https://api.example.com/";
```

Ví dụ này thiết lập base URL là `https://api.example.com/` cho tất cả các yêu cầu được thực hiện bởi Axios.

Dưới đây là ví dụ về cách thiết lập header mặc định:

```javascript
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
```

Ví dụ này thêm header `Authorization` với token xác thực vào tất cả các yêu cầu được thực hiện bởi Axios.

### Tham khảo thêm

- Tài liệu chính thức về cài đặt mặc định trong Axios: [https://axios-http.com/docs/config_defaults](https://axios-http.com/docs/config_defaults)

## Lời kết

Thiết lập cài đặt mặc định là một cách hiệu quả để tiết kiệm thời gian và công sức khi viết code với Axios. Sử dụng cài đặt mặc định giúp bạn viết code sạch hơn, dễ bảo trì hơn và xử lý các yêu cầu HTTP hiệu quả hơn.
