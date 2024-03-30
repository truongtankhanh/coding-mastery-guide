1. **Sử dụng kiểu Union và Intersection**:

   - Sử dụng kiểu union (`|`) để đại diện cho một trong các kiểu được chỉ định.
   - Sử dụng kiểu intersection (`&`) để kết hợp các kiểu lại với nhau.

   ```typescript
   type StringOrNumber = string | number;
   type Employee = { name: string; id: number };
   type Admin = { isAdmin: boolean };

   // Union type
   let value: StringOrNumber;
   value = "hello";
   value = 10;

   // Intersection type
   let adminEmployee: Employee & Admin;
   ```

2. **Kiểu Alias và Type Assertion**:

   - Sử dụng kiểu alias để đặt tên cho các kiểu phức tạp hoặc dài dòng.
   - Sử dụng type assertion để nói cho TypeScript biết rằng bạn biết chính xác kiểu của biến.

   ```typescript
   type MyCustomType = { foo: number; bar: string };

   let obj: any = { foo: 1, bar: "hello" };
   let customObj = obj as MyCustomType; // Type Assertion
   ```

3. **Optional và Default Parameters**:

   - Sử dụng tham số tùy chọn (?) và giá trị mặc định để làm cho hàm trở nên linh hoạt hơn.

   ```typescript
   function greet(name: string, greeting: string = "Hello") {
     console.log(`${greeting}, ${name}!`);
   }

   greet("Alice"); // Output: Hello, Alice!
   greet("Bob", "Good morning"); // Output: Good morning, Bob!
   ```

4. **Type Guards**:

   - Sử dụng type guards để kiểm tra và xác định kiểu của một biến trong runtime.

   ```typescript
   function isString(value: any): value is string {
     return typeof value === "string";
   }

   function process(value: string | number) {
     if (isString(value)) {
       console.log(value.toUpperCase());
     } else {
       console.log(value.toFixed(2));
     }
   }
   ```

5. **Destructuring**:

   - Sử dụng destructuring để truy cập và gán các thành phần của một đối tượng hoặc mảng một cách thuận tiện.

   ```typescript
   let person = { name: "Alice", age: 30 };
   let { name, age } = person;
   console.log(name, age); // Output: Alice 30
   ```

