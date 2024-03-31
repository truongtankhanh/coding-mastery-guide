## Toán tử throttle() và throttleTime() trong RxJS

**Khái niệm:**

Toán tử `throttle` và `throttleTime` là hai **Filtering Operators** trong RxJS dùng để **giảm tốc độ phát ra giá trị** của Observable.

**Ngữ cảnh:**

Toán tử `throttle` và `throttleTime` thường được sử dụng trong Angular để:

* Giảm tải hệ thống bằng cách giảm số lượng giá trị được phát ra.
* Cải thiện hiệu suất của ứng dụng bằng cách chỉ xử lý các giá trị quan trọng.
* Tránh xử lý quá nhiều dữ liệu cùng lúc.

**Cách sử dụng:**

**Toán tử throttle:**

* Toán tử `throttle` nhận một **hàm throttler** làm tham số. Hàm throttler được sử dụng để xác định xem giá trị tiếp theo có được phát ra hay không.
* Hàm throttler thường dựa trên thời gian hoặc số lượng giá trị được phát ra.

**Ví dụ:**

```typescript
import { of, throttle } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Chỉ phát ra giá trị mới sau mỗi 1 giây
  throttle(() => interval(1000)),
);

observable.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// 4
// 5
```

**Toán tử throttleTime:**

* Toán tử `throttleTime` nhận một **khoảng thời gian** làm tham số.
* Toán tử `throttleTime` chỉ phát ra giá trị mới sau khi khoảng thời gian được chỉ định trôi qua.

**Ví dụ:**

```typescript
import { of, throttleTime } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Chỉ phát ra giá trị mới sau mỗi 1 giây
  throttleTime(1000),
);

observable.subscribe(console.log);

// In ra:
// 1
// 2
// 3
// 4
// 5
```

**Lưu ý:**

* Toán tử `throttle` và `throttleTime` chỉ **giảm tốc độ phát ra giá trị**, không **bỏ qua giá trị**.
* Toán tử `throttle` và `throttleTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

* RxJS throttle(): [https://rxjs.dev/api/operators/throttle](https://rxjs.dev/api/operators/throttle)
* RxJS throttleTime(): [https://rxjs.dev/api/operators/throttleTime](https://rxjs.dev/api/operators/throttleTime)
* Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `throttle` và `throttleTime` có thể được sử dụng kết hợp với các toán tử RxJS khác để tạo ra các luồng dữ liệu phức tạp hơn. Ví dụ:

```typescript
import { of, throttle, map, filter } from 'rxjs';

// Observable phát ra giá trị 1, 2, 3, 4, 5 liên tục
const observable = of(1, 2, 3, 4, 5).pipe(
  // Chỉ phát ra giá trị mới sau mỗi 1 giây
  throttle(() => interval(1000)),
  // Lấy bình phương của giá trị
  map((value) => value * value),
  // Chỉ lấy các giá trị lớn hơn 10
  filter((value) => value > 10),
);

observable.subscribe(console.log);

// In ra:
// 16
// 25
```

Trong ví dụ trên, chúng ta sử dụng toán tử `throttle` để chỉ phát ra giá trị mới sau mỗi 1 giây, sau đó lấy bình phương của giá trị và chỉ lấy các giá trị lớn hơn 10.

## Kết luận

Toán tử `throttle` và `throttleTime` là những công cụ mạnh mẽ để giảm tốc độ phát ra giá trị của Observable. Toán tử này giúp **giảm tải hệ thống**, **cải thiện hiệu suất ứng dụng** và **tránh xử lý quá nhiều dữ liệu cùng lúc**.
