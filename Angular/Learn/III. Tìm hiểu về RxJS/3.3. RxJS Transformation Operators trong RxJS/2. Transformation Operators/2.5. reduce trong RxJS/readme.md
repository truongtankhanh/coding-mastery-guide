## Toán tử reduce trong RxJS

**Khái niệm:**

Toán tử `reduce` là một **Transformation Operator** trong RxJS dùng để **giảm** Observable thành một giá trị duy nhất.

**Ngữ cảnh:**

Toán tử `reduce` thường được sử dụng trong Angular để:

- Tính tổng giá trị được phát ra bởi Observable.
- Tìm giá trị lớn nhất/nhỏ nhất được phát ra bởi Observable.
- Tạo một chuỗi từ các giá trị được phát ra bởi Observable.
- Lưu trữ trạng thái của một luồng dữ liệu.

**Cách sử dụng:**

Toán tử `reduce` nhận hai tham số:

- **Hàm accumulator:** Hàm này được gọi với mỗi giá trị được phát ra bởi Observable và giá trị tích lũy hiện tại. Hàm này **trả về giá trị tích lũy mới**.
- **Giá trị khởi tạo:** Giá trị khởi tạo được sử dụng cho giá trị tích lũy **ban đầu**.

**Ví dụ:**

```typescript
import { of, reduce } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Tính tổng giá trị được phát ra bởi Observable
const sumObservable = observable.pipe(reduce((acc, value) => acc + value, 0));

sumObservable.subscribe(console.log); // In ra: 15

// Tìm giá trị lớn nhất được phát ra bởi Observable
const maxObservable = observable.pipe(
  reduce((acc, value) => Math.max(acc, value), -Infinity)
);

maxObservable.subscribe(console.log); // In ra: 5

// Tạo một chuỗi từ các giá trị được phát ra bởi Observable
const stringObservable = observable.pipe(
  reduce((acc, value) => `${acc}, ${value}`, "")
);

stringObservable.subscribe(console.log); // In ra: "1, 2, 3, 4, 5"
```

**Lưu ý:**

- Toán tử `reduce` **không thay đổi** Observable gốc.
- Bạn có thể sử dụng toán tử `reduce` để **bỏ qua** giá trị được phát ra bởi Observable gốc.

**Tài liệu tham khảo:**

- RxJS reduce(): [https://rxjs.dev/api/operators/reduce](https://rxjs.dev/api/operators/reduce)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `reduce` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, reduce, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Tính tổng giá trị chẵn được phát ra bởi Observable
const evenSumObservable = observable.pipe(
  filter((value) => value % 2 === 0),
  reduce((acc, value) => acc + value, 0)
);

evenSumObservable.subscribe(console.log); // In ra: 6
```

Trong ví dụ trên, chúng ta sử dụng toán tử `filter` để lọc các giá trị lẻ trước khi sử dụng toán tử `reduce` để tính tổng giá trị chẵn.

## Kết luận

Toán tử `reduce` là một công cụ mạnh mẽ để **giảm** Observable thành một giá trị duy nhất. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
