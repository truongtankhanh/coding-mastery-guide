## Toán tử timeInterval() trong RxJS

**Khái niệm:**

Toán tử `timeInterval` là một **Utility Operator** trong RxJS dùng để **phát ra một Observable mới với các giá trị timestamp và khoảng thời gian giữa các giá trị được phát ra từ Observable ban đầu**.

**Ngữ cảnh:**

Toán tử `timeInterval` thường được sử dụng trong Angular để:

- **Đo lường hiệu suất**
- **Theo dõi thời gian giữa các sự kiện**
- **Tạo hiệu ứng animation**

**Cách sử dụng:**

Toán tử `timeInterval` **không** nhận tham số.

**Ví dụ:**

```typescript
import { of, timeInterval } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Phát ra Observable mới với timestamp và khoảng thời gian giữa các giá trị
observable1.pipe(timeInterval()).subscribe(console.log);

// In ra:
// { value: 1, interval: 0 }
// { value: 2, interval: 100 }
// { value: 3, interval: 100 }
```

**Lưu ý:**

- Toán tử `timeInterval` **phát ra** một Observable mới **với hai giá trị**:
  - `value`: Giá trị được phát ra từ Observable ban đầu.
  - `interval`: Khoảng thời gian (mili giây) giữa giá trị hiện tại và giá trị trước đó.
- Toán tử `timeInterval` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Tài liệu tham khảo:**

- RxJS timeInterval: [https://rxjs.dev/api/operators/timeInterval](https://rxjs.dev/api/operators/timeInterval)
- Angular RxJS: [https://angular.io/guide/rx-library](https://angular.io/guide/rx-library)

## Ví dụ nâng cao

Toán tử `timeInterval` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ:**

```typescript
import { of, timeInterval, map, filter } from "rxjs";

// Observable phát ra giá trị 1, 2, 3
const observable1 = of(1, 2, 3);

// Phát ra Observable mới với timestamp và khoảng thời gian giữa các giá trị, sau đó lấy giá trị timestamp và chỉ lấy các giá trị lớn hơn 100
observable1
  .pipe(
    timeInterval(),
    map((value) => value.interval),
    filter((value) => value > 100)
  )
  .subscribe(console.log);

// In ra:
// 100
// 100
```

## Kết luận

Toán tử `timeInterval` là một Utility Operator mạnh mẽ để đo lường hiệu suất và theo dõi thời gian giữa các sự kiện trong Angular. Toán tử này giúp **giảm thiểu mã code**, **tăng hiệu quả** và **giúp xử lý các luồng dữ liệu theo cách linh hoạt**.

**Lựa chọn toán tử nào sử dụng:**

- Sử dụng `timeInterval` khi bạn muốn **đo lường hiệu suất** hoặc **theo dõi thời gian giữa các sự kiện**.

**Lưu ý:**

- Toán tử `timeInterval` **phát ra** một Observable mới **với hai giá trị**: `value` và `interval`.
- Toán tử `timeInterval` có thể được sử dụng kết hợp với các Utility Operators khác để tạo ra các luồng dữ liệu phức tạp hơn.

**Ví dụ thực tế:**

- **Đo lường hiệu suất**: Sử dụng `timeInterval` để đo thời gian cần thiết để tải một trang web hoặc một API.
- **Theo dõi thời gian giữa các sự kiện**: Sử dụng `timeInterval` để theo dõi thời gian giữa các lần click chuột của người dùng.
- **Tạo hiệu ứng animation**: Sử dụng `timeInterval` để tạo hiệu ứng animation dựa trên thời gian.

## Một số lưu ý bổ sung:

- Toán tử `timeInterval` **không** thay đổi giá trị được phát ra từ Observable ban đầu.
- Toán tử `timeInterval` có thể được sử dụng để \*\*tạo ra các luồng dữ liệu phức tạp
