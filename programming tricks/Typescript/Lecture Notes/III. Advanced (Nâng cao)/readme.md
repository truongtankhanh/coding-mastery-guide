1. **Conditional Types**:
   TypeScript có thể sử dụng `conditional types` để tạo ra các kiểu dữ liệu phức tạp dựa trên điều kiện. Điều này thường hữu ích khi bạn cần xử lý logic phức tạp trong kiểu dữ liệu. Ví dụ:

   ```typescript
   type IsString<T> = T extends string ? true : false;

   type A = IsString<string>; // true
   type B = IsString<number>; // false
   ```

2. **Mapped Types**:
   Sử dụng `mapped types` để tạo ra các kiểu dữ liệu mới từ một kiểu dữ liệu hiện có. Ví dụ:

   ```typescript
   type Readonly<T> = {
     readonly [P in keyof T]: T[P];
   };

   interface Person {
     name: string;
     age: number;
   }

   const readOnlyPerson: Readonly<Person> = { name: "John", age: 30 };
   // readOnlyPerson.name = "Jane"; // Error: Cannot assign to 'name' because it is a read-only property
   ```

3. **Phantom Types**:
   Sử dụng `phantom types` để kiểm soát runtime behavior thông qua kiểu dữ liệu ở compile time. Điều này có thể hữu ích trong việc tạo các hạn chế logic mạnh mẽ cho các hàm và phương thức. Ví dụ:

   ```typescript
   class PhantomType<T> {
     private _type: T;
   }

   type ReadOnly = PhantomType<"readonly">;
   type ReadWrite = PhantomType<"readwrite">;

   function getValue(obj: ReadOnly): string {
     // Hàm này chỉ chấp nhận đối tượng có kiểu Phantom "readonly"
   }
   ```

4. **Type Guards và Type Assertions**:
   Sử dụng `type guards` để kiểm tra kiểu dữ liệu trong runtime và `type assertions` để chỉ định kiểu dữ liệu một cách rõ ràng khi bạn biết rằng TypeScript không thể suy luận được. Ví dụ:

   ```typescript
   function isString(value: any): value is string {
     return typeof value === "string";
   }

   let x: any = "hello";

   if (isString(x)) {
     // x ở đây được TypeScript hiểu là kiểu string
     console.log(x.length);
   }
   ```

5. **Recursive Type Aliases**:
   TypeScript cho phép định nghĩa kiểu dữ liệu đệ quy thông qua `recursive type aliases`. Điều này hữu ích khi bạn cần mô hình hóa cấu trúc dữ liệu đệ quy như danh sách liên kết hoặc cây. Ví dụ:

   ```typescript
   type ListNode<T> = {
     value: T;
     next?: ListNode<T>;
   };

   let list: ListNode<number> = {
     value: 1,
     next: {
       value: 2,
       next: {
         value: 3,
       },
     },
   };
   ```

6. **TypeScript Decorators**:
   Decorators cho phép bạn "decorate" hoặc mở rộng các lớp, phương thức, thuộc tính và các trình tự khác trong TypeScript. Điều này cho phép bạn thêm các chức năng mà không cần thay đổi code gốc của lớp hoặc phương thức đó.

7. **Intersection Types**:
   Sử dụng `intersection types` để kết hợp nhiều kiểu dữ liệu thành một kiểu duy nhất. Điều này cho phép bạn kết hợp các tính năng từ các kiểu dữ liệu khác nhau. Ví dụ:

   ```typescript
   interface A {
     foo: number;
   }

   interface B {
     bar: string;
   }

   type C = A & B;

   const obj: C = { foo: 42, bar: "hello" };
   ```

8. **Conditional Module Loading**:
   Sử dụng `conditional module loading` để tải các module dựa trên điều kiện. Điều này hữu ích khi bạn muốn chạy mã phụ thuộc vào các điều kiện run-time. Ví dụ:

   ```typescript
   if (someCondition) {
     import("./moduleA").then((moduleA) => {
       // Sử dụng moduleA ở đây
     });
   } else {
     import("./moduleB").then((moduleB) => {
       // Sử dụng moduleB ở đây
     });
   }
   ```

