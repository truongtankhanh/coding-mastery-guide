## Toán tử first() trong RxJS

**Khái niệm:**

Toán tử `first` là một **Filtering Operator** trong RxJS dùng để lấy **giá trị đầu tiên** được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `first` thường được sử dụng trong Angular để:

* Lấy giá trị đầu tiên được phát ra bởi Observable.
* Kiểm tra xem Observable có phát ra giá trị nào hay không.
* Bỏ qua các giá trị còn lại sau khi lấy được giá trị đầu tiên.

**Cách sử dụng:**

Toán tử `first` nhận hai tham số:

* **Hàm predicate (tùy chọn):** Hàm predicate này nhận mỗi giá trị được phát ra bởi Observable và trả về `true` nếu giá trị đó được chọn, hoặc `false` nếu giá trị đó bị bỏ qua.
* **Giá trị mặc định (tùy chọn):** Giá trị được trả về nếu Observable không phát ra giá trị nào.

**Ví dụ:**

```typescript
import { of, first } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy giá trị đầu tiên
const firstObservable = observable.pipe(
  first(),
);

firstObservable.subscribe(console.log); // In ra: 1

// Lấy giá trị đầu tiên chẵn
const firstEvenObservable = observable.pipe(
  first((value) => value % 2 === 0),
);

firstEvenObservable.subscribe(console.log); // In ra: 2
```

**Lưu ý:**

* Toán tử `first` **hoàn thành** Observable sau khi lấy được giá trị đầu tiên.
* Toán tử `first` chỉ phát ra **một giá trị duy nhất**.

**Tài liệu tham khảo:**

* RxJS first(): [https://rxjs.dev/api/operators/first](https://rxjs.dev/api/operators/first)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `first` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, first, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy bình phương của giá trị đầu tiên chẵn
const firstEvenSquaredObservable = observable.pipe(
  first((value) => value % 2 === 0),
  map((value) => value * value),
);

firstEvenSquaredObservable.subscribe(console.log); // In ra: 4
```

Trong ví dụ trên, chúng ta sử dụng toán tử `first` để lấy giá trị đầu tiên chẵn trước khi sử dụng toán tử `map` để lấy bình phương của giá trị đó.

## Kết luận

Toán tử `first` là một công cụ mạnh mẽ để lấy giá trị đầu tiên được phát ra bởi Observable. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.
