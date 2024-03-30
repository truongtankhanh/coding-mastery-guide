## Sử dụng `async/await` để xử lý các hàm bất đồng bộ một cách dễ đọc hơn

**Khái niệm:**

- **`async`:** Từ khóa để đánh dấu một hàm bất đồng bộ.
- **`await`:** Từ khóa để chờ đợi kết quả của một hàm bất đồng bộ.

**Ngữ cảnh sử dụng:**

`async/await` được sử dụng để xử lý các hàm bất đồng bộ một cách dễ đọc hơn so với cách sử dụng callback hoặc Promise.

**Cách sử dụng:**

**1. Hàm async:**

```javascript
async function myFunction() {
  // ...
}
```

**2. Sử dụng `await`:**

```javascript
async function myFunction() {
  const result = await someAsyncFunction();

  // Sử dụng result
}
```

**3. Ví dụ:**

```javascript
async function getData() {
  const response = await fetch("https://api.example.com/");
  const data = await response.json();

  // Sử dụng data
}

getData();
```

**Lưu ý:**

- `async/await` chỉ có thể sử dụng trong các hàm async.
- `await` chỉ có thể sử dụng trong các hàm async.
- `async/await` không thay thế cho callback hoặc Promise, mà là một cách khác để xử lý các hàm bất đồng bộ.

**Kết luận:**

`async/await` là một công cụ hữu ích giúp bạn xử lý các hàm bất đồng bộ một cách dễ đọc, dễ hiểu và dễ viết mã hơn. Sử dụng `async/await` giúp tăng hiệu quả và năng suất của lập trình viên.
