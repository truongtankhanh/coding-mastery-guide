## Toán tử debounce() và debounceTime() trong RxJS

**Khái niệm:**

Toán tử `debounce` và `debounceTime` là hai **Filtering Operators** trong RxJS dùng để **bỏ qua các giá trị được phát ra trong một khoảng thời gian nhất định**.

**Ngữ cảnh:**

Toán tử `debounce` và `debounceTime` thường được sử dụng trong Angular để:

* Loại bỏ các giá trị nhiễu (noise) trong Observable.
* Chỉ xử lý giá trị mới nhất được phát ra trong một khoảng thời gian nhất định.
* Tăng hiệu suất ứng dụng bằng cách chỉ xử lý các giá trị quan trọng.

**Cách sử dụng:**

**Toán tử debounce:**

* Toán tử `debounce` nhận một **hàm debouncer** làm tham số. Hàm debouncer được sử dụng để xác định xem giá trị tiếp theo có được phát ra hay không.
* Hàm debouncer thường dựa trên thời gian hoặc số lượng giá trị được phát ra.

**Ví dụ:**

```typescript
import { of, debounce } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Bỏ qua các giá trị được phát ra trong 500ms
  debounce(() => interval(500)),
);

observable.subscribe(console.log);

// In ra:
// 5
```

**Toán tử debounceTime:**

* Toán tử `debounceTime` nhận một **khoảng thời gian** làm tham số.
* Toán tử `debounceTime` chỉ phát ra giá trị mới nhất được phát ra sau khi khoảng thời gian được chỉ định trôi qua.

**Ví dụ:**

```typescript
import { of, debounceTime } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Bỏ qua các giá trị được phát ra trong 500ms
  debounceTime(500),
);

observable.subscribe(console.log);

// In ra:
// 5
```

**Lưu ý:**

* Toán tử `debounce` và `debounceTime` chỉ **bỏ qua các giá trị** được phát ra trong một khoảng thời gian nhất định, **không bỏ qua giá trị đầu tiên**.
* Toán tử `debounce` và `debounceTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS debounce(): [https://rxjs.dev/api/operators/debounce](https://rxjs.dev/api/operators/debounce)
* RxJS debounceTime(): [https://rxjs.dev/api/operators/debounceTime](https://rxjs.dev/api/operators/debounceTime)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `debounce` và `debounceTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, debounce, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Bỏ qua các giá trị được phát ra trong 500ms
  debounce(() => interval(500)),
  // Lấy bình phương của giá trị
  map((value) => value * value),
  // Chỉ lấy các giá trị lớn hơn 10
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
```

Trong ví dụ trên, chúng ta sử dụng toán tử `debounce` để bỏ qua các giá trị được phát ra trong 500ms, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `debounce` và `debounceTime` là những công cụ mạnh mẽ để loại bỏ các giá trị nhiễu trong Observable và chỉ xử lý giá trị mới nhất được phát ra trong một khoảng thời gian nhất định. Toán tử này giúp **tăng hiệu suất ứng dụng** và **giảm thiểu mã code**.
