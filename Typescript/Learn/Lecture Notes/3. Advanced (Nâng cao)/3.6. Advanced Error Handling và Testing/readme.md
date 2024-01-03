## Xử lý errors và exceptions sâu hơn trong TypeScript.

Xử lý lỗi (error handling) và ngoại lệ (exceptions) là một phần quan trọng của việc phát triển ứng dụng để xử lý các tình huống không mong muốn. Trong TypeScript, chúng ta có thể sử dụng cấu trúc `try-catch`, `throw`, và các kiểu dữ liệu để xử lý lỗi một cách chi tiết hơn.

### Khái niệm:

Error handling và exceptions đề cập đến cách chúng ta xử lý và điều khiển các lỗi xảy ra trong quá trình thực thi của chương trình. TypeScript hỗ trợ các cơ chế để xử lý các tình huống lỗi này một cách an toàn và linh hoạt.

### Ngữ cảnh:

Khi cần xác định các điểm có thể xảy ra lỗi trong chương trình và cần xử lý chúng để tránh các thất bại không mong muốn hoặc thông báo lỗi phù hợp cho người dùng.

### Cách sử dụng:

#### Sử dụng `try-catch`:

```typescript
function divide(a: number, b: number): number {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    console.error("Lỗi xảy ra:", error.message);
    return 0;
  }
}

console.log(divide(10, 2)); // Output: 5
console.log(divide(10, 0)); // Output: Lỗi xảy ra: Cannot divide by zero, 0
```

#### Sử dụng `throw` để tạo ra ngoại lệ:

```typescript
function validateAge(age: number): void {
  if (age < 0 || age > 120) {
    throw new RangeError("Invalid age");
  }
  console.log("Tuổi hợp lệ:", age);
}

try {
  validateAge(25); // Output: Tuổi hợp lệ: 25
  validateAge(150); // Sẽ ném ngoại lệ
} catch (error) {
  console.error("Lỗi xảy ra:", error.message);
}
```

#### Sử dụng `try-finally` để giải phóng tài nguyên:

```typescript
function openFile(fileName: string): void {
  const file = `Opening file: ${fileName}`;
  try {
    console.log(file);
    if (fileName === "invalid") {
      throw new Error("File not found");
    }
    // ...some operations with file
  } finally {
    console.log(`Đóng file: ${fileName}`);
  }
}

openFile("test.txt"); // Output: Opening file: test.txt, Đóng file: test.txt
openFile("invalid"); // Output: Opening file: invalid, Đóng file: invalid, Lỗi xảy ra: File not found
```

Xử lý lỗi và ngoại lệ trong TypeScript giúp chúng ta quản lý các tình huống không mong muốn một cách an toàn và linh hoạt. Việc hiểu và sử dụng các cơ chế này giúp chương trình trở nên ổn định và dễ bảo trì hơn.

---

## Test-driven development (TDD) và kiểm thử liên tục (Continuous Testing) trong TypeScript.

Test-driven development (TDD) là một phương pháp phát triển phần mềm mà các test case được viết trước khi code thực sự được triển khai. Continuous Testing là một phần của quá trình CI/CD (Continuous Integration/Continuous Deployment) trong đó các test được chạy tự động thường xuyên để đảm bảo rằng code luôn đáng tin cậy và chất lượng.

### Khái niệm:

TDD tập trung vào việc viết test trước khi code để đảm bảo rằng mã code sẽ đáp ứng các yêu cầu của test case. Continuous Testing áp dụng test tự động liên tục trong quá trình phát triển để đảm bảo rằng các thay đổi trong code không gây ra sự cố hoặc lỗi trong hệ thống.

### Ngữ cảnh:

Khi muốn đảm bảo chất lượng của mã nguồn, đồng thời cải thiện quy trình phát triển bằng cách viết test case và chạy chúng một cách tự động để kiểm tra tính đúng đắn và ổn định của hệ thống.

### Cách sử dụng:

#### TDD trong TypeScript:

```typescript
// Test case viết trước (trong thực tế, ta có thể sử dụng thư viện như Jest, Mocha, ...)
function add(a: number, b: number): number {
  return a + b;
}

// Test case
const result = add(2, 3);
if (result !== 5) {
  throw new Error(`Expected 5, but got ${result}`);
} else {
  console.log("Test passed!");
}
```

#### Continuous Testing trong TypeScript:

Cài đặt môi trường CI/CD (ví dụ: GitHub Actions, Jenkins) để tự động chạy các test case mỗi khi có commit hoặc pull request được thực hiện.

Một ví dụ với GitHub Actions:

1. Tạo file `.github/workflows/typescript.yml`:

```yaml
name: TypeScript Continuous Testing

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: "14"

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test
```

Trong đoạn code YAML trên, nó sẽ chạy `npm test` mỗi khi có commit hoặc pull request được thực hiện, giúp đảm bảo rằng các test case được chạy tự động và cập nhật liên tục.

TDD và Continuous Testing giúp tăng cường tính đáng tin cậy của code, giảm thiểu lỗi và tăng năng suất trong quá trình phát triển. Việc áp dụng chúng trong TypeScript giúp đảm bảo chất lượng và tính ổn định của ứng dụng.

---
