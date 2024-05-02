## Toán tử timeoutWith() trong RxJS

**Khái niệm:**

Toán tử `timeoutWith` là một **Utility Operator** trong RxJS dùng để **hoàn tất Observable nếu không có giá trị nào được phát ra trong một khoảng thời gian nhất định** và **thay thế bằng một Observable khác**.

**Ngữ cảnh:**

Toán tử `timeoutWith` thường được sử dụng trong Angular để:

- **Hủy các thao tác không hoàn thành**
- **Hạn chế thời gian chờ đợi**
- **Bảo vệ ứng dụng khỏi các thao tác chậm**
- **Cung cấp hành vi thay thế khi Observable ban đầu không phát ra giá trị**

**Cách sử dụng:**

Toán tử `timeoutWith` nhận ba tham số:

- `timeout`: Khoảng thời gian chờ (mili giây)
- `scheduler`: Scheduler (tùy chọn)
- `observable`: Observable thay thế

**Ví dụ:**

```typescript
import { of, timeoutWith, delay } from "rxjs";

// Observable phát ra giá trị 1, 2, 3 sau 2 giây
const observable1 = of(1, 2, 3).pipe(delay(2000));

// Observable thay thế phát ra giá trị "Timeout"
const observable2 = of("Timeout");

// Hoàn tất Observable ban đầu nếu không có giá trị nào được phát ra trong 1 giây và thay thế bằng Observable "Timeout"
observable1
  .pipe(timeoutWith(1000, observable2))
  .subscribe(console.log, (error) => console.log("Lỗi: " + error.message));

// In ra:
// Timeout
```

**Lưu ý:**

- Toán tử `timeoutWith` sẽ **hoàn tất** Observable ban đầu với lỗi `Timeout has occurred`.
- Toán tử `timeoutWith` sẽ **bắt đầu phát ra** Observable thay thế nếu Observable ban đầu không phát ra giá trị trong khoảng thời gian chờ.
- Toán tử `timeoutWith` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

- RxJS timeoutWith: [https://rxjs.dev/api/operators/timeoutWith](https://rxjs.dev/api/operators/timeoutWith)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `timeoutWith` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, timeoutWith, map, filter, delay } from "rxjs";

// Observable phát ra giá trị 1, 2, 3 sau 2 giây
const observable1 = of(1, 2, 3).pipe(delay(2000));

// Observable thay thế phát ra giá trị "Timeout"
const observable2 = of("Timeout");

// Hoàn tất Observable ban đầu nếu không có giá trị nào được phát ra trong 1 giây, sau đó lấy bình phương của các giá trị chẵn và chỉ lấy các giá trị lớn hơn 10, và thay thế bằng Observable "Timeout"
observable1
  .pipe(
    timeoutWith(1000, observable2),
    map((value) => value * value),
    filter((value) => value > 10)
  )
  .subscribe(console.log, (error) => console.log("Lỗi: " + error.message));

// In ra:
// Timeout
```

## Kết luận

Toán tử `timeoutWith` là một Utility Operator mạnh mẽ để hủy các thao tác không hoàn thành, bảo vệ ứng dụng khỏi các thao tác chậm và cung cấp hành vi thay thế khi Observable ban đầu không phát ra giá trị trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

**Lựa chọn toán tử nào sử dụng:**

- Sử dụng `timeoutWith` khi bạn muốn **hủy các thao tác không hoàn thành**, **hạn chế thời gian chờ đợi**, **bảo vệ ứng dụng khỏi các thao tác chậm** và **cung cấp hành vi thay thế khi Observable ban đầu không phát ra giá trị**.

**Lưu ý:**

- Toán tử `timeoutWith` sẽ **hoàn tất** Observable ban đầu với lỗi `Timeout has occurred`.
- Toán tử `timeoutWith` sẽ **bắt đầu phát ra** Observable thay thế nếu Observable
