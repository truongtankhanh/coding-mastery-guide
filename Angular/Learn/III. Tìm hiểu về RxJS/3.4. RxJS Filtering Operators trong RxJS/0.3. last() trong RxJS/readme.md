## Toán tử last() trong RxJS

**Khái niệm:**

Toán tử `last` là một **Filtering Operator** trong RxJS dùng để lấy **giá trị cuối cùng** được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `last` thường được sử dụng trong Angular để:

* Lấy giá trị cuối cùng được phát ra bởi Observable.
* Kiểm tra xem Observable có phát ra giá trị nào hay không.
* Bỏ qua các giá trị trước đó và chỉ lấy giá trị cuối cùng.

**Cách sử dụng:**

Toán tử `last` nhận hai tham số:

* **Hàm predicate (tùy chọn):** Hàm predicate này nhận mỗi giá trị được phát ra bởi Observable và trả về `true` nếu giá trị đó được chọn, hoặc `false` nếu giá trị đó bị bỏ qua.
* **Giá trị mặc định (tùy chọn):** Giá trị được trả về nếu Observable không phát ra giá trị nào.

**Ví dụ:**

```typescript
import { of, last } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy giá trị cuối cùng
const lastObservable = observable.pipe(
  last(),
);

lastObservable.subscribe(console.log); // In ra: 5

// Lấy giá trị cuối cùng lẻ
const lastOddObservable = observable.pipe(
  last((value) => value % 2 === 1),
);

lastOddObservable.subscribe(console.log); // In ra: 5
```

**Lưu ý:**

* Toán tử `last` **hoàn thành** Observable sau khi lấy được giá trị cuối cùng.
* Toán tử `last` chỉ phát ra **một giá trị duy nhất**.

**Tài liệu tham khảo:**

* RxJS last(): [https://rxjs.dev/api/operators/last](https://rxjs.dev/api/operators/last)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `last` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, last, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy bình phương của giá trị cuối cùng lẻ
const lastOddSquaredObservable = observable.pipe(
  last((value) => value % 2 === 1),
  map((value) => value * value),
);

lastOddSquaredObservable.subscribe(console.log); // In ra: 25
```

Trong ví dụ trên, chúng ta sử dụng toán tử `last` để lấy giá trị cuối cùng lẻ trước khi sử dụng toán tử `map` để lấy bình phương của giá trị đó.

## Kết luận

Toán tử `last` là một công cụ mạnh mẽ để lấy giá trị cuối cùng được phát ra bởi Observable. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.