## Enums: Sử dụng enums để định nghĩa một tập hợp các hằng số có ý nghĩa.

Enums trong TypeScript cho phép định nghĩa một tập hợp các hằng số có ý nghĩa và gán cho chúng các giá trị số hoặc chuỗi. Enums giúp làm cho mã nguồn dễ đọc hơn, rõ ràng hơn khi sử dụng các giá trị hằng số trong code.

### Khái niệm:

Enums là một tập hợp các hằng số có ý nghĩa, chúng có thể được gán giá trị là số hoặc chuỗi.

### Ngữ cảnh:

Enums thường được sử dụng để định nghĩa các tập hợp các giá trị cố định, ví dụ như các trạng thái, các tùy chọn, hoặc các giá trị có ý nghĩa cố định khác trong ứng dụng.

### Cách sử dụng:

Định nghĩa enum bằng cách sử dụng từ khóa `enum`:

```typescript
// Định nghĩa một enum với các giá trị liên kết
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

// Sử dụng enum trong code
let playerDirection: Direction = Direction.Right;

if (playerDirection === Direction.Right) {
  console.log("Player is moving right.");
} else {
  console.log("Player is moving in another direction.");
}
```

Trong ví dụ trên, enum `Direction` định nghĩa một tập hợp các hằng số có ý nghĩa, mỗi hằng số được gán một giá trị chuỗi. Sau đó, chúng ta sử dụng enum này để khai báo một biến `playerDirection` với giá trị là `Direction.Right`. Các điều kiện kiểm tra sử dụng enum giúp code dễ đọc và rõ ràng hơn, thay vì sử dụng các giá trị cứng (literal values) trực tiếp.

---

## Literal types: Sử dụng string literal types hoặc number literal types.

Literal types trong TypeScript cho phép bạn xác định một kiểu dữ liệu chỉ chấp nhận một giá trị cụ thể, chẳng hạn như một chuỗi hoặc một số cụ thể.

### Khái niệm:

Literal types cho phép bạn chỉ định chính xác giá trị mà một biến có thể nhận, thay vì chỉ đơn thuần xác định kiểu dữ liệu.

### Ngữ cảnh:

Literal types thường được sử dụng khi bạn muốn giới hạn các giá trị mà biến có thể chứa, làm cho mã nguồn rõ ràng hơn và giảm thiểu lỗi khi sử dụng sai kiểu dữ liệu.

### Cách sử dụng:

Sử dụng string literal types hoặc number literal types để xác định kiểu dữ liệu với giá trị cụ thể.

#### String Literal Types:

```typescript
// Xác định kiểu dữ liệu chỉ chấp nhận chuỗi "success" hoặc "error"
type ResultStatus = "success" | "error";

// Sử dụng kiểu dữ liệu đã định nghĩa
let status: ResultStatus;

status = "success"; // Hợp lệ
// status = "pending"; // Sẽ báo lỗi vì không phải là "success" hoặc "error"
```

#### Number Literal Types:

```typescript
// Xác định kiểu dữ liệu chỉ chấp nhận số 1 hoặc 2
type NumberLiteral = 1 | 2;

// Sử dụng kiểu dữ liệu đã định nghĩa
let num: NumberLiteral;

num = 1; // Hợp lệ
// num = 3; // Sẽ báo lỗi vì không phải là 1 hoặc 2
```

Trong cả hai ví dụ trên, chúng ta định nghĩa các kiểu dữ liệu mới bằng cách sử dụng `type` và sử dụng ký hiệu `|` để liệt kê các giá trị mà biến có thể nhận. Khi gán giá trị cho biến, TypeScript sẽ kiểm tra xem giá trị có phù hợp với các giá trị đã được định nghĩa trong kiểu dữ liệu literal hay không.

---
