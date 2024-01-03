## Khai báo và sử dụng hàm trong TypeScript.

Trong TypeScript, khai báo và sử dụng hàm tương tự như trong JavaScript, nhưng bạn có thể thêm kiểu dữ liệu cho tham số và kiểu trả về của hàm.

### Khái niệm

Hàm trong TypeScript giúp tổ chức mã nguồn và tái sử dụng mã một cách dễ dàng. Bằng cách khai báo kiểu dữ liệu cho tham số và kiểu trả về, TypeScript cung cấp lợi ích về tính rõ ràng và bảo trì mã.

### Ngữ cảnh

Hàm trong TypeScript giúp tổ chức mã nguồn, tạo tính tái sử dụng và giảm lỗi trong quá trình phát triển.

### Cách sử dụng và ví dụ

#### Khai báo hàm không có kiểu dữ liệu

```typescript
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("Alice");
```

#### Khai báo hàm có kiểu dữ liệu tham số và kiểu trả về

```typescript
function add(a: number, b: number): number {
  return a + b;
}

let result: number = add(5, 3);
console.log(result); // Output: 8
```

#### Sử dụng kiểu trả về void cho hàm không trả về giá trị

```typescript
function displayMessage(message: string): void {
  console.log(message);
}

displayMessage("This is a message.");
```

#### Sử dụng hàm làm tham số trong TypeScript

```typescript
function sayHello(name: string): string {
  return `Hello, ${name}!`;
}

function greet(greetingFunction: (name: string) => string, name: string): void {
  console.log(greetingFunction(name));
}

greet(sayHello, "Alice");
```

### Tóm tắt

Hàm trong TypeScript giúp tổ chức mã nguồn, cung cấp tính tái sử dụng và giảm lỗi trong quá trình phát triển ứng dụng. Bằng cách khai báo kiểu dữ liệu cho tham số và kiểu trả về, TypeScript tăng tính rõ ràng và kiểm tra lỗi, giúp bạn viết mã dễ đọc và bảo trì hơn.

---

## Lambda functions (Arrow functions).

Lambda functions, hay còn gọi là Arrow functions trong TypeScript, là một cú pháp rút gọn cho việc khai báo hàm. Chúng giúp viết mã ngắn gọn hơn và giữ cho ngữ cảnh 'this' trong hàm được xác định rõ ràng hơn.

### Khái niệm

Lambda functions là cách viết ngắn gọn hàm trong TypeScript bằng cú pháp `() => {}`. Chúng thường được sử dụng khi cần viết hàm ngắn gọn mà không cần định nghĩa từ khóa `function`.

### Ngữ cảnh

Lambda functions hữu ích khi cần truyền hàm làm tham số hoặc khi cần một cách viết hàm ngắn gọn và dễ đọc hơn.

### Cách sử dụng và ví dụ

#### Lambda functions cơ bản:

```typescript
// Hàm trả về tổng của hai số
let add = (a: number, b: number): number => a + b;

// Sử dụng hàm add
console.log(add(5, 3)); // Output: 8
```

#### Sử dụng với mảng và Array methods:

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];

