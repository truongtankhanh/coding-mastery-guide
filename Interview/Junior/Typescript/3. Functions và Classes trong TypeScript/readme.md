# Functions và Classes trong TypeScript:

## 1. Giải thích về optional và default parameters trong TypeScript function.

Optional và default parameters trong TypeScript function đều liên quan đến việc định nghĩa hàm với các tham số có thể không được truyền vào khi gọi hàm, hoặc có giá trị mặc định khi không có giá trị được cung cấp.

**Phân tích và trình bày:**

1. **Optional parameters (Tham số tùy chọn):**

   - Đây là các tham số trong hàm mà có thể được truyền vào hoặc không. Để đánh dấu một tham số là tùy chọn, chúng ta sử dụng dấu `?` sau tên tham số.
   - Các tham số tùy chọn phải đặt sau các tham số bắt buộc.

   Ví dụ:

   ```typescript
   function greet(name: string, message?: string) {
     if (message) {
       console.log(`Hello, ${name}! ${message}`);
     } else {
       console.log(`Hello, ${name}!`);
     }
   }

   greet("Alice"); // Sử dụng tham số tùy chọn
   greet("Bob", "Good morning!"); // Sử dụng cả hai tham số
   ```

2. **Default parameters (Tham số mặc định):**

   - Đây là các tham số trong hàm có giá trị mặc định được gán nếu giá trị không được cung cấp khi gọi hàm.
   - Để đặt giá trị mặc định cho tham số, chúng ta sử dụng cú pháp `tên_tham_số = giá_trị_mặc_định`.

   Ví dụ:

   ```typescript
   function greetDefault(name: string, message: string = "Have a nice day!") {
     console.log(`Hello, ${name}! ${message}`);
   }

   greetDefault("Alice"); // Sử dụng giá trị mặc định cho tham số message
   greetDefault("Bob", "Good morning!"); // Sử dụng giá trị được cung cấp cho tham số message
   ```

**Trả lời chuyên nghiệp:**

"Optional parameters trong TypeScript function là các tham số có thể được truyền vào hoặc không, đánh dấu bằng dấu `?` sau tên tham số. Chúng đặt sau các tham số bắt buộc. Ví dụ, trong hàm `greet`, tham số `message` là tùy chọn. Trong khi đó, default parameters là các tham số trong hàm có giá trị mặc định được gán nếu giá trị không được cung cấp khi gọi hàm, được định nghĩa bằng cú pháp `tên_tham_số = giá_trị_mặc_định`. Ví dụ, trong hàm `greetDefault`, tham số `message` có giá trị mặc định là 'Have a nice day!' nếu không có giá trị nào được cung cấp khi gọi hàm."

---

## 2. Cách tạo một class trong TypeScript và sử dụng access modifiers (public, private, protected).

Câu hỏi này yêu cầu giải thích cách tạo class trong TypeScript và sử dụng các access modifiers như `public`, `private`, và `protected`.

**Phân tích và trình bày:**

1. **Tạo một class trong TypeScript:**

   - Để tạo một class trong TypeScript, chúng ta sử dụng từ khóa `class` theo sau là tên class và các phương thức và thuộc tính bên trong nó.
   - Ví dụ:

   ```typescript
   class Animal {
     name: string;
     constructor(name: string) {
       this.name = name;
     }
     // Phương thức
     makeSound() {
       console.log("Some sound");
     }
   }

   let dog = new Animal("Dog");
   dog.makeSound(); // Kết quả: 'Some sound'
   ```

2. **Access modifiers (`public`, `private`, `protected`):**

   - `public`: Các thành phần được đánh dấu là `public` có thể truy cập từ bên ngoài class.
   - `private`: Các thành phần được đánh dấu là `private` chỉ có thể truy cập từ bên trong class đó.
   - `protected`: Các thành phần được đánh dấu là `protected` có thể truy cập từ bên trong class đó hoặc từ các class con kế thừa nó.

   Ví dụ:

   ```typescript
   class Animal {
     private age: number;
     public constructor(age: number) {
       this.age = age;
     }
     protected getAge(): number {
       return this.age;
     }
   }

   class Dog extends Animal {
     public getDogAge(): number {
       return this.getAge(); // Kế thừa và sử dụng phương thức protected từ class cha
     }
   }

   let dog = new Dog(5);
   console.log(dog.getDogAge()); // Kết quả: 5
   ```

