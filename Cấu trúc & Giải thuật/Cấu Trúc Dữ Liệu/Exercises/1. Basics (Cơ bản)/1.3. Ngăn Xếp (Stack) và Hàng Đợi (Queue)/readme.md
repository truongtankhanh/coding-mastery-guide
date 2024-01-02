Dưới đây là một số bài tập cơ bản liên quan đến ngăn xếp (Stack) và hàng đợi (Queue):

# Ngăn Xếp (Stack):

## 1. **Cài đặt ngăn xếp đơn giản:**.

Vâng, để giải quyết bài toán này, chúng ta cần xây dựng một cấu trúc dữ liệu ngăn xếp (stack) đơn giản với hai hoạt động chính: đẩy (push) và lấy phần tử ra (pop).

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các hoạt động trên ngăn xếp như đẩy và lấy phần tử ra.

**Output:**

- Kết quả của các hoạt động trên ngăn xếp, ví dụ: phần tử được lấy ra sau mỗi lệnh pop.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Ngăn xếp (stack) thường được sử dụng trong nhiều bối cảnh, chẳng hạn như khi bạn cần lưu trữ dữ liệu theo cấu trúc "vào trước ra trước". Ví dụ, khi bạn thực hiện việc lưu trữ lịch sử các hoạt động trong một ứng dụng, duy trì vị trí của trang web trong trình duyệt, hoặc thực hiện việc gọi lại các hành động đã thực hiện.

### Cách giải và mã nguồn (C++):

Dưới đây là một cài đặt ngăn xếp đơn giản sử dụng ngôn ngữ C++:

```cpp
#include <iostream>
#define MAX_SIZE 100

class Stack {
    int top;
public:
    int a[MAX_SIZE]; // Maximum size of Stack

    Stack() { top = -1; }
    bool push(int x);
    int pop();
    bool isEmpty();
};

bool Stack::push(int x) {
    if (top >= (MAX_SIZE - 1)) {
        std::cout << "Stack Overflow";
        return false;
    }
    else {
        a[++top] = x;
        std::cout << x << " pushed into stack\n";
        return true;
    }
}

int Stack::pop() {
    if (top < 0) {
        std::cout << "Stack Underflow";
        return 0;
    }
    else {
        int x = a[top--];
        return x;
    }
}

bool Stack::isEmpty() {
    return (top < 0);
}

int main() {
    Stack stack;
    stack.push(10);
    stack.push(20);
    stack.push(30);

    std::cout << stack.pop() << " popped from stack\n";
    std::cout << stack.pop() << " popped from stack\n";

    return 0;
}
```

Đây là một ví dụ cơ bản về ngăn xếp trong C++, thực hiện các hoạt động push và pop. Bạn có thể thấy cách hoạt động của ngăn xếp thông qua việc đưa phần tử vào và lấy ra từ đỉnh của ngăn xếp.

### Cách giải và mã nguồn (JavaScript/TypeScript):

Dưới đây là một cài đặt ngăn xếp đơn giản sử dụng JavaScript/TypeScript:

#### JavaScript:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    console.log(element + " pushed into stack");
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop() + " popped from stack");
console.log(stack.pop() + " popped from stack");
```

#### TypeScript:

```typescript
class Stack {
  private items: any[];

  constructor() {
    this.items = [];
  }

  push(element: any) {
    this.items.push(element);
    console.log(element + " pushed into stack");
  }

  pop(): any {
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return null;
    }
    return this.items.pop();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop() + " popped from stack");
console.log(stack.pop() + " popped from stack");
```

Mã nguồn trên đây triển khai một ngăn xếp và thực hiện các hoạt động cơ bản như đẩy (push) và lấy phần tử ra (pop). Bạn có thể sử dụng mã này để hiểu cách mà ngăn xếp hoạt động trong các ngôn ngữ khác nhau.

---

## 2. **Kiểm tra xem ngăn xếp có rỗng hay không:**

Tuyệt vời, bài toán yêu cầu viết một hàm để kiểm tra xem ngăn xếp có rỗng không. Đây là phân tích rõ yêu cầu bài toán:

### Yêu cầu bài toán (Input/Output):

**Input:**

- Trạng thái của ngăn xếp cần kiểm tra.

**Output:**

- Giá trị boolean: true nếu ngăn xếp rỗng và false nếu không.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc kiểm tra xem ngăn xếp có rỗng hay không là một hoạt động cần thiết khi thực hiện các thao tác trên ngăn xếp. Trong nhiều trường hợp, chúng ta cần kiểm tra xem ngăn xếp có chứa phần tử nào hay không trước khi thực hiện các hoạt động pop hoặc lấy phần tử ra.

### Cách giải và mã nguồn (C++):

Dưới đây là cách triển khai kiểm tra xem ngăn xếp có rỗng hay không bằng C++:

```cpp
#include <iostream>
#define MAX_SIZE 100

