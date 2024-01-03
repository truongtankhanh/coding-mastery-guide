## Tổ chức mã bằng cách sử dụng modules và namespaces.

Modules và namespaces là hai cách để tổ chức mã trong TypeScript, giúp quản lý và tái sử dụng code một cách hiệu quả.

### Khái niệm

#### Modules:

Modules trong TypeScript là cách để tạo ra các phạm vi (scope) độc lập để chia code thành các phần nhỏ, từ đó dễ dàng quản lý và sử dụng lại.

#### Namespaces:

Namespaces cũng tương tự như modules, nhưng chúng cung cấp một cách để nhóm các thành phần liên quan lại với nhau bên trong một phạm vi đặc biệt, cung cấp một cách để tổ chức code khi làm việc với JavaScript ES5 hoặc trong các trường hợp cũ.

### Ngữ cảnh

Modules và namespaces giúp tổ chức mã nguồn thành các phạm vi nhỏ hơn, giúp quản lý và tái sử dụng code một cách hiệu quả hơn.

### Cách sử dụng và ví dụ

#### Modules:

```typescript
// File math.ts
export function sum(a: number, b: number): number {
  return a + b;
}

// File main.ts
import { sum } from "./math";
let result = sum(5, 3);
console.log(result); // Output: 8
```

#### Namespaces:

```typescript
// Namespace Animal
namespace Animal {
  export interface IAnimal {
    name: string;
    makeSound(): void;
  }

  export class Dog implements IAnimal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    makeSound() {
      console.log("Woof! Woof!");
    }
  }
}

// Sử dụng namespace Animal
let myDog = new Animal.Dog("Buddy");
myDog.makeSound(); // Output: Woof! Woof!
```

### Tóm tắt

Modules và namespaces là cách để tổ chức mã nguồn trong TypeScript. Modules cho phép chia code thành các phạm vi độc lập và sử dụng `export` và `import` để chia sẻ và sử dụng code. Namespaces cũng có chức năng tương tự nhưng thường được sử dụng trong các trường hợp cũ hoặc khi làm việc với JavaScript ES5. Cả hai cách này đều giúp quản lý mã nguồn và tái sử dụng code một cách hiệu quả.

---

## Import và export trong TypeScript.

Import và export trong TypeScript được sử dụng để quản lý và chia sẻ mã nguồn giữa các modules hoặc files khác nhau.

### Khái niệm

#### Export:

- `export` được sử dụng để xuất các biến, hàm, lớp hoặc các phần khác của một file ra ngoài để có thể sử dụng từ các files khác.

#### Import:

- `import` cho phép bạn sử dụng các biến, hàm, lớp hoặc các phần được xuất từ một file khác để sử dụng trong file hiện tại.

### Ngữ cảnh

Import và export giúp tổ chức code thành các modules nhỏ hơn, tạo sự phân cấp và tăng tính tái sử dụng code trong TypeScript.

### Cách sử dụng và ví dụ

#### Export:

```typescript
// File math.ts
export const PI = 3.14;

export function sum(a: number, b: number): number {
  return a + b;
}

export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}
```

#### Import:

```typescript
// File main.ts
import { sum, PI, Calculator } from "./math";

let result = sum(5, 3);
console.log(result); // Output: 8

console.log(PI); // Output: 3.14

let calc = new Calculator();
console.log(calc.multiply(2, 3)); // Output: 6
```

#### Import as:

```typescript
// File main.ts
import * as mathFunctions from "./math";

let result = mathFunctions.sum(5, 3);
console.log(result); // Output: 8

console.log(mathFunctions.PI); // Output: 3.14

let calc = new mathFunctions.Calculator();
console.log(calc.multiply(2, 3)); // Output: 6
```

### Tóm tắt

Import và export trong TypeScript cho phép bạn chia sẻ và sử dụng code giữa các files khác nhau. Bằng cách sử dụng `export` để xuất các thành phần từ file gốc và `import` để sử dụng chúng trong file khác, bạn có thể tổ chức code thành các modules nhỏ hơn, tạo sự phân cấp và tăng tính tái sử dụng của code.

---
