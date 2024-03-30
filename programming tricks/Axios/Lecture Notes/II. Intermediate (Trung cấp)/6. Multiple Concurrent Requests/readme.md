## Thủ thuật lập trình Axios - Gửi nhiều yêu cầu đồng thời

**Khái niệm:**

**Gửi nhiều yêu cầu đồng thời** là kỹ thuật cho phép bạn thực hiện nhiều yêu cầu đến máy chủ cùng một lúc. Điều này có thể giúp bạn cải thiện hiệu suất ứng dụng bằng cách giảm thiểu thời gian chờ đợi.

**Ngữ cảnh:**

Gửi nhiều yêu cầu đồng thời hữu ích trong các trường hợp sau:

- **Tải dữ liệu cho trang web:** Ví dụ, bạn có thể tải dữ liệu cho các thành phần khác nhau của trang web cùng một lúc.
- **Tải dữ liệu cho ứng dụng di động:** Ví dụ, bạn có thể tải dữ liệu cho các màn hình khác nhau của ứng dụng di động cùng một lúc.

**Cách sử dụng:**

Có hai cách chính để thực hiện nhiều yêu cầu đồng thời với Axios:

- **Sử dụng Promise.all():** Hàm `Promise.all()` nhận một mảng các Promise và trả về một Promise mới. Promise mới sẽ được giải quyết khi tất cả các Promise trong mảng được giải quyết.

```javascript
const promises = [axios.get("/api/users"), axios.get("/api/products")];

Promise.all(promises).then((responses) => {
  // Xử lý dữ liệu trả về
  const users = responses[0].data;
  const products = responses[1].data;
});
```

- **Sử dụng `async` và `await`:** Từ khóa `async` cho phép bạn định nghĩa một hàm bất đồng bộ. Từ khóa `await` cho phép bạn chờ đợi một Promise được giải quyết.

```javascript
async function getData() {
  const users = await axios.get("/api/users");
  const products = await axios.get("/api/products");

  // Xử lý dữ liệu trả về
  console.log(users.data);
  console.log(products.data);
}

getData();
```

**Ví dụ chi tiết:**

Giả sử bạn có một trang web hiển thị danh sách người dùng và danh sách sản phẩm. Bạn có thể sử dụng Axios để tải dữ liệu cho hai danh sách này cùng một lúc:

```javascript
const promises = [axios.get("/api/users"), axios.get("/api/products")];

Promise.all(promises).then((responses) => {
  // Xử lý dữ liệu trả về
  const users = responses[0].data;
  const products = responses[1].data;

  // Hiển thị danh sách người dùng
  const userList = document.getElementById("user-list");
  for (const user of users) {
    const userItem = document.createElement("li");
    userItem.textContent = user.name;
    userList.appendChild(userItem);
  }

  // Hiển thị danh sách sản phẩm
  const productList = document.getElementById("product-list");
  for (const product of products) {
    const productItem = document.createElement("li");
    productItem.textContent = product.name;
    productList.appendChild(productItem);
  }
});
```

**Lợi ích:**

- **Cải thiện hiệu suất:** Gửi nhiều yêu cầu đồng thời có thể giúp bạn cải thiện hiệu suất ứng dụng bằng cách giảm thiểu thời gian chờ đợi.
- **Tăng khả năng phản hồi:** Gửi nhiều yêu cầu đồng thời có thể giúp bạn tăng khả năng phản hồi của ứng dụng bằng cách cho phép người dùng tương tác với ứng dụng nhanh hơn.

**Lưu ý:**

- Bạn nên đảm bảo rằng số lượng yêu cầu đồng thời không quá tải máy chủ.
- Bạn nên sử dụng các thư viện hoặc framework hỗ trợ xử lý nhiều yêu cầu đồng thời để đơn giản hóa việc xử lý nhiều yêu cầu.
