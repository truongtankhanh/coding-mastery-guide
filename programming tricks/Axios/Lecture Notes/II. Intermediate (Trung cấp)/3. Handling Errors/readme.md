## Thủ thuật lập trình Axios - Xử lý lỗi

**Khái niệm:**

**Xử lý lỗi** là một phần quan trọng trong bất kỳ ứng dụng nào. Việc xử lý lỗi giúp bạn đảm bảo rằng ứng dụng của bạn hoạt động chính xác và cung cấp trải nghiệm tốt cho người dùng.

**Ngữ cảnh:**

Xử lý lỗi trong Axios hữu ích trong các trường hợp sau:

- **Lỗi mạng:** Lỗi mạng có thể xảy ra do nhiều nguyên nhân, chẳng hạn như kết nối internet không ổn định hoặc máy chủ không phản hồi.
- **Lỗi API:** Lỗi API có thể xảy ra do nhiều nguyên nhân, chẳng hạn như URL API không hợp lệ hoặc dữ liệu yêu cầu không hợp lệ.
- **Lỗi ứng dụng:** Lỗi ứng dụng có thể xảy ra do nhiều nguyên nhân, chẳng hạn như lỗi mã hoặc lỗi logic.

**Cách sử dụng:**

Axios cung cấp một số cách để xử lý lỗi:

- **Sử dụng phương thức `catch()`:** Phương thức `catch()` được gọi khi xảy ra lỗi. Bạn có thể sử dụng phương thức này để hiển thị thông báo lỗi cho người dùng hoặc thực hiện các hành động khác.

- **Sử dụng thuộc tính `onDownloadProgress`:** Thuộc tính `onDownloadProgress` được gọi khi tiến trình tải xuống dữ liệu bị thay đổi. Bạn có thể sử dụng thuộc tính này để hiển thị thanh tiến trình cho người dùng.

- **Sử dụng thuộc tính `onUploadProgress`:** Thuộc tính `onUploadProgress` được gọi khi tiến trình tải lên dữ liệu bị thay đổi. Bạn có thể sử dụng thuộc tính này để hiển thị thanh tiến trình cho người dùng.

**Ví dụ:**

```javascript
axios
  .get("/api/users")
  .then((response) => {
    // Xử lý dữ liệu trả về
  })
  .catch((error) => {
    // Hiển thị thông báo lỗi cho người dùng
  });
```

**Ví dụ chi tiết:**

Giả sử bạn có một ứng dụng web sử dụng Axios để tải xuống dữ liệu từ máy chủ. Bạn có thể sử dụng thuộc tính `onDownloadProgress` để hiển thị thanh tiến trình cho người dùng:

```javascript
const progress = document.getElementById("progress");

axios
  .get("/data.json", {
    onDownloadProgress: (progressEvent) => {
      const progressPercentage = Math.round(
        (progressEvent.loaded / progressEvent.total) * 100
      );

      progress.style.width = `${progressPercentage}%`;
    },
  })
  .then((response) => {
    // Xử lý dữ liệu trả về
  })
  .catch((error) => {
    // Hiển thị thông báo lỗi cho người dùng
  });
```

**Lợi ích:**

- **Cải thiện trải nghiệm người dùng:** Việc xử lý lỗi giúp bạn cung cấp trải nghiệm tốt hơn cho người dùng bằng cách hiển thị thông báo lỗi rõ ràng và hữu ích.
- **Tăng độ tin cậy của ứng dụng:** Việc xử lý lỗi giúp bạn tăng độ tin cậy của ứng dụng bằng cách đảm bảo rằng ứng dụng của bạn hoạt động chính xác trong mọi trường hợp.

**Tài liệu tham khảo:**

- Tài liệu Axios: [https://axios-http.com/docs/handling_errors](https://axios-http.com/docs/handling_errors)

**Lưu ý:**

- Bạn nên đảm bảo rằng tất cả các lỗi được xử lý một cách chính xác và hợp lý.
- Bạn nên sử dụng các thư viện hoặc framework hỗ trợ xử lý lỗi để đơn giản hóa việc xử lý lỗi.
