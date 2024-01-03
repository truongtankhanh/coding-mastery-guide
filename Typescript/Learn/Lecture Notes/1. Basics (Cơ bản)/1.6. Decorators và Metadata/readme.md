## Sử dụng decorators để mở rộng tính năng của các thành phần trong mã.

Decorators trong TypeScript là các hàm hoặc thậm chí là các lớp sử dụng để mở rộng hoặc thay đổi các thành phần trong mã, như lớp, phương thức, hoặc thuộc tính.

### Khái niệm

Decorators cho phép bạn áp dụng logic bổ sung hoặc thay đổi ở các thành phần của code, giúp mở rộng tính năng của chúng một cách linh hoạt.

### Ngữ cảnh

Decorators được sử dụng để thêm hoặc thay đổi các tính năng của các thành phần trong mã một cách dễ dàng và linh hoạt.

### Cách sử dụng và ví dụ

#### Decorators trên lớp:

```typescript
function logClass(target: Function) {
  console.log(`Class name: ${target.name}`);
}

@logClass
class ExampleClass {
  constructor() {
    console.log("This is an example class.");
  }
}

// Khi khởi tạo instance của ExampleClass, decorator logClass được gọi và hiển thị tên của lớp.
let example = new ExampleClass();
// Output: Class name: ExampleClass
//         This is an example class.
```

#### Decorators trên phương thức:

```typescript
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  console.log(`Method name: ${key}`);
}

class ExampleClass {
  @logMethod
  exampleMethod() {
    console.log("This is an example method.");
  }
}

let example = new ExampleClass();
example.exampleMethod();
// Output: Method name: exampleMethod
//         This is an example method.
```

#### Decorators trên thuộc tính:

```typescript
function logProperty(target: any, key: string) {
  console.log(`Property name: ${key}`);
}

class ExampleClass {
  @logProperty
  exampleProperty: string = "This is an example property.";
}

let example = new ExampleClass();
console.log(example.exampleProperty);
// Output: Property name: exampleProperty
//         This is an example property.
```

### Tóm tắt

Decorators trong TypeScript là các hàm hoặc lớp được sử dụng để mở rộng hoặc thay đổi tính năng của các thành phần trong mã như lớp, phương thức, hoặc thuộc tính. Chúng giúp thêm các chức năng bổ sung, ghi log, hoặc thay đổi hành vi của các thành phần một cách linh hoạt và dễ dàng.

---
