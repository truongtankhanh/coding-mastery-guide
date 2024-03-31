## Toán tử toArray trong RxJS

**Khái niệm:**

Toán tử `toArray` là một **Transformation Operator** trong RxJS dùng để chuyển đổi Observable thành một mảng chứa tất cả giá trị được phát ra.

**Ngữ cảnh:**

Toán tử `toArray` thường được sử dụng trong Angular để:

- Lưu trữ tất cả giá trị được phát ra bởi Observable.
- Sử dụng dữ liệu được phát ra bởi Observable trong các thao tác khác.
- Chuyển đổi Observable thành một dạng dữ liệu dễ sử dụng hơn.

**Cách sử dụng:**

Toán tử `toArray` không nhận tham số nào.

**Ví dụ:**

```typescript
import { of, toArray } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Chuyển đổi Observable thành một mảng
const arrayObservable = observable.pipe(toArray());

arrayObservable.subscribe(console.log); // In ra: [1, 2, 3, 4, 5]
```

**Lưu ý:**

- Toán tử `toArray` **không thay đổi** Observable gốc.
- Toán tử `toArray` chỉ phát ra một giá trị duy nhất: mảng chứa tất cả giá trị được phát ra bởi Observable.

**Tài liệu tham khảo:**

- RxJS toArray(): [https://rxjs.dev/api/operators/toArray](https://rxjs.dev/api/operators/toArray)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `toArray` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, toArray, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy mảng chứa các giá trị chẵn được phát ra bởi Observable
const evenArrayObservable = observable.pipe(
  filter((value) => value % 2 === 0),
  toArray()
);

evenArrayObservable.subscribe(console.log); // In ra: [2, 4]
```

Trong ví dụ trên, chúng ta sử dụng toán tử `filter` để lọc các giá trị lẻ trước khi sử dụng toán tử `toArray` để lấy mảng chứa các giá trị chẵn.

## Kết luận

Toán tử `toArray` là một công cụ mạnh mẽ để chuyển đổi Observable thành một mảng. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
