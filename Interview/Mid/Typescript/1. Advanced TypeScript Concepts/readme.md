## **Type Guards và Type Assertion:**

### Giải thích về Type Guards trong TypeScript. Ví dụ cụ thể.

Type Guards trong TypeScript là các cơ chế cho phép kiểm tra và xác định kiểu dữ liệu của một biến trong thời gian biên dịch (compile time) hoặc thời gian chạy (runtime). Các loại Type Guards này giúp TypeScript hiểu rõ hơn về kiểu dữ liệu của biến và điều này cung cấp lợi ích trong việc tránh lỗi kiểu dữ liệu và tăng tính linh hoạt khi làm việc với các loại dữ liệu khác nhau.

Có một số loại Type Guards phổ biến trong TypeScript:

1. **typeof Type Guards:**

   - Sử dụng `typeof` để kiểm tra kiểu dữ liệu cơ bản của biến.

   ```typescript
   function printValue(value: string | number) {
     if (typeof value === "string") {
       console.log(value.toUpperCase());
     } else {
       console.log(value.toFixed(2));
     }
   }
   ```

2. **instanceof Type Guards:**

   - Sử dụng `instanceof` để kiểm tra xem một đối tượng có phải là một instance của một lớp cụ thể hay không.

   ```typescript
   class Car {
     drive() {
       console.log("Driving a car...");
     }
   }

   class Bike {
     ride() {
       console.log("Riding a bike...");
     }
   }

   function move(vehicle: Car | Bike) {
     if (vehicle instanceof Car) {
       vehicle.drive();
     } else {
       vehicle.ride();
     }
   }
   ```

3. **User-Defined Type Guards:**

   - Tạo các hàm kiểm tra để kiểm tra một loại dữ liệu cụ thể.

   ```typescript
   interface Bird {
     fly(): void;
   }

   interface Fish {
     swim(): void;
   }

   function isFish(pet: Bird | Fish): pet is Fish {
     return (pet as Fish).swim !== undefined;
   }

   function move(pet: Bird | Fish) {
     if (isFish(pet)) {
       pet.swim();
     } else {
       pet.fly();
     }
   }
   ```

Khi sử dụng Type Guards, TypeScript sẽ hiểu được kiểu dữ liệu cụ thể mà biến có thể đạt được trong mỗi phạm vi và cho phép bạn làm việc với các thuộc tính hoặc phương thức của kiểu dữ liệu đó một cách an toàn.

**Trả lời chuyên nghiệp:**

"Type Guards trong TypeScript là cơ chế kiểm tra kiểu dữ liệu của biến trong thời gian biên dịch hoặc thời gian chạy. Chúng giúp xác định rõ ràng kiểu dữ liệu của biến và tăng tính linh hoạt khi làm việc với các kiểu dữ liệu khác nhau. Ví dụ như sử dụng `typeof`, `instanceof`, hoặc user-defined functions để kiểm tra và xác định kiểu dữ liệu của biến, giúp tránh lỗi kiểu dữ liệu và làm việc một cách an toàn với dữ liệu."

---

### Khi nào bạn nên sử dụng Type Assertion trong TypeScript?

Type Assertion trong TypeScript được sử dụng khi bạn, như người lập trình, biết rằng kiểu dữ liệu của một biến cụ thể sẽ chính xác hơn và rõ ràng hơn so với cách TypeScript hiểu mặc định.

Có một số tình huống khi bạn nên sử dụng Type Assertion:

1. **Khi bạn biết rõ hơn TypeScript về kiểu dữ liệu:**
   Bạn có thể biết chắc chắn rằng một biến có kiểu dữ liệu cụ thể mặc dù TypeScript không thể suy luận được. Sử dụng Type Assertion để "nói" cho TypeScript về kiểu dữ liệu đó.

   ```typescript
   let someValue: any = "this is a string";
   let strLength: number = (someValue as string).length;
   ```