// Sử dụng map để nhân mỗi phần tử trong mảng với 2
let doubled = numbers.map((num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]
```

#### Sử dụng Lambda functions với hàm một dòng:

```typescript
// Hàm trả về bình phương của số
let square = (num: number): number => num * num;

console.log(square(3)); // Output: 9
```

#### Lambda functions và ngữ cảnh 'this':

```typescript
class Counter {
  count: number = 0;

  // Hàm đếm sử dụng setInterval với ngữ cảnh 'this' trong Lambda function
  startCounting() {
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
}

let counter = new Counter();
counter.startCounting();
```

### Tóm tắt

Lambda functions (Arrow functions) trong TypeScript là cú pháp ngắn gọn và thuận tiện để khai báo hàm, thường được sử dụng trong nhiều tình huống như việc truyền hàm làm tham số, xử lý Array methods hoặc viết hàm ngắn gọn và dễ đọc hơn. Chúng cũng giúp giữ cho ngữ cảnh 'this' được xác định rõ ràng hơn trong một số trường hợp, đặc biệt khi làm việc với các phương thức của đối tượng.

---

## Classes và inheritance.

Classes trong TypeScript là cách để định nghĩa các đối tượng và hành vi của chúng. Inheritance, hay kế thừa, là khái niệm cho phép một lớp (class) mới có thể thừa hưởng các thuộc tính và phương thức từ một lớp khác.

### Khái niệm

#### Classes:

Là một cấu trúc để mô hình hóa các đối tượng trong TypeScript. Chúng bao gồm các thuộc tính (properties) và phương thức (methods) mô tả hành vi của đối tượng.

#### Inheritance:

Cho phép một lớp con (subclass) kế thừa các thuộc tính và phương thức từ một lớp cha (superclass), giúp tái sử dụng mã và tạo các mối quan hệ giữa các lớp.

### Ngữ cảnh

Classes và inheritance giúp tạo ra cấu trúc dữ liệu phong phú, tổ chức mã nguồn một cách rõ ràng và dễ bảo trì, cũng như tăng tính tái sử dụng của mã.

### Cách sử dụng và ví dụ

#### Classes:

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound() {
    console.log("Some generic sound");
  }
}

let animal = new Animal("Unknown");
animal.makeSound(); // Output: Some generic sound
```

#### Inheritance:

```typescript
class Dog extends Animal {
  constructor(name: string) {
    super(name); // Gọi constructor của lớp cha
  }

  makeSound() {
    console.log("Woof! Woof!");
  }
}

let dog = new Dog("Buddy");
dog.makeSound(); // Output: Woof! Woof!
```

#### Sử dụng thuộc tính và phương thức từ lớp cha:

```typescript
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }

  makeSound() {
    console.log("Meow!");
  }

  greetOwner() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

let cat = new Cat("Whiskers");
cat.makeSound(); // Output: Meow!
cat.greetOwner(); // Output: Hello, I'm Whiskers
```

### Tóm tắt

Classes và inheritance trong TypeScript là cách để tổ chức và mô hình hóa các đối tượng. Classes định nghĩa các đặc điểm và hành vi của đối tượng, trong khi inheritance cho phép lớp con kế thừa các đặc điểm từ lớp cha, giúp tái sử dụng mã và tạo mối quan hệ giữa các lớp. Sử dụng chúng giúp mã nguồn trở nên rõ ràng, dễ đọc và tái sử dụng hơn.

---

## Access modifiers (public, private, protected).

Access modifiers trong TypeScript là các từ khóa để kiểm soát quyền truy cập đến các thành phần của lớp như thuộc tính và phương thức. Có ba loại access modifiers: public, private và protected.

### Khái niệm

- **public:** Các thành phần có access modifier là public có thể được truy cập từ bất kỳ nơi nào, không giới hạn.
- **private:** Các thành phần có access modifier là private chỉ có thể được truy cập từ bên trong cùng một lớp.
- **protected:** Các thành phần có access modifier là protected cũng giống như private, nhưng cũng có thể được truy cập từ các lớp con.

### Ngữ cảnh

Access modifiers giúp kiểm soát quyền truy cập vào các thành phần của lớp, tăng tính bảo mật và kiểm soát mã nguồn.

### Cách sử dụng và ví dụ

#### Public:

```typescript
class Car {
  public brand: string;

  constructor(brand: string) {
    this.brand = brand;
  }
}

let car = new Car("Toyota");
console.log(car.brand); // Output: Toyota
```

#### Private:

```typescript
class Person {
  private age: number;

  constructor(age: number) {
    this.age = age;
  }

  getAge() {
    return this.age; // Chỉ có thể truy cập this.age trong cùng lớp này
  }
}

let person = new Person(25);
console.log(person.getAge()); // Output: 25
// console.log(person.age); // Lỗi: Property 'age' is private and only accessible within class 'Person'.
```

#### Protected:

```typescript
class Animal {
  protected species: string;

  constructor(species: string) {
    this.species = species;
  }
}

class Dog extends Animal {
  constructor(species: string) {
    super(species);
  }

  getSpecies() {
    return this.species; // Có thể truy cập this.species từ lớp con
  }
}

let dog = new Dog("Canine");
console.log(dog.getSpecies()); // Output: Canine
// console.log(dog.species); // Lỗi: Property 'species' is protected and only accessible within class 'Animal' and its subclasses.
```

### Tóm tắt

Access modifiers public, private, và protected trong TypeScript giúp kiểm soát quyền truy cập vào các thành phần của lớp. Sử dụng chúng giúp tăng tính bảo mật của mã nguồn và quản lý sự tương tác giữa các lớp trong ứng dụng.

---
