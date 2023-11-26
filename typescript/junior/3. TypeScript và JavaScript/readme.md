Cụ thể về việc sử dụng TypeScript Compiler và tích hợp TypeScript vào các dự án JavaScript:

---

1. [TypeScript Compiler (`tsc`)](#1-typescript-compiler-tsc)
2. [TypeScript trong các dự án JavaScript hiện có](#2-typescript-trong-các-dự-án-javascript-hiện-có)

---

### 1. TypeScript Compiler (`tsc`):

#### Cách sử dụng TypeScript Compiler để chuyển đổi mã TypeScript sang JavaScript:

- TypeScript Compiler (`tsc`) là công cụ được cung cấp bởi TypeScript để biên dịch mã nguồn TypeScript thành mã JavaScript.

#### _Ví dụ:_

1. Tạo một file `hello.ts` với nội dung sau:

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("John"));
```

2. Sử dụng `tsc` để biên dịch `hello.ts` thành JavaScript:

```bash
tsc hello.ts
```

Khi biên dịch thành công, `tsc` sẽ tạo ra một file `hello.js` có nội dung tương ứng với mã TypeScript.

---

### 2. TypeScript trong các dự án JavaScript hiện có:

#### Cách tích hợp TypeScript vào dự án JavaScript hiện có:

- TypeScript có thể được tích hợp vào dự án JavaScript hiện có bằng cách thêm các tệp tin TypeScript và cấu hình cho Compiler.

#### _Ví dụ:_

1. Tạo một dự án JavaScript với một file `app.js`:

```javascript
function sayHello() {
  console.log("Hello!");
}
sayHello();
```

2. Thêm một file TypeScript mới vào dự án, ví dụ `utils.ts`:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

3. Tạo một file cấu hình TypeScript, `tsconfig.json`, để chỉ định cách TypeScript Compiler sẽ xử lý các file TypeScript trong dự án:

```json
{
  "compilerOptions": {
    "target": "es5",
    "outDir": "./dist",
    "strict": true
  },
  "include": ["utils.ts"]
}
```

4. Chạy `tsc` để biên dịch các file TypeScript:

```bash
tsc
```

Khi biên dịch thành công, `tsc` sẽ tạo ra các file JavaScript trong thư mục `dist` dựa trên cấu hình trong `tsconfig.json`.

---

### _Tóm lại:_

- TypeScript Compiler (`tsc`) được sử dụng để biên dịch mã TypeScript thành JavaScript.
- TypeScript có thể được tích hợp vào dự án JavaScript hiện có bằng cách thêm các file TypeScript và cấu hình Compiler.

---
