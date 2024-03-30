1. **Sử dụng toán tử ternary để viết mã ngắn gọn**:

   ```javascript
   // Thay vì
   if (condition) {
     x = 10;
   } else {
     x = 20;
   }
   // Bạn có thể viết ngắn gọn hơn như sau
   x = condition ? 10 : 20;
   ```

2. **Dùng `===` thay vì `==`**:

   ```javascript
   // == so sánh giá trị, có thể dẫn đến kết quả không mong muốn
   if (x == 5) {
     // Do something
   }

   // === so sánh giá trị và kiểu dữ liệu, giúp tránh các lỗi không mong muốn
   if (x === 5) {
     // Do something
   }
   ```

3. **Sử dụng `forEach()` để lặp qua các phần tử trong mảng**:

   ```javascript
   const array = [1, 2, 3, 4, 5];
   array.forEach((item) => {
     console.log(item);
   });
   ```

4. **Sử dụng `map()` để tạo một mảng mới từ một mảng đã cho**:

   ```javascript
   const array = [1, 2, 3, 4, 5];
   const newArray = array.map((item) => item * 2);
   console.log(newArray); // [2, 4, 6, 8, 10]
   ```

5. **Sử dụng `filter()` để lọc các phần tử trong mảng**:

   ```javascript
   const array = [1, 2, 3, 4, 5];
   const filteredArray = array.filter((item) => item > 2);
   console.log(filteredArray); // [3, 4, 5]
   ```

6. **Sử dụng `spread operator (...)` để sao chép mảng hoặc kết hợp mảng**:

   ```javascript
   const array1 = [1, 2, 3];
   const array2 = [4, 5, 6];
   const combinedArray = [...array1, ...array2];
   console.log(combinedArray); // [1, 2, 3, 4, 5, 6]
   ```

7. **Sử dụng `destructuring` để trích xuất giá trị từ mảng hoặc object**:

   ```javascript
   // Trích xuất giá trị từ mảng
   const [x, y] = [1, 2];
   console.log(x); // 1
   console.log(y); // 2

   // Trích xuất giá trị từ object
   const person = { name: "John", age: 30 };
   const { name, age } = person;
   console.log(name); // John
   console.log(age); // 30
   ```

8. **Sử dụng template literals để tạo chuỗi một cách dễ đọc**:

   ```javascript
   const name = "John";
   const age = 30;
   console.log(`My name is ${name} and I am ${age} years old.`);
   ```

9. **Sử dụng `const` và `let` thay vì `var` để khai báo biến**:

   ```javascript
   // var
   var x = 10;
   // const
   const y = 20;
   // let
   let z = 30;
   ```

10. **Sử dụng Arrow Functions để viết mã ngắn gọn hơn**:

    ```javascript
    // Function truyền thống
    function add(a, b) {
      return a + b;
    }

    // Arrow function
    const add = (a, b) => a + b;
    ```

11. **Sử dụng `Object.keys()` để lặp qua các key của một object**:

    ```javascript
    const obj = { a: 1, b: 2, c: 3 };
    Object.keys(obj).forEach((key) => {
      console.log(key); // a, b, c
      console.log(obj[key]); // 1, 2, 3
    });
    ```

12. **Sử dụng `Array.from()` để chuyển đổi một đối tượng có "array-like" thành một mảng**:

    ```javascript
    const arrayLike = document.querySelectorAll(".item");
    const array = Array.from(arrayLike);
    ```

13. **Sử dụng `localStorage` hoặc `sessionStorage` để lưu trữ dữ liệu cục bộ trên trình duyệt**:

    ```javascript
    // Lưu trữ dữ liệu
    localStorage.setItem("key", "value");
    // Lấy dữ liệu
    const value = localStorage.getItem("key");
    ```

14. **Sử dụng `async/await` để xử lý các hàm bất đồng bộ một cách dễ đọc hơn**:

    ```javascript
    async function fetchData() {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      return data;
    }
    ```

15. **Sử dụng `Array.reduce()` để tính tổng hoặc thực hiện các phép tính khác trên mảng**:

    ```javascript
    const array = [1, 2, 3, 4, 5];
    const sum = array.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    console.log(sum); // 15
    ```

16. **Sử dụng `setTimeout()` hoặc `setInterval()` để thực hiện các hành động theo thời gian**:

    ```javascript
    // setTimeout
    setTimeout(() => {
      console.log("Delayed message");
    }, 2000); // Hiển thị 'Delayed message' sau 2 giây

    // setInterval
    const intervalId = setInterval(() => {
      console.log("Repeated message");
    }, 1000); // Hiển thị 'Repeated message' mỗi giây
    ```