class Stack {
    int top;
public:
    int a[MAX_SIZE]; // Maximum size of Stack

    Stack() { top = -1; }
    bool isEmpty();
};

bool Stack::isEmpty() {
    return (top < 0);
}

int main() {
    Stack stack;
    std::cout << std::boolalpha; // Để in ra giá trị boolean là true/false

    std::cout << "Is stack empty? " << stack.isEmpty() << std::endl;

    stack.push(10);
    std::cout << "Is stack empty? " << stack.isEmpty() << std::endl;

    return 0;
}
```

### JavaScript/TypeScript:

#### JavaScript:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
console.log("Is stack empty? " + stack.isEmpty());

stack.push(10);
console.log("Is stack empty? " + stack.isEmpty());
```

#### TypeScript:

```typescript
class Stack {
  private items: any[];

  constructor() {
    this.items = [];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

let stack = new Stack();
console.log("Is stack empty? " + stack.isEmpty());

stack.push(10);
console.log("Is stack empty? " + stack.isEmpty());
```

Mã nguồn trên cài đặt một hàm `isEmpty()` trong ngăn xếp để kiểm tra xem ngăn xếp có rỗng hay không. Bạn có thể sử dụng hàm này để kiểm tra trạng thái của ngăn xếp trước khi thực hiện các hoạt động khác.

---

## 3. **Lấy phần tử trên cùng mà không loại bỏ:**

Bài toán yêu cầu viết một hàm để lấy giá trị của phần tử đầu ngăn xếp mà không loại bỏ nó khỏi ngăn xếp. Đây là phân tích rõ yêu cầu bài toán:

### Yêu cầu bài toán (Input/Output):

**Input:**

- Trạng thái hiện tại của ngăn xếp.

**Output:**

- Giá trị của phần tử đầu ngăn xếp mà không loại bỏ nó.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc lấy giá trị của phần tử trên cùng mà không loại bỏ nó từ ngăn xếp thường được sử dụng khi bạn muốn xem giá trị của phần tử đỉnh ngăn xếp mà không thay đổi trạng thái của ngăn xếp. Điều này hữu ích khi bạn cần kiểm tra giá trị của phần tử đỉnh trước khi thực hiện các thao tác khác.

### Cách giải và mã nguồn (C++):

Dưới đây là cách triển khai lấy giá trị của phần tử đầu ngăn xếp mà không loại bỏ nó bằng C++:

```cpp
#include <iostream>
#define MAX_SIZE 100

class Stack {
    int top;
public:
    int a[MAX_SIZE]; // Maximum size of Stack

    Stack() { top = -1; }
    int peek();
    bool isEmpty();
};

int Stack::peek() {
    if (top < 0) {
        std::cout << "Stack is Empty";
        return 0;
    }
    else {
        return a[top];
    }
}

bool Stack::isEmpty() {
    return (top < 0);
}

int main() {
    Stack stack;

    std::cout << "Is stack empty? " << stack.isEmpty() << std::endl;

    stack.push(10);
    stack.push(20);
    stack.push(30);

    std::cout << "Top element of stack: " << stack.peek() << std::endl;

    return 0;
}
```

### JavaScript/TypeScript:

#### JavaScript:

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  peek() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

