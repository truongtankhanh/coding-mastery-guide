## Import aliasing.

Import aliasing trong TypeScript là cách để đặt tên thay thế cho các thành phần được import từ các module khác nhau. Điều này giúp làm cho code dễ đọc hơn và giảm xung đột tên trong quá trình import các thành phần từ các module khác nhau.

### Khái niệm:

Import aliasing cho phép bạn đặt tên mới cho các thành phần khi import chúng từ các module, thay vì sử dụng tên gốc của chúng.

### Ngữ cảnh:

Import aliasing thường được sử dụng khi tên của các thành phần trong các module có thể trùng nhau hoặc khi muốn đặt tên ngắn gọn, dễ đọc hơn cho các thành phần được import.

### Cách sử dụng:

Sử dụng `as` để tạo alias cho các thành phần được import.

```typescript
// Suppose we have a module named "mathFunctions.ts"
// Ví dụ: có một module tên "mathFunctions.ts"
export function add(a: number, b: number): number {
  return a + b;
}

// Import và đặt alias cho hàm add từ module "mathFunctions.ts"
// Import và đặt alias cho hàm add từ module "mathFunctions.ts"
import { add as addition } from "./mathFunctions";

// Sử dụng alias để gọi hàm add
console.log(addition(3, 4)); // Kết quả: 7
```

Trong ví dụ này, chúng ta import hàm `add` từ module "mathFunctions.ts" và đặt tên alias cho nó là `addition`. Khi sử dụng hàm này, chúng ta sử dụng tên alias `addition` thay vì tên gốc `add`. Điều này giúp làm cho code dễ đọc hơn và tránh xung đột tên giữa các thành phần từ các module khác nhau.

---

## Dynamic imports.

Dynamic imports trong TypeScript là cách để import các module trong thời điểm thực thi chương trình, thay vì được import ngay từ đầu khi chương trình bắt đầu chạy. Điều này cho phép bạn tải các module theo yêu cầu, tăng khả năng tải trang và giảm thời gian khởi chạy ứng dụng.

### Khái niệm:

Dynamic imports cho phép bạn import module khi chương trình đang chạy, dựa trên điều kiện hoặc hành vi trong quá trình thực thi chương trình.

### Ngữ cảnh:

Dynamic imports thường được sử dụng khi bạn muốn tối ưu hóa tải trang, chỉ tải các module khi cần thiết hoặc trong các tình huống mà việc import module từ đầu có thể làm chậm quá trình khởi chạy.

### Cách sử dụng:

Sử dụng `import()` để thực hiện dynamic imports. Khi sử dụng dynamic imports, bạn sẽ nhận được một promise chứa các module đã import.

```typescript
// Ví dụ: Dynamic import của một module và sử dụng nó
const button = document.getElementById("myButton");

button?.addEventListener("click", async () => {
  try {
    // Import module "myModule.ts" khi button được click
    const myModule = await import("./myModule");
    myModule.doSomething();
  } catch (error) {
    console.error("Error during dynamic import:", error);
  }
});
```

Trong ví dụ trên, khi button được click, chúng ta sử dụng `import()` để import module "myModule.ts" và sau đó gọi hàm `doSomething()` từ module đã import. Việc import này xảy ra khi button được click và chúng ta sử dụng `await` để đợi cho quá trình import hoàn tất trước khi sử dụng module được import.

Dynamic imports cho phép tải các module cần thiết theo yêu cầu, giúp cải thiện hiệu suất và tối ưu hóa việc tải trang trong ứng dụng TypeScript.

---

## Global module exports.

Global module exports trong TypeScript cho phép bạn xuất (export) các biến, hàm hoặc lớp từ một module để có thể sử dụng chúng từ bất kỳ đâu trong ứng dụng mà không cần phải import.

### Khái niệm:

Global module exports cho phép xuất các thành phần từ một module và sử dụng chúng mà không cần phải import module đó. Thay vì sử dụng cơ chế import/export chuẩn, global module exports cho phép các biến, hàm, hoặc lớp được truy cập mà không cần phải import module từ đâu.

### Ngữ cảnh:

Global module exports thường được sử dụng trong trường hợp cần truy cập các thành phần từ một module mà không muốn import toàn bộ module hoặc muốn tiện lợi hơn khi sử dụng các biến toàn cục.

### Cách sử dụng:

Để sử dụng global module exports, bạn cần sử dụng `window` (trong môi trường trình duyệt) hoặc `global` (trong môi trường Node.js) để gán các biến, hàm hoặc lớp mà bạn muốn xuất từ module.

Ví dụ:

```typescript
// Định nghĩa một biến global trong một module
// (Đây chỉ là một ví dụ và không nên thực hiện điều này trong ứng dụng thực tế vì gây rối)
// module1.ts
window.globalVar = 10;

// Sử dụng biến global từ một module khác
// module2.ts
console.log(window.globalVar); // In ra: 10
```

Ở ví dụ trên, chúng ta định nghĩa một biến `globalVar` trong module1.ts và sau đó sử dụng nó trong module2.ts thông qua `window.globalVar`. Điều này cho phép truy cập vào biến `globalVar` mà không cần phải import module1.ts. Tuy nhiên, việc sử dụng global module exports có thể gây ra rối và gây khó hiểu cho codebase, nên được sử dụng cẩn thận và hạn chế.

---
