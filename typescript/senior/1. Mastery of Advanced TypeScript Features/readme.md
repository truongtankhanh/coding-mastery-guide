Đi sâu vào các tính năng nâng cao của TypeScript ở mức độ senior, chúng ta sẽ tập trung vào ba chủ đề quan trọng: Advanced Types, Type-Level Programming và TypeScript Compiler Internals.

1. [Advanced Types](#1-advanced-types)
   - [Conditional Types](#a-conditional-types)
   - [Mapped Types](#b-mapped-types)
   - [Type Inference trong các tình huống phức tạp](#c-type-inference-trong-các-tình-huống-phức-tạp)
2. [Type-Level Programming](#2-type-level-programming)
   - [Áp dụng TypeScript trong các trường hợp phức tạp](#a-áp-dụng-typescript-trong-các-trường-hợp-phức-tạp)
   - [Tạo các kiểu dữ liệu động và linh hoạt](#b-tạo-các-kiểu-dữ-liệu-động-và-linh-hoạt)
3. [TypeScript Compiler Internals](#3-typescript-compiler-internals)
   - [Kiến thức về Compiler Internals](#a-kiến-thức-về-compiler-internals)
   - [Debugging và Hiệu suất](#b-debugging-và-hiệu-suất)

---

### 1. Advanced Types:

#### **a. Conditional Types:**

- **_Conditional types_** cho phép bạn xác định các kiểu dữ liệu dựa trên điều kiện kiểm tra kiểu dữ liệu khác.
- _Ví dụ:_

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;
type StringOrNumber<T> = T extends string ? string : number;

type Result = NonNullable<string | null>; // Kết quả: string
```

---

#### **b. Mapped Types:**

- **_Mapped types_** cho phép bạn tạo ra các kiểu dữ liệu mới từ các kiểu dữ liệu đã có.
- _Ví dụ:_

```typescript
type Flags = { option1: boolean; option2: boolean };
type NullableFlags = { [K in keyof Flags]: Flags[K] | null };

const nullableFlags: NullableFlags = { option1: null, option2: true };
```

---

#### **c. Type Inference trong các tình huống phức tạp:**

- TypeScript có khả năng **type inference** mạnh mẽ, đặc biệt là trong các tình huống phức tạp như generic type inference và contextually typed expressions.

---

### 2. Type-Level Programming:

#### **a. Áp dụng TypeScript trong các trường hợp phức tạp:**

- Tận dụng **conditional types** và **mapped types** để tạo ra các kiểu dữ liệu phức tạp dựa trên các điều kiện và trạng thái khác nhau.

---

#### **b. Tạo các kiểu dữ liệu động và linh hoạt:**

- Sử dụng TypeScript để tạo ra các kiểu dữ liệu có khả năng thích ứng và linh hoạt, đáp ứng các yêu cầu của ứng dụng.

---

### 3. TypeScript Compiler Internals:

#### **a. Kiến thức về Compiler Internals:**

- Tìm hiểu về cách TypeScript chuyển đổi mã nguồn từ TypeScript sang JavaScript và cách nó tối ưu hóa mã dựa trên cấu trúc mã.

---

#### **b. Debugging và Hiệu suất:**

- Sử dụng kiến thức về **Compiler Internals** để debug mã TypeScript và cải thiện hiệu suất của ứng dụng.

---

Những kỹ năng và hiểu biết về Advanced Types, Type-Level Programming và TypeScript Compiler Internals sẽ giúp bạn đi sâu và chinh phục các khía cạnh phức tạp của TypeScript, từ việc xử lý các loại kiểu dữ liệu động đến hiểu rõ về cách Compiler hoạt động để tối ưu hóa mã nguồn. Hãy thực hành và áp dụng chúng trong các dự án thực tế để trở thành một senior TypeScript developer thành thạo.

---
