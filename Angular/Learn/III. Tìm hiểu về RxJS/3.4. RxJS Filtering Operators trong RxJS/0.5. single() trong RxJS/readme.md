## Toán tử single() trong RxJS

**Khái niệm:**

Toán tử `single` là một **Filtering Operator** trong RxJS dùng để lấy **giá trị duy nhất** được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `single` thường được sử dụng trong Angular để:

* Lấy giá trị duy nhất được phát ra bởi Observable.
* Kiểm tra xem Observable có phát ra **đúng một giá trị** hay không.
* Bỏ qua các giá trị còn lại sau khi lấy được giá trị duy nhất.

**Cách sử dụng:**

Toán tử `single` nhận hai tham số:

* **Hàm predicate (tùy chọn):** Hàm predicate này nhận mỗi giá trị được phát ra bởi Observable và trả về `true` nếu giá trị đó được chọn, hoặc `false` nếu giá trị đó bị bỏ qua.
* **Giá trị mặc định (tùy chọn):** Giá trị được trả về nếu Observable không phát ra giá trị nào hoặc phát ra nhiều hơn một giá trị.

**Ví dụ:**

```typescript
import { of, single } from 'rxjs';

// Observable phát ra giá trị 1
const observable = of(1);

// Lấy giá trị duy nhất
const singleObservable = observable.pipe(
  single(),
);

singleObservable.subscribe(console.log); // In ra: 1

// Observable phát ra giá trị 1, 2
const multipleObservable = of(1, 2);

// Lấy giá trị duy nhất (báo lỗi)
multipleObservable.pipe(
  single(),
).subscribe(console.log); // Lỗi: Too many values

// Lấy giá trị duy nhất chẵn (báo lỗi)
const singleEvenObservable = multipleObservable.pipe(
  single((value) => value % 2 === 0),
);

singleEvenObservable.subscribe(console.log); // Lỗi: No matching values
```

**Lưu ý:**

* Toán tử `single` **hoàn thành** Observable sau khi lấy được giá trị duy nhất.
* Toán tử `single` chỉ phát ra **một giá trị duy nhất**.
* Nếu Observable không phát ra giá trị nào, toán tử `single` sẽ **báo lỗi**.
* Nếu Observable phát ra nhiều hơn một giá trị, toán tử `single` sẽ **báo lỗi**.

**Tài liệu tham khảo:**

* RxJS single(): [https://rxjs.dev/api/operators/single](https://rxjs.dev/api/operators/single)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `single` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, single, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Lấy bình phương của giá trị duy nhất chẵn
const singleEvenSquaredObservable = observable.pipe(
  single((value) => value % 2 === 0),
  map((value) => value * value),
);

singleEvenSquaredObservable.subscribe(console.log); // Lỗi: No matching values
```

Trong ví dụ trên, chúng ta sử dụng toán tử `single` để lấy giá trị duy nhất chẵn trước khi sử dụng toán tử `map` để lấy bình phương của giá trị đó. Tuy nhiên, vì Observable phát ra nhiều hơn một giá trị, nên toán tử `single` sẽ **báo lỗi**.

## Kết luận

Toán tử `single` là một công cụ mạnh mẽ để lấy giá trị duy nhất được phát ra bởi Observable. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code. Tuy nhiên, cần lưu ý rằng toán tử `single` sẽ **báo lỗi** nếu Observable không phát ra **đúng một giá trị**.
