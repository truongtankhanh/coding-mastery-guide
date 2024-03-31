## Toán tử skip() trong RxJS

**Khái niệm:**

Toán tử `skip` là một **Filtering Operator** trong RxJS dùng để **bỏ qua một số lượng giá trị đầu tiên** được phát ra bởi Observable.

**Ngữ cảnh:**

Toán tử `skip` thường được sử dụng trong Angular để:

* Bỏ qua một số lượng giá trị đầu tiên được phát ra bởi Observable.
* Chỉ lấy các giá trị sau một khoảng thời gian nhất định.
* Bắt đầu xử lý dữ liệu từ một vị trí cụ thể trong Observable.

**Cách sử dụng:**

Toán tử `skip` nhận một tham số là **số lượng giá trị** muốn bỏ qua.

**Ví dụ:**

```typescript
import { of, skip } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Bỏ qua 2 giá trị đầu tiên
const skipObservable = observable.pipe(
  skip(2),
);

skipObservable.subscribe(console.log); // In ra: 3, 4, 5
```

**Lưu ý:**

* Toán tử `skip` **không phát ra** các giá trị bị bỏ qua.
* Toán tử `skip` chỉ ảnh hưởng đến **các giá trị đầu tiên** được phát ra bởi Observable.
* Tham số của toán tử `skip` có thể là một **giá trị số** hoặc một **Observable**.

**Tài liệu tham khảo:**

* RxJS skip(): [https://rxjs.dev/api/operators/skip](https://rxjs.dev/api/operators/skip)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `skip` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, skip, map } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5
const observable = of(1, 2, 3, 4, 5);

// Bỏ qua 2 giá trị đầu tiên và lấy bình phương của các giá trị còn lại
const skipSquaredObservable = observable.pipe(
  skip(2),
  map((value) => value * value),
);

skipSquaredObservable.subscribe(console.log); // In ra: 9, 16, 25
```

Trong ví dụ trên, chúng ta sử dụng toán tử `skip` để bỏ qua 2 giá trị đầu tiên trước khi sử dụng toán tử `map` để lấy bình phương của các giá trị được lấy.

## Kết luận

Toán tử `skip` là một công cụ mạnh mẽ để bỏ qua một số lượng giá trị đầu tiên được phát ra bởi Observable. Toán tử này giúp **giảm thiểu mã code** và **tăng khả năng đọc hiểu** code.

**Ngoài ra:**

* Toán tử `skip` có thể được sử dụng để **chỉ lấy các giá trị sau một khoảng thời gian nhất định**.
* Toán tử `skip` có thể được sử dụng để **bắt đầu xử lý dữ liệu từ một vị trí cụ thể** trong Observable.
