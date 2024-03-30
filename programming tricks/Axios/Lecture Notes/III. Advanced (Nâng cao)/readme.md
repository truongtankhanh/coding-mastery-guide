1. **Interceptors**: Axios cho phép bạn thêm các interceptors để xử lý các yêu cầu và phản hồi trước khi chúng được gửi hoặc sau khi chúng được nhận. Điều này hữu ích để thực hiện xác thực, ghi nhật ký, hoặc xử lý lỗi toàn cục.

   ```javascript
   axios.interceptors.request.use(
     (config) => {
       // Xử lý trước khi gửi yêu cầu
       return config;
     },
     (error) => {
       // Xử lý lỗi
       return Promise.reject(error);
     }
   );

   axios.interceptors.response.use(
     (response) => {
       // Xử lý phản hồi trước khi trả về dữ liệu
       return response;
     },
     (error) => {
       // Xử lý lỗi phản hồi
       return Promise.reject(error);
     }
   );
   ```

2. **Tùy chỉnh Cài đặt**: Bạn có thể tạo một phiên bản Axios với các cài đặt tùy chỉnh cho toàn bộ ứng dụng của mình.

   ```javascript
   const customAxios = axios.create({
     baseURL: "https://api.example.com/",
     timeout: 5000,
     headers: {
       Authorization: "Bearer TOKEN",
     },
   });
   ```

3. **Gọi Nhiều Yêu Cầu Cùng Lúc**: Sử dụng `axios.all` để gửi nhiều yêu cầu đồng thời và xử lý cùng một lúc.

   ```javascript
   axios.all([axios.get("/user"), axios.get("/posts")]).then(
     axios.spread((userResponse, postsResponse) => {
       // Xử lý kết quả của cả hai yêu cầu ở đây
     })
   );
   ```

4. **Hủy Yêu Cầu**: Sử dụng Axios để hủy yêu cầu khi cần thiết, đặc biệt là trong các trường hợp như khi người dùng rời khỏi trang hoặc yêu cầu trùng lặp.

   ```javascript
   const source = axios.CancelToken.source();

   axios.get("/user", {
     cancelToken: source.token,
   });

   // Hủy yêu cầu
   source.cancel("Request canceled");
   ```

5. **Kiểm soát lỗi toàn cục**: Xử lý lỗi toàn cục và hiển thị thông báo hoặc ghi nhật ký phù hợp.

   ```javascript
   axios.interceptors.response.use(
     (response) => {
       return response;
     },
     (error) => {
       if (axios.isCancel(error)) {
         console.log("Request canceled", error.message);
       } else {
         console.error("Error:", error.message);
       }
       return Promise.reject(error);
     }
   );
   ```

6. **Xử lý Dữ liệu Trả về**: Sử dụng interceptors hoặc transforms để xử lý dữ liệu trả về từ phản hồi trước khi nó được trả về cho lớp gọi.

   ```javascript
   axios.interceptors.response.use(
     (response) => {
       response.data = transformData(response.data);
       return response;
     },
     (error) => {
       return Promise.reject(error);
     }
   );

   function transformData(data) {
     // Xử lý dữ liệu trả về ở đây
     return data;
   }
   ```

7. **Thiết lập Intercept cho Một Yêu Cầu Cụ thể**: Bạn có thể thiết lập các interceptors cho một yêu cầu cụ thể thay vì toàn bộ ứng dụng.

   ```javascript
   const requestInterceptor = axios.interceptors.request.use(
     (config) => {
       // Xử lý trước khi gửi yêu cầu
       return config;
     },
     (error) => {
       // Xử lý lỗi
       return Promise.reject(error);
     }
   );

   // Hủy interceptor khi không cần thiết nữa
   axios.interceptors.request.eject(requestInterceptor);
   ```

8. **Xử lý Lỗi Tùy Chỉnh**: Đôi khi bạn muốn xử lý các loại lỗi cụ thể một cách khác nhau. Sử dụng các điều kiện để phân biệt giữa các loại lỗi và xử lý chúng một cách tùy chỉnh.

   ```javascript
   axios.interceptors.response.use(
     (response) => {
       return response;
     },
     (error) => {
       if (error.response) {
         // Lỗi từ phản hồi
         if (error.response.status === 404) {
           // Xử lý lỗi 404
         } else {
           // Xử lý các loại lỗi khác
         }
       } else if (error.request) {
         // Lỗi khi không có phản hồi từ máy chủ
       } else {
         // Lỗi khác
       }
       return Promise.reject(error);
     }
   );
   ```

9. **Chia Nhỏ Phản Hồi**: Đối với các yêu cầu trả về dữ liệu lớn, bạn có thể muốn chia nhỏ dữ liệu và xử lý từng phần một. Axios cho phép bạn làm điều này bằng cách sử dụng `responseType` là `'stream'`.

   ```javascript
   axios
     .get("/large-data", { responseType: "stream" })
     .then((response) => {
       response.data.on("data", (chunk) => {
         // Xử lý từng phần dữ liệu
       });
       response.data.on("end", () => {
         // Xử lý khi dữ liệu kết thúc
       });
     })
     .catch((error) => {
       // Xử lý lỗi
     });
   ```

10. **Tối Ưu Hiệu Suất**: Để tối ưu hiệu suất, hãy sử dụng HTTP/2 khi máy chủ hỗ trợ. Cài đặt này có thể cải thiện hiệu suất của ứng dụng của bạn bằng cách sử dụng đa luồng và nén tiêu đề.

    ```javascript
    const httpsAgent = new https.Agent({ keepAlive: true });

    axios.get("https://api.example.com/", {
      httpsAgent,
      // Cài đặt HTTP/2
      agent: new Http2Agent(),
    });
    ```
