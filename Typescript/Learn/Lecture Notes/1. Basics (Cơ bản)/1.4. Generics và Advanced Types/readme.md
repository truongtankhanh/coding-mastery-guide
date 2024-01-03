## Generics: sử dụng generics để tạo mã linh hoạt.

Generics trong TypeScript là cách để tạo ra mã linh hoạt, cho phép bạn tái sử dụng code với nhiều loại dữ liệu khác nhau mà không cần viết lại nhiều phiên bản của cùng một hàm hoặc lớp.

### Khái niệm

Generics cho phép bạn tạo ra các hàm, lớp, hoặc kiểu dữ liệu mà có thể làm việc với nhiều kiểu dữ liệu khác nhau, dựa trên loại dữ liệu bạn truyền vào.

### Ngữ cảnh

Generics hữu ích khi bạn muốn viết code mà có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà không cần viết lại code nhiều lần.

### Cách sử dụng và ví dụ

#### Sử dụng Generics với hàm:

```typescript
// Hàm in ra giá trị và kiểu dữ liệu của giá trị đó
function printValue<T>(value: T): void {
  console.log(`Value: ${value}, Type: ${typeof value}`);
}

printValue<number>(10); // Output: Value: 10, Type: number
printValue<string>("Hello"); // Output: Value: Hello, Type: string
```

#### Sử dụng Generics với lớp:

```typescript
// Lớp Container chứa một giá trị với kiểu dữ liệu được chỉ định khi khởi tạo
class Container<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }
}

let numberContainer = new Container<number>(5);
console.log(numberContainer.getValue()); // Output: 5

let stringContainer = new Container<string>("TypeScript");
console.log(stringContainer.getValue()); // Output: TypeScript
```

#### Sử dụng Generics với kiểu dữ liệu của mảng:

```typescript
// Hàm trả về phần tử lớn nhất từ một mảng có kiểu dữ liệu được chỉ định
function getMaxValue<T extends number>(arr: T[]): T {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

let numbers: number[] = [10, 5, 20, 15];
let maxNumber = getMaxValue(numbers);
console.log(maxNumber); // Output: 20
```

### Tóm tắt

Generics trong TypeScript cho phép tạo ra mã linh hoạt và tái sử dụng, cho phép viết code mà có thể hoạt động với nhiều kiểu dữ liệu khác nhau mà không cần viết lại code nhiều lần. Bằng cách sử dụng Generics, bạn có thể tạo ra các hàm, lớp hoặc kiểu dữ liệu chung có thể làm việc với các kiểu dữ liệu khác nhau.

---

## Union types, Intersection types.

Union types và Intersection types là hai khái niệm quan trọng trong TypeScript để xác định các kiểu dữ liệu phức tạp.

### Union Types

#### Khái niệm

Union types trong TypeScript cho phép bạn định nghĩa một biến hoặc tham số có thể chứa một trong các kiểu dữ liệu khác nhau.

#### Ngữ cảnh

Union types hữu ích khi bạn muốn cho phép một biến hoặc tham số có thể chứa giá trị từ nhiều kiểu dữ liệu khác nhau.

#### Ví dụ:

```typescript
// Biến 'result' có thể là số hoặc chuỗi
let result: number | string;

result = 10;
console.log(result); // Output: 10

result = "Hello";
console.log(result); // Output: Hello
```

### Intersection Types

#### Khái niệm

Intersection types trong TypeScript cho phép bạn kết hợp các kiểu dữ liệu thành một kiểu dữ liệu mới.

#### Ngữ cảnh

Intersection types hữu ích khi bạn muốn tạo ra một kiểu dữ liệu mới từ sự kết hợp của nhiều kiểu dữ liệu khác nhau.

#### Ví dụ:

```typescript
// Kết hợp hai interface thành một interface mới
interface Car {
  brand: string;
  wheels: number;
}

interface Electric {
  battery: string;
}

type ElectricCar = Car & Electric;

let myCar: ElectricCar = {
  brand: "Tesla",
  wheels: 4,
  battery: "Lithium-ion",
};
console.log(myCar);
// Output: { brand: 'Tesla', wheels: 4, battery: 'Lithium-ion' }
```

### Tóm tắt

Union types cho phép biến hoặc tham số chứa giá trị từ nhiều kiểu dữ liệu khác nhau, trong khi Intersection types cho phép kết hợp các kiểu dữ liệu thành một kiểu dữ liệu mới. Sử dụng chúng giúp mô hình hóa các loại dữ liệu phức tạp và tăng tính linh hoạt của mã nguồn TypeScript.

---

## Conditional types.

Conditional types trong TypeScript là cách để tạo các kiểu dữ liệu có điều kiện dựa trên kiểu dữ liệu hiện tại. Chúng cho phép xác định kiểu dữ liệu dựa trên điều kiện logic với các kiểu dữ liệu đã biết.

### Khái niệm

Conditional types cho phép bạn xác định kiểu dữ liệu dựa trên điều kiện logic, thông qua việc sử dụng toán tử `extends` để so sánh kiểu dữ liệu hiện tại với một điều kiện.

### Ngữ cảnh

Conditional types hữu ích khi bạn muốn xác định kiểu dữ liệu một cách linh hoạt dựa trên điều kiện của kiểu dữ liệu đầu vào.

### Cách sử dụng và ví dụ

#### Sử dụng Conditional types với `extends`:

```typescript
type Check<T> = T extends string ? "Is string" : "Not a string";

let checkString: Check<string> = "Is string";
let checkNumber: Check<number> = "Not a string";

console.log(checkString); // Output: Is string
console.log(checkNumber); // Output: Not a string
```

Trong ví dụ trên, `Check<T>` kiểm tra xem `T` có phải là kiểu dữ liệu `string` hay không. Nếu `T` là `string`, kiểu của `Check<T>` sẽ là `'Is string'`, ngược lại sẽ là `'Not a string'`.

#### Sử dụng Conditional types trong hàm:

```typescript
type IsNumber<T> = T extends number ? true : false;

function checkIfNumber<T>(value: T): IsNumber<T> {
  return typeof value === "number" ? true : false;
}

let check1: IsNumber<number> = true;
let check2: IsNumber<string> = false;

console.log(checkIfNumber(10)); // Output: true
console.log(checkIfNumber("Hello")); // Output: false
```

### Tóm tắt

Conditional types trong TypeScript cho phép xác định kiểu dữ liệu dựa trên điều kiện logic, cung cấp khả năng tạo ra các kiểu dữ liệu có điều kiện dựa trên kiểu dữ liệu hiện tại. Chúng hữu ích trong việc tạo ra các kiểu dữ liệu linh hoạt và phản ánh các điều kiện logic trong mã nguồn TypeScript.

---
