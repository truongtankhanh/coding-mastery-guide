## Toán tử startWith() trong RxJS

**Khái niệm:**

Toán tử `startWith` là một **Combination Operator** trong RxJS dùng để **phát ra một giá trị hoặc một mảng giá trị đầu tiên** trước khi phát ra các giá trị từ Observable.

**Ngữ cảnh:**

Toán tử `startWith` thường được sử dụng trong Angular để:

* **Khởi tạo giá trị ban đầu** cho một Observable.
* **Hiển thị dữ liệu tải** trước khi dữ liệu thực tế được tải.
* **Cung cấp giá trị mặc định** cho một Observable.

**Cách sử dụng:**

Toán tử `startWith` nhận một tham số:

* **Giá trị hoặc mảng giá trị**: Giá trị hoặc mảng giá trị được phát ra đầu tiên trước khi phát ra các giá trị từ Observable.

Toán tử sẽ phát ra giá trị hoặc mảng giá trị đầu tiên, sau đó phát ra các giá trị từ Observable.

**Ví dụ:**

```typescript
import { of, startWith } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Phát ra giá trị 0 trước khi phát ra giá trị từ Observable
const observableWithStartWith = observable.pipe(
  startWith(0),
);

observableWithStartWith.subscribe(console.log);

// In ra:
// 0
// 1
// 2
// 3
```

**Lưu ý:**

* Toán tử `startWith` sẽ **phát ra giá trị đầu tiên** ngay lập tức, **trước khi Observable phát ra bất kỳ giá trị nào**.
* Toán tử `startWith` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS startWith(): [https://rxjs.dev/api/operators/startWith](https://rxjs.dev/api/operators/startWith)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `startWith` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, startWith, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3
const observable = of(1, 2, 3);

// Phát ra giá trị 0 trước khi phát ra giá trị từ Observable, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10
const observableWithStartWith = observable.pipe(
  startWith(0),
  map((value) => value * value),
  filter((value) => value > 10),
);

observableWithStartWith.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `startWith` để phát ra giá trị 0 trước khi phát ra giá trị từ Observable, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `startWith` là một công cụ mạnh mẽ để khởi tạo giá trị ban đầu cho một Observable, hiển thị dữ liệu tải hoặc cung cấp giá trị mặc định. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu phức tạp** trong ứng dụng.