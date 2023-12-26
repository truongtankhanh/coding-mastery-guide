## Prototypes trong JavaScript là gì? Tại sao chúng quan trọng trong việc xây dựng các đối tượng?

Prototypes trong JavaScript đề cập đến cơ chế kế thừa trong ngôn ngữ này, nơi các đối tượng có thể thừa hưởng các thuộc tính và phương thức từ đối tượng khác. Mỗi đối tượng trong JavaScript đều có một prototype, là một đối tượng khác mà nó "tham chiếu" để kế thừa các thuộc tính và phương thức từ đó.

Prototypes quan trọng trong xây dựng các đối tượng vì chúng giúp tiết kiệm bộ nhớ và tối ưu hóa việc chia sẻ các thuộc tính và phương thức giữa các đối tượng. Thay vì mỗi đối tượng phải lưu trữ các thuộc tính và phương thức của riêng mình, chúng có thể tham chiếu đến một prototype chung để sử dụng các thành phần đã được định nghĩa trước đó.

Ví dụ minh họa:

```javascript
// Tạo một prototype cho các đối tượng Person
const personPrototype = {
  greeting: function () {
    return `Hello, my name is ${this.name}`;
  },
};

// Tạo một đối tượng person sử dụng prototype
const person1 = Object.create(personPrototype);
person1.name = "Alice";

// Sử dụng phương thức từ prototype
console.log(person1.greeting()); // Kết quả: 'Hello, my name is Alice'
```

Trong ví dụ này, `personPrototype` chứa phương thức `greeting`. Thay vì định nghĩa `greeting` trực tiếp trong `person1`, chúng ta tạo `person1` bằng cách sử dụng `Object.create()` và trỏ đối tượng prototype của nó đến `personPrototype`. Nhờ vào đó, `person1` có thể sử dụng `greeting` từ prototype mà không cần phải định nghĩa lại.

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể mô tả rằng prototypes trong JavaScript cho phép đối tượng thừa hưởng các thuộc tính và phương thức từ các đối tượng khác, giúp tối ưu hóa việc chia sẻ và quản lý các thành phần trong code. Ví dụ trên cũng là một cách tốt để minh họa cách sử dụng prototypes trong JavaScript để xây dựng các đối tượng và chia sẻ các phương thức và thuộc tính.

---

## Sự khác biệt giữa prototypal inheritance và classical inheritance trong JavaScript.

Trong JavaScript, có hai phương thức chính để thực hiện kế thừa: Prototypal Inheritance và Classical Inheritance. Đây là hai cách tiếp cận khác nhau để tạo ra sự kế thừa giữa các đối tượng.

**Prototypal Inheritance** là cách tiếp cận mà mỗi đối tượng có một đối tượng prototype, từ đó đối tượng con kế thừa các thuộc tính và phương thức từ prototype của nó. Trong JavaScript, mọi thứ đều là đối tượng và các đối tượng này có thể kế thừa trực tiếp từ các đối tượng khác bằng cách tham chiếu đến prototype của chúng.

```javascript
// Tạo một object prototype
const animal = {
  makeSound: function () {
    console.log("Some sound");
  },
};

// Tạo một object kế thừa từ prototype
const dog = Object.create(animal);
dog.makeSound(); // Kết quả: "Some sound"
```

**Classical Inheritance**, mặc dù không phải là cách tiếp cận tự nhiên trong JavaScript nhưng được mô phỏng thông qua sử dụng hàm constructor và từ khóa `new`. Đây là cách tiếp cận được sử dụng trong nhiều ngôn ngữ lập trình khác. Trong Classical Inheritance, các class được định nghĩa và các đối tượng được tạo ra từ các class này thông qua việc khởi tạo.

```javascript
// Định nghĩa một lớp (class)
class Animal {
  constructor(sound) {
    this.sound = sound;
  }

  makeSound() {
    console.log(this.sound);
  }
}

// Tạo một đối tượng từ lớp (class)
const dog = new Animal("Woof!");
dog.makeSound(); // Kết quả: "Woof!"
```

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể nhấn mạnh rằng Prototypal Inheritance là cách tiếp cận mà mỗi đối tượng có thể kế thừa trực tiếp từ đối tượng prototype của nó. Trong khi đó, Classical Inheritance sử dụng class và constructor để tạo ra các đối tượng và thừa hưởng từ các lớp. Đồng thời, bạn cũng có thể cung cấp ví dụ cụ thể như trên để minh họa cách thức thực hiện kế thừa trong mỗi phương thức này trong JavaScript.

---

## Cách bạn sử dụng prototypes để thực hiện inheritance và sharing behavior trong JavaScript.

Sử dụng prototypes để thực hiện kế thừa và chia sẻ behavior trong JavaScript là một cách mạnh mẽ để tối ưu hóa mã nguồn và tái sử dụng code. Đây là cách tiếp cận cho Prototypal Inheritance trong JavaScript.

### Thực hiện Kế thừa (Inheritance) thông qua Prototypes:

#### Sử dụng Object.create():

- Sử dụng `Object.create()` để tạo một đối tượng mới và chỉ định đối tượng prototype.
- Các thuộc tính và phương thức của prototype sẽ được kế thừa bởi đối tượng mới.

```javascript
// Định nghĩa đối tượng prototype
const animal = {
  makeSound: function () {
    console.log("Some sound");
  },
};

// Tạo đối tượng kế thừa từ prototype
const dog = Object.create(animal);

dog.makeSound(); // Kết quả: "Some sound"
```

#### Sử dụng Constructor Functions và Prototype:

- Tạo một constructor function và định nghĩa các phương thức thông qua prototype của nó.
- Sử dụng từ khóa `new` để tạo ra các đối tượng từ constructor function đó.

```javascript
// Constructor function
function Animal(sound) {
  this.sound = sound;
}

// Thêm phương thức vào prototype của constructor function
Animal.prototype.makeSound = function () {
  console.log(this.sound);
};

// Tạo đối tượng từ constructor function
const dog = new Animal("Woof!");

dog.makeSound(); // Kết quả: "Woof!"
```

### Chia sẻ Behavior (Sharing Behavior) thông qua Prototypes:

#### Sử dụng Prototypes cho nhiều đối tượng:

- Định nghĩa các phương thức trong prototype và các đối tượng có thể chia sẻ các phương thức này.

```javascript
const canEat = {
  eat: function () {
    console.log("Eating...");
  },
};

const canSleep = {
  sleep: function () {
    console.log("Sleeping...");
  },
};

const animal = Object.assign({}, canEat, canSleep);

animal.eat(); // Kết quả: "Eating..."
animal.sleep(); // Kết quả: "Sleeping..."
```

Khi trả lời câu hỏi trong phỏng vấn, bạn có thể giải thích cách sử dụng prototypes để thực hiện kế thừa bằng cách sử dụng `Object.create()` hoặc constructor functions và prototype. Đồng thời, bạn cũng có thể trình bày cách chia sẻ behavior giữa các đối tượng thông qua việc sử dụng prototype trong JavaScript, như ví dụ trên về việc chia sẻ các phương thức giữa các đối tượng.

---
