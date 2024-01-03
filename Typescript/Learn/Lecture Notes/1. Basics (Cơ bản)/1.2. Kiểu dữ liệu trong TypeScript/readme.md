## Kiểu dữ liệu cơ bản: number, string, boolean, any, void, null, undefined

Kiểu dữ liệu cơ bản trong TypeScript đóng vai trò quan trọng trong việc xác định loại của các biến và giá trị trong mã nguồn.

### Khái niệm

Trong TypeScript, kiểu dữ liệu cơ bản đề cập đến loại dữ liệu cơ bản mà một biến có thể lưu trữ, bao gồm:

1. **number:** Đại diện cho các số, bao gồm cả số nguyên và số thập phân.
2. **string:** Đại diện cho chuỗi ký tự.

3. **boolean:** Đại diện cho các giá trị `true` hoặc `false`.

4. **any:** Kiểu dữ liệu mà TypeScript không kiểm tra kiểu của giá trị đó. Điều này cho phép bạn gán bất kỳ loại giá trị nào cho biến có kiểu `any`.

5. **void:** Được sử dụng cho các hàm không trả về giá trị.

6. **null và undefined:** Đại diện cho giá trị null và undefined tương ứng.

### Ngữ cảnh

Kiểu dữ liệu cơ bản là cơ bản nhưng quan trọng trong TypeScript, giúp xác định kiểu dữ liệu và giúp TypeScript kiểm tra lỗi trong quá trình phát triển.

### Cách sử dụng và ví dụ

#### Sử dụng kiểu number, string và boolean:

```typescript
let age: number = 25;
let fullName: string = "John Doe";
let isStudent: boolean = true;
```

#### Sử dụng kiểu any:

```typescript
let dynamicValue: any = 10;
dynamicValue = "TypeScript";
dynamicValue = true;
// Không kiểm tra kiểu dữ liệu khi gán giá trị cho dynamicValue
```

#### Sử dụng kiểu void cho hàm không trả về giá trị:

```typescript
function sayHello(): void {
  console.log("Hello, TypeScript!");
}
```

#### Sử dụng kiểu null và undefined:

```typescript
let nullValue: null = null;
let undefinedValue: undefined = undefined;
```

### Tóm tắt

Kiểu dữ liệu cơ bản trong TypeScript giúp xác định loại dữ liệu của các biến và giúp TypeScript kiểm tra lỗi trong quá trình phát triển. Các kiểu dữ liệu cơ bản như number, string, boolean, any, void, null và undefined cung cấp linh hoạt và quyết định kiểu dữ liệu cho biến và giá trị trong mã nguồn TypeScript.

---

## Annotation kiểu dữ liệu

Annotation kiểu dữ liệu trong TypeScript là cách xác định và chỉ định kiểu dữ liệu cho biến, tham số, và giá trị trả về từ hàm trong mã nguồn TypeScript.

### Khái niệm

Annotation kiểu dữ liệu giúp xác định rõ ràng kiểu dữ liệu mà một biến sẽ lưu trữ. Bằng cách này, TypeScript có thể kiểm tra và báo lỗi khi có sự không phù hợp về kiểu dữ liệu trong quá trình phát triển, giúp tránh được một số lỗi thường gặp trong JavaScript.

### Ngữ cảnh

Annotation kiểu dữ liệu được sử dụng trong quá trình viết mã TypeScript để cung cấp thông tin về loại dữ liệu mà biến hoặc hàm sẽ sử dụng, tạo điều kiện cho TypeScript kiểm tra lỗi và cung cấp gợi ý thông tin khi phát triển.

### Cách sử dụng và ví dụ

#### Annotation kiểu dữ liệu cho biến:

```typescript
let age: number = 25;
let fullName: string = "John Doe";
let isStudent: boolean = true;
```

#### Annotation kiểu dữ liệu cho hàm:

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

Ở ví dụ trên, `a` và `b` được gán kiểu number và hàm sẽ trả về một giá trị có kiểu number.

#### Annotation kiểu dữ liệu cho hàm không trả về giá trị (kiểu void):

```typescript
function sayHello(name: string): void {
  console.log(`Hello, ${name}!`);
}
```

Ở đây, hàm `sayHello` không trả về giá trị (void) nhưng nhận một tham số kiểu string là `name`.

### Tóm tắt

Annotation kiểu dữ liệu trong TypeScript là cách xác định và chỉ định kiểu dữ liệu cho biến, tham số và giá trị trả về từ hàm trong mã nguồn TypeScript. Bằng cách cung cấp thông tin rõ ràng về kiểu dữ liệu, annotation giúp TypeScript kiểm tra lỗi và cung cấp hỗ trợ khi phát triển, tăng tính rõ ràng và độ tin cậy của mã nguồn.

---

## Kiểu dữ liệu phức tạp: interfaces, arrays, tuples, enums

Kiểu dữ liệu phức tạp trong TypeScript bao gồm các công cụ và cấu trúc mở rộng kiểu dữ liệu cơ bản, giúp mô tả các cấu trúc dữ liệu phức tạp hơn, như mảng, tuples, interfaces, và enums.

### Khái niệm

1. **Interfaces:** Là cách để mô tả cấu trúc dữ liệu bằng cách định nghĩa các kiểu dữ liệu cho các đối tượng, bao gồm thuộc tính, phương thức và các thành phần khác.

2. **Arrays:** Đại diện cho một tập hợp các phần tử có cùng kiểu, cho phép lưu trữ nhiều giá trị trong một biến.

3. **Tuples:** Một mảng có độ dài cố định và có thể chứa các loại dữ liệu khác nhau cho các vị trí được xác định trước.

4. **Enums (Kiểu liệt kê):** Được sử dụng để định nghĩa một nhóm các hằng số có tên, giúp làm cho mã nguồn dễ đọc hơn.

### Ngữ cảnh

Kiểu dữ liệu phức tạp hỗ trợ mô tả các cấu trúc dữ liệu phức tạp và giúp TypeScript hiểu và kiểm tra dữ liệu một cách rõ ràng hơn.

### Cách sử dụng và ví dụ

#### Interfaces:

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = {
  name: "Alice",
  age: 30,
};
```

#### Arrays:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["apple", "banana", "orange"];
```

#### Tuples:

```typescript
let tuple: [string, number] = ["apple", 5];
// Tại vị trí 0: string, vị trí 1: number
```

#### Enums (Kiểu liệt kê):

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let selectedColor: Color = Color.Red;
```

### Tóm tắt

Kiểu dữ liệu phức tạp trong TypeScript như interfaces, arrays, tuples và enums cung cấp khả năng mô tả và xử lý các cấu trúc dữ liệu phức tạp hơn. Sử dụng chúng giúp mã nguồn trở nên rõ ràng, dễ đọc và dễ bảo trì, đồng thời cung cấp kiểm tra lỗi tốt hơn trong quá trình phát triển ứng dụng.

---