6. **Generics**:

   - Sử dụng generics để tạo ra các hàm và lớp làm việc với nhiều kiểu dữ liệu khác nhau mà không cần phải xác định kiểu cụ thể trước.

   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }

   let output = identity<string>("hello");
   ```

7. **Module và Namespace**:

   - Sử dụng module để chia nhỏ mã của bạn thành các phần nhỏ hơn, dễ quản lý.
   - Sử dụng namespace để tạo các "không gian tên" (namespace) cho các loại và hàm liên quan.

   ```typescript
   // Module
   // Math.ts
   export function add(x: number, y: number): number {
     return x + y;
   }

   // App.ts
   import { add } from "./Math";
   console.log(add(2, 3)); // Output: 5

   // Namespace
   namespace Geometry {
     export const PI = 3.14;
     export function calculateCircumference(radius: number): number {
       return 2 * PI * radius;
     }
   }

   console.log(Geometry.calculateCircumference(5)); // Output: 31.4
   ```

8. **Async/Await**:

   - Sử dụng async/await để viết mã bất đồng bộ một cách dễ đọc và dễ hiểu hơn.

   ```typescript
   async function fetchData(): Promise<string> {
     let response = await fetch("https://api.example.com/data");
     let data = await response.text();
     return data;
   }

   fetchData().then((data) => console.log(data));
   ```

9. **Sử dụng Readonly và Partial**:

   - Sử dụng `Readonly` để xác định rằng một đối tượng không thể thay đổi sau khi được khởi tạo.
   - Sử dụng `Partial` để tạo ra một loại mới với tất cả các thuộc tính là tùy chọn.

   ```typescript
   interface Point {
     x: number;
     y: number;
   }

   const readOnlyPoint: Readonly<Point> = { x: 10, y: 20 };
   readOnlyPoint.x = 5; // Error: Cannot assign to 'x' because it is a read-only property

   type PartialPoint = Partial<Point>;
   const partialPoint: PartialPoint = {};
   ```

10. **Mảng và Phương thức Array**:

    - Sử dụng các phương thức mảng tích hợp sẵn như `map`, `filter`, `reduce` để thực hiện các thao tác xử lý mảng một cách dễ dàng và hiệu quả.

    ```typescript
    let numbers: number[] = [1, 2, 3, 4, 5];
    let doubled = numbers.map((x) => x * 2); // [2, 4, 6, 8, 10]

    let evenNumbers = numbers.filter((x) => x % 2 === 0); // [2, 4]

    let sum = numbers.reduce((acc, curr) => acc + curr, 0); // 15
    ```

11. **Kiểu String Literal**:

    - Sử dụng kiểu string literal để giới hạn giá trị của một biến chỉ cho một tập hợp cụ thể của các giá trị chuỗi.

    ```typescript
    type Direction = "up" | "down" | "left" | "right";

    function move(direction: Direction) {
      // Implementation
    }

    move("up");
    move("diagonal"); // Error: Argument of type 'string' is not assignable to parameter of type 'Direction'.
    ```

12. **Kiểu Record**:

    - Sử dụng kiểu `Record` để mô tả cấu trúc của một đối tượng với các khóa cụ thể và kiểu dữ liệu tương ứng.

    ```typescript
    type PhoneBook = Record<string, string>;

    let contacts: PhoneBook = {
      Alice: "123456",
      Bob: "789012",
    };
    ```

13. **Kiểu Index và Lookup**:

    - Sử dụng kiểu index (`[key: string]`) để mô tả các đối tượng có các thuộc tính không cố định trước.
    - Sử dụng kiểu lookup để truy xuất các kiểu con từ một kiểu cha dựa trên một khóa.

    ```typescript
    interface Dictionary<T> {
      [key: string]: T;
    }

    let dictionary: Dictionary<number> = {
      one: 1,
      two: 2,
      three: 3,
    };

    type FruitPrices = {
      apple: number;
      banana: number;
      orange: number;
    };

    type Fruit = keyof FruitPrices; // "apple" | "banana" | "orange"
    ```

14. **Kiểu Never**:

    - Sử dụng kiểu `never` để biểu diễn kiểu dữ liệu của một hàm không bao giờ trả về kết quả hoặc một biến không thể có giá trị.

    ```typescript
    function throwError(message: string): never {
      throw new Error(message);
    }

    function infiniteLoop(): never {
      while (true) {}
    }
    ```

15. **Kiểu Non-null Assertion**:

    - Sử dụng toán tử `!` để khẳng định rằng một biến không bao giờ có thể là `null` hoặc `undefined`.

    ```typescript
    let element = document.getElementById("example")!;
    element.innerHTML = "Hello, TypeScript!";
    ```

16. **Module Resolution**:

    - Hiểu và sử dụng cách TypeScript giải quyết các yêu cầu module trong dự án của bạn, bao gồm cả CommonJS, AMD, SystemJS, và ES6.

    ```typescript
    // CommonJS
    const moduleA = require("./moduleA");

    // ES6
    import moduleB from "./moduleB";
    ```

17. **Kiểu ReadonlyArray**:

    - Sử dụng `ReadonlyArray` để đảm bảo rằng một mảng không thể thay đổi sau khi được khởi tạo.

    ```typescript
    let numbers: ReadonlyArray<number> = [1, 2, 3];
    numbers[0] = 4; // Error: Index signature in type 'readonly number[]' only permits reading.
    ```

18. **Type Narrowing**:

    - Sử dụng kiểu narrowing (co hẹp kiểu) để làm cho TypeScript hiểu rõ hơn về kiểu dữ liệu của biến trong các điều kiện phức tạp.

    ```typescript
    type Fish = { swim: () => void };
    type Bird = { fly: () => void };

    function move(animal: Fish | Bird) {
      if ("swim" in animal) {
        animal.swim();
      } else {
        animal.fly();
      }
    }
    ```

19. **Mixins**:

    - Sử dụng mixins để tái sử dụng code và kết hợp các tính năng từ nhiều lớp hoặc đối tượng.

    ```typescript
    class Jumpable {
      jump() {
        console.log("Jumping...");
      }
    }

    class Flyable {
      fly() {
        console.log("Flying...");
      }
    }

    class SuperHero implements Jumpable, Flyable {
      jump: () => void;
      fly: () => void;
      // Implementation
    }

    applyMixins(SuperHero, [Jumpable, Flyable]);
    ```

20. **Decorator**:

    - Sử dụng decorators để mở rộng hoặc thay đổi hành vi của các lớp, phương thức, hoặc thuộc tính.

    ```typescript
    function log(target: any, key: string, descriptor: PropertyDescriptor) {
      const originalMethod = descriptor.value;
      descriptor.value = function (...args: any[]) {
        console.log(`Calling ${key} with arguments: ${args}`);
        return originalMethod.apply(this, args);
      };
      return descriptor;
    }

    class Example {
      @log
      add(x: number, y: number) {
        return x + y;
      }
    }

    const example = new Example();
    example.add(2, 3);
    ```