17. **Sử dụng `Promise.all()` để xử lý nhiều promise đồng thời**:

    ```javascript
    const promise1 = Promise.resolve(1);
    const promise2 = Promise.resolve(2);

    Promise.all([promise1, promise2]).then(([result1, result2]) => {
      console.log(result1 + result2); // 3
    });
    ```

18. **Sử dụng `Math` object để thực hiện các phép toán toán học**:

    ```javascript
    console.log(Math.max(1, 2, 3)); // 3
    console.log(Math.min(1, 2, 3)); // 1
    console.log(Math.round(4.7)); // 5
    ```

19. **Sử dụng `JSON.stringify()` và `JSON.parse()` để chuyển đổi giữa chuỗi JSON và object JavaScript**:

    ```javascript
    const obj = { name: "John", age: 30 };
    const jsonString = JSON.stringify(obj);
    console.log(jsonString); // '{"name":"John","age":30}'

    const parsedObj = JSON.parse(jsonString);
    console.log(parsedObj); // { name: 'John', age: 30 }
    ```

20. **Sử dụng `RegExp` để thực hiện các phép kiểm tra và thay thế trong chuỗi**:

    ```javascript
    const str = "Hello, world!";
    const regex = /world/;
    console.log(regex.test(str)); // true
    console.log(str.replace(regex, "universe")); // Hello, universe!
    ```

21. **Sử dụng `Array.some()` hoặc `Array.every()` để kiểm tra các phần tử trong mảng**:

    ```javascript
    const array = [1, 2, 3, 4, 5];
    console.log(array.some((item) => item > 3)); // true
    console.log(array.every((item) => item > 0)); // true
    ```

22. **Sử dụng `Array.sort()` để sắp xếp các phần tử trong mảng**:

    ```javascript
    const array = [3, 1, 2, 5, 4];
    array.sort((a, b) => a - b);
    console.log(array); // [1, 2, 3, 4, 5]
    ```

23. **Sử dụng Optional Chaining (?.) để tránh lỗi khi truy cập vào các thuộc tính của object có thể là null hoặc undefined**:

    ```javascript
    const obj = {
      property1: {
        property2: {
          property3: "value",
        },
      },
    };

    console.log(obj?.property1?.property2?.property3); // 'value'
    console.log(obj?.property1?.nonExistentProperty?.property3); // undefined
    ```

24. **Sử dụng Nullish Coalescing Operator (??) để mặc định giá trị khi biến là null hoặc undefined**:

    ```javascript
    const defaultValue = "default";
    let x;
    console.log(x ?? defaultValue); // 'default'

    x = "custom";
    console.log(x ?? defaultValue); // 'custom'

    x = null;
    console.log(x ?? defaultValue); // 'default'
    ```

25. **Sử dụng Array Destructuring để tráo đổi giá trị giữa hai biến một cách dễ dàng**:

    ```javascript
    let a = 1;
    let b = 2;

    [a, b] = [b, a];

    console.log(a); // 2
    console.log(b); // 1
    ```

26. **Sử dụng `for...of` để lặp qua các phần tử của một mảng hoặc iterable**:

    ```javascript
    const array = ["a", "b", "c"];
    for (const item of array) {
      console.log(item);
    }
    ```

27. **Sử dụng `Array.slice()` để sao chép một mảng hoặc cắt mảng theo các chỉ số đã cho**:

    ```javascript
    const array = [1, 2, 3, 4, 5];
    const copyArray = array.slice();
    const slicedArray = array.slice(1, 3); // lấy từ index 1 đến index 2

    console.log(copyArray); // [1, 2, 3, 4, 5]
    console.log(slicedArray); // [2, 3]
    ```

28. **Sử dụng `Array.splice()` để thay đổi nội dung của mảng bằng cách xóa hoặc thêm các phần tử**:

    ```javascript
    const array = [1, 2, 3, 4, 5];
    array.splice(2, 1); // xóa 1 phần tử từ index 2
    console.log(array); // [1, 2, 4, 5]

    array.splice(2, 0, 6); // thêm phần tử 6 vào index 2
    console.log(array); // [1, 2, 6, 4, 5]
    ```

29. **Sử dụng `Array.from()` cùng với hàm map để tạo một mảng mới từ một mảng hoặc iterable khác**:

    ```javascript
    const iterable = "hello";
    const newArray = Array.from(iterable, (letter) => letter.toUpperCase());
    console.log(newArray); // ['H', 'E', 'L', 'L', 'O']
    ```

30. **Sử dụng `Array.isArray()` để kiểm tra một biến có phải là một mảng hay không**:

    ```javascript
    const array = [1, 2, 3];
    console.log(Array.isArray(array)); // true

    const notArray = "string";
    console.log(Array.isArray(notArray)); // false
    ```
