## Toán tử takeWhile() trong RxJS

**Khái niệm:**

Toán tử `takeWhile` là một **Filtering Operator** trong RxJS dùng để lấy các giá trị được phát ra bởi Observable **chừng nào một điều kiện được thỏa mãn**.

**Ngữ cảnh:**

Toán tử `takeWhile` thường được sử dụng trong Angular để:

* Lấy các giá trị được phát ra bởi Observable **chừng nào một điều kiện được thỏa mãn**.
* Bỏ qua các giá trị không thỏa mãn điều kiện.
* Dừng Observable **tự động** khi điều kiện không còn được thỏa mãn.

**Cách sử dụng:**

Toán tử `takeWhile` nhận một **hàm predicate** làm tham số. Hàm predicate này nhận mỗi giá trị được phát ra bởi Observable và trả về `true` nếu giá trị đó thỏa mãn điều kiện, hoặc `false` nếu giá trị đó không thỏa mãn.

**Ví dụ:**

```typescript
import { of, takeWhile } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy các giá trị nhỏ hơn 4
const takeWhileObservable = observable.pipe(
  takeWhile((value) => value < 4),
);

takeWhileObservable.subscribe(console.log); // In ra: 1, 2, 3
```

**Lưu ý:**

* Toán tử `takeWhile` **hoàn thành** Observable khi điều kiện không còn được thỏa mãn.
* Toán tử `takeWhile` **bỏ qua** các giá trị không thỏa mãn điều kiện.
* Hàm predicate có thể được thay đổi theo thời gian.

**Tài liệu tham khảo:**

* RxJS takeWhile(): [https://rxjs.dev/api/operators/takeWhile](https://rxjs.dev/api/operators/takeWhile)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `takeWhile` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, takeWhile, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy bình phương của các giá trị nhỏ hơn 4
const takeWhileSquaredObservable = observable.pipe(
  takeWhile((value) => value < 4),
  map((value) => value * value),
);

takeWhileSquaredObservable.subscribe(console.log); // In ra: 1, 4
```

Trong ví dụ trên, chúng ta sử dụng toán tử `takeWhile` để lấy các giá trị nhỏ hơn 4 trước khi sử dụng toán tử `map` để lấy bình phương của các giá trị được lấy.

## Kết luận

Toán tử `takeWhile` là một công cụ mạnh mẽ để lấy các giá trị được phát ra bởi Observable **chừng nào một điều kiện được thỏa mãn**. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.

**Ngoài ra:**

* Toán tử `takeWhile` có thể được sử dụng để **dừng Observable tự động** khi điều kiện không còn được thỏa mãn.
* Toán tử `takeWhile` có thể được sử dụng để **bỏ qua các giá trị không thỏa mãn điều kiện**.
