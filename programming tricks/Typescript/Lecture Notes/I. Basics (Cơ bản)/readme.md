1. **Kiểu Dữ liệu Tường Minh (Explicit Data Types):** TypeScript cho phép bạn xác định kiểu dữ liệu của biến. Sử dụng điều này để giúp TypeScript hiểu code của bạn và để bắt lỗi sớm hơn.

   ```typescript
   let num: number = 10;
   let str: string = "Hello";
   ```

2. **Kiểu Union và Intersection:** Sử dụng kiểu Union để biểu diễn các giá trị có thể là một trong một số kiểu. Sử dụng kiểu Intersection để kết hợp các kiểu.

   ```typescript
   // Union Types
   let numOrStr: number | string;
   numOrStr = 10;
   numOrStr = "Hello";

   // Intersection Types
   type Printable = { print: () => void };
   type Loggable = { log: () => void };
   function mixin<T extends Printable, U extends Loggable>(
     obj: T,
     obj2: U
   ): T & U {
     return { ...obj, ...obj2 };
   }
   let obj = mixin(
     { print: () => console.log("Printing") },
     { log: () => console.log("Logging") }
   );
   obj.print();
   obj.log();
   ```

3. **Sử Dụng Interface và Type Alias:** Sử dụng Interface hoặc Type Alias để định nghĩa cấu trúc của đối tượng hoặc kiểu dữ liệu.

   ```typescript
   // Interface
   interface Person {
     name: string;
     age: number;
   }
   function greet(person: Person) {
     console.log(`Hello, ${person.name}`);
   }
   let user = { name: "John", age: 30 };
   greet(user);

   // Type Alias
   type Point = {
     x: number;
     y: number;
   };
   ```

4. **Kiểu Enum:** Sử dụng Enum để định nghĩa một tập hợp các giá trị có thể.

   ```typescript
   enum Direction {
     Up,
     Down,
     Left,
     Right,
   }
   let go: Direction = Direction.Up;
   ```

5. **Kiểu Generics:** Sử dụng Generics để viết code linh hoạt hơn, cho phép bạn sử dụng các kiểu dữ liệu động.

   ```typescript
   function identity<T>(arg: T): T {
     return arg;
   }
   let output = identity<string>("hello");
   ```

6. **Kiểu Null và Kiểu Undefined:** Sử dụng kiểu Null hoặc Undefined để chỉ ra rằng một biến có thể chứa giá trị null hoặc undefined.

   ```typescript
   let val: number | null | undefined;
   val = 10;
   val = null;
   val = undefined;
   ```

7. **Kiểm Tra Kiểu Dữ Liệu (Type Guards):** Sử dụng Type Guards để kiểm tra kiểu dữ liệu của biến trong runtime.

   ```typescript
   function isString(value: any): value is string {
     return typeof value === "string";
   }
   if (isString(value)) {
     console.log(value.toUpperCase());
   }
   ```

8. **Kiểu Mảng (Array Types) và Kiểu Tuple:** TypeScript cho phép bạn xác định kiểu dữ liệu của mảng và tuple.

   ```typescript
   let numbers: number[] = [1, 2, 3, 4, 5];
   let tuple: [string, number] = ["hello", 10];
   ```

9. **Kiểu Enum với Giá Trị Tùy Chọn:** Bạn có thể chỉ định giá trị cho mỗi phần tử trong Enum.

   ```typescript
   enum Color {
     Red = 1,
     Green = 2,
     Blue = 4,
   }
   let color: Color = Color.Green;
   ```

10. **Kiểu Readonly:** Sử dụng kiểu `readonly` để khai báo một biến không thể thay đổi sau khi khởi tạo.

    ```typescript
    let readonlyArray: ReadonlyArray<number> = [1, 2, 3, 4];
    ```

11. **Kiểu Assertion:** Sử dụng kiểu assertion (`as`) khi bạn chắc chắn biến có một kiểu cụ thể.

    ```typescript
    let someValue: any = "this is a string";
    let strLength: number = (someValue as string).length;
    ```

