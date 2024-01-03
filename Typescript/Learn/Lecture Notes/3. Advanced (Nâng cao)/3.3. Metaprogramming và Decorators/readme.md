## Sử dụng Decorators để thay đổi cấu trúc hoặc hành vi của mã trong thời gian biên dịch.

Decorators trong TypeScript là một tính năng mạnh mẽ cho phép thay đổi cấu trúc hoặc hành vi của mã trong thời gian biên dịch bằng cách áp dụng các annotation trên lớp, phương thức, thuộc tính hoặc tham số.

### Khái niệm:

Decorators là các hàm hoặc thậm chí là các lớp được áp dụng bằng cách sử dụng ký hiệu `@` trước lớp, phương thức, thuộc tính, hoặc tham số, cho phép thực hiện các thay đổi như thêm chức năng, logging, validation và nhiều hành vi khác trong quá trình biên dịch.

### Ngữ cảnh:

Khi cần thay đổi hoặc mở rộng hành vi của một phần của mã mà không muốn sửa đổi mã nguồn gốc, chẳng hạn như thêm log, kiểm tra điều kiện hoặc tự động generate code.

### Cách sử dụng:

#### Ví dụ 1: Sử dụng Decorators trên lớp

```typescript
function logClass(target: any) {
  console.log(`Class: ${target.name} được khởi tạo.`);
}

@logClass
class MyClass {
  constructor() {
    console.log("Đã tạo một instance của MyClass.");
  }
}

// Output:
// Class: MyClass được khởi tạo.
// Đã tạo một instance của MyClass.
```

#### Ví dụ 2: Sử dụng Decorators trên phương thức

```typescript
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(`Gọi ${key} với các đối số: ${args}`);
    return originalMethod.apply(this, args);
  };

  return descriptor;
}

class Calculator {
  @logMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calc = new Calculator();
calc.add(2, 3);

// Output:
// Gọi add với các đối số: 2,3
```

Decorators có thể được sử dụng để thay đổi hành vi của lớp, phương thức, thuộc tính hoặc tham số, mở rộng tính năng của chúng một cách dễ dàng và linh hoạt. Tuy nhiên, cần lưu ý rằng Decorators còn đang trong giai đoạn thử nghiệm và có thể thay đổi trong tương lai.

---

## Reflect API để thao tác với metadata của các class và object trong thời gian chạy.

Reflect API trong TypeScript là một tập hợp các phương thức cung cấp khả năng thao tác với metadata của các class và object trong thời gian chạy.

### Khái niệm:

Reflect API cung cấp các phương thức để thao tác với metadata, bao gồm đọc và ghi thông tin metadata của các class và object trong quá trình thực thi.

### Ngữ cảnh:

Khi cần thêm thông tin bổ sung (metadata) vào các đối tượng hoặc lớp và sau đó đọc hoặc thao tác với thông tin đó trong quá trình chạy ứng dụng.

### Cách sử dụng:

#### Ví dụ 1: Thao tác với metadata của class

```typescript
@Reflect.metadata("customKey", "customValue")
class MyClass {}

const metadataValue = Reflect.getMetadata("customKey", MyClass);
console.log(metadataValue); // Output: "customValue"
```

Trong ví dụ này, chúng ta sử dụng Decorator `@Reflect.metadata("customKey", "customValue")` để thêm metadata vào class `MyClass`, sau đó sử dụng `Reflect.getMetadata` để đọc thông tin metadata đã được thêm vào.

#### Ví dụ 2: Thao tác với metadata của object

```typescript
const obj = {};

Reflect.defineMetadata("key", "value", obj);
const metadataValue = Reflect.getMetadata("key", obj);
console.log(metadataValue); // Output: "value"
```

Ở đây, chúng ta sử dụng `Reflect.defineMetadata` để định nghĩa metadata cho object `obj`, và sau đó sử dụng `Reflect.getMetadata` để đọc thông tin metadata đã được định nghĩa.

Reflect API trong TypeScript cung cấp các phương thức mạnh mẽ để thêm và thao tác với metadata của các class và object trong quá trình chạy ứng dụng. Việc sử dụng metadata có thể hữu ích trong nhiều tình huống, chẳng hạn như gắn thẻ dữ liệu, validation hoặc tạo các logic tùy chỉnh dựa trên các thông tin bổ sung.

---
