Tất nhiên, hãy xem xét hai chủ đề quan trọng này ở mức độ trung cấp của TypeScript:

### 1. Design Patterns trong TypeScript:

#### a. Singleton Pattern:

Pattern này đảm bảo chỉ có một instance duy nhất của một class và cung cấp một điểm truy cập toàn cầu đến instance đó.

#### Ví dụ:

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

console.log(instance1 === instance2); // true - chỉ có một instance được tạo ra
```

#### b. Factory Pattern:

Pattern này cho phép tạo đối tượng mà không cần chỉ rõ class cụ thể của nó.

#### Ví dụ:

```typescript
interface Shape {
  draw(): void;
}

class Circle implements Shape {
  draw() {
    console.log("Drawing a circle");
  }
}

class Square implements Shape {
  draw() {
    console.log("Drawing a square");
  }
}

class ShapeFactory {
  public createShape(type: string): Shape {
    if (type === "circle") {
      return new Circle();
    } else if (type === "square") {
      return new Square();
    }
    throw new Error("Invalid shape type");
  }
}

const factory = new ShapeFactory();
const circle = factory.createShape("circle");
const square = factory.createShape("square");

circle.draw(); // Drawing a circle
square.draw(); // Drawing a square
```

#### c. Decorator Pattern:

Pattern này cho phép thêm các tính năng mới cho đối tượng mà không thay đổi cấu trúc ban đầu của nó.

#### Ví dụ:

```typescript
interface Car {
  drive(): void;
}

class BasicCar implements Car {
  drive() {
    console.log("Driving a basic car");
  }
}

class CarDecorator implements Car {
  constructor(private car: Car) {}

  drive() {
    this.car.drive();
  }
}

class LuxuryCarDecorator extends CarDecorator {
  drive() {
    super.drive();
    console.log("Driving a luxury car");
  }
}

const basicCar = new BasicCar();
const luxuryCar = new LuxuryCarDecorator(basicCar);

luxuryCar.drive(); // Driving a basic car, Driving a luxury car
```

### 2. Best Practices:

#### a. SOLID Principles:

- **Single Responsibility Principle (SRP):** Mỗi class chỉ nên có một trách nhiệm duy nhất.
- **Open/Closed Principle (OCP):** Có thể mở rộng class nhưng không được sửa đổi nó.
- **Liskov Substitution Principle (LSP):** Đối tượng của lớp con có thể thay thế đối tượng của lớp cha mà không làm thay đổi tính đúng đắn của chương trình.
- **Interface Segregation Principle (ISP):** Nên có nhiều interface nhỏ đơn giản hơn là một interface lớn chứa nhiều chức năng không liên quan.
- **Dependency Inversion Principle (DIP):** Các module phụ thuộc vào abstraction, không phải implementation.

#### b. Clean Code và TypeScript-specific Best Practices:

- **Naming conventions:** Tuân theo quy ước đặt tên rõ ràng và dễ đọc.
- **Type Annotations:** Sử dụng type annotations để tăng độ chính xác và dễ đọc cho mã.
- **Avoid Any Type:** Tránh sử dụng any type để tận dụng được lợi ích của TypeScript về kiểm tra kiểu dữ liệu.
- **Use Strict Mode:** Bật `strict` trong `tsconfig.json` để tận dụng các tính năng nghiêm ngặt của TypeScript.

Những Design Patterns và Best Practices giúp tăng tính linh hoạt, bảo trì và sửa lỗi của mã TypeScript. Hiểu và áp dụng chúng trong dự án sẽ giúp bạn viết mã chất lượng cao và dễ bảo trì hơn. Hãy thực hành và áp dụng chúng trong các dự án của bạn!