**Trả lời chuyên nghiệp:**

"Để tạo một class trong TypeScript, chúng ta sử dụng từ khóa `class` kèm theo tên class và định nghĩa các thuộc tính và phương thức bên trong nó. Access modifiers như `public`, `private`, và `protected` được sử dụng để quản lý quyền truy cập đối với các thành phần của class. `public` cho phép truy cập từ bên ngoài class, `private` chỉ cho phép truy cập từ bên trong class, và `protected` cho phép truy cập từ bên trong class và từ các class con kế thừa nó. Ví dụ, trong class `Animal`, thuộc tính `age` được đánh dấu là `private`, và phương thức `getAge()` được đánh dấu là `protected`, cho phép các class con kế thừa nó truy cập giá trị của `age`."

---

## 3. Sự khác nhau giữa 'interface' và 'type' trong TypeScript là gì?

Sự khác nhau giữa `interface` và `type` trong TypeScript thường là một chủ đề quan trọng khi nói về cách định nghĩa kiểu dữ liệu.

**Phân tích và trình bày:**

1. **Interface:**

   - `interface` trong TypeScript thường được sử dụng để định nghĩa cấu trúc cho một đối tượng.
   - Nó chỉ định các thuộc tính, phương thức và các kiểu dữ liệu mà một đối tượng cần phải có.
   - Các `interface` có thể mở rộng (extends) từ các `interface` khác để tạo ra các cấu trúc phức tạp hơn.

   Ví dụ:

   ```typescript
   interface Person {
     name: string;
     age: number;
   }

   function greet(person: Person) {
     return `Hello, ${person.name}! You are ${person.age} years old.`;
   }

   let user = { name: "Alice", age: 25 };
   console.log(greet(user)); // Kết quả: Hello, Alice! You are 25 years old.
   ```

2. **Type:**

   - `type` trong TypeScript được sử dụng để định nghĩa các loại dữ liệu tùy chỉnh, bao gồm kiểu cơ bản, union type, intersection type, và nhiều cấu trúc dữ liệu phức tạp hơn.
   - Nó cho phép tạo ra các alias cho các kiểu dữ liệu đã có hoặc kết hợp chúng thành các kiểu dữ liệu mới.

   Ví dụ:

   ```typescript
   type Point = {
     x: number;
     y: number;
   };

   function calculateDistance(point1: Point, point2: Point) {
     return Math.sqrt((point2.x - point1.x) ** 2 + (point2.y - point1.y) ** 2);
   }

   let p1 = { x: 0, y: 0 };
   let p2 = { x: 3, y: 4 };
   console.log(calculateDistance(p1, p2)); // Kết quả: 5
   ```

**Trả lời chuyên nghiệp:**

"Trong TypeScript, `interface` được sử dụng để định nghĩa cấu trúc cho một đối tượng, chỉ định các thuộc tính và phương thức cần thiết. `type` được sử dụng để định nghĩa các loại dữ liệu tùy chỉnh, bao gồm cả kiểu dữ liệu cơ bản và các cấu trúc phức tạp hơn. Một điểm khác biệt chính là `interface` có thể mở rộng từ các `interface` khác trong khi `type` không thể làm điều này. Ví dụ, khi sử dụng `interface`, chúng ta định nghĩa các thuộc tính và kiểu dữ liệu cần thiết cho đối tượng như `Person`, trong khi `type` cho phép tạo ra các kiểu dữ liệu tùy chỉnh như `Point` để mô tả cấu trúc dữ liệu của một điểm trong không gian 2D."

---
