## Generic constraints: giới hạn kiểu dữ liệu cho generics.

Generic constraints trong TypeScript là cách để giới hạn loại dữ liệu mà một generic type có thể nhận. Điều này cho phép bạn áp đặt các ràng buộc hoặc yêu cầu về loại dữ liệu được sử dụng khi sử dụng generic type.

### Khái niệm:

Generic constraints giúp bạn định rõ loại dữ liệu mà một generic type có thể nhận. Bằng cách này, bạn có thể giới hạn loại dữ liệu đầu vào mà generic type có thể làm việc.

### Ngữ cảnh:

Generic constraints thường được sử dụng khi bạn muốn đảm bảo rằng generic type sẽ chấp nhận một loại dữ liệu cụ thể hoặc là một loại dữ liệu cụ thể sẽ hỗ trợ một tập hợp các phương thức, thuộc tính.

### Cách sử dụng:

Sử dụng từ khóa `extends` để áp đặt ràng buộc trên generic type.

Ví dụ:

```typescript
// Định nghĩa một interface có phương thức length
interface Lengthwise {
  length: number;
}

// Generic function tính tổng độ dài của các phần tử có thuộc tính length
function totalLength<T extends Lengthwise>(arr: T[]): number {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i].length; // Cần phải đảm bảo arr[i] có thuộc tính length
  }
  return total;
}

// Sử dụng generic function với mảng các chuỗi
const strings = ["hello", "world"];
console.log(totalLength(strings)); // In ra: 10, tổng độ dài của các chuỗi trong mảng

// Sử dụng generic function với mảng các số (không thỏa mãn ràng buộc)
// const numbers = [1, 2, 3]; // Nếu mảng không có thuộc tính length, TypeScript sẽ báo lỗi
// console.log(totalLength(numbers));
```

Trong ví dụ này, `Lengthwise` là một interface có thuộc tính `length` với kiểu number. Hàm `totalLength` là một generic function nhận một mảng có kiểu dữ liệu generic `T` mà `T` phải thỏa mãn ràng buộc là phải có thuộc tính `length` (do `T extends Lengthwise`). Điều này đảm bảo rằng hàm `totalLength` chỉ chấp nhận một mảng các phần tử có thuộc tính `length`.

---

## Indexed Access Types.

Indexed Access Types trong TypeScript là cách để trích xuất loại dữ liệu từ một kiểu dữ liệu đã tồn tại thông qua việc sử dụng một loạt các chỉ số (index). Điều này cho phép bạn truy xuất loại dữ liệu của một thuộc tính hoặc phần tử trong một kiểu dữ liệu đã định nghĩa.

### Khái niệm:

Indexed Access Types cho phép bạn truy cập loại dữ liệu của một thuộc tính hoặc phần tử trong một kiểu dữ liệu bằng cách sử dụng một chuỗi hoặc union của các chuỗi làm chỉ số.

### Ngữ cảnh:

Indexed Access Types thường được sử dụng khi bạn cần trích xuất một phần hoặc loại dữ liệu cụ thể từ một kiểu dữ liệu lớn.

### Cách sử dụng:

Sử dụng `[]` để truy cập loại dữ liệu của một thuộc tính hoặc phần tử trong một kiểu dữ liệu đã định nghĩa.

Ví dụ:

```typescript
// Định nghĩa một kiểu dữ liệu
interface Person {
  name: string;
  age: number;
  email: string;
}

// Sử dụng Indexed Access Types để truy xuất loại dữ liệu của thuộc tính trong kiểu dữ liệu Person
type PersonName = Person["name"]; // Loại dữ liệu của thuộc tính 'name' trong Person
type PersonAgeOrEmail = Person["age" | "email"]; // Loại dữ liệu của 'age' hoặc 'email' trong Person
type PersonKey = keyof Person; // Union type của tất cả các keys trong Person

// Sử dụng Indexed Access Types với mảng
type ArrayItem = number[];
type FirstElement = ArrayItem[0]; // Loại dữ liệu của phần tử đầu tiên trong mảng number[]
```

Trong ví dụ trên, chúng ta định nghĩa một kiểu dữ liệu `Person` và sau đó sử dụng Indexed Access Types để trích xuất các loại dữ liệu khác nhau từ `Person`. `PersonName` sẽ là loại dữ liệu của thuộc tính `name` trong `Person`, `PersonAgeOrEmail` là loại dữ liệu của `age` hoặc `email`, và `PersonKey` là union type của tất cả các keys trong `Person`. Đồng thời, chúng ta cũng sử dụng Indexed Access Types để trích xuất loại dữ liệu của phần tử đầu tiên trong một mảng.

---
