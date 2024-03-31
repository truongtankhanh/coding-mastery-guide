## Toán tử distinct() trong RxJS

**Khái niệm:**

Toán tử `distinct` là một **Filtering Operator** trong RxJS dùng để **loại bỏ các giá trị trùng lặp** được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `distinct` thường được sử dụng trong Angular để:

* Loại bỏ các giá trị trùng lặp trong Observable.
* Giảm kích thước của Observable.
* Tăng hiệu suất của ứng dụng.

**Cách sử dụng:**

Toán tử `distinct` có thể được sử dụng với hoặc không có **hàm comparer**. Hàm comparer được sử dụng để so sánh hai giá trị và xác định xem chúng có trùng lặp hay không.

**Ví dụ:**

```typescript
import { of, distinct } from 'rxjs';

// Observable phát ra giá trị 1, 2, 1, 3, 2, 4
const observable = of(1, 2, 1, 3, 2, 4);

// Loại bỏ các giá trị trùng lặp
const distinctObservable = observable.pipe(
  distinct(),
);

distinctObservable.subscribe(console.log); // In ra: 1, 2, 3, 4
```

**Ví dụ sử dụng hàm comparer:**

```typescript
import { of, distinct, map } from 'rxjs';

// Observable phát ra giá trị "a", "b", "A", "B", "a", "b"
const observable = of("a", "b", "A", "B", "a", "b");

// So sánh hai giá trị sau khi chuyển đổi sang chữ hoa
const distinctObservable = observable.pipe(
  distinct((value) => value.toUpperCase()),
);

distinctObservable.subscribe(console.log); // In ra: a, b, A
```

**Lưu ý:**

* Toán tử `distinct` chỉ so sánh các giá trị được phát ra **liền tiếp**.
* Toán tử `distinct` **không so sánh** các giá trị được phát ra **trong quá khứ**.
* Hàm comparer có thể được sử dụng để so sánh các giá trị theo bất kỳ cách nào.

**Tài liệu tham khảo:**

* RxJS distinct(): [https://rxjs.dev/api/operators/distinct](https://rxjs.dev/api/operators/distinct)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `distinct` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, distinct, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 1, 3, 2, 4
const observable = of(1, 2, 1, 3, 2, 4);

// Lấy bình phương của các giá trị, loại bỏ các giá trị trùng lặp và chỉ lấy các giá trị lớn hơn 2
const distinctSquaredObservable = observable.pipe(
  map((value) => value * value),
  distinct(),
  filter((value) => value > 2),
);

distinctSquaredObservable.subscribe(console.log); // In ra: 9, 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `distinct` để loại bỏ các giá trị trùng lặp sau khi lấy bình phương của các giá trị và lọc các giá trị nhỏ hơn 2.

## Kết luận

Toán tử `distinct` là một công cụ mạnh mẽ để loại bỏ các giá trị trùng lặp được phát ra bởi Observable. Toán tử này giúp **giảm kích thước của Observable**, **tăng hiệu suất của ứng dụng** và **giảm thiểu mã code**.

**Ngoài ra:**

* Toán tử `distinct` có thể được sử dụng với hoặc không có hàm comparer.
* Hàm comparer có thể được sử dụng để so sánh các giá trị theo bất kỳ cách nào.