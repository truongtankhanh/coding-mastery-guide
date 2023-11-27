Hãy bắt đầu với các khái niệm cơ bản về TypeScript:

---

1. [Kiểu dữ liệu (Types)](#1-kiểu-dữ-liệu-types)
2. [Type Inference](#2-type-inference)
3. [Type Annotations](#3-type-annotations)

---

### 1. Kiểu dữ liệu (Types):

- Trong TypeScript, kiểu dữ liệu giúp xác định loại dữ liệu mà biến, hàm hoặc cấu trúc dữ liệu sẽ chứa.

#### **Khai báo kiểu dữ liệu cho biến:**

```typescript
let numberVar: number = 10; // Biến numberVar chỉ chứa giá trị số
let stringVar: string = "Hello"; // Biến stringVar chỉ chứa chuỗi
let boolVar: boolean = true; // Biến boolVar chỉ chứa giá trị true hoặc false
```

#### **Kiểu dữ liệu cho hàm:**

```typescript
function add(a: number, b: number): number {
  return a + b;
}
// Hàm add chỉ nhận vào hai tham số số và trả về một số
```

---

### 2. Type Inference:

- TypeScript có khả năng tự động suy luận kiểu dữ liệu dựa trên giá trị mà biến hoặc hàm đang sử dụng.

#### _Ví dụ về Type Inference:_

```typescript
let inferredNum = 10; // TypeScript tự suy luận kiểu number cho biến inferredNum
let inferredString = "Hello"; // TypeScript tự suy luận kiểu string cho biến inferredString
```

---

### 3. Type Annotations:

- Type Annotations cho phép bạn chỉ định rõ ràng kiểu dữ liệu cho biến, hàm hoặc các thành phần khác trong mã nguồn.

#### _Sử dụng Type Annotations:_

```typescript
let numberVar: number; // Khai báo biến numberVar với kiểu dữ liệu number nhưng chưa gán giá trị
numberVar = 10; // Gán giá trị cho biến numberVar

function greet(name: string): string {
  // Hàm greet nhận vào tham số name kiểu string và trả về kiểu string
  return `Hello, ${name}!`;
}
```

---