2. **Khi bạn làm việc với các dữ liệu từ các nguồn bên ngoài:**
   Khi bạn nhận dữ liệu từ API hoặc thư viện không cung cấp đủ thông tin để TypeScript có thể suy luận kiểu dữ liệu, bạn có thể sử dụng Type Assertion để xác định kiểu dữ liệu chính xác.

   ```typescript
   interface UserData {
     name: string;
     age: number;
   }

   let data: any = fetchDataFromAPI(); // some external API
   let user: UserData = data as UserData;
   ```

3. **Khi bạn muốn tạm thời bỏ qua kiểm tra kiểu dữ liệu của TypeScript:**
   Một số trường hợp, bạn có thể cần phải sử dụng Type Assertion để tạm thời bỏ qua kiểm tra kiểu dữ liệu của TypeScript khi bạn chắc chắn rằng kiểu dữ liệu sẽ đúng trong thực tế nhưng TypeScript không thể hiểu được.
   ```typescript
   let someValue: any = "this is a string";
   let strLength: number = (<string>someValue).length;
   ```

Tuy nhiên, cần lưu ý rằng việc sử dụng Type Assertion cần được thực hiện cẩn thận, bởi vì nó có thể dẫn đến việc bỏ qua các lỗi kiểu dữ liệu trong quá trình phát triển. Nên sử dụng nó khi bạn chắc chắn rằng kiểu dữ liệu đã được xác định đúng và cần thiết.

**Trả lời chuyên nghiệp:**

"Type Assertion trong TypeScript được sử dụng khi chúng ta có kiến thức cụ thể về kiểu dữ liệu của biến mà TypeScript không thể suy luận được. Chẳng hạn, khi làm việc với dữ liệu từ các nguồn bên ngoài hoặc khi chúng ta chắc chắn về kiểu dữ liệu của một biến nhất định. Tuy nhiên, việc sử dụng Type Assertion cần phải cẩn thận để tránh bỏ qua lỗi kiểu dữ liệu trong quá trình phát triển."

---

## **Conditional Types và Mapped Types:**

### Khái niệm về Conditional Types và cách chúng hoạt động trong TypeScript.

Conditional Types trong TypeScript cho phép bạn xác định kiểu dữ liệu dựa trên một điều kiện. Điều này cho phép việc tạo ra các kiểu dữ liệu linh hoạt và có thể điều chỉnh dựa trên những điều kiện cụ thể.

Cú pháp cơ bản của Conditional Types là `T extends U ? X : Y`, trong đó `T` là kiểu dữ liệu cần kiểm tra, `U` là kiểu dữ liệu mà `T` cần phải extend hoặc gần giống, `X` và `Y` là kiểu dữ liệu trả về tùy thuộc vào kết quả của điều kiện kiểm tra.

Ví dụ:

```typescript
type Check<T> = T extends string ? string : number;

let test1: Check<string>; // test1 sẽ là kiểu 'string'
let test2: Check<number>; // test2 sẽ là kiểu 'number'
let test3: Check<boolean>; // test3 sẽ là kiểu 'number'
```

Trong ví dụ trên, nếu `T` là một `string`, kiểu của biến sẽ là `string`; nếu không, kiểu của biến sẽ là `number`.

Conditional Types cũng có thể được sử dụng với các kiểu dữ liệu phức tạp hơn, bao gồm generic types và union types:

```typescript
type Message<T> = T extends string | number ? `Message: ${T}` : "Invalid type";

let message1: Message<string>; // message1 sẽ là kiểu 'Message: string'
let message2: Message<number>; // message2 sẽ là kiểu 'Message: number'
let message3: Message<boolean>; // message3 sẽ là kiểu 'Invalid type'
```

Trong trường hợp này, nếu `T` là một `string` hoặc `number`, kiểu của biến sẽ là `Message: T`; nếu không, kiểu của biến sẽ là `'Invalid type'`.

Conditional Types mạnh mẽ vì chúng cho phép bạn tạo ra các kiểu dữ liệu phụ thuộc vào điều kiện cụ thể và có thể được kết hợp với các tính năng khác của TypeScript như union types, generic types để tạo ra các kiểu dữ liệu linh hoạt.

