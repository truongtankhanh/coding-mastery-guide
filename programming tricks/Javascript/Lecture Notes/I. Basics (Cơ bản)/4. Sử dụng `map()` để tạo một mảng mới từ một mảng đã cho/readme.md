## Sử dụng `map()` để tạo một mảng mới từ một mảng đã cho

**Khái niệm:**

`map()` là phương thức có sẵn của mảng trong JavaScript, cho phép tạo một mảng mới từ một mảng đã cho bằng cách áp dụng một hàm cho mỗi phần tử của mảng ban đầu.

**Ngữ cảnh sử dụng:**

`map()` thường được sử dụng trong các trường hợp sau:

- Chuyển đổi dữ liệu của các phần tử trong mảng
- Lọc các phần tử trong mảng dựa trên một điều kiện
- Tạo một mảng mới từ một mảng hiện có với cấu trúc khác

**Cách sử dụng:**

Cú pháp cơ bản của `map()` như sau:

```javascript
const newArray = array.map(callback);
```

- `array`: Mảng cần lặp qua
- `callback`: Hàm được gọi cho mỗi phần tử trong mảng

Hàm `callback` nhận vào ba tham số:

- `value`: Giá trị của phần tử hiện tại
- `index`: Vị trí của phần tử hiện tại trong mảng
- `array`: Mảng ban đầu

Hàm `callback` cần trả về giá trị mới cho phần tử tương ứng trong mảng mới.

**Ví dụ:**

```javascript
const numbers = [1, 2, 3, 4, 5];

// Tạo một mảng mới với các giá trị gấp đôi

const doubledNumbers = numbers.map((number) => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Lọc các số chẵn

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4]

// Tạo một mảng mới với các phần tử là chuỗi

const stringNumbers = numbers.map((number) => number.toString());

console.log(stringNumbers); // ["1", "2", "3", "4", "5"]
```

**Lưu ý:**

- `map()` không thay đổi mảng ban đầu.
- Nên sử dụng `map()` thay vì vòng lặp for thông thường để viết mã ngắn gọn và dễ đọc hơn.

**Kết luận:**

`map()` là một phương thức hữu ích để tạo một mảng mới từ một mảng đã cho bằng cách áp dụng một hàm cho mỗi phần tử. Sử dụng `map()` giúp viết mã JavaScript ngắn gọn, dễ đọc và dễ hiểu hơn.
