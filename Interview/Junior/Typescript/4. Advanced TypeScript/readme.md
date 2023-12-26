# Advanced TypeScript:

## 1. Type generics trong TypeScript giúp gì? Ví dụ về cách sử dụng generics.

Type generics trong TypeScript là một tính năng mạnh mẽ cho phép chúng ta tạo ra các hàm, lớp hoặc kiểu dữ liệu có thể làm việc với nhiều loại dữ liệu khác nhau mà không cần xác định trước loại dữ liệu cụ thể. Điều này tạo ra tính linh hoạt và tái sử dụng mã nguồn.

**Phân tích và trình bày:**

1. **Lợi ích của Type Generics:**

   - Cho phép viết mã linh hoạt hơn bằng cách tạo ra các hàm hoặc lớp có thể làm việc với nhiều kiểu dữ liệu khác nhau.
   - Tăng cường tái sử dụng mã nguồn và giảm lặp lại mã khi cần xử lý các loại dữ liệu tương tự nhau.

2. **Ví dụ về cách sử dụng generics:**

   a. **Hàm sắp xếp mảng:**

   ```typescript
   function sortArray<T>(arr: T[]): T[] {
     return arr.sort();
   }

   let numberArray = [3, 1, 2];
   let sortedNumbers = sortArray<number>(numberArray); // Sắp xếp mảng số
   console.log(sortedNumbers); // Kết quả: [1, 2, 3]

   let stringArray = ["c", "a", "b"];
   let sortedStrings = sortArray<string>(stringArray); // Sắp xếp mảng chuỗi
   console.log(sortedStrings); // Kết quả: ['a', 'b', 'c']
   ```

   b. **Lớp Generic:**

   ```typescript
   class Box<T> {
     private content: T;

     constructor(value: T) {
       this.content = value;
     }

     getValue(): T {
       return this.content;
     }
   }

   let numberBox = new Box<number>(10);
   console.log(numberBox.getValue()); // Kết quả: 10

   let stringBox = new Box<string>("Hello");
   console.log(stringBox.getValue()); // Kết quả: 'Hello'
   ```

**Trả lời chuyên nghiệp:**

"Type generics trong TypeScript cho phép chúng ta viết mã linh hoạt có thể làm việc với nhiều loại dữ liệu khác nhau mà không cần xác định trước loại dữ liệu cụ thể. Ví dụ, khi sử dụng generics, chúng ta có thể tạo ra các hàm như `sortArray` có thể sắp xếp mảng số hoặc chuỗi, tùy thuộc vào kiểu dữ liệu được truyền vào. Cũng có thể tạo các lớp như `Box` để lưu trữ và truy cập dữ liệu của bất kỳ loại nào mà không cần định nghĩa trước kiểu dữ liệu cụ thể."

---

## 2. Type inference trong TypeScript là gì? Cách TypeScript suy luận kiểu dữ liệu.

Type inference trong TypeScript là khả năng của trình biên dịch để tự động suy luận hoặc suy diễn kiểu dữ liệu của biến dựa trên giá trị được gán cho biến đó. Điều này giúp giảm sự phụ thuộc vào việc phải xác định kiểu dữ liệu rõ ràng trong mã nguồn, giúp mã trở nên ngắn gọn, dễ đọc và giảm thiểu lỗi do việc xác định kiểu dữ liệu sai.

**Phân tích và trình bày:**

1. **Đặc điểm của Type inference:**

   - TypeScript sử dụng thông tin từ giá trị được gán cho biến để suy luận kiểu dữ liệu của biến đó.
   - Nó hoạt động khi biến được khai báo nhưng không có kiểu dữ liệu được xác định trực tiếp, hoặc khi kiểu dữ liệu được gán không rõ ràng.

2. **Cách TypeScript suy luận kiểu dữ liệu:**
   - TypeScript sử dụng phân tích từ trái sang phải (left-to-right analysis) để suy luận kiểu dữ liệu.
   - Khi biến được khởi tạo mà không có kiểu dữ liệu, TypeScript sẽ suy luận kiểu dữ liệu dựa trên giá trị được gán.
   - Khi kiểu dữ liệu được gán không rõ ràng, TypeScript cũng có thể suy luận kiểu dữ liệu dựa trên các phép toán hoặc phương thức được sử dụng với biến đó.

**Ví dụ:**

```typescript
let numberVar = 10; // TypeScript suy luận kiểu dữ liệu của numberVar là number
let stringVar = "Hello"; // TypeScript suy luận kiểu dữ liệu của stringVar là string

function add(a, b) {
  return a + b;
}

let result = add(5, 10); // TypeScript suy luận kiểu dữ liệu của result là number
```

**Trả lời chuyên nghiệp:**

"Type inference trong TypeScript là khả năng của trình biên dịch tự động suy luận hoặc suy diễn kiểu dữ liệu của biến dựa trên giá trị được gán cho biến đó. Nó giúp viết mã ngắn gọn hơn và dễ đọc hơn bằng cách giảm sự phụ thuộc vào việc xác định kiểu dữ liệu rõ ràng. TypeScript sử dụng phân tích từ trái sang phải để suy luận kiểu dữ liệu, dựa trên giá trị được gán hoặc các phép toán được thực hiện với biến đó."

---

## 3. Tại sao chúng ta nên sử dụng 'Enums' trong TypeScript? Ví dụ minh họa.

Sử dụng Enums trong TypeScript giúp tạo ra một nhóm các hằng số có ý nghĩa, rõ ràng và dễ hiểu trong mã nguồn. Điều này giúp tăng tính rõ ràng và bảo trì mã, đồng thời giúp tránh lỗi khi sử dụng các giá trị cố định trong mã nguồn.

**Phân tích và trình bày:**

1. **Lợi ích của Enums trong TypeScript:**

   - **Rõ ràng và dễ đọc:** Enums cho phép đặt tên cho các giá trị, giúp mã nguồn trở nên rõ ràng hơn khi sử dụng các hằng số.
   - **Giúp tránh lỗi:** Enums giúp tránh lỗi do việc sử dụng các giá trị không đúng với mục đích ban đầu.
   - **Tăng tính bảo trì:** Nếu cần thêm giá trị mới vào danh sách, chỉ cần cập nhật Enum mà không cần sửa đổi nhiều mã nguồn khác.

2. **Ví dụ minh họa:**

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

function move(direction: Direction) {
  if (direction === Direction.Up) {
    console.log("Move up");
  } else if (direction === Direction.Down) {
    console.log("Move down");
  } else if (direction === Direction.Left) {
    console.log("Move left");
  } else if (direction === Direction.Right) {
    console.log("Move right");
  }
}

move(Direction.Up); // Kết quả: 'Move up'
move(Direction.Left); // Kết quả: 'Move left'
```

**Trả lời chuyên nghiệp:**

"Sử dụng Enums trong TypeScript mang lại lợi ích rõ ràng và dễ đọc trong mã nguồn. Enums giúp tránh lỗi khi sử dụng các giá trị cố định và tăng tính bảo trì của mã nguồn. Ví dụ, trong Enum `Direction`, chúng ta có các hằng số `Up`, `Down`, `Left`, và `Right`, khi sử dụng Enum này trong hàm `move`, chúng ta có thể gọi và kiểm tra hướng di chuyển một cách rõ ràng và an toàn."

---
