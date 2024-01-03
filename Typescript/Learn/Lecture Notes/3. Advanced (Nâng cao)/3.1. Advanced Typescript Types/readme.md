## Conditional types: Sử dụng `infer` để suy luận kiểu dữ liệu.

Conditional types trong TypeScript cho phép chúng ta xác định kiểu dữ liệu dựa trên các điều kiện và sử dụng từ khóa `infer` để suy luận kiểu dữ liệu từ các kiểu hiện có.

### Khái niệm:

Conditional types cho phép chúng ta kiểm tra một điều kiện và dựa trên điều kiện đó để xác định kiểu dữ liệu của biến hoặc giá trị trả về.

### Ngữ cảnh:

Khi chúng ta cần xác định kiểu dữ liệu dựa trên điều kiện nào đó, chẳng hạn như kiểm tra kiểu của một giá trị để xác định loại hàm hoặc thuộc tính sẽ được trả về.

### Cách sử dụng:

#### Ví dụ 1: Sử dụng `infer` để suy luận kiểu dữ liệu

```typescript
type ExtractReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

function add(a: number, b: number): number {
  return a + b;
}

type Result = ExtractReturnType<typeof add>; // Kết quả sẽ là kiểu number
```

Ở đây, `ExtractReturnType` là một conditional type. Nó kiểm tra xem kiểu dữ liệu `T` có phải là một hàm không. Nếu đúng, nó sẽ suy luận kiểu trả về của hàm đó thông qua từ khóa `infer`.

#### Ví dụ 2: Sử dụng `infer` với conditional types

```typescript
type TypeName<T> = T extends string
  ? "string"
  : T extends number
  ? "number"
  : T extends boolean
  ? "boolean"
  : T extends undefined
  ? "undefined"
  : "object";

type StringOrNumber = TypeName<string | number>; // Kết quả sẽ là "string" | "number"
type ObjectType = TypeName<object>; // Kết quả sẽ là "object"
```

Ở đây, `TypeName` kiểm tra kiểu dữ liệu của `T` và trả về các string tương ứng với từng kiểu dữ liệu cụ thể.

Conditional types kết hợp với `infer` là một công cụ mạnh mẽ cho việc xử lý kiểu dữ liệu trong TypeScript, giúp chúng ta tạo ra các kiểu dữ liệu linh hoạt và tái sử dụng được.

---

## Template literal types: Tạo ra kiểu dữ liệu dựa trên chuỗi template.

Template literal types trong TypeScript cho phép chúng ta tạo kiểu dữ liệu dựa trên các chuỗi template, cung cấp khả năng tạo kiểu tùy chỉnh dựa trên cấu trúc của chuỗi.

### Khái niệm:

Template literal types cho phép chúng ta xác định kiểu dữ liệu dựa trên cấu trúc của chuỗi, từ đó tạo ra các kiểu dữ liệu phức tạp bằng cách sử dụng các chuỗi template.

### Ngữ cảnh:

Khi chúng ta cần xác định các kiểu dữ liệu phức tạp dựa trên các chuỗi có cấu trúc cố định, chẳng hạn như định dạng chuỗi, pattern chuỗi cụ thể.

### Cách sử dụng:

#### Ví dụ 1: Sử dụng template literal types để xác định định dạng chuỗi

```typescript
type Email = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
type Phone = "^\\d{10}$";

function validate(value: string, type: Email | Phone): boolean {
  return new RegExp(type).test(value);
}

const isValidEmail = validate(
  "example@email.com",
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
);
const isValidPhone = validate("1234567890", "^\\d{10}$");

console.log(isValidEmail); // true
console.log(isValidPhone); // true
```

Trong ví dụ này, `Email` và `Phone` đều là các template literal types đại diện cho định dạng chuỗi email và số điện thoại. Chúng được sử dụng để kiểm tra tính hợp lệ của chuỗi bằng cách so sánh với mẫu chuỗi tương ứng.

#### Ví dụ 2: Kết hợp template literal types với union type

```typescript
type EventName<T> = `${T}Event`;
type MouseEvents = EventName<"Mouse">; // Kiểu dữ liệu: "MouseEvent"
type KeyboardEvents = EventName<"Keyboard">; // Kiểu dữ liệu: "KeyboardEvent"

function handleEvent(event: MouseEvents | KeyboardEvents) {
  // Xử lý sự kiện
}
```

Ở đây, `EventName<T>` là một template literal type, nhận vào một generic `T` và thêm chuỗi "Event" vào phía sau. Nó cho phép chúng ta tạo ra các kiểu dữ liệu sự kiện dựa trên loại sự kiện ("Mouse" hoặc "Keyboard").

Template literal types trong TypeScript cho phép chúng ta linh hoạt xây dựng các kiểu dữ liệu tùy chỉnh dựa trên cấu trúc của chuỗi, tạo ra tính linh hoạt và tái sử dụng trong việc định nghĩa các kiểu dữ liệu.

---