9. **Type Narrowing with Discriminated Unions**:
   Sử dụng `discriminated unions` để thu hẹp kiểu dữ liệu dựa trên thuộc tính chung trong các kiểu dữ liệu. Điều này giúp TypeScript hiểu rõ hơn các điều kiện kiểu dữ liệu. Ví dụ:

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

   interface Circle {
     kind: "circle";
     radius: number;
   }

   type Shape = Square | Rectangle | Circle;

   function area(shape: Shape): number {
     switch (shape.kind) {
       case "square":
         return shape.size * shape.size;
       case "rectangle":
         return shape.width * shape.height;
       case "circle":
         return Math.PI * shape.radius ** 2;
     }
   }
   ```

10. **Tuple Types**:
    Sử dụng `tuple types` để đại diện cho một mảng có kích thước cố định và các kiểu dữ liệu cụ thể ứng với mỗi phần tử. Ví dụ:

    ```typescript
    let tuple: [string, number];
    tuple = ["hello", 10]; // OK
    // tuple = [10, "hello"]; // Error: Kiểu dữ liệu không khớp
    ```

11. **Type Inference in Conditional Statements**:
    TypeScript có thể suy luận kiểu dữ liệu trong các câu lệnh điều kiện. Điều này có thể giúp giảm bớt sự lặp lại trong mã. Ví dụ:

    ```typescript
    function padLeft(value: string, padding: string | number) {
      if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
      }
      if (typeof padding === "string") {
        return padding + value;
      }
      throw new Error(`Expected string or number, but got ${padding}.`);
    }
    ```

12. **Type Aliases for Complex Types**:
    Sử dụng `type aliases` để đặt tên cho các kiểu dữ liệu phức tạp, giúp mã của bạn trở nên dễ đọc hơn, dễ hiểu hơn. Ví dụ:

    ```typescript
    type Point = {
      x: number;
      y: number;
    };

    type Rectangle = {
      topLeft: Point;
      bottomRight: Point;
    };
    ```

13. **Mapped Types with Key Remapping**:
    Sử dụng `mapped types` với khả năng remap các key để tạo ra các kiểu dữ liệu mới từ các kiểu dữ liệu hiện có. Ví dụ:

    ```typescript
    type PartialPoint = {
      [K in keyof Point]?: Point[K];
    };

    // PartialPoint bây giờ sẽ có kiểu Partial<Point>
    ```

14. **Type Constraints on Generics**:
    Sử dụng `type constraints on generics` để giới hạn loại kiểu dữ liệu mà một generic type có thể nhận. Điều này giúp cải thiện tính linh hoạt và an toàn của mã. Ví dụ:

    ```typescript
    interface Lengthwise {
      length: number;
    }

    function loggingIdentity<T extends Lengthwise>(arg: T): T {
      console.log(arg.length);
      return arg;
    }
    ```

15. **Type-safe Event Emitter**:
    Xây dựng một `type-safe event emitter` để đảm bảo rằng các sự kiện được phát ra và lắng nghe đều tuân thủ kiểu dữ liệu nhất định. Điều này giúp tránh lỗi thời gian chạy liên quan đến kiểu dữ liệu. Ví dụ:

    ```typescript
    type Events = {
      foo: number;
      bar: string;
    };

    class EventEmitter<T> {
      on<K extends keyof T>(eventName: K, callback: (value: T[K]) => void) {
        // Logic xử lý sự kiện
      }

      emit<K extends keyof T>(eventName: K, value: T[K]) {
        // Logic phát ra sự kiện
      }
    }

    const emitter = new EventEmitter<Events>();
    emitter.on("foo", (value: number) => {
      console.log(value);
    });
    emitter.emit("foo", 42);
    ```

16. **Conditional Type Inference**:
    Sử dụng `conditional type inference` để điều chỉnh cách TypeScript suy luận kiểu dữ liệu trong các trường hợp đặc biệt. Điều này có thể hữu ích khi bạn muốn kiểm soát cách TypeScript suy luận kiểu dữ liệu của biến hoặc kết quả trả về từ hàm. Ví dụ:

    ```typescript
    function foo<T>(x: T): T extends number ? string : boolean {
      return typeof x === "number" ? "number" : true;
    }

    const a = foo(10); // kiểu dữ liệu của a sẽ là string
    const b = foo("hello"); // kiểu dữ liệu của b sẽ là boolean
    ```

17. **Recursive Conditional Types**:
    Sử dụng `recursive conditional types` để tạo các kiểu dữ liệu đệ quy phức tạp trong TypeScript. Điều này có thể hữu ích khi bạn muốn mô hình hóa các cấu trúc dữ liệu đệ quy như danh sách liên kết hoặc cây. Ví dụ:

    ```typescript
    type LinkedList<T> = T & { next?: LinkedList<T> };

    interface Person {
      name: string;
    }

    const person1: LinkedList<Person> = { name: "Alice" };
    const person2: LinkedList<Person> = { name: "Bob", next: person1 };
    ```

18. **Template Literal Types**:
    Sử dụng `template literal types` để tạo ra các kiểu dữ liệu dựa trên các chuỗi nội suy (interpolated strings). Điều này có thể hữu ích khi bạn cần mô hình hóa các kiểu dữ liệu phức tạp dựa trên các chuỗi. Ví dụ:

    ```typescript
    type Color = "red" | "blue" | "green";

    type ColorfulFish<Type> = {
      color: `bright ${Type}`;
    };

    const fish: ColorfulFish<Color> = {
      color: "bright blue",
    };
    ```

19. **Private Fields with TypeScript**:
    TypeScript hỗ trợ các trường dữ liệu riêng tư (private fields) trong các lớp thông qua kỹ thuật `private` và `readonly`. Điều này giúp đảm bảo tính bảo mật và tuân thủ của dữ liệu trong mã của bạn. Ví dụ:

    ```typescript
    class Counter {
      private _count: number = 0;

      get count(): number {
        return this._count;
      }

      increment(): void {
        this._count++;
      }
    }

    const counter = new Counter();
    counter.increment();
    console.log(counter.count); // 1
    // console.log(counter._count); // Error: Property '_count' is private
    ```

20. **Literal Inference with `const` assertions**:
    Sử dụng `const assertions` để khiến TypeScript suy luận kiểu dữ liệu của biến là kiểu literal chính xác. Điều này giúp tăng cường tính chính xác và độ tin cậy của mã. Ví dụ:

    ```typescript
    let x = "hello";
    x = "world"; // OK

    let y = "hello" as const;
    // y = "world"; // Error: Type '"world"' is not assignable to type '"hello"'
    ```
