## Sử dụng TypeScript với design patterns như Singleton, Factory, Observer, và Module.

Design patterns là các kỹ thuật tiêu chuẩn được sử dụng để giải quyết các vấn đề phổ biến trong thiết kế phần mềm. Dưới đây là cách sử dụng TypeScript với một số design patterns thông dụng: Singleton, Factory, Observer, và Module.

### Singleton Pattern:

Singleton pattern đảm bảo rằng một class chỉ có duy nhất một instance và cung cấp một điểm truy cập toàn cục đến instance đó.

```typescript
class Singleton {
  private static instance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1 === instance2); // true, chỉ có một instance duy nhất được tạo ra
```

### Factory Pattern:

Factory pattern tạo ra các đối tượng mà không cần phải chỉ rõ class cụ thể của chúng.

```typescript
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("Vẽ hình tròn");
  }
}

class Rectangle implements Shape {
  draw() {
    console.log("Vẽ hình chữ nhật");
  }
}

class ShapeFactory {
  public getShape(shapeType: string): Shape {
    if (shapeType === "circle") {
      return new Circle();
    } else if (shapeType === "rectangle") {
      return new Rectangle();
    }
    throw new Error("Invalid shape type");
  }
}

const factory = new ShapeFactory();
const circle = factory.getShape("circle");
circle.draw(); // Output: Vẽ hình tròn
```

### Observer Pattern:

Observer pattern thiết lập một cơ chế đăng ký và thông báo cho các object được quan sát khi có sự thay đổi.

```typescript
interface Observer {
  update(message: string): void;
}

class ConcreteObserver implements Observer {
  update(message: string) {
    console.log(`Nhận thông báo: ${message}`);
  }
}

class Subject {
  private observers: Observer[] = [];

  public registerObserver(observer: Observer) {
    this.observers.push(observer);
  }

  public notifyObservers(message: string) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

const subject = new Subject();
const observer1 = new ConcreteObserver();
const observer2 = new ConcreteObserver();

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers("Thông báo mới!"); // Output: Nhận thông báo: Thông báo mới! (được in ra từ cả 2 observers)
```

### Module Pattern:

Module pattern giúp tạo ra các module đóng gói logic và dữ liệu riêng biệt và cung cấp các phạm vi truy cập tốt.

```typescript
const module = (() => {
  let privateVar = "This is private";

  const privateFunction = () => {
    console.log("This is private function");
  };

  return {
    publicVar: "This is public",
    publicFunction: () => {
      console.log("This is public function");
    },
  };
})();

console.log(module.publicVar); // Output: This is public
module.publicFunction(); // Output: This is public function
```

Các design patterns là các kỹ thuật đã được kiểm chứng và sử dụng rộng rãi để giải quyết các vấn đề cụ thể trong phát triển phần mềm. TypeScript cung cấp tính năng và cú pháp mạnh mẽ để áp dụng các patterns này một cách linh hoạt và hiệu quả.

---

## Sử dụng TypeScript với các paradigms như Dependency Injection.

Dependency Injection (DI) là một design pattern cho phép chúng ta cung cấp các phụ thuộc (dependencies) cho một class từ bên ngoài thay vì việc class tự tạo ra các dependencies của nó. TypeScript có thể được sử dụng hiệu quả với DI để quản lý dependencies giữa các class và tăng khả năng kiểm thử và tái sử dụng code.

### Khái niệm:

Dependency Injection là một design pattern cho phép chúng ta cung cấp các dependencies cho các class từ bên ngoài, giúp giảm sự phụ thuộc giữa các class và tạo ra code linh hoạt, dễ bảo trì.

### Ngữ cảnh:

Khi cần quản lý các dependencies giữa các class một cách linh hoạt, giảm sự ràng buộc giữa chúng và tăng khả năng kiểm thử và tái sử dụng code.

### Cách sử dụng:

#### Ví dụ:

```typescript
// Dependency: Logger
interface Logger {
  log(message: string): void;
}

// Implementation of Logger
class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(`LOG: ${message}`);
  }
}

// Service class depending on Logger
class ProductService {
  private logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  getProduct(productId: number): void {
    // ...do something
    this.logger.log(`Fetching product with ID ${productId}`);
    // ...do something else
  }
}

// Creating instances using Dependency Injection
const logger = new ConsoleLogger();
const productService = new ProductService(logger);

productService.getProduct(123);
```

Trong ví dụ này, `ProductService` sử dụng `Logger` interface làm dependency. Khi khởi tạo `ProductService`, chúng ta cung cấp một instance của `Logger` (trong trường hợp này là `ConsoleLogger`) thông qua constructor của `ProductService`. Điều này cho phép chúng ta dễ dàng thay đổi và chuyển đổi giữa các loại logger khác nhau mà không cần thay đổi code bên trong `ProductService`.

DI giúp chia nhỏ các phụ thuộc và giúp code trở nên linh hoạt hơn, dễ kiểm thử và bảo trì. TypeScript có thể được sử dụng một cách hiệu quả để quản lý các dependencies giữa các class thông qua DI.

---
