## Higher-order functions.

Higher-order functions trong TypeScript là các hàm có thể nhận vào một hoặc nhiều hàm khác như tham số hoặc trả về một hàm khác như kết quả.

### Khái niệm:

Higher-order functions (HOFs) là các hàm có khả năng thực hiện các thao tác trên các hàm khác như tham số hoặc trả về một hàm khác là kết quả.

### Ngữ cảnh:

Khi cần thực hiện các thao tác phức tạp trên các hàm, như truyền hàm vào hàm khác để thực hiện một phần nào đó của logic hoặc trả về một hàm mới dựa trên các tham số đầu vào.

### Cách sử dụng:

#### Ví dụ 1: Truyền hàm vào hàm khác

```typescript
function operateOnArray(
  array: number[],
  operation: (val: number) => number
): number[] {
  return array.map(operation);
}

const numbers = [1, 2, 3, 4, 5];
const doubled = operateOnArray(numbers, (val) => val * 2); // Sử dụng hàm arrow để double các giá trị
console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

Trong ví dụ này, `operateOnArray` là một HOF nhận một mảng và một hàm (operation) làm tham số. Hàm này sử dụng `map` để áp dụng hàm operation cho từng phần tử trong mảng.

#### Ví dụ 2: Trả về một hàm từ một HOF

```typescript
function multiplyBy(factor: number): (val: number) => number {
  return function (val: number) {
    return val * factor;
  };
}

const multiplyByTwo = multiplyBy(2);
const result = multiplyByTwo(5); // Gọi hàm trả về từ HOF
console.log(result); // Output: 10
```

Trong ví dụ này, `multiplyBy` là một HOF trả về một hàm. Hàm trả về nhận một số (factor) làm tham số và trả về một hàm mới nhận một số (val) và nhân với factor đã cho.

Higher-order functions là một khái niệm quan trọng trong lập trình functional programming, chúng giúp tạo ra code linh hoạt, tái sử dụng và dễ bảo trì. Chúng được sử dụng rộng rãi trong TypeScript và các ngôn ngữ lập trình khác để xử lý logic phức tạp và tạo ra mã nguồn linh hoạt.

---

## Immutability và sử dụng Readonly.

Immutability trong TypeScript đề cập đến tính không thay đổi của dữ liệu sau khi được tạo ra. Sử dụng `Readonly` trong TypeScript là một cách để bảo vệ các dữ liệu khỏi việc thay đổi sau khi đã được khởi tạo.

### Khái niệm:

Immutability đảm bảo rằng dữ liệu không thay đổi sau khi đã được tạo ra. `Readonly` là một tính năng trong TypeScript giúp đánh dấu các thuộc tính hoặc biến trở thành không thể thay đổi.

### Ngữ cảnh:

Khi muốn bảo vệ dữ liệu khỏi việc thay đổi ngẫu nhiên và giữ cho chúng được không thể thay đổi để tránh các lỗi không mong muốn trong quá trình thực thi.

### Cách sử dụng:

#### Sử dụng `Readonly` với object và array:

```typescript
// Readonly object
interface User {
  readonly id: number;
  readonly name: string;
}

const user: Readonly<User> = {
  id: 1,
  name: "Alice",
};

// Truy cập thuộc tính của object - không thể thay đổi
// user.id = 2; // Lỗi: Thuộc tính 'id' chỉ đọc

// Readonly array
const numbers: ReadonlyArray<number> = [1, 2, 3, 4];

// Thao tác trên mảng - không thể thay đổi
// numbers.push(5); // Lỗi: Phương thức 'push' không tồn tại trong 'ReadonlyArray'
```

#### Sử dụng `as const` với literal types:

```typescript
const config = {
  width: 800,
  height: 600,
} as const;

// config.width = 1000; // Lỗi: Không thể gán lại giá trị cho 'width'
```

Khi sử dụng `as const`, TypeScript sẽ xem xét các giá trị là literal types, và chúng sẽ được đánh dấu là `readonly`, không thể thay đổi.

Immutability và `Readonly` giúp bảo vệ dữ liệu khỏi sự thay đổi không mong muốn, cung cấp tính ổn định và độ tin cậy trong quá trình phát triển ứng dụng. Tuy nhiên, chúng chỉ bảo vệ tại thời điểm biên dịch, việc bảo vệ tại thời điểm chạy vẫn phụ thuộc vào quá trình thực thi của ứng dụng.

---
