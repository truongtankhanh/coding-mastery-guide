## Toán tử mapTo trong RxJS

**Khái niệm:**

Toán tử `mapTo` là một **Transformation Operator** trong RxJS dùng để **chuyển đổi** Observable thành một Observable mới **phát ra một giá trị cố định**.

**Ngữ cảnh:**

Toán tử `mapTo` thường được sử dụng trong Angular để:

- Chuyển đổi Observable thành một Observable **phát ra giá trị true/false**.
- Chuyển đổi Observable thành một Observable **phát ra một thông báo lỗi**.
- Chuyển đổi Observable thành một Observable **phát ra một giá trị mặc định**.

**Cách sử dụng:**

Toán tử `mapTo` nhận một **giá trị** làm tham số. Giá trị này sẽ được phát ra bởi Observable mới.

**Ví dụ:**

```typescript
import { of, mapTo } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Chuyển đổi Observable thành một Observable phát ra giá trị "Hello"
const helloObservable = observable.pipe(mapTo("Hello"));

helloObservable.subscribe(console.log); // In ra: "Hello", "Hello", "Hello", "Hello", "Hello"

// Chuyển đổi Observable thành một Observable phát ra giá trị true
const isTrueObservable = observable.pipe(mapTo(true));

isTrueObservable.subscribe(console.log); // In ra: true, true, true, true, true
```

**Lưu ý:**

- Toán tử `mapTo` **không thay đổi** Observable gốc.
- Bạn có thể sử dụng toán tử `mapTo` để **bỏ qua** giá trị được phát ra bởi Observable gốc.

**Tài liệu tham khảo:**

- RxJS mapTo(): [https://rxjs.dev/api/operators/mapTo](https://rxjs.dev/api/operators/mapTo)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `mapTo` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, mapTo, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Chuyển đổi Observable thành một Observable phát ra giá trị "Hello" nếu giá trị lớn hơn 2
const helloObservable = observable.pipe(
  filter((value) => value > 2),
  mapTo("Hello")
);

helloObservable.subscribe(console.log); // In ra: "Hello", "Hello", "Hello"
```

Trong ví dụ trên, chúng ta sử dụng toán tử `filter` để lọc các giá trị nhỏ hơn hoặc bằng 2 trước khi sử dụng toán tử `mapTo` để chuyển đổi Observable thành một Observable phát ra giá trị "Hello".

## Kết luận

Toán tử `mapTo` là một công cụ mạnh mẽ để **chuyển đổi** Observable thành một Observable mới **phát ra một giá trị cố định**. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
