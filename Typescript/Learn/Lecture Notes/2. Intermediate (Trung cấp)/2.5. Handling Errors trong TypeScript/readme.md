## Sử dụng try-catch để xử lý lỗi.

Sử dụng try-catch trong TypeScript là cách để xử lý các ngoại lệ (exceptions) có thể xảy ra trong quá trình thực thi code. Khi bạn thực hiện các tác vụ như gọi API, đọc ghi file, hoặc thao tác với dữ liệu người dùng, có thể có các tình huống không mong muốn xảy ra lỗi. Try-catch giúp bạn điều khiển các tình huống này để tránh việc chương trình dừng đột ngột và cung cấp cơ hội xử lý lỗi một cách kiểm soát.

### Khái niệm:

Try-catch là một cấu trúc trong lập trình giúp bắt và xử lý các ngoại lệ trong một phần code cụ thể. Mã trong khối "try" được thực thi, và nếu có lỗi, mã trong khối "catch" sẽ được thực thi để xử lý ngoại lệ.

### Ngữ cảnh:

Try-catch thường được sử dụng khi có những hành động có thể gây ra lỗi và bạn muốn xử lý các lỗi này một cách graceful (elegantly), cung cấp thông điệp hoặc xử lý lỗi thay vì chương trình dừng hoạt động.

### Cách sử dụng:

Sử dụng khối "try" để bao quanh các đoạn mã có thể gây ra lỗi và sử dụng khối "catch" để xử lý các ngoại lệ.

Ví dụ:

```typescript
function divide(a: number, b: number): number {
  try {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  } catch (error) {
    console.error("An error occurred:", error.message);
    return 0;
  }
}

console.log(divide(10, 2)); // Kết quả: 5
console.log(divide(8, 0)); // Kết quả: An error occurred: Division by zero is not allowed. 0
```

Trong ví dụ trên, hàm `divide` thực hiện phép chia a cho b. Trong khối "try", nếu b là 0, chúng ta gửi một lỗi sử dụng `throw`. Sau đó, trong khối "catch", chúng ta bắt và xử lý lỗi bằng cách in ra thông điệp lỗi và trả về giá trị mặc định là 0. Các lỗi được bắt bởi `catch` giúp chương trình không dừng đột ngột và cho phép bạn xử lý chúng một cách kiểm soát.

---

## Custom errors và error handling strategies.

Custom errors trong TypeScript là cách để tạo các lớp lỗi tùy chỉnh để xác định và xử lý các loại lỗi cụ thể. Error handling strategies là các chiến lược xử lý lỗi được áp dụng để kiểm soát và xử lý các loại lỗi khác nhau một cách linh hoạt.

### Khái niệm:

Custom errors trong TypeScript là việc tạo ra các lớp lỗi có thể được tùy chỉnh, bao gồm các thông tin cụ thể về loại lỗi và thông điệp. Error handling strategies là cách tiếp cận để xử lý lỗi một cách có hệ thống, linh hoạt, và đảm bảo ứng dụng vẫn hoạt động đúng cách khi có lỗi xảy ra.

### Ngữ cảnh:

Custom errors thường được sử dụng khi bạn cần phải xác định các loại lỗi cụ thể, cung cấp thông tin chi tiết và dễ hiểu về lỗi. Error handling strategies thường được áp dụng khi bạn muốn xử lý lỗi một cách chủ động, quản lý và báo cáo lỗi để duy trì tính ổn định của ứng dụng.

### Cách sử dụng:

#### Custom errors:

Định nghĩa một lớp lỗi tùy chỉnh:

```typescript
class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "CustomError";
  }
}
```

Sử dụng lớp lỗi tùy chỉnh trong một hàm:

```typescript
function processData(data: any) {
  if (!data) {
    throw new CustomError("Invalid data provided.");
  }
  // Process data...
}
```

#### Error handling strategies:

Sử dụng try-catch để xử lý lỗi tùy chỉnh:

```typescript
try {
  // Code gọi hàm processData
  processData(null);
} catch (error) {
  if (error instanceof CustomError) {
    console.error("Custom error occurred:", error.message);
    // Xử lý lỗi tùy chỉnh
  } else {
    console.error("Unexpected error:", error);
    // Xử lý lỗi không mong muốn
  }
}
```

Trong ví dụ trên, `CustomError` là một lớp lỗi tùy chỉnh được định nghĩa để đại diện cho lỗi cụ thể. Trong hàm `processData`, chúng ta kiểm tra dữ liệu và nếu không hợp lệ, ném một lỗi tùy chỉnh `CustomError`. Trong quá trình xử lý lỗi, chúng ta sử dụng try-catch để bắt lỗi và áp dụng các chiến lược xử lý khác nhau dựa trên loại lỗi được bắt.

---
