## Optional và default parameters.

Optional và default parameters trong TypeScript là hai khái niệm quan trọng liên quan đến việc định nghĩa hàm với tham số có thể có hoặc không cần thiết, cũng như cung cấp giá trị mặc định cho các tham số nếu không được truyền vào khi gọi hàm.

### Optional Parameters:

Optional parameters là các tham số trong hàm mà có thể được truyền hoặc không cần thiết khi gọi hàm đó. Để định nghĩa optional parameters trong TypeScript, bạn có thể thêm dấu `?` sau tên tham số.

Ví dụ:

```typescript
// Định nghĩa hàm có tham số optional
function greet(name?: string) {
  if (name) {
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, stranger!");
  }
}

// Gọi hàm greet với hoặc không có tham số
greet(); // In ra: "Hello, stranger!"
greet("Alice"); // In ra: "Hello, Alice!"
```

Trong ví dụ trên, tham số `name` trong hàm `greet` được đặt là optional bằng cách thêm `?` sau tên tham số. Khi gọi hàm `greet` có thể truyền `name` hoặc không truyền, và mã sẽ xử lý tương ứng.

### Default Parameters:

Default parameters cho phép bạn cung cấp giá trị mặc định cho các tham số trong hàm, điều này sẽ được sử dụng nếu giá trị không được truyền vào khi gọi hàm.

Ví dụ:

```typescript
// Định nghĩa hàm có tham số với giá trị mặc định
function greetWithDefault(name: string = "stranger") {
  console.log(`Hello, ${name}!`);
}

// Gọi hàm greetWithDefault với hoặc không có tham số
greetWithDefault(); // In ra: "Hello, stranger!"
greetWithDefault("Alice"); // In ra: "Hello, Alice!"
```

Ở đây, tham số `name` trong hàm `greetWithDefault` đã được cung cấp giá trị mặc định là `"stranger"`. Khi gọi hàm `greetWithDefault` mà không truyền vào tham số, giá trị mặc định sẽ được sử dụng.

Optional và default parameters cung cấp linh hoạt trong việc sử dụng hàm, cho phép chương trình chạy dễ dàng hơn khi có các tham số không bắt buộc hoặc có giá trị mặc định.

---

## Function overloading.

Function overloading trong TypeScript là một tính năng cho phép bạn định nghĩa nhiều cách thức khác nhau để gọi một hàm với các loại đối số và kiểu trả về khác nhau. Điều này cho phép hàm có thể xử lý các loại đối số khác nhau và trả về kết quả tương ứng.

### Ngữ cảnh:

Khi bạn cần cùng một hàm có thể xử lý nhiều loại đối số hoặc trả về các kiểu dữ liệu khác nhau mà không cần phải tạo nhiều hàm với các tên khác nhau.

### Cách sử dụng:

Để sử dụng function overloading trong TypeScript, bạn sử dụng từ khóa `overload` để định nghĩa các dạng chấp nhận đối số và kiểu trả về khác nhau của hàm, sau đó định nghĩa chính thức của hàm với các cách thức cụ thể để xử lý các trường hợp đã được khai báo.

Ví dụ:

```typescript
// Định nghĩa nhiều cách thức gọi hàm add
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // Nối chuỗi nếu cả hai là string
  } else if (typeof a === "number" && typeof b === "number") {
    return a + b; // Cộng số nếu cả hai là number
  } else {
    throw new Error("Parameters must be of the same type.");
  }
}

// Gọi hàm add với các kiểu dữ liệu khác nhau
const result1 = add("Hello", " TypeScript"); // result1 có kiểu string: "Hello TypeScript"
const result2 = add(5, 10); // result2 có kiểu number: 15
// const result3 = add('Hello', 10); // Sẽ báo lỗi vì không có cách thức gọi hàm phù hợp
```

Trong ví dụ trên, chúng ta định nghĩa hàm `add` với nhiều cách thức gọi khác nhau, mỗi cách thức sẽ xử lý một loại đối số cụ thể và trả về kiểu dữ liệu tương ứng. Cuối cùng, phần chính thức của hàm `add` sẽ kiểm tra kiểu dữ liệu của các đối số và xử lý tương ứng.

Khi gọi hàm `add`, TypeScript sẽ xác định cách thức gọi hàm phù hợp với kiểu dữ liệu của các đối số và trả về kết quả tương ứng. Nếu không có cách thức gọi hàm phù hợp với các đối số được truyền vào, TypeScript sẽ báo lỗi.

---

## Abstract classes và interfaces.

Abstract classes và interfaces là hai khái niệm quan trọng trong TypeScript để định nghĩa các kiểu dữ liệu và các hành vi cho các đối tượng.

### Interfaces:

- **Khái niệm:** Interface trong TypeScript là một cách để định nghĩa kiểu dữ liệu, chỉ mô tả cấu trúc của một đối tượng mà không chứa bất kỳ thứ tự lệnh cụ thể nào.
- **Ngữ cảnh:** Interfaces thường được sử dụng để mô tả hành vi của một đối tượng hoặc một loại đối tượng.
- **Cách sử dụng:**

```typescript
// Định nghĩa một interface
interface Shape {
  calculateArea(): number;
}

// Sử dụng interface trong một class
class Circle implements Shape {
  radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Sử dụng class Circle implement interface Shape
const circle = new Circle(5);
console.log(circle.calculateArea()); // Kết quả: diện tích hình tròn với bán kính 5
```

### Abstract classes:

- **Khái niệm:** Abstract class trong TypeScript là một lớp mà không thể khởi tạo trực tiếp, chỉ được kế thừa và mở rộng thông qua lớp con.
- **Ngữ cảnh:** Abstract classes thường được sử dụng khi bạn muốn định nghĩa một số hành vi chung cho các lớp con, nhưng không muốn khởi tạo đối tượng từ lớp này trực tiếp.
- **Cách sử dụng:**

```typescript
// Định nghĩa một abstract class
abstract class Animal {
  abstract makeSound(): void;

  move(): void {
    console.log("Moving...");
  }
}

// Sử dụng abstract class trong một class con
class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

// Sử dụng class Dog kế thừa từ abstract class Animal
const dog = new Dog();
dog.makeSound(); // Kết quả: "Woof!"
dog.move(); // Kết quả: "Moving..."
```

Trong ví dụ trên, `Shape` là một interface mô tả cách tính diện tích của các hình học, trong khi `Animal` là một abstract class định nghĩa hành vi chung cho các loại động vật và được lớp con `Dog` kế thừa để định nghĩa âm thanh và cách di chuyển của chó.

---
