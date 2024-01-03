## Cài đặt TypeScript.

TypeScript là một ngôn ngữ lập trình mã nguồn mở, mở rộng từ JavaScript bằng cách thêm vào nó các tính năng của ngôn ngữ tĩnh (như kiểu dữ liệu) để cải thiện tính kiểm tra lỗi và hiệu suất của mã. TypeScript được biên dịch thành JavaScript chuẩn và tương thích hoàn toàn với mã nguồn JavaScript hiện có.

### Cài đặt TypeScript

Để cài đặt TypeScript, bạn cần trình cài đặt `npm` (Node Package Manager), một công cụ quản lý gói cho Node.js. Sau đó, bạn có thể cài đặt TypeScript thông qua `npm` bằng cách thực hiện các bước sau:

#### Bước 1: Cài đặt Node.js và npm

Đầu tiên, tải và cài đặt Node.js từ trang chủ: [https://nodejs.org](https://nodejs.org).

#### Bước 2: Cài đặt TypeScript thông qua npm

Sau khi cài đặt Node.js, mở terminal hoặc command prompt và chạy lệnh sau để cài đặt TypeScript thông qua npm:

```bash
npm install -g typescript
```

Lệnh này sẽ cài đặt TypeScript toàn cục (`-g` là viết tắt của `global`), cho phép bạn sử dụng lệnh `tsc` (TypeScript Compiler) từ bất kỳ đâu trong hệ thống.

### Ngữ cảnh và cách sử dụng

Khi TypeScript đã được cài đặt, bạn có thể tạo và biên dịch các tệp TypeScript bằng cách sử dụng lệnh `tsc`. Dưới đây là một ví dụ đơn giản về cách tạo và biên dịch một tệp TypeScript.

#### Ví dụ: Hello World TypeScript

Tạo một tệp có tên `hello.ts` và nhập mã sau:

```typescript
function sayHello(name: string) {
  console.log(`Hello, ${name}!`);
}

let myName: string = "ChatGPT";
sayHello(myName);
```

Để biên dịch tệp TypeScript này thành mã JavaScript, sử dụng lệnh `tsc`:

```bash
tsc hello.ts
```

Sau khi chạy lệnh trên, TypeScript Compiler sẽ tạo ra một tệp JavaScript mới có tên là `hello.js`, chứa mã tương ứng với mã TypeScript bạn đã viết.

### Sử dụng Mã JavaScript Biên Dịch Từ TypeScript

Mã JavaScript biên dịch từ TypeScript có thể được sử dụng như bất kỳ mã JavaScript thông thường nào. Ví dụ, nếu chúng ta có tệp `hello.js` từ bước trước, bạn có thể chạy mã JavaScript bằng cách sử dụng Node.js:

```bash
node hello.js
```

Điều này sẽ chạy mã JavaScript tương ứng với mã TypeScript mà bạn đã viết và hiển thị kết quả trên terminal.

### Tóm tắt

TypeScript là một ngôn ngữ lập trình mở rộng từ JavaScript, cung cấp tính năng kiểm tra lỗi tĩnh và đa dạng hóa kiểu dữ liệu. Để cài đặt TypeScript, bạn cần cài đặt Node.js và sau đó sử dụng npm để cài đặt TypeScript thông qua lệnh `npm install -g typescript`. Sau khi cài đặt, bạn có thể tạo, biên dịch và sử dụng các tệp TypeScript như các tệp JavaScript thông thường.

---

## Biên dịch TypeScript sang JavaScript

Biên dịch TypeScript sang JavaScript là quá trình chuyển đổi mã nguồn từ TypeScript, một ngôn ngữ lập trình có tính năng tĩnh hơn, sang JavaScript, ngôn ngữ chạy trên trình duyệt web hoặc môi trường Node.js.

### Khái niệm

TypeScript là một siêu cấu trúc của JavaScript, cung cấp kiểu dữ liệu tĩnh, các tính năng mới và cải thiện quá trình phát triển mã nguồn. Khi viết mã trong TypeScript, người lập trình có thể sử dụng kiểu dữ liệu để xác định loại của biến, tham số hoặc giá trị trả về từ hàm.

### Ngữ cảnh

Khi bạn phát triển ứng dụng bằng TypeScript, mã nguồn của bạn thường được viết dưới dạng các tệp có phần mở rộng `.ts`. Tuy nhiên, trình duyệt web không hiểu được TypeScript mà chỉ chạy được JavaScript. Do đó, để chạy ứng dụng hoặc trình duyệt web hiểu được, mã TypeScript cần được biên dịch thành JavaScript trước khi triển khai hoặc chạy.

### Cách sử dụng

Để biên dịch mã TypeScript sang JavaScript, bạn sử dụng TypeScript Compiler (tsc) – công cụ có sẵn khi cài đặt TypeScript.

#### Ví dụ:

Giả sử bạn có một tệp có tên `app.ts` chứa mã TypeScript như sau:

```typescript
// app.ts
function greet(name: string) {
  return `Hello, ${name}!`;
}

let user = "Alice";
console.log(greet(user));
```

Để biên dịch tệp `app.ts` này thành mã JavaScript, mở terminal và sử dụng lệnh sau:

```bash
tsc app.ts
```

Sau khi chạy lệnh này, TypeScript Compiler sẽ tạo ra một tệp JavaScript có tên `app.js`, chứa mã tương ứng với mã TypeScript trong tệp `app.ts`.

### Sử dụng mã JavaScript đã biên dịch

Mã JavaScript đã biên dịch từ TypeScript có thể được sử dụng trong các môi trường như trình duyệt web hoặc Node.js bình thường như bất kỳ mã JavaScript nào khác.

Ví dụ, để chạy mã JavaScript đã biên dịch từ tệp `app.ts` sử dụng Node.js, bạn có thể sử dụng lệnh:

```bash
node app.js
```

Lệnh này sẽ thực thi mã JavaScript đã được biên dịch từ mã TypeScript và hiển thị kết quả tương ứng.

### Tóm tắt

Biên dịch TypeScript sang JavaScript là quá trình chuyển đổi mã nguồn từ ngôn ngữ lập trình có tính năng tĩnh sang JavaScript. Bằng cách sử dụng TypeScript Compiler (`tsc`), mã TypeScript có thể được biên dịch thành JavaScript để chạy trên trình duyệt web hoặc môi trường Node.js. Mã JavaScript đã biên dịch có thể được sử dụng như mã JavaScript bình thường trong các môi trường khác nhau.

---

## Cú pháp cơ bản của TypeScript

Cú pháp cơ bản của TypeScript tập trung vào việc định nghĩa kiểu dữ liệu, khai báo biến, hàm, lớp và sử dụng các tính năng mở rộng so với JavaScript.

### Khái niệm

TypeScript là một siêu cấu trúc của JavaScript, có thêm kiểu dữ liệu tĩnh và các tính năng khác giúp xác định cấu trúc của mã nguồn một cách rõ ràng hơn.

### Ngữ cảnh

Khi bạn viết mã TypeScript, bạn sử dụng các công cụ như TypeScript Compiler (tsc) để biên dịch mã TypeScript thành JavaScript trước khi chạy trên trình duyệt web hoặc môi trường Node.js.

### Cách sử dụng

#### Khai báo biến

Trong TypeScript, bạn có thể khai báo biến với cú pháp:

```typescript
let variableName: dataType = value;
```

Ví dụ:

```typescript
let message: string = "Hello, TypeScript!";
let numberValue: number = 10;
```

#### Định nghĩa hàm

Khai báo hàm trong TypeScript có thể đi kèm với kiểu dữ liệu của tham số và giá trị trả về (nếu có):

```typescript
function add(a: number, b: number): number {
  return a + b;
}
```

#### Định nghĩa lớp

TypeScript hỗ trợ lập trình hướng đối tượng, cho phép bạn định nghĩa lớp với thuộc tính và phương thức:

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

let person1 = new Person("Alice", 30);
person1.greet();
```

#### Mảng và kiểu tuple

TypeScript cho phép định nghĩa kiểu mảng và tuple:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
let tuple: [string, number] = ["apple", 5];
```

#### Kiểu liệt kê (Enum)

Kiểu liệt kê trong TypeScript cho phép định nghĩa một tập hợp các giá trị có tên:

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

let selectedColor: Color = Color.Red;
```

#### Kiểu Union và Type Alias

TypeScript cung cấp khả năng sử dụng Union Type và Type Alias để định nghĩa kiểu dữ liệu linh hoạt:

```typescript
type stringOrNumber = string | number;

let unionValue: stringOrNumber;
unionValue = "TypeScript";
unionValue = 10;
```

### Tóm tắt

Cú pháp cơ bản của TypeScript bao gồm việc khai báo biến, định nghĩa hàm, lớp, mảng, kiểu tuple, kiểu liệt kê, và sử dụng Union Type và Type Alias. Cú pháp này giúp xác định kiểu dữ liệu và cấu trúc của mã nguồn một cách rõ ràng, tăng tính rõ ràng và bảo trì trong quá trình phát triển ứng dụng.

---
