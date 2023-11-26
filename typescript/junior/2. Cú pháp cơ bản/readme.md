### Cụ thể về các khái niệm cú pháp cơ bản trong TypeScript:

---

1. [Biến và Hằng số](#1-biến-và-hằng-số)
2. [Hàm](#2-hàm)
3. [Interface và Type](#3-interface-và-type)

---

### 1. Biến và Hằng số:

#### a. `let` và `const`:

- `let` dùng để khai báo biến có thể thay đổi giá trị.
- `const` dùng để khai báo hằng số có giá trị không thay đổi.

#### _Ví dụ:_

```typescript
let mutableVar: number = 10;
mutableVar = 20; // Có thể thay đổi giá trị của biến mutableVar

const PI: number = 3.14;
// PI = 3.1415; // Lỗi! Không thể thay đổi giá trị của hằng số PI
```

#### Khai báo kiểu dữ liệu:

```typescript
let numberVar: number = 10;
let stringVar: string = "Hello";
let boolVar: boolean = true;
```

---

### 2. Hàm:

#### a. Khai báo kiểu đầu vào và kiểu trả về của hàm:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
// Hàm add nhận vào hai tham số số và trả về một số
```

#### b. Kiểu trả về có thể là kiểu dữ liệu phức tạp:

```typescript
interface User {
  name: string;
  age: number;
}

function createUser(name: string, age: number): User {
  return { name, age };
}
// Hàm createUser trả về một đối tượng có cấu trúc giống với interface User
```

---

### 3. Interface và Type:

#### a. Interface:

- Dùng để mô tả cấu trúc của đối tượng.

#### _Ví dụ:_

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "John",
  age: 25,
};
// Biến person phải tuân theo cấu trúc của interface Person
```

#### b. Type:

- Tương tự như Interface, Type cũng dùng để mô tả kiểu dữ liệu.

#### _Ví dụ:_

```typescript
type Point = {
  x: number;
  y: number;
};

let point: Point = {
  x: 10,
  y: 20,
};
// Biến point phải có cấu trúc tương tự như type Point
```

---

### _Tóm lại:_

- `let` và `const` để khai báo biến và hằng số.
- Hàm được khai báo với kiểu đầu vào và kiểu trả về.
- Interface và Type giúp mô tả cấu trúc dữ liệu.