let stack = new Stack();
console.log("Is stack empty? " + stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element of stack: " + stack.peek());
```

#### TypeScript:

```typescript
class Stack {
  private items: any[];

  constructor() {
    this.items = [];
  }

  peek(): any {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

let stack = new Stack();
console.log("Is stack empty? " + stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log("Top element of stack: " + stack.peek());
```

Mã nguồn trên cài đặt một hàm `peek()` trong ngăn xếp để lấy giá trị của phần tử đầu ngăn xếp mà không loại bỏ nó. Bạn có thể sử dụng hàm này để kiểm tra giá trị của phần tử đỉnh mà không thay đổi trạng thái của ngăn xếp.

---

## 4. **Đảo ngược ngăn xếp:**

Để đảo ngược thứ tự các phần tử trong ngăn xếp mà không sử dụng ngăn xếp phụ, chúng ta có thể sử dụng kỹ thuật đệ quy hoặc sử dụng một biến tạm để lưu trữ giá trị.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Trạng thái hiện tại của ngăn xếp.

**Output:**

- Ngăn xếp sau khi đã đảo ngược thứ tự các phần tử.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc đảo ngược ngăn xếp có thể hữu ích khi cần truy xuất dữ liệu theo thứ tự ngược lại so với trình tự ban đầu. Điều này có thể được áp dụng trong nhiều tình huống, chẳng hạn như khi cần in ra dữ liệu theo thứ tự ngược lại so với khi chúng được thêm vào ngăn xếp.

### Cách giải và mã nguồn (C++):

Dưới đây là cách triển khai đảo ngược thứ tự các phần tử trong ngăn xếp bằng C++:

```cpp
#include <iostream>
#define MAX_SIZE 100

class Stack {
    int top;
public:
    int a[MAX_SIZE]; // Maximum size of Stack

    Stack() { top = -1; }
    void reverseStack();
    bool isEmpty();
    void push(int x);
    int pop();
};

void Stack::push(int x) {
    if (top >= (MAX_SIZE - 1)) {
        std::cout << "Stack Overflow";
        return;
    }
    else {
        a[++top] = x;
    }
}

int Stack::pop() {
    if (top < 0) {
        std::cout << "Stack Underflow";
        return 0;
    }
    else {
        return a[top--];
    }
}

bool Stack::isEmpty() {
    return (top < 0);
}

void Stack::reverseStack() {
    if (isEmpty()) {
        return;
    }
    int temp = pop();
    reverseStack();
    push(temp);
}

int main() {
    Stack stack;
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    std::cout << "Original Stack: ";
    while (!stack.isEmpty()) {
        std::cout << stack.pop() << " ";
    }

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.reverseStack();

    std::cout << "\nReversed Stack: ";
    while (!stack.isEmpty()) {
        std::cout << stack.pop() << " ";
    }

    return 0;
}
```

Mã nguồn trên triển khai một hàm `reverseStack()` trong ngăn xếp để đảo ngược thứ tự các phần tử. Hàm này sử dụng đệ quy để lấy phần tử đỉnh ra khỏi ngăn xếp và đẩy lại vào ngăn xếp khi đảo ngược.

---

## 5. **Kiểm tra chuỗi ngoặc đúng:**

Sử dụng ngăn xếp để kiểm tra xem một chuỗi ngoặc mở và đóng có đúng hay không (Ví dụ: `"{[()]}"` là chuỗi ngoặc đúng, `"{[(])}"` là chuỗi ngoặc không đúng).

Bài toán này yêu cầu kiểm tra tính đúng đắn của việc sử dụng ngoặc mở và đóng trong chuỗi. Để giải quyết bài toán này, chúng ta có thể sử dụng ngăn xếp để kiểm tra tính hợp lệ của các cặp ngoặc.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Chuỗi chứa các ký tự ngoặc mở và đóng.

**Output:**

- Giá trị boolean: true nếu chuỗi ngoặc đúng và false nếu không.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc sử dụng ngăn xếp để kiểm tra tính đúng đắn của các cặp ngoặc là một ứng dụng phổ biến của ngăn xếp. Khi duyệt qua chuỗi, chúng ta có thể sử dụng ngăn xếp để theo dõi việc mở và đóng các ngoặc và kiểm tra tính hợp lệ của chúng.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai kiểm tra chuỗi ngoặc đúng bằng JavaScript:

```javascript
function isValidParentheses(s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in map) {
      stack.push(char);
    } else {
      const top = stack.pop();
      if (char !== map[top]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// Test cases
console.log(isValidParentheses("{[()]}")); // Output: true
console.log(isValidParentheses("{[(])}")); // Output: false
```

Hàm `isValidParentheses` sử dụng một ngăn xếp để theo dõi các ký tự ngoặc mở và kiểm tra tính đúng đắn của chuỗi ngoặc. Nó duyệt qua chuỗi và thực hiện so sánh giữa các cặp ngoặc để xác định tính hợp lệ của chúng. Nếu tất cả các cặp ngoặc mở và đóng được sử dụng đúng đắn, hàm sẽ trả về true, ngược lại sẽ trả về false.

---

# Hàng Đợi (Queue):

## 1. **Cài đặt hàng đợi đơn giản:**

Tất nhiên, để giải quyết bài toán này, chúng ta cần xây dựng một cấu trúc dữ liệu hàng đợi (queue) đơn giản có thể thực hiện hai hoạt động chính: thêm vào cuối hàng đợi (enqueue) và lấy phần tử ra khỏi đầu hàng đợi (dequeue).

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các hoạt động trên hàng đợi như enqueue (thêm vào cuối) và dequeue (lấy phần tử ra khỏi đầu).

**Output:**

- Kết quả của các hoạt động trên hàng đợi, ví dụ: phần tử được lấy ra sau mỗi lệnh dequeue.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Hàng đợi thường được sử dụng trong nhiều tình huống thực tế, như trong việc quản lý các công việc đợi lần lượt để được thực hiện (như hàng đợi ở cửa quầy), quản lý các tác vụ đang chờ xử lý trong hệ thống, và nhiều ứng dụng khác cần tuân thủ nguyên tắc "vào trước ra trước".

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai cấu trúc hàng đợi đơn giản bằng JavaScript:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Test cases
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
```

Lớp `Queue` triển khai một cấu trúc dữ liệu hàng đợi đơn giản với các phương thức enqueue và dequeue. Phương thức enqueue thêm một phần tử vào cuối hàng đợi, trong khi dequeue lấy phần tử ra khỏi đầu hàng đợi. Phương thức isEmpty kiểm tra xem hàng đợi có trống hay không.

---

## 2. **Kiểm tra xem hàng đợi có rỗng hay không:**

Vâng, bài toán yêu cầu viết một hàm để kiểm tra xem hàng đợi có rỗng hay không. Đây là phân tích rõ yêu cầu bài toán:

### Yêu cầu bài toán (Input/Output):

**Input:**

- Trạng thái của hàng đợi cần kiểm tra.

**Output:**

- Giá trị boolean: true nếu hàng đợi rỗng và false nếu không.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc kiểm tra xem hàng đợi có rỗng hay không là một hoạt động quan trọng khi thực hiện các thao tác trên hàng đợi. Điều này có thể được sử dụng để kiểm tra trạng thái của hàng đợi trước khi thực hiện các thao tác enqueue hoặc dequeue.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai kiểm tra xem hàng đợi có rỗng hay không bằng JavaScript:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Test cases
let queue = new Queue();
console.log(queue.isEmpty()); // Output: true

queue.enqueue(1);
console.log(queue.isEmpty()); // Output: false

queue.dequeue();
console.log(queue.isEmpty()); // Output: true
```

Trong đoạn mã trên, hàm `isEmpty()` kiểm tra xem hàng đợi có rỗng hay không bằng cách kiểm tra độ dài của mảng lưu trữ phần tử trong hàng đợi. Nếu độ dài là 0, nghĩa là hàng đợi đang rỗng, và hàm sẽ trả về true, ngược lại sẽ trả về false.

---

## 3. **Lấy phần tử ở đầu hàng đợi mà không loại bỏ:**

Để lấy giá trị của phần tử ở đầu hàng đợi mà không loại bỏ nó, chúng ta cần cung cấp một phương thức trong cấu trúc dữ liệu hàng đợi để chỉ đơn giản lấy giá trị của phần tử đầu mà không thực hiện thao tác dequeue.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Trạng thái hiện tại của hàng đợi.

**Output:**

- Giá trị của phần tử ở đầu hàng đợi mà không loại bỏ nó.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc lấy giá trị của phần tử ở đầu hàng đợi mà không loại bỏ nó thường được sử dụng khi cần xem giá trị của phần tử tiếp theo sẽ được lấy ra khỏi hàng đợi mà không làm thay đổi hàng đợi hiện tại.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai lấy giá trị của phần tử ở đầu hàng đợi mà không loại bỏ nó bằng JavaScript:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Test case
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.front()); // Output: 1
console.log(queue.dequeue()); // Output: 1
console.log(queue.front()); // Output: 2
```

Trong mã trên, hàm `front()` được thêm vào cấu trúc dữ liệu hàng đợi để lấy giá trị của phần tử ở đầu hàng đợi mà không loại bỏ nó. Hàm này kiểm tra xem hàng đợi có rỗng hay không và trả về giá trị của phần tử đầu nếu hàng đợi không rỗng.

---

## 4. **Đảo ngược hàng đợi:**

Bài toán yêu cầu viết một hàm để đảo ngược thứ tự các phần tử trong hàng đợi mà không sử dụng hàng đợi phụ. Điều này có thể được thực hiện bằng cách sử dụng một ngăn xếp phụ để đảo ngược thứ tự, nhưng ở đây chúng ta sẽ cố gắng giải quyết vấn đề này mà không sử dụng bất kỳ cấu trúc dữ liệu bổ sung nào.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Trạng thái hiện tại của hàng đợi.

**Output:**

- Hàng đợi sau khi đã đảo ngược thứ tự các phần tử.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc đảo ngược thứ tự các phần tử trong hàng đợi có thể hữu ích khi cần truy xuất dữ liệu theo thứ tự ngược lại so với trình tự ban đầu.

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai đảo ngược thứ tự các phần tử trong hàng đợi mà không sử dụng hàng đợi phụ bằng JavaScript:

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  reverseQueue() {
    if (this.isEmpty()) {
      return;
    }

    const front = this.dequeue();
    this.reverseQueue();
    this.enqueue(front);
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// Test case
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);

console.log("Original Queue:", queue.items);
queue.reverseQueue();
console.log("Reversed Queue:", queue.items);
```

Trong mã trên, hàm `reverseQueue()` sử dụng đệ quy để đảo ngược hàng đợi. Nó lấy một phần tử từ đầu hàng đợi, gọi đệ quy để đảo ngược phần còn lại của hàng đợi, và sau đó đưa phần tử đã lấy ra vào cuối hàng đợi. Quá trình này lặp lại cho đến khi hàng đợi trở thành rỗng và tất cả các phần tử đã được đảo ngược thứ tự.

---

## 5. **Thực hiện hàng đợi sử dụng hai ngăn xếp:**

Thực hiện hàng đợi (queue) bằng cách sử dụng hai ngăn xếp (stack) là một cách tiếp cận phổ biến để tái tạo tính chất hàng đợi (queue) trong cấu trúc dữ liệu ngăn xếp (stack). Bài toán yêu cầu cài đặt các hoạt động enqueue và dequeue trong hàng đợi bằng hai ngăn xếp.

### Yêu cầu bài toán (Input/Output):

**Input:**

- Các hoạt động enqueue (thêm vào cuối) và dequeue (lấy phần tử ra khỏi đầu) trong hàng đợi.

**Output:**

- Kết quả của các hoạt động enqueue và dequeue trong hàng đợi.

### Ngữ cảnh áp dụng cấu trúc dữ liệu này:

Việc thực hiện hàng đợi bằng hai ngăn xếp có thể được sử dụng để mô phỏng hàng đợi thông thường. Một ngăn xếp được sử dụng để thêm phần tử vào hàng đợi (enqueue), trong khi ngăn xếp còn lại được sử dụng để lấy phần tử ra khỏi đầu hàng đợi (dequeue).

### Cách giải và mã nguồn (JavaScript):

Dưới đây là cách triển khai hàng đợi bằng hai ngăn xếp bằng JavaScript:

```javascript
class QueueUsingStack {
  constructor() {
    this.inStack = [];
    this.outStack = [];
  }

  enqueue(element) {
    this.inStack.push(element);
  }

  dequeue() {
    if (this.outStack.length === 0) {
      if (this.inStack.length === 0) {
        return "Queue is empty";
      }
      while (this.inStack.length > 0) {
        this.outStack.push(this.inStack.pop());
      }
    }
    return this.outStack.pop();
  }

  isEmpty() {
    return this.inStack.length === 0 && this.outStack.length === 0;
  }
}

// Test case
let queue = new QueueUsingStack();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
```

Trong mã trên, `inStack` được sử dụng để thêm phần tử vào hàng đợi (enqueue) và `outStack` được sử dụng để lấy phần tử ra khỏi đầu hàng đợi (dequeue). Khi cần lấy phần tử ra khỏi đầu hàng đợi, nếu `outStack` rỗng, chúng ta sẽ chuyển tất cả phần tử từ `inStack` sang `outStack` để thực hiện hoạt động dequeue theo nguyên tắc "vào trước, ra trước".

---

Những bài tập này sẽ giúp bạn hiểu rõ hơn về cách thức hoạt động của ngăn xếp và hàng đợi cũng như cách triển khai các chức năng cơ bản của chúng.