12. **Kiểu Never:** Sử dụng kiểu `never` để đại diện cho các hàm không bao giờ trả về giá trị.

    ```typescript
    function error(message: string): never {
      throw new Error(message);
    }
    ```

13. **Kiểu Non-null Assertion Operator:** Sử dụng toán tử `!` để bỏ qua cảnh báo kiểu dữ liệu `null` hoặc `undefined`.

    ```typescript
    let nonNullValue: string | null = "hello";
    let strLength: number = nonNullValue!.length;
    ```

14. **Kiểu Mô-đun (Module):** Sử dụng mô-đun để tổ chức code thành các phần riêng biệt.

    ```typescript
    // file utils.ts
    export function multiply(x: number, y: number): number {
      return x * y;
    }

    // file main.ts
    import { multiply } from "./utils";
    console.log(multiply(3, 4)); // Output: 12
    ```

15. **Sử Dụng Compiler Flags:** TypeScript cung cấp các cờ biên dịch để tùy chỉnh quá trình biên dịch.

    ```
    tsc --target es6 --watch index.ts
    ```

16. **Kiểu Optional và Default Parameters:** Sử dụng tham số tùy chọn và giá trị mặc định trong hàm.

    ```typescript
    function greet(name: string, greeting?: string) {
      if (greeting) {
        console.log(`${greeting}, ${name}!`);
      } else {
        console.log(`Hello, ${name}!`);
      }
    }
    greet("John"); // Output: Hello, John!
    greet("Jane", "Hi"); // Output: Hi, Jane!
    ```

17. **Kiểu Rest Parameters:** Sử dụng Rest Parameters để chấp nhận một số lượng biến tham số không xác định trong hàm.

    ```typescript
    function sum(...numbers: number[]) {
      return numbers.reduce((acc, curr) => acc + curr, 0);
    }
    console.log(sum(1, 2, 3, 4)); // Output: 10
    ```

18. **Kiểu Readonly Properties:** Sử dụng thuộc tính chỉ đọc (`readonly`) trong các lớp để chỉ ra rằng một thuộc tính không thể thay đổi sau khi được khởi tạo.

    ```typescript
    class Circle {
      readonly radius: number;
      constructor(radius: number) {
        this.radius = radius;
      }
      getArea() {
        return Math.PI * this.radius ** 2;
      }
    }
    let circle = new Circle(5);
    console.log(circle.getArea()); // Output: ~78.54
    ```

19. **Kiểu Abstract Classes:** Sử dụng lớp trừu tượng (`abstract`) để định nghĩa các lớp cơ sở cho các lớp con.

    ```typescript
    abstract class Animal {
      abstract makeSound(): void;
      move(): void {
        console.log("Moving...");
      }
    }
    ```

20. **Kiểu Interface Extending:** Mở rộng các interface để tạo ra các interface mới từ các interface hiện có.

    ```typescript
    interface Shape {
      color: string;
    }
    interface Square extends Shape {
      sideLength: number;
    }
    let square: Square = { color: "red", sideLength: 10 };
    ```

21. **Kiểu Mảng (Array) Hậu Tố (Postfix) Condition:** Sử dụng hậu tố (postfix) `[]` để chỉ ra rằng biến là một mảng.

    ```typescript
    let numbers: number[] = [1, 2, 3];
    ```

22. **Kiểu Non-nullable Assertions với nullish coalescing:** Sử dụng toán tử `??` để kiểm tra giá trị null hoặc undefined và bỏ qua các cảnh báo kiểu dữ liệu.

    ```typescript
    let value: string | null | undefined;
    let strLength: number = (value ?? "").length;
    ```

23. **Kiểu Discriminated Unions:** Sử dụng Discriminated Unions để xác định một loạt các kiểu có chung một thuộc tính phân biệt.

    ```typescript
    interface Square {
      kind: "square";
      size: number;
    }
    interface Rectangle {
      kind: "rectangle";
      width: number;
      height: number;
    }
    type Shape = Square | Rectangle;
    function area(shape: Shape) {
      switch (shape.kind) {
        case "square":
          return shape.size ** 2;
        case "rectangle":
          return shape.width * shape.height;
      }
    }
    ```
