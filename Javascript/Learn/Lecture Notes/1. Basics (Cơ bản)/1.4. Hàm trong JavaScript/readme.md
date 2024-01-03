Tất nay! Trong JavaScript, hàm là một khối mã lệnh được định nghĩa để thực hiện một nhiệm vụ cụ thể. Định nghĩa hàm bao gồm tên hàm, danh sách các tham số (nếu có), và cơ thể hàm chứa mã lệnh để thực hiện công việc mong muốn.

### Định nghĩa và sử dụng hàm:

#### Định nghĩa hàm:

Cú pháp:

```javascript
function tenHam(param1, param2, ...) {
    // Cơ thể hàm: các lệnh để thực hiện công việc
    return giaTri; // (Nếu muốn trả về một giá trị từ hàm)
}
```

Ví dụ:

```javascript
function sayHello(name) {
  console.log("Xin chào, " + name + "!");
}

function add(a, b) {
  return a + b;
}
```

#### Gọi hàm:

Sau khi hàm được định nghĩa, bạn có thể gọi nó để thực thi mã lệnh bên trong.

Ví dụ:

```javascript
sayHello("Alice"); // Gọi hàm sayHello và truyền tham số "Alice"
let sum = add(5, 3); // Gọi hàm add và lưu kết quả vào biến sum
console.log("Tổng là: " + sum); // Hiển thị kết quả
```

### Truyền tham số và trả về giá trị từ hàm:

#### Truyền tham số:

Khi gọi hàm, bạn có thể truyền giá trị vào hàm thông qua tham số.

Ví dụ:

```javascript
function greet(name) {
  console.log("Xin chào, " + name + "!");
}

greet("Bob"); // Gọi hàm greet và truyền tham số "Bob"
```

#### Trả về giá trị từ hàm:

Một hàm có thể trả về một giá trị bằng từ khóa `return`. Giá trị này có thể được sử dụng ở nơi gọi hàm.

Ví dụ:

```javascript
function multiply(a, b) {
  return a * b;
}

let result = multiply(2, 3); // Gọi hàm multiply và lưu kết quả vào biến result
console.log("Kết quả nhân là: " + result); // Hiển thị kết quả
```

### Ví dụ tổng hợp:

```javascript
function calculateSquareArea(sideLength) {
  return sideLength * sideLength;
}

function printArea(shape, sideLength) {
  let area = calculateSquareArea(sideLength);
  console.log("Diện tích của " + shape + " là: " + area);
}

printArea("hình vuông", 5);
```

Đoạn mã trên định nghĩa hai hàm: `calculateSquareArea` để tính diện tích hình vuông và `printArea` để hiển thị diện tích của hình vuông bằng cách gọi hàm `calculateSquareArea`.

Hàm là một khái niệm quan trọng trong JavaScript, giúp bạn tổ chức và tái sử dụng mã lệnh một cách hiệu quả.
