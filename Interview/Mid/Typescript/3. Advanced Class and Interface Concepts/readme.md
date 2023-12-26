# **Abstract Classes và Interfaces:**

## Điểm khác biệt chính giữa Abstract Classes và Interfaces trong TypeScript.

Abstract Classes và Interfaces là hai khái niệm quan trọng trong TypeScript với mục tiêu khác nhau trong quá trình phát triển mã nguồn. Dưới đây là sự khác biệt chính giữa chúng:

### Abstract Classes:

- **Định nghĩa:** Là một lớp cơ sở mà không thể tạo đối tượng từ nó mà chỉ có thể được kế thừa.
- **Tính chất:** Có thể chứa các phương thức trừu tượng và cũng có thể chứa các phần cài đặt cụ thể.
- **Điểm mạnh:** Cho phép tái sử dụng mã nguồn, có thể cung cấp các phương thức mà các lớp con cần thực hiện.
- **Ví dụ:**

```typescript
abstract class Animal {
  abstract makeSound(): void; // Phương thức trừu tượng

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

const myDog = new Dog();
myDog.makeSound(); // Output: Woof! Woof!
myDog.move(); // Output: Moving...
```

### Interfaces:

- **Định nghĩa:** Định nghĩa các hành vi, không chứa bất kỳ triển khai cụ thể nào.
- **Tính chất:** Chứa các phương thức, thuộc tính và không có phần thân hàm (các phần thực hiện).
- **Điểm mạnh:** Cho phép tạo ra các loại cấu trúc dữ liệu phức tạp, cho phép đa kế thừa, tạo tính linh hoạt.
- **Ví dụ:**

```typescript
interface Shape {
  calculateArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const myCircle = new Circle(5);
console.log(myCircle.calculateArea()); // Output: ~78.54
```

**Trả lời chuyên nghiệp:**

"Abstract Classes là các lớp có thể chứa cả phần cài đặt và phần trừu tượng, cho phép tái sử dụng và kế thừa, trong khi Interfaces chỉ định ra hành vi và không chứa phần cài đặt. Abstract Classes thường được sử dụng khi cần cung cấp một phần cài đặt mặc định, trong khi Interfaces thích hợp cho việc định nghĩa cấu trúc dữ liệu và đa kế thừa."

---

## Khi nào bạn nên sử dụng Abstract Classes thay vì Interfaces và ngược lại?

Sử dụng Abstract Classes và Interfaces tùy thuộc vào nhu cầu cụ thể của dự án và mục tiêu thiết kế. Dưới đây là điểm cần xem xét khi chọn sử dụng:

### Sử dụng Abstract Classes khi:

1. **Cần cung cấp một phần triển khai mặc định:** Abstract Classes cho phép định nghĩa các phương thức và thuộc tính có sẵn với phần triển khai mặc định. Các lớp con có thể tái sử dụng và chỉ cần triển khai các phần cần thiết.

   ```typescript
   abstract class Vehicle {
     abstract drive(): void; // Phương thức trừu tượng

     stop(): void {
       console.log("Vehicle stopped.");
     }
   }

   class Car extends Vehicle {
     drive(): void {
       console.log("Car is being driven.");
     }
   }
   ```

2. **Cần định nghĩa kế thừa:** Khi có nhu cầu kế thừa các phương thức và thuộc tính từ một lớp cơ sở để tái sử dụng chúng.

### Sử dụng Interfaces khi:

1. **Cần định nghĩa cấu trúc dữ liệu và hành vi:** Interfaces chỉ định hành vi mà một đối tượng nên có mà không cung cấp phần triển khai. Điều này hữu ích khi muốn định nghĩa các loại dữ liệu.

   ```typescript
   interface Shape {
     calculateArea(): number;
   }

   class Circle implements Shape {
     constructor(private radius: number) {}

     calculateArea(): number {
       return Math.PI * this.radius * this.radius;
     }
   }
   ```

2. **Cần đa kế thừa:** Interfaces cho phép một đối tượng thực hiện nhiều interfaces, cung cấp tính linh hoạt trong thiết kế.

