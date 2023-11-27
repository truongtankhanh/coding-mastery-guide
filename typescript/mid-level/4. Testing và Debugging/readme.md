1. [Unit Testing with TypeScript](#1-unit-testing-with-typescript)
   - [Sử dụng Jest hoặc Mocha](#sử-dụng-jest-hoặc-mocha)
2. [Debugging](#2-debugging)
   - [Sử dụng công cụ debug trong TypeScript](#sử-dụng-công-cụ-debug-trong-typescript)

---

### **1. Unit Testing with TypeScript:**

#### **Sử dụng Jest hoặc Mocha:**

- **_Jest:_** Jest là một framework testing phổ biến với TypeScript, có khả năng tương thích tốt và cung cấp nhiều tính năng như mocking và snapshots.
- **_Mocha:_** Mocha là một framework testing linh hoạt, yêu cầu sử dụng các thư viện bổ sung như Chai hoặc Sinon để tạo ra các bài kiểm tra phức tạp hơn.

#### _Ví dụ (Jest):_

```typescript
// Hàm cần kiểm tra
function sum(a: number, b: number): number {
  return a + b;
}

// Jest test
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});
```

#### _Ví dụ (Mocha + Chai):_

```typescript
// Hàm cần kiểm tra
function multiply(a: number, b: number): number {
  return a * b;
}

// Mocha + Chai test
const expect = require("chai").expect;

describe("Multiplication", () => {
  it("should return 6 when multiplying 2 and 3", () => {
    expect(multiply(2, 3)).to.equal(6);
  });
});
```

---

### **2. Debugging:**

#### **Sử dụng công cụ debug trong TypeScript:**

- **_VSCode Debugger:_** Sử dụng tính năng debugger trong VSCode để theo dõi và điều tra giá trị biến, lỗi logic và dòng mã.
- **_Console Logging:_** Sử dụng console.log() để in ra giá trị của biến hoặc thông điệp kiểm tra.

#### _Ví dụ (VSCode Debugger):_

```typescript
function calculateSum(a: number, b: number): number {
  return a + b;
}

const result = calculateSum(5, "10"); // Lỗi: tham số "10" không phải là số

console.log(result); // In ra giá trị kết quả để debug
```

#### _Ví dụ (Console Logging):_

```typescript
function calculateProduct(a: number, b: number): number {
  console.log(`Calculating product of ${a} and ${b}`);
  return a * b;
}

const product = calculateProduct(5, 10);
console.log(`Product is: ${product}`);
```

---

Testing và debugging là hai kỹ năng quan trọng trong quá trình phát triển phần mềm. Việc viết các bài kiểm tra đơn vị (unit tests) giúp đảm bảo tính đúng đắn của mã, trong khi debugging giúp bạn tìm ra và sửa lỗi một cách nhanh chóng và hiệu quả.

---
