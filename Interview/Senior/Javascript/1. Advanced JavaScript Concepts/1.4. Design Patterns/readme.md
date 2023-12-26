## Singleton, Factory, Observer, Decorator - Mô tả về mỗi design pattern và trường hợp sử dụng phù hợp cho từng mẫu thiết kế.

Các mẫu thiết kế (design patterns) như Singleton, Factory, Observer và Decorator là các kiểu mẫu phổ biến trong lập trình, giúp cải thiện cấu trúc và tái sử dụng code. Dưới đây là mô tả và trường hợp sử dụng phù hợp cho từng mẫu thiết kế:

### Singleton Pattern:

- **Mô tả**: Singleton pattern đảm bảo rằng một lớp chỉ có một thể hiện duy nhất và cung cấp một cách để truy cập nó từ bất kỳ nơi nào trong ứng dụng.
- **Trường hợp sử dụng**: Khi bạn muốn chỉ có một thể hiện duy nhất của một đối tượng trong toàn bộ ứng dụng, như một trình quản lý cấu hình, trình quản lý trạng thái, hoặc trình quản lý kết nối database.

#### Ví dụ:

```javascript
class Singleton {
  constructor() {
    if (!Singleton.instance) {
      this.data = [];
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

const instance1 = new Singleton();
const instance2 = new Singleton();

console.log(instance1 === instance2); // Kết quả: true, chỉ có một thể hiện duy nhất của Singleton
```

### Factory Pattern:

- **Mô tả**: Factory pattern là một cách để tạo ra đối tượng mà không cần phải biết rõ về loại đối tượng cụ thể được tạo ra.
- **Trường hợp sử dụng**: Khi bạn muốn tạo đối tượng theo yêu cầu mà không cần biết chi tiết cụ thể của việc khởi tạo đối tượng.

#### Ví dụ:

```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class CarFactory {
  createCar(make, model) {
    return new Car(make, model);
  }
}

const carFactory = new CarFactory();
const myCar = carFactory.createCar("Toyota", "Corolla");
```

### Observer Pattern:

- **Mô tả**: Observer pattern cho phép một đối tượng theo dõi và thông báo về các thay đổi đối với các đối tượng khác mà nó quan sát.
- **Trường hợp sử dụng**: Khi bạn muốn thông báo về các sự kiện, thay đổi trạng thái từ một đối tượng đến các đối tượng khác mà quan tâm đến sự thay đổi đó.

#### Ví dụ:

```javascript
class Subject {
  constructor() {
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  notify(message) {
    this.observers.forEach((observer) => observer.update(message));
  }
}

class Observer {
  update(message) {
    console.log(`Received message: ${message}`);
  }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notify("Hello!"); // Kết quả: "Received message: Hello!" (được thông báo đến cả hai observer)
```

### Decorator Pattern:

- **Mô tả**: Decorator pattern cho phép thêm các tính năng mới cho đối tượng mà không làm thay đổi cấu trúc ban đầu của nó.
- **Trường hợp sử dụng**: Khi bạn muốn mở rộng hoặc thay đổi tính năng của một đối tượng mà không muốn sửa đổi trực tiếp đối tượng đó.

#### Ví dụ:

```javascript
class Coffee {
  cost() {
    return 5;
  }
}

class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }

  cost() {
    return this.coffee.cost() + 2;
  }
}

const simpleCoffee = new Coffee();
console.log(simpleCoffee.cost()); // Kết quả: 5

const coffeeWithMilk = new MilkDecorator(simpleCoffee);
console.log(coffeeWithMilk.cost()); // Kết quả: 7
```

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể mô tả cách mà mỗi mẫu thiết kế hoạt động và cung cấp ví dụ cụ thể để minh họa sử dụng phù hợp của từng mẫu thiết kế trong JavaScript. Điều này sẽ thể hiện được hiểu biết của bạn về các mẫu thiết kế và cách áp dụng chúng trong thực tế.

---

## Khi nào bạn nên áp dụng Singleton Pattern? Khi nào bạn sử dụng Factory Pattern hoặc Observer Pattern?

Khi nào bạn nên áp dụng Singleton Pattern:

- **Khi chỉ cần một thể hiện duy nhất**: Khi ứng dụng yêu cầu chỉ có duy nhất một thể hiện của một lớp trong toàn bộ vòng đời của nó, ví dụ như một trình quản lý cấu hình, trình quản lý trạng thái, hoặc trình quản lý kết nối database.

Ví dụ: Một Logger để ghi log trong ứng dụng. Chúng ta không muốn tạo nhiều thể hiện của Logger vì nó có thể gây ra xung đột trong việc ghi log.

Khi nào bạn nên sử dụng Factory Pattern:

- **Khi cần tạo đối tượng mà không cần biết rõ về loại đối tượng cụ thể**: Khi cần tạo đối tượng theo yêu cầu mà không cần biết chi tiết cụ thể của việc khởi tạo đối tượng.

Ví dụ: Trong một ứng dụng web, Factory Pattern có thể được sử dụng để tạo các loại khung giao diện người dùng (UI) như buttons, menus mà không cần biết rõ về từng loại button hoặc menu cụ thể được tạo.

Khi nào bạn nên sử dụng Observer Pattern:

- **Khi cần thông báo về các thay đổi từ một đối tượng đến các đối tượng khác**: Khi một đối tượng thay đổi trạng thái và các đối tượng khác quan tâm đến sự thay đổi đó.

Ví dụ: Trong mô hình MVC (Model-View-Controller), Observer Pattern có thể được sử dụng để thông báo về sự thay đổi trong Model tới các View để cập nhật giao diện người dùng theo thời gian thực.

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể nhấn mạnh rằng Singleton Pattern được sử dụng khi chỉ cần một thể hiện duy nhất của một đối tượng, trong khi Factory Pattern được sử dụng khi cần tạo ra các đối tượng mà không cần biết rõ về loại đối tượng cụ thể. Observer Pattern được sử dụng để thông báo về các thay đổi từ một đối tượng đến các đối tượng khác mà quan tâm đến sự thay đổi đó. Đồng thời, bạn cũng có thể cung cấp ví dụ cụ thể để minh họa các trường hợp sử dụng phù hợp của từng mẫu thiết kế trong thực tế.

---