**Trả lời chuyên nghiệp:**

"Conditional Types trong TypeScript là cách cho phép chúng ta xác định kiểu dữ liệu dựa trên một điều kiện nhất định. Chúng được sử dụng để tạo ra các kiểu dữ liệu linh hoạt và có thể điều chỉnh dựa trên điều kiện. Ví dụ, khi `T` là một `string`, kiểu của biến sẽ là `string`; nếu không, kiểu của biến sẽ là `number`. Điều này cho phép chúng ta tạo ra các kiểu dữ liệu phức tạp dựa trên các điều kiện cụ thể và tăng tính linh hoạt của mã TypeScript."

---

### Mapped Types là gì? Một số ví dụ thực tế về cách sử dụng Mapped Types.

Mapped Types trong TypeScript cho phép bạn tạo ra các kiểu dữ liệu mới bằng cách thay đổi hoặc tạo ra các thuộc tính từ các kiểu dữ liệu đã có sẵn. Chúng giúp tái sử dụng và biến đổi các kiểu dữ liệu hiện có để tạo ra các kiểu dữ liệu mới phù hợp với nhu cầu cụ thể.

Cú pháp cơ bản của Mapped Types là `{ [P in keyof Type]: NewType }`, trong đó `P` là mỗi property trong `Type`, `keyof Type` trả về union type của các keys trong `Type`, và `NewType` là kiểu dữ liệu mới bạn muốn ánh xạ.

Ví dụ:

```typescript
type Person = {
  name: string;
  age: number;
};

type OptionalPerson = { [P in keyof Person]?: Person[P] };

let optionalPerson: OptionalPerson = {}; // optionalPerson sẽ có kiểu dữ liệu { name?: string | undefined, age?: number | undefined }
```

Trong ví dụ trên, `OptionalPerson` là một kiểu dữ liệu mới được tạo ra từ `Person` bằng cách thêm tính năng optional (`?`) vào từng thuộc tính.

Một số ví dụ thực tế về cách sử dụng Mapped Types:

1. **Loại bỏ thuộc tính:**

   ```typescript
   type PartialPerson = { [P in keyof Person]?: Person[P] };
   ```

2. **Thêm thuộc tính mới:**

   ```typescript
   type AdditionalPersonInfo = {
     [P in keyof Person | "email"]: Person[P] | string;
   };
   ```

3. **Loại bỏ thuộc tính cụ thể:**

   ```typescript
   type PersonWithoutAge = {
     [P in keyof Person as Exclude<P, "age">]: Person[P];
   };
   ```

4. **Tạo ra kiểu dữ liệu mới từ union type:**
   ```typescript
   type Nullable<T> = { [P in keyof T]: T[P] | null };
   ```

Mapped Types rất linh hoạt và mạnh mẽ, cho phép bạn tạo ra các kiểu dữ liệu mới dựa trên các kiểu dữ liệu đã có sẵn một cách linh hoạt và hiệu quả.

**Trả lời chuyên nghiệp:**

"Mapped Types trong TypeScript là cách cho phép chúng ta tạo ra các kiểu dữ liệu mới từ các kiểu dữ liệu hiện có bằng cách thay đổi hoặc tạo ra các thuộc tính mới. Ví dụ như việc tạo ra các kiểu dữ liệu optional, loại bỏ hoặc thêm thuộc tính, hoặc biến đổi các kiểu dữ liệu từ union types. Chúng giúp tái sử dụng và tạo ra các kiểu dữ liệu linh hoạt phù hợp với nhu cầu cụ thể của chúng ta."

---

## **Advanced Generics:**

### Sử dụng Generics để viết một hàm hoặc class có thể làm việc với nhiều kiểu dữ liệu.

Sử dụng Generics trong TypeScript cho phép chúng ta viết các hàm hoặc lớp có thể làm việc với nhiều kiểu dữ liệu mà không cần phải cố định kiểu dữ liệu từ đầu. Điều này giúp tái sử dụng mã nguồn và tạo ra các thành phần linh hoạt hơn.

