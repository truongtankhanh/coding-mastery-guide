Chi tiết về các chủ đề nâng cao trong TypeScript:

---

1. [Generics](#1-generics)
2. [Union và Intersection Types](#2-union-và-intersection-types)
3. [Decorators](#3-decorators)

---

### 1. Generics:

#### **Sử dụng generics để tạo các thành phần linh hoạt hơn:**

- Generics cho phép chúng ta tạo ra các thành phần có thể làm việc với nhiều loại dữ liệu khác nhau mà không cần phải cố định kiểu dữ liệu.

#### _Ví dụ:_

```typescript
// Generic function để tạo một mảng từ một giá trị
function createArray<T>(value: T, length: number): T[] {
  return Array.from({ length }, () => value);
}

let newArray = createArray<string>("hello", 5);
// Kết quả: ["hello", "hello", "hello", "hello", "hello"]
```

---

### 2. Union và Intersection Types:

#### **a. Union Types (Kiểu liên minh):**

- Union Types cho phép biến hoặc tham số có thể mang nhiều kiểu dữ liệu khác nhau.

#### _Ví dụ:_

```typescript
// Union type cho biến
let age: number | string;
age = 25; // hoặc
age = "twenty-five";

// Union type cho tham số của hàm
function displayData(data: number | string) {
  console.log(data);
}
```

#### **b. Intersection Types (Kiểu giao cắt):**

- Intersection Types cho phép kết hợp các loại dữ liệu lại với nhau.

#### _Ví dụ:_

```typescript
// Intersection type cho đối tượng
type Printable = { print: () => void };
type Loggable = { log: () => void };

type LoggerPrinter = Printable & Loggable;

let loggerPrinter: LoggerPrinter = {
  print() {
    console.log("Printing...");
  },
  log() {
    console.log("Logging...");
  },
};
```

---

### 3. Decorators:

#### **Cách sử dụng decorators trong TypeScript:**

- Decorators là một tính năng mạnh mẽ cho phép chúng ta thêm các logic hoặc thay đổi behavior của class, method, property hoặc parameter.

#### _Tài liệu:_

- https://www.typescriptlang.org/docs/handbook/decorators.html

#### _Ví dụ:_

```typescript
// Decorator function
function log(target: any, key: string) {
  console.log(`${key} was called`);
}

// Sử dụng decorator cho một method
class Example {
  @log
  greet() {
    console.log("Hello!");
  }
}

let example = new Example();
example.greet(); // Khi greet() được gọi, decorator log sẽ in ra thông báo
```

---
