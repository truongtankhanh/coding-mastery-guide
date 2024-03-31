## Toán tử takeLast() trong RxJS

**Khái niệm:**

Toán tử `takeLast` là một **Filtering Operator** trong RxJS dùng để lấy **một số lượng giá trị cuối cùng** được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `takeLast` thường được sử dụng trong Angular để:

* Lấy một số lượng giá trị cuối cùng từ Observable.
* Bỏ qua các giá trị trước đó.
* Hạn chế lượng dữ liệu được xử lý.

**Cách sử dụng:**

Toán tử `takeLast` nhận một tham số là **số lượng giá trị** muốn lấy.

**Ví dụ:**

```typescript
import { of, takeLast } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy 3 giá trị cuối cùng
const takeLastObservable = observable.pipe(
  takeLast(3),
);

takeLastObservable.subscribe(console.log); // In ra: 3, 4, 5
```

**Lưu ý:**

* Toán tử `takeLast` **hoàn thành** Observable sau khi lấy đủ số lượng giá trị.
* Toán tử `takeLast` chỉ lấy **số lượng giá trị** được chỉ định.
* Nếu Observable phát ra ít hơn số lượng giá trị được chỉ định, toán tử `takeLast` sẽ lấy tất cả các giá trị được phát ra.

**Tài liệu tham khảo:**

* RxJS takeLast(): [https://rxjs.dev/api/operators/takeLast](https://rxjs.dev/api/operators/takeLast)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `takeLast` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, takeLast, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy bình phương của 3 giá trị cuối cùng
const takeLastSquaredObservable = observable.pipe(
  takeLast(3),
  map((value) => value * value),
);

takeLastSquaredObservable.subscribe(console.log); // In ra: 9, 16, 25
```

Trong ví dụ trên, chúng ta sử dụng toán tử `takeLast` để lấy 3 giá trị cuối cùng trước khi sử dụng toán tử `map` để lấy bình phương của các giá trị đó.

## Kết luận

Toán tử `takeLast` là một công cụ mạnh mẽ để lấy một số lượng giá trị cuối cùng được phát ra bởi Observable. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.

**Ngoài ra:**

* Toán tử `takeLast` có thể được sử dụng để **bỏ qua các giá trị trước đó**.
* Toán tử `takeLast` có thể được sử dụng để **hạn chế lượng dữ liệu được xử lý**.