### Ví dụ sử dụng Generics trong hàm:

```typescript
function printArray<T>(arr: T[]): void {
  arr.forEach((item) => console.log(item));
}

// Sử dụng hàm printArray với mảng các kiểu dữ liệu khác nhau
printArray<number>([1, 2, 3]); // In ra 1, 2, 3
printArray<string>(["a", "b", "c"]); // In ra 'a', 'b', 'c'
```

Trong ví dụ trên, `T` là một kiểu dữ liệu generic mà ta có thể sử dụng trong hàm `printArray`. Khi gọi hàm, ta chỉ cần xác định kiểu dữ liệu cụ thể cho `T`.

### Ví dụ sử dụng Generics trong lớp:

```typescript
class Pair<T, U> {
  constructor(public first: T, public second: U) {}
}

// Sử dụng lớp Pair với các kiểu dữ liệu khác nhau
const numberAndStringPair = new Pair<number, string>(1, "hello");
console.log(numberAndStringPair.first); // In ra 1
console.log(numberAndStringPair.second); // In ra 'hello'
```

Trong ví dụ này, `Pair` là một lớp generic có thể lưu trữ hai kiểu dữ liệu khác nhau. Khi tạo đối tượng, ta chỉ cần xác định kiểu dữ liệu cụ thể cho mỗi tham số generic.

**Trả lời chuyên nghiệp:**

"Generics trong TypeScript cho phép chúng ta viết các hàm hoặc lớp có thể làm việc với nhiều kiểu dữ liệu mà không cần phải cố định kiểu dữ liệu từ đầu. Ví dụ như việc tạo ra các hàm hoặc lớp có thể áp dụng cho nhiều kiểu dữ liệu khác nhau, tăng tính tái sử dụng và linh hoạt của mã nguồn."

---

### Giải thích về 'constraint' trong Generics và tại sao chúng lại quan trọng.

Trong Generics, 'constraint' đề cập đến việc áp đặt các ràng buộc (constraints) đối với kiểu dữ liệu mà một tham số generic có thể nhận. Điều này giúp hạn chế loại các kiểu dữ liệu có thể được sử dụng, cung cấp một mức độ kiểm soát cao hơn và giúp chúng ta xác định các thuộc tính hoặc phương thức cụ thể có sẵn trong kiểu dữ liệu được sử dụng.

Ví dụ, khi chúng ta muốn sử dụng Generics nhưng chỉ cho phép các kiểu dữ liệu có một phương thức hoặc thuộc tính cụ thể, chúng ta có thể sử dụng 'constraint':

```typescript
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Phải tồn tại thuộc tính length trong kiểu dữ liệu T
  return arg;
}

// Sẽ hoạt động
loggingIdentity("hello"); // 'hello' có thuộc tính length

// Sẽ báo lỗi vì không có thuộc tính length
loggingIdentity(5); // Error: Argument of type 'number' is not assignable to parameter of type 'Lengthwise'
```

Trong ví dụ này, 'constraint' được định nghĩa bởi `T extends Lengthwise`, điều này ngụ ý rằng kiểu dữ liệu `T` cần phải chứa thuộc tính `length` (trong trường hợp này là kiểu dữ liệu có `length: number`). Nếu không, TypeScript sẽ báo lỗi khi gọi hàm `loggingIdentity` với một kiểu dữ liệu không đáp ứng được ràng buộc này.

**Trả lời chuyên nghiệp:**

"'Constraint' trong Generics là cách giới hạn các kiểu dữ liệu mà một tham số generic có thể nhận. Chúng giúp chúng ta xác định các ràng buộc hoặc yêu cầu cụ thể đối với kiểu dữ liệu sử dụng Generics. Ví dụ như khi chúng ta chỉ muốn sử dụng Generics với các kiểu dữ liệu có một thuộc tính hoặc phương thức cụ thể, chúng ta có thể sử dụng 'constraint' để áp đặt điều này và TypeScript sẽ báo lỗi nếu kiểu dữ liệu không đáp ứng được ràng buộc đó."

---
