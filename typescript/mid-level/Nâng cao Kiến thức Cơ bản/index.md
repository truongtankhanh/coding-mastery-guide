Tất nhiên, hãy bắt đầu với các khái niệm nâng cao của TypeScript cho nhà phát triển ở mức độ trung cấp:

### 1. Kiểu Dữ liệu Nâng cao:

#### a. Enums:

Enums cho phép đặt tên cho một tập hợp các giá trị số hoặc chuỗi.

#### Ví dụ:

```typescript
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

let userDirection: Direction = Direction.Up;
```

#### b. Tuple:

Tuple là một mảng kiểu cố định, mỗi phần tử trong Tuple có thể có kiểu dữ liệu khác nhau.

#### Ví dụ:

```typescript
let tupleExample: [string, number, boolean];
tupleExample = ["hello", 10, true];
```

#### c. Literal Types:

Literal Types là các kiểu dữ liệu mà chỉ chấp nhận một giá trị cụ thể.

#### Ví dụ:

```typescript
type Direction = "up" | "down" | "left" | "right";
let userDirection: Direction = "up";
```

#### d. Nullable Types:

Nullable Types cho phép một biến hoặc tham số có thể có giá trị null hoặc undefined ngoài kiểu dữ liệu khác.

#### Ví dụ:

```typescript
let nullableValue: number | null = null;
```

### 2. Type Guards và Type Assertion:

#### a. Type Guards:

Type Guards là các biểu thức được sử dụng để kiểm tra kiểu dữ liệu trong TypeScript.

#### Ví dụ:

```typescript
function isNumber(value: any): value is number {
  return typeof value === "number";
}

let val: any = 10;
if (isNumber(val)) {
  console.log("It's a number!");
} else {
  console.log("It's not a number!");
}
```

#### b. Type Assertion:

Type Assertion dùng để xác nhận kiểu dữ liệu của một biến trong quá trình viết mã.

#### Ví dụ:

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

### 3. Advanced Function Types:

#### a. Tham số mặc định và tham số rest:

Tham số mặc định cho phép bạn định nghĩa giá trị mặc định cho một tham số. Tham số rest cho phép nhận số lượng tham số không xác định.

#### Ví dụ:

```typescript
function sum(a: number, b: number = 0): number {
  return a + b;
}

function printNames(first: string, ...rest: string[]): void {
  console.log(first);
  console.log(rest);
}
```

#### b. Function Overloading:

Function Overloading cho phép định nghĩa nhiều phương thức cùng tên nhưng khác nhau về kiểu dữ liệu hoặc số lượng tham số.

#### Ví dụ:

```typescript
function display(value: number): void;
function display(value: string): void;
function display(value: any): void {
  console.log(value);
}

display(10); // Tự động chọn hàm display với tham số là number
display("Hello"); // Tự động chọn hàm display với tham số là string
```

Những khái niệm này sẽ mở rộng kiến thức của bạn về TypeScript, từ việc làm quen với Enums, Tuple và Literal Types đến việc sử dụng Type Guards và Type Assertion cũng như hiểu rõ hơn về Advanced Function Types như tham số mặc định và function overloading. Hãy thực hành và áp dụng chúng trong các ví dụ để nắm vững kiến thức!