### Trả lời chuyên nghiệp:

"Cần sử dụng Abstract Classes khi muốn cung cấp một phần triển khai mặc định và định nghĩa kế thừa, trong khi Interfaces thích hợp khi cần định nghĩa cấu trúc dữ liệu và hành vi hoặc muốn đa kế thừa."

---

# **Mixins và Decorators:**

## Mixins trong TypeScript là gì? Tại sao chúng hữu ích và cách sử dụng chúng?

Mixins trong TypeScript là một kỹ thuật cho phép kết hợp các tính năng từ nhiều lớp hoặc đối tượng khác nhau vào một lớp mới mà không yêu cầu kế thừa từ chúng. Điều này cung cấp tính linh hoạt cao khi cần sử dụng các tính năng đã được định nghĩa trước từ các nguồn khác nhau mà không cần phải kế thừa từ một lớp cụ thể.

### Tại sao Mixins hữu ích:

1. **Tính linh hoạt:** Cho phép kết hợp các tính năng từ nhiều nguồn mà không cần phải áp dụng kế thừa đa cấp.
2. **Tái sử dụng mã nguồn:** Đơn giản hóa việc sử dụng lại các tính năng có sẵn từ các nguồn khác nhau.
3. **Tránh vấn đề của đa kế thừa:** Giúp tránh các vấn đề có thể phát sinh từ đa kế thừa truyền thống.

### Cách sử dụng Mixins:

```typescript
// Ví dụ về Mixins
type Constructor<T = {}> = new (...args: any[]) => T;

// Mixin: Định nghĩa một tính năng
function Timestamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now();
  };
}

// Mixin: Định nghĩa một tính năng khác
function Serializable<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    serialize() {
      return JSON.stringify(this);
    }
  };
}

// Sử dụng Mixins
class MyClass extends Timestamped(Serializable(class {})) {
  constructor(public name: string) {
    super();
  }
}

const myObj = new MyClass("Example");
console.log(myObj.name); // Output: 'Example'
console.log(myObj.timestamp); // Output: timestamp value
console.log(myObj.serialize()); // Output: Serialized object
```

### Trả lời chuyên nghiệp:

"Một Mixin trong TypeScript là một kỹ thuật cho phép kết hợp các tính năng từ nhiều nguồn khác nhau vào một lớp mới mà không cần kế thừa trực tiếp từ chúng. Mixins hữu ích vì tính linh hoạt và khả năng tái sử dụng mã nguồn. Chúng có thể được sử dụng bằng cách tạo các hàm trả về lớp mới, kết hợp chúng để tạo ra lớp mới với các tính năng cần thiết."

---

## Decorators là gì? Ví dụ về việc sử dụng Decorators trong TypeScript.

Decorators trong TypeScript là một tính năng cho phép thay đổi hoặc mở rộng hành vi của các lớp, phương thức, thuộc tính hoặc các thành phần khác trong thời gian biên dịch. Chúng được biểu diễn bằng ký tự `@` và có thể được áp dụng trên các khai báo lớp, phương thức, thuộc tính hoặc thậm chí là các biểu diễn khác.

### Ví dụ về việc sử dụng Decorators:

```typescript
// Decorator function
function Log(target: any, key: string) {
  console.log(`Call ${key} method`);
}

class Example {
  @Log
  printMessage() {
    console.log("Printing message...");
  }
}

const ex = new Example();
ex.printMessage(); // Output: "Call printMessage method", "Printing message..."
```

Trong ví dụ này, `@Log` được sử dụng như một decorator được áp dụng lên phương thức `printMessage()`. Khi `printMessage()` được gọi, decorator này sẽ log ra thông báo "Call printMessage method" trước khi thực thi phương thức.

### Trả lời chuyên nghiệp:

"Decorators trong TypeScript là cách mở rộng hành vi của các thành phần trong thời gian biên dịch. Chúng cho phép thêm hoặc thay đổi hành vi của lớp, phương thức, hoặc thuộc tính. Ví dụ, `@Log` decorator có thể được sử dụng để ghi log thông tin trước khi thực thi một phương thức."

---
